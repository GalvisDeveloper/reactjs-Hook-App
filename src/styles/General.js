import styled from 'styled-components';

const Title = styled.div`
  font-size: ${(props) => props.size}em;
  font-family: fantasy;
  text-align: center;
  color: ${(props) => props.theme.color};
`;

const CustomFragment = styled.div`
    padding: 70px;

    .actions {
    display: block;
    text-align: center;
    }
    
`;

const InputText = styled.input`
  font-size: ${(props) => props.size}px;
  border-radius: 10px;
  border: 2px solid black;
  outline: none;
  padding: 8px;
  color: ${(props) => props.theme.inputText};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  max-width: max-content;
  box-sizing: border-box;
`;

const InputContent = styled.div`
  height: ${(props) => props.hg}px;
  max-width: 900px;
`;

const ButtonForm = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border-radius: 8px;
  border: none;
  width: 80px;
  background-color: ${(props) => props.theme.button};
  color: ${(props) => props.theme.buttonText};
  font-size: 20px;
  margin: auto;
`;

const OptionalMessage = styled.div`
  text-align: center;
  display: block;
  p {
    font-size: 16px;
  }
`;

export {
    Title, CustomFragment, InputText, InputContent, ButtonForm,
    OptionalMessage, 
};