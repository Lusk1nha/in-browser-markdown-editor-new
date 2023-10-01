import { useState } from "react"
import { Preview } from "../../components/Preview/Preview"
import { TextArea } from "../../components/TextArea/TextArea"
import { StyledContent, StyledForm } from "./styles"
import { Menu } from "../../components/Menu/Menu";
import { ActionFunction, Form, LoaderFunction, defer } from "react-router-dom";


const loader: LoaderFunction = async () => {

  return defer({

  })
}

const action: ActionFunction = async () => {
  
}

function NewMarkdown() {
  const [markdown, setMarkdown] = useState<string>('');

  function onSave() {
    return
  }

  return (
    <Form method="post" action="/">
      <Menu onSave={onSave} />

      <StyledContent>
        <TextArea />
        <Preview />
      </StyledContent>
    </Form>
  )
}

export default Object.assign({
  Page: (<NewMarkdown />),
  Loader: loader
}) as {
  Page: React.ReactNode;
  Loader: LoaderFunction<any>;
}