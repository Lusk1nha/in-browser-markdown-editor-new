import { StyledForm } from "./styles"
import { Menu } from "../../components/Menu/Menu";
import { ActionFunction, LoaderFunction, defer, useLoaderData, useLocation, useNavigate, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { Functionality } from "../../shared/types/Functionality";
import { RemoveButton, SaveButton } from "../../styles/reusables-styles";
import { TrashBinIcon } from "../../components/Icons/TrashBinIcon";
import { FileSaveIcon } from "../../components/Icons/FileSaveIcon";

import Markdown from "../../services/Markdown";

import { LocalStorage } from "../../repositories/localStorage";
import { EditMarkdown } from "../../services/EditMarkdown";
import { DeleteMarkdown } from "../../services/DeleteMarkdown";
import { useGoToNew } from "../../hooks/useGoToNew";
import { Content } from "../../components/Content/Content";

interface LoaderResponse {
  markdown: Markdown;
}

const loader: LoaderFunction = async ({ params }) => {
  const { id } = params;

  if (!id) {
    throw new Error('Could not identify the document ID')
  }

  const markdown = await getMarkdown(id);

  return defer({
    markdown
  })
}

const getMarkdown = async (id: string) => {
  const storage = new LocalStorage('markdowns-app');
  let markdowns = await storage.get('markdowns') as Markdown[];

  if (!markdowns) {
    markdowns = []
  }

  const filteredMarkdown = markdowns.filter(markdown => markdown.id === id);

  return filteredMarkdown?.[0]
}

function EditMarkdownPage() {
  const loaderData = useLoaderData() as LoaderResponse;
  const [markdown, setMarkdown] = useState<Markdown>(loaderData.markdown);

  const navigate = useNavigate();

  const location = useLocation();

  const { id } = useParams();

  const formInstance = useForm({
    defaultValues: markdown
  });

  useEffect(() => {
    async function updateMarkdown(id: string) {
      const markdown = await getMarkdown(id);

      formInstance.reset(markdown)
      setMarkdown(markdown)
    }

    if (id) {
      updateMarkdown(id)
    }
  }, [location])


  async function onSave() {
    const editMarkdown = new EditMarkdown();

    const { id, name, content, created, lastModified } = formInstance.getValues();

    await editMarkdown.execute({ markdown: { id, name, content, created, lastModified } });
  }

  async function onRemove() {
    const { id } = formInstance.getValues();

    const deleteMarkdown = new DeleteMarkdown();
    const markdown = await getMarkdown(id);

    deleteMarkdown.execute({ markdown });
    useGoToNew({ navigate });
  }

  const menuFunctionalities: Functionality[] = [
    {
      onRender: (key) => (
        <RemoveButton key={key} id="removeButton" type="button" aria-label="Click here to remove document" title="Click here to remove document" onClick={onRemove}>
          <TrashBinIcon className="trashBin" />
        </RemoveButton>
      )
    },
    {
      onRender: (key) => (
        <SaveButton key={key} id="saveButton" type="button" aria-label="Click here to save the document" title="Click here to save the document" onClick={onSave}>
          <FileSaveIcon className="fileSave" />
          Save Changes
        </SaveButton>
      )
    }
  ]

  return (
    <FormProvider {...formInstance}>
      <StyledForm id="form" method="post">
        <Menu
          title="Markdown"
          name="name"
          functionalities={menuFunctionalities}
        />

        <Content
          textArea={{
            name: "content",
            title: "Insert the document content here"
          }}
        />
      </StyledForm>
    </FormProvider>
  )
}

export default Object.assign({
  Page: (<EditMarkdownPage />),
  Loader: loader
}) as {
  Page: React.ReactNode;
  Loader: LoaderFunction<unknown>;
  Action: ActionFunction<unknown>;
}