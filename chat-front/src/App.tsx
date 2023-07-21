import { AppContainer, RowContainer } from "./assets/components/styles";

function App() {
  const messages = [
    {
      id: 1,
      message: 'hello'

    },
    {
      id: 2,
      message: 'nice'

    },
    {
      id: 3,
      message: 'meet you'

    }
  ]

  return (
    <AppContainer>
      {
        messages.map(({ id, message }) => (
          <RowContainer key={id}>
            {message}
          </RowContainer>
        ))
      }

    </AppContainer>
  )
}

export default App
