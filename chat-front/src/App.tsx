import { AppContainer, MessagesContainer } from "./assets/components/styles";
import AddNewMessage from "./assets/components/Message/AddNewMessage";

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
  const handleSend = (message: string) => {
    console.log(message)
  }

  return (
    <AppContainer>
      {
        messages.map(({ id, message }) => (
          <MessagesContainer key={id}>
            {message}
          </MessagesContainer>
        ))
      }
      <AddNewMessage onSend={handleSend} />

    </AppContainer>
  )
}

export default App
