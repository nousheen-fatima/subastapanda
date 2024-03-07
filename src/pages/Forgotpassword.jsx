import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Container, Form, Image } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as yup from "yup";
import subastaPandaLogo from "../assets/subastapanda.png";
import { forgotPassword } from "../features/auth/authSlice";

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  height: 100vh;
`;

const StyledContentContainer = styled.div`
  margin-bottom: 380px;
  font-weight: 500;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const StyledText = styled.p`
  font-size: 3rem;
  line-height: 80%;
  font-weight: 500;
  letter-spacing: 4px;
  margin-bottom: 20px;
`;

const StyledFormContainer = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 50px;
  width: 36%;
  height: 60%;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const StyledButton = styled(Button)`
  cursor: pointer;
  width: 100%;
  height: 60px;
  letter-spacing: 2px;
  border-radius: 12px;
`;
const StyledForm = styled(Form)`
  margin-top: 40px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledParagraph = styled.p`
  text-decoration: none;
  text-align: center;
  color: black;
  letter-spacing: 2px;
  font-size: 11pt;
  font-weight: 700;
  margin-top: 60px;
`;
const StyledInput = styled(Form.Control)`
  margin-top: 30px;
  cursor: pointer;
  height: 60px;
  letter-spacing: 2px;
  border-radius: 12px;
`;

const forgotPasswordSchema = yup
  .object({
    email: yup.string().required(),
  })
  .required();

const ForgotpasswordPage = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
  });
  // const { isLoading, isSuccess, isError, errorMessage } =
  //   useSelector(authSelector);

  const onSubmit = ({ email }) => {
    dispatch(forgotPassword({ email }));
  };

  return (
    <StyledContainer>
      <StyledContentContainer>
        <Image
          src={subastaPandaLogo}
          alt="SubastaPanda"
          style={{ marginRight: "10px", width: "250px" }}
        />
        <StyledText>
          <span>Make Buy & sell</span>
          <br /> hassle free
        </StyledText>
      </StyledContentContainer>
      <StyledFormContainer>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <h5>Forgot Password</h5>
          <Form.Group>
            <StyledInput
              type="email"
              {...register("email")}
              placeholder="Enter email Address"
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email && errors.email.message}
            </Form.Control.Feedback>
          </Form.Group>
          <StyledButton type="submit" variant="dark">
            Submit
          </StyledButton>
          <StyledParagraph>Don't have an account ?</StyledParagraph>
          <Link to="/signup">
            <StyledButton variant="outline-dark">Sign up</StyledButton>
          </Link>
        </StyledForm>
      </StyledFormContainer>
    </StyledContainer>
  );
};

export default ForgotpasswordPage;
