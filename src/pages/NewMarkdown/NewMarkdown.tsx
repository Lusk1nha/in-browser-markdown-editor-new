import { Preview } from "../../components/Preview/Preview"
import { TextArea } from "../../components/TextArea/TextArea"
import { StyledContent, StyledForm } from "./styles"
import { Menu } from "../../components/Menu/Menu";
import { ActionFunction, LoaderFunction } from "react-router-dom";
import { CreateMarkdown } from "../../services/CreateMarkdown";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { Functionality } from "../../shared/types/Functionality";
import { RemoveButton, SaveButton } from "../../styles/reusables-styles";
import { TrashBinIcon } from "../../components/Icons/TrashBinIcon";
import { FileSaveIcon } from "../../components/Icons/FileSaveIcon";


const action: ActionFunction = async ({ request }) => {
  const createMarkdown = new CreateMarkdown();

  const formData = await request.formData();

  const name = await formData.get('name') as string;
  const content = await formData.get('content') as string;

  await createMarkdown.execute({ name, content });

  return
}

function NewMarkdown() {
  const [isPreviewFullScreen, setIsPreviewFullScreen] = useState<boolean>(false);

  const formInstance = useForm();

  function onSave() {
    const currentValues = formInstance.getValues();
    return console.log({ currentValues })
  }

  const menuFunctionalities: Functionality[] = [
    {
      onRender: (key) => (
        <RemoveButton key={key} type="button" aria-label="Click here to remove document" title="Click here to remove document">
          <TrashBinIcon className="trashBin" />
        </RemoveButton>
      )
    },
    {
      onRender: (key) => (
        <SaveButton key={key} type="button" aria-label="Click here to save the document" title="Click here to save the document" onClick={onSave}>
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