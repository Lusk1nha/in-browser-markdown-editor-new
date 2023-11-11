import { StyledPageNotFound, Text } from "./styles";



function PageNotFound() {

  return (
    <StyledPageNotFound>
      <Text>
        404 - Page not found
      </Text>
    </StyledPageNotFound>
  )
}

export default Object.assign({
  Page: (<PageNotFound />)
}) as {
  Page: React.ReactNode;
}