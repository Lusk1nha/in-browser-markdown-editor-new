import React from "react";
import { StyledContainerLoading, StyledForm } from "./styles";
import { Menu } from "../../components/Menu/Menu";
import {
  ActionFunction,
  LoaderFunction,
  defer,
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { Suspense, useContext, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Functionality } from "../../shared/types/Functionality";
import { RemoveButton, SaveButton } from "../../styles/reusables-styles";
import { TrashBinIcon } from "../../components/Icons/TrashBinIcon";
import { FileSaveIcon } from "../../components/Icons/FileSaveIcon";
import Markdown from "../../services/Markdown";

import { EditMarkdown } from "../../services/EditMarkdown";
import { useGoToNew } from "../../hooks/useGoToNew";
import { Content } from "../../components/Content/Content";
import { MarkdownContext } from "../../contexts/MarkdownProvider/MarkdownProvider";
import { Spinner } from "../../components/Spinner/Spinner";
import { AppLocalizationContext } from "../../contexts/LocalizationProvider/LocalizationProvider";
import MarkdownService from "../../services/MarkdownService";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

// Define the structure of the loader response
interface LoaderResponse {
  markdown: Markdown;
}

// Loader function to fetch the markdown data
const loader: LoaderFunction = async ({ params }) => {
  const { id } = params;

  const supabaseClient = useSupabaseClient();

  if (!id) {
    throw new Error("Could not identify the document ID");
  }

  const markdownService = new MarkdownService(supabaseClient);

  const markdowns = await markdownService.getById(id);

  const markdown = markdowns?.[0];

  return defer({
    markdown,
  });
};

// EditMarkdownPage component for editing a markdown document
function EditMarkdownPage() {
  // Access the localization context
  const strings = useContext(AppLocalizationContext);

  const supabaseClient = useSupabaseClient();

  // Access the markdown loader from the MarkdownContext
  const { loader: markdownsLoader } = useContext(MarkdownContext);

  // Get the markdown data from the loader
  const loaderData = useLoaderData() as LoaderResponse;
  const [markdown, setMarkdown] = useState<Markdown>(loaderData.markdown);

  // Initialize necessary hooks from react-router-dom
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  // Create a form instance using react-hook-form
  const formInstance = useForm({
    defaultValues: markdown,
  });

  /**
   * Function to fetch markdown data based on ID
   * @param {string} id string ID to fetch
   * @returns {Markdown} Return a Markdown item
   */
  async function getMarkdown(id: string) {
    const markdownService = new MarkdownService(supabaseClient);

    const markdowns = await markdownService.getById(id);

    return markdowns?.[0];
  }

  // Use effect to update the form with the fetched markdown data
  useEffect(() => {
    async function updateMarkdown(id: string) {
      const markdown = await getMarkdown(id);

      formInstance.reset(markdown);
      setMarkdown(markdown);
    }

    if (id) {
      updateMarkdown(id);
    }
  }, [location]);

  // Function to save changes to the markdown document
  async function onSave() {
    const editMarkdown = new EditMarkdown();

    const { id, name, content, created, lastModified } =
      formInstance.getValues();

    await editMarkdown.execute({
      markdown: { id, name, content, created, lastModified },
    });

    markdownsLoader();
  }

  // Function to remove the markdown document
  async function onRemove() {
    const markdownService = new MarkdownService(supabaseClient);

    markdownService.delete(markdown);

    markdownsLoader();

    // Use custom hook to navigate to a new location
    useGoToNew({ navigate });
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
  Loader: loader,
}) as {
  Page: React.ReactNode;
  Loader: LoaderFunction<unknown>;
  Action: ActionFunction<unknown>;
};
