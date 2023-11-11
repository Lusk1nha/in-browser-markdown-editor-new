import { StyledForm } from "./styles"
import { Menu } from "../../components/Menu/Menu";
import { ActionFunction, LoaderFunction, useNavigate } from "react-router-dom";

import { FormProvider, useForm } from "react-hook-form";

import { Functionality } from "../../shared/types/Functionality";
import { RemoveButton, SaveButton } from "../../styles/reusables-styles";
import { TrashBinIcon } from "../../components/Icons/TrashBinIcon";
import { FileSaveIcon } from "../../components/Icons/FileSaveIcon";

import Markdown from "../../services/Markdown";
import { SaveMarkdown } from "../../services/SaveMarkdown";

import { useGoToEdit } from "../../hooks/useGoToEdit";
import { Content } from "../../components/Content/Content";

function NewMarkdownPage() {
  const navigate = useNavigate();

  const formInstance = useForm({
    defaultValues: {
      id: null,
      name: "",
      content: ""
    }
  });

  const { isDirty } = formInstance.formState;

  async function onSave() {
    const saveMarkdown = new SaveMarkdown();

    const { name, content } = formInstance.getValues();
    const markdown = new Markdown(name, content);

    const { id } = await saveMarkdown.execute({ markdown });

    useGoToEdit({ id, navigate })
  }

  function onRemove() {
    formInstance.reset({
      name: "",
      content: ""
    })
  }

  const menuFunctionalities: (Functionality | null)[] = [
    isDirty ?
      {
        onRender: (key) => (
          <RemoveButton key={key} id="removeButton" type="button" aria-label="Click here to remove document" title="Click here to remove document" onClick={onRemove}>
            <TrashBinIcon className="trashBin" />
          </RemoveButton>
        )
      } : null,
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
      <StyledForm method="post">
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
  Page: (<NewMarkdownPage />)
}) as {
  Page: React.ReactNode;
  Loader: LoaderFunction<unknown>;
  Action: ActionFunction<unknown>
}