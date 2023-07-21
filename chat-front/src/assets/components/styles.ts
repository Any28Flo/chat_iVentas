import styled from "styled-components";

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    height:100%;
    width:100%;
    padding :2rem;
    background-color: var(--primary);
`;
export const MessagesContainer = styled.div`
    background-color: red;
    width: 300px;
    min-height:40px;
    flex-glow:0;
    margin:1rem;
`;
export const NewMessageFormContainer = styled.div`
    max-width: 300px;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: self-start;
`
export const NewMessageInput = styled.input`
  border-radius: 3px;
  border: none;
  box-shadow: #091e4240 0px 1px 0px 0px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
`;
export const NewMessageButton = styled.button`
  background-color: green;
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color : #ffffff;
  padding: 6px 12px;
  text-align: center;
`;