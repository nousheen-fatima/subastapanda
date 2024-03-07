import { Toaster } from "react-hot-toast";
import styled from "styled-components";
import AppRouter from "./routes";

const Container = styled.div`
  background: white;
  width: 90%;
  height: 100%;
  margin-inline: auto;
`;

function App() {
  return (
    <Container>
      <Toaster position="top-center" />
      <AppRouter />
    </Container>
  );
}

export default App;
