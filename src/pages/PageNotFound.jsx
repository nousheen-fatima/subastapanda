import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default function PageNotFound() {
  return (
    <StyledContainer>
      <h3>Page not found 😢</h3>
      <Link to="/">
        <Button variant="dark">Go Back</Button>
      </Link>
    </StyledContainer>
  );
}
