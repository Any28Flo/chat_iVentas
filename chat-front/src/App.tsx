import { AppContainer, MessagesContainer } from "./assets/components/styles";

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
          <MessagesContainer key={id}>
            {message}
          </MessagesContainer>
        ))
      }

    </AppContainer>
  )
}

export default App
