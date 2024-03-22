import { Toaster } from "react-hot-toast";
import styled from "styled-components";
import AppRouter from "./routes";

const Container = styled.div`
  background: white;
  width: 100%;
  height: 100%;
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
