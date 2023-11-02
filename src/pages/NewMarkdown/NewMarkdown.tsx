import { Preview } from "../../components/Preview/Preview"
import { TextArea } from "../../components/TextArea/TextArea"
import { StyledContent, StyledForm } from "./styles"
import { Menu } from "../../components/Menu/Menu";
import { ActionFunction, LoaderFunction } from "react-router-dom";

import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { Functionality } from "../../shared/types/Functionality";
import { RemoveButton, SaveButton } from "../../styles/reusables-styles";
import { TrashBinIcon } from "../../components/Icons/TrashBinIcon";
import { FileSaveIcon } from "../../components/Icons/FileSaveIcon";

import Markdown from "../../services/Markdown";
import { SaveMarkdown } from "../../services/SaveMarkdown";


const action: ActionFunction = async ({ request }) => {
  // const createMarkdown = new CreateMarkdown();

  // const formData = await request.formData();

  // const name = await formData.get('name') as string;
  // const content = await formData.get('content') as string;

  // await createMarkdown.execute({ name, content });

  return
}

function NewMarkdown() {
  const formInstance = useForm({
    defaultValues: {
      id: null,
      name: "",
      content: ""
    }
  });

  const [isPreviewFullScreen, setIsPreviewFullScreen] = useState<boolean>(false);

  async function onSave() {
    const saveMarkdown = new SaveMarkdown();

    const { name, content } = formInstance.getValues();
    const markdown = new Markdown(name, content);

    const savedMarkdown = await saveMarkdown.execute({ markdown });

    console.log({ savedMarkdown })
  }

  function onRemove() {
    formInstance.reset({
      name: "",
      content: ""
    })
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
      <StyledForm method="post">
        <Menu
          title="Markdown"
          name="name"
          functionalities={menuFunctionalities}
        />

        <StyledContent>
          <TextArea
            name="content"
            title="Insert the document content here"
          />

          <Preview
            isPreview={isPreviewFullScreen}
            setIsPreview={setIsPreviewFullScreen}
          />
        </StyledContent>
      </StyledForm>
    </FormProvider>
  )
}

export default Object.assign({
  Page: (<NewMarkdown />),
  Action: action
}) as {
  Page: React.ReactNode;
  Loader: LoaderFunction<unknown>;
  Action: ActionFunction<unknown>
}