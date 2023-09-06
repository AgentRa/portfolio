import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { dark } from "./utils/Themes.tsx";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

function App() {
  return (
    <ThemeProvider theme={dark}>
      <Body>
      </Body>
    </ThemeProvider>
  );
}

export default App;
