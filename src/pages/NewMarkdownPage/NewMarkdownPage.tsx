import { StyledContainerLoading, StyledForm } from "./styles";
import { Menu } from "../../components/Menu/Menu";
import { LoaderFunction } from "react-router-dom";

import { FormProvider, useForm } from "react-hook-form";

import { Functionality } from "../../shared/types/Functionality";
import { RemoveButton, SaveButton } from "../../styles/reusables-styles";
import { TrashBinIcon } from "../../components/Icons/TrashBinIcon";
import { FileSaveIcon } from "../../components/Icons/FileSaveIcon";

import Markdown from "../../services/Markdown";

import { Content } from "../../components/Content/Content";
import { Suspense, useContext } from "react";
import { Spinner } from "../../components/Spinner/Spinner";
import { AppLocalizationContext } from "../../contexts/LocalizationProvider/LocalizationProvider";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

import { create } from "../../models/markdown";

type MarkdownFormValues = {
  userId?: string;
  id?: string | null;
  name: string;
  content?: string;
};

function NewMarkdownPage() {
  const supabase = useSupabaseClient();

  // Access the localization context
  const strings = useContext(AppLocalizationContext);

  // Create a form instance using react-hook-form
  const formInstance = useForm<MarkdownFormValues>({
    defaultValues: {
      id: null,
      name: "",
      content: "",
    },
  });

  // Destructure formState from formInstance for checking form dirtiness
  const {
    formState: { isDirty },
  } = formInstance;

  // Handler for saving the new markdown document
  async function onSave() {
    const { name, content } = formInstance.getValues();
    const markdown = new Markdown({ name, content });

    create(supabase, { markdown });
  }

  // Handler for removing content from the form
  function onRemove() {
    // Reset the form values
    formInstance.reset({
      id: null,
      name: "",
      content: "",
    });
  }

  // Define menu functionalities based on form dirtiness
  const menuFunctionalities: (Functionality | null)[] = [
    // Remove button is rendered only if the form is dirty
    isDirty
      ? {
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
        }
      : null,
    // Save button is always rendered
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

  // Render the NewMarkdownPage component with a suspense fallback
  return (
    <Suspense
      fallback={
        <StyledContainerLoading>
          <Spinner />
        </StyledContainerLoading>
      }
    >
      <FormProvider {...formInstance}>
        <StyledForm method="post">
          {/* Suspense is used to handle asynchronous loading with a fallback */}
          <Suspense fallback={<Spinner />}>
            {/* Menu component for rendering the markdown menu */}
            <Menu
              title={strings.MenuTitle}
              name="name"
              functionalities={menuFunctionalities}
            />

            {/* Content component for rendering the document content */}
            <Content
              textArea={{
                name: "content",
                title: strings.NewMarkdownContentTitle,
              }}
            />
          </Suspense>
        </StyledForm>
      </FormProvider>
    </Suspense>
  );
}

// Export an object with properties Page, Loader, and Action for React Router usage
export default Object.assign({
  Page: <NewMarkdownPage />,
}) as {
  Page: React.ReactNode;
  Loader: LoaderFunction<unknown>;
};
