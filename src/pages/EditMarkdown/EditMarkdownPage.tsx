import React from "react";
import { StyledContainerLoading, StyledForm } from "./styles";
import { Menu } from "../../components/Menu/Menu";
import { useNavigate, useParams } from "react-router-dom";
import { Suspense, useContext, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Functionality } from "../../shared/types/Functionality";
import { RemoveButton, SaveButton } from "../../styles/reusables-styles";
import { TrashBinIcon } from "../../components/Icons/TrashBinIcon";
import { FileSaveIcon } from "../../components/Icons/FileSaveIcon";
import Markdown from "../../services/Markdown";

import { useGoToNew } from "../../hooks/useGoToNew";
import { Content } from "../../components/Content/Content";
import { Spinner } from "../../components/Spinner/Spinner";
import { AppLocalizationContext } from "../../contexts/LocalizationProvider/LocalizationProvider";

import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { getById, remove, update } from "../../models/markdown";

type MarkdownFormValues = {
  userId?: string;
  id?: string;
  name: string;
  content?: string;
};

enum StatusPage {
  READY,
  LOADING,
  ERROR,
}

function EditMarkdownPage() {
  // Get the markdown data from the loader
  const [markdown, setMarkdown] = useState<Markdown | null>(null);
  const [status, setStatus] = useState<keyof typeof StatusPage>("LOADING");

  // Initialize necessary hooks from react-router-dom
  const navigate = useNavigate();
  const { id } = useParams();

  // Access the localization context
  const strings = useContext(AppLocalizationContext);

  const supabase = useSupabaseClient();

  const formInstance = useForm<MarkdownFormValues>({
    defaultValues: {},
  });

  useEffect(() => {
    if (id) {
      getMarkdown(id)
        .catch(() => setStatus("ERROR"))
        .finally(() => setStatus("READY"));
    }
  }, [id]);

  if (status === "LOADING") {
    return (
      <StyledContainerLoading>
        <Spinner />
      </StyledContainerLoading>
    );
  }

  if (status === "ERROR") {
    return <div>Error</div>;
  }

  /**
   * Function to fetch markdown data based on ID
   * @param {string} id string ID to fetch
   * @returns {Markdown} Return a Markdown item
   */
  async function getMarkdown(id: string) {
    const markdown = await getById(supabase, id);

    if (!markdown) {
      throw new Error("Cannot get markdown for " + id);
    }

    formInstance.reset({
      userId: markdown.userId,
      id: markdown.id,
      content: markdown.content ?? "",
      name: markdown.name,
    });

    setMarkdown(markdown);
  }

  // Function to save changes to the markdown document
  async function onSave() {
    const { id, name, content } = formInstance.getValues();

    const markdown = new Markdown({ id, name, content });

    await update(supabase, { markdown });
  }

  // Function to remove the markdown document
  async function onRemove() {
    if (markdown) {
      remove(supabase, { markdown });

      // Use custom hook to navigate to a new location
      useGoToNew({ navigate });
    }
  }

  // Define functionalities for the Menu component
  const menuFunctionalities: Functionality[] = [
    {
      onRender: (key) => (
        <RemoveButton
          key={key}
          id="removeButton"
          type="button"
          aria-label={strings.RemoveButtonLabel}
          title={strings.RemoveButtonTitle}
          onClick={onRemove}
        >
          <TrashBinIcon className="trashBin" />
        </RemoveButton>
      ),
    },
    {
      onRender: (key) => (
        <SaveButton
          key={key}
          id="saveButton"
          type="button"
          aria-label={strings.SaveButtonLabel}
          title={strings.SaveButtonTitle}
          onClick={onSave}
        >
          <FileSaveIcon className="fileSave" />
          {strings.SaveButtonText}
        </SaveButton>
      ),
    },
  ];

  // Render the EditMarkdownPage component with a suspense fallback
  return (
    <Suspense
      fallback={
        <StyledContainerLoading>
          <Spinner />
        </StyledContainerLoading>
      }
    >
      <FormProvider {...formInstance}>
        <StyledForm id="form" method="post">
          {/* Menu component with specified title, name, and functionalities */}
          <Menu
            title={strings.MenuTitle}
            name="name"
            functionalities={menuFunctionalities}
          />

          {/* Content component with a textarea for markdown editing */}
          <Content
            textArea={{
              name: "content",
              title: strings.EditMarkdownContentTitle,
            }}
          />
        </StyledForm>
      </FormProvider>
    </Suspense>
  );
}

// Export an object with Page, Loader, and Action properties
export default Object.assign({
  Page: <EditMarkdownPage />,
}) as {
  Page: React.ReactNode;
};
