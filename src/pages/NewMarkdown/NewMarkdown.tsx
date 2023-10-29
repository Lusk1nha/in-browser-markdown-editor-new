import { Preview } from "../../components/Preview/Preview"
import { TextArea } from "../../components/TextArea/TextArea"
import { StyledContent, StyledForm } from "./styles"
import { Menu } from "../../components/Menu/Menu";
import { ActionFunction, LoaderFunction } from "react-router-dom";
import { CreateMarkdown } from "../../services/CreateMarkdown";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";


const action: ActionFunction = async ({ request }) => {
  const createMarkdown = new CreateMarkdown();

  let formData = await request.formData();

  const name = await formData.get('name') as string;
  const content = await formData.get('content') as string;

  await createMarkdown.execute({ name, content });
  
  return
}

function NewMarkdown() {
  const [isPreview, setIsPreview] = useState(false);

  const formInstance = useForm();

  function onSave() {
    const currentValues = formInstance.getValues();
    return console.log({ currentValues })
  }

  return (
    <FormProvider {...formInstance}>
      <StyledForm method="post">
        <Menu name="name" onSave={onSave} />

        <StyledContent>
          {!isPreview && <TextArea />}
          <Preview setIsPreview={setIsPreview} />
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
  Loader: LoaderFunction<any>;
  Action: ActionFunction<any>
}