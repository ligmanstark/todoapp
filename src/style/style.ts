import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: burlywood;

  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  input {
    cursor:pointed
  }

`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TodoDiv = styled.div`
  display: flex;
  gap: 10px;
  input {
    border-radius: 4px;
    box-shadow: none;
    background-color: whitesmoke;
    min-height: 20px;
    min-width: 50px;
    text-align: center;
    border: none;
    box-shadow: 1px 1px 1px 1px whitesmoke;
  }
  button {
    border: none;
    border-radius: 4px;
    height: 28px;
    color: darkslategray;
  }
`;

export const FakeStyleForLinter = styled.div``;
