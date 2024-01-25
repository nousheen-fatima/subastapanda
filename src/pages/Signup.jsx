import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { Button, Container, Form, Image } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import * as yup from "yup";
import subastaPandaLogo from "../assets/subastapanda.png";
import { reset, signupUser } from "../features/auth/authSlice";

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
  height: 80%;
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
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
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

const StyledInput = styled(Form.Control)`
  cursor: pointer;

  height: 60px;
  letter-spacing: 2px;
  border-radius: 12px;
`;

const signupSchema = yup
  .object({
    fullname: yup.string().required(),
    email: yup.string().email("Invalid email").required("Required"),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Must at least one uppercase letter, one lowercase letter, one symbol, one digit, and be at least 8 characters long"
      )
      .required(),
    confirmPassword: yup
      .string()
      .required("Required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  })
  .required();

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isSuccess, isError, errorMessage } = useSelector();

  const onSubmit = (data) => {
    dispatch(signupUser(data));
  };

  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, []);

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
      navigate("/");
    }

    if (isError) {
      toast.error(errorMessage);
      dispatch(reset());
    }
  }, [isSuccess, isError]);

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
          <h2>Signup</h2>
          <Form.Group>
            <StyledInput
              type="fullname"
              {...register("fullname")}
              placeholder="Full Name"
              isInvalid={!!errors.fullname}
            />
            <Form.Control.Feedback type="invalid">
              {errors.fullname && errors.fullname.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <StyledInput
              type="email"
              {...register("email")}
              placeholder="Email"
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email && errors.email.message}
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
          <Form.Group>
            <StyledInput
              type="password"
              {...register("confirmPassword")}
              placeholder="Confirm Password"
              isInvalid={!!errors.confirmPassword}
            />
            <Form.Control.Feedback type="invalid">
              {errors.confirmPassword && errors.confirmPassword.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Check
              {...register("terms")}
              name="terms"
              label="I Accept Terms and Condition"
              isInvalid={!!errors.terms}
            />
            <Form.Control.Feedback type="invalid">
              {errors.terms && errors.terms.message}
            </Form.Control.Feedback>
          </Form.Group>
          <StyledButton type="submit" variant="dark">
            Submit
          </StyledButton>
          <StyledLink to="/login">Already have an account?</StyledLink>
        </StyledForm>
      </StyledFormContainer>
    </StyledContainer>
  );
};

export default Signup;
