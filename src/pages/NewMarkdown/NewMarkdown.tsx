import { Preview } from "../../components/Preview/Preview"
import { TextArea } from "../../components/TextArea/TextArea"
import { StyledContent, StyledForm } from "./styles"
import { Menu } from "../../components/Menu/Menu";
import { ActionFunction, LoaderFunction } from "react-router-dom";
import { CreateMarkdown } from "../../services/CreateMarkdown";


const action: ActionFunction = async ({ request }) => {
  const createMarkdown = new CreateMarkdown();

  let formData = await request.formData();

  const name = await formData.get('name') as string;
  const content = await formData.get('content') as string;

  const markdown = await createMarkdown.execute({ name, content });
  console.log(markdown)
  return
}

function NewMarkdown() {
  function onSave() {
    return
  }

  return (
    <StyledForm method="post" >
      <Menu name="name" onSave={onSave} />

      <StyledContent>
        <TextArea />
        <Preview />
      </StyledContent>
    </StyledForm>
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