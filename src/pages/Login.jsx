import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { Button, Container, Form, Image } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as yup from "yup";
import subastaPandaLogo from "../assets/subastapanda.png";
import { authSelector, loginUser, reset } from "../features/auth/authSlice";

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
  margin-top: 20px;
`;
const StyledForm = styled(Form)`
  cursor: pointer;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  color: black;
  letter-spacing: 2px;
  margin-top: 15px;
  font-size: 11pt;
  font-weight: 700;
  &:hover {
    text-decoration: underline;
  }
`;
const StyledForgotPassword = styled(Link)`
  text-decoration: none;
  text-align: end;
  color: black;
  letter-spacing: 1px;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
  }
`;
const StyledInput = styled(Form.Control)`
  cursor: pointer;

  height: 60px;
  letter-spacing: 2px;
  border-radius: 12px;
`;

const loginSchema = yup
  .object({
    user_name: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSuccess, isError, errorMessage } = useSelector(authSelector);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async ({ user_name, password }) => {
    try {
      dispatch(loginUser({ user_name, password }));
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const handleLogin = ({ user_name, password }) => {
    dispatch(loginUser({ user_name, password }));
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
      dispatch(reset());
      toast.success("Logged In Successfully!");
    }

    if (isError) {
      dispatch(reset());
      toast.error(errorMessage || "Error Logging In.");
    }
  }, [isSuccess, isError, errorMessage, dispatch, navigate]);

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
        <StyledForm onSubmit={handleSubmit(handleLogin)}>
          <h2>Login</h2>
          <Form.Group>
            <StyledInput
              type="name"
              {...register("user_name")}
              placeholder="Full Name"
              isInvalid={!!errors.user_name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.user_name && errors.user_name.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <StyledInput
              type="password"
              {...register("password")}
              placeholder="Password"
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password && errors.password.message}
            </Form.Control.Feedback>
          </Form.Group>
          <StyledForgotPassword to="/forgot-password">
            Forgot Password
          </StyledForgotPassword>
          <StyledButton type="submit" variant="dark">
            Login
          </StyledButton>
          <StyledLink to="/signup">Don't have an account</StyledLink>
        </StyledForm>
      </StyledFormContainer>
    </StyledContainer>
  );
};

export default Login;
