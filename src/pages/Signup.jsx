import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { Button, Container, Form, Image, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { RiCheckLine, RiCloseLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import * as yup from "yup";
import subastaPandaLogo from "../assets/subastapanda.png";
import { authSelector, reset, signupUser } from "../features/auth/authSlice";

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
  line-height: 100%;
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

const StyledInputGroup = styled(InputGroup)`
  position: relative;
`;

const EyeIcon = styled.span`
  position: absolute;
  right: 20px;
  top: 20%;
  bottom: 100%;
  z-index: 2;
  opacity: 0.7;
  pointer-events: auto;
  transition: opacity 0.3s;
  transform: translateY(-50%);
  cursor: pointer;
  ${StyledInput}:focus-within & {
    opacity: 1;
  }
`;

const PasswordList = styled.ul`
  margin-top: 5px;
`;

const PasswordListItem = styled.li`
  color: ${({ valid }) => (valid ? "green" : "red")};
  list-style-type: none;
  margin-left: -30px;
`;

const signupSchema = yup
  .object({
    full_name: yup.string().required("Required"),
    email: yup.string().email("Invalid email").required("Required"),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Must have at least one uppercase letter, one lowercase letter, one symbol, one digit, and be at least 8 characters long"
      )
      .required(),
    terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  })
  .required();

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValidity, setPasswordValidity] = useState({
    uppercase: false,
    lowercase: false,
    digit: false,
    symbol: false,
    length: false,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isSuccess, isError, errorMessage } = useSelector(authSelector);

  const handleSignup = ({ full_name, email, password }) => {
    dispatch(signupUser({ full_name, email, password }));
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
      navigate("/login");
      toast.success("Signup Successful!");
    }
    if (isError) {
      dispatch(reset());
      if (errorMessage && errorMessage.message && errorMessage.message.email) {
        const emailError = errorMessage.message.email[0];
        toast.error(emailError);
      } else {
        toast.error(errorMessage || "Error while Signing Up.");
      }
    }
  }, [isSuccess, isError, errorMessage, dispatch, navigate]);

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    setPasswordValidity({
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      digit: /[0-9]/.test(password),
      symbol: /[@$!%*?&]/.test(password),
      length: password.length >= 8,
    });
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
          <br /> hassle-free
        </StyledText>
      </StyledContentContainer>
      <StyledFormContainer>
        <StyledForm onSubmit={handleSubmit(handleSignup)}>
          <h4>Signup</h4>
          <Form.Group>
            <StyledInput
              type="name"
              {...register("full_name")}
              placeholder="Full Name"
              isInvalid={!!errors.full_name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.full_name && errors.full_name.message}
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
            <StyledInputGroup>
              <StyledInput
                type={showPassword ? "text" : "password"}
                {...register("password")}
                placeholder="Password"
                isInvalid={!!errors.password}
                onChange={handlePasswordChange}
              />
              <EyeIcon
                onClick={() => setShowPassword(!showPassword)}
                aria-hidden="true"
              >
                {showPassword ? (
                  <AiFillEyeInvisible size={25} />
                ) : (
                  <AiFillEye size={25} />
                )}
              </EyeIcon>
              <Form.Control.Feedback type="invalid">
                <PasswordList>
                  <PasswordListItem valid={passwordValidity.uppercase}>
                    {passwordValidity.uppercase ? (
                      <RiCheckLine size={20} style={{ marginRight: "5px" }} />
                    ) : (
                      <RiCloseLine size={20} style={{ marginRight: "5px" }} />
                    )}
                    At least one uppercase letter
                  </PasswordListItem>
                  <PasswordListItem valid={passwordValidity.lowercase}>
                    {passwordValidity.lowercase ? (
                      <RiCheckLine size={20} style={{ marginRight: "5px" }} />
                    ) : (
                      <RiCloseLine size={20} style={{ marginRight: "5px" }} />
                    )}
                    At least one lowercase letter
                  </PasswordListItem>
                  <PasswordListItem valid={passwordValidity.digit}>
                    {passwordValidity.digit ? (
                      <RiCheckLine size={20} style={{ marginRight: "5px" }} />
                    ) : (
                      <RiCloseLine size={20} style={{ marginRight: "5px" }} />
                    )}
                    At least one digit
                  </PasswordListItem>
                  <PasswordListItem valid={passwordValidity.symbol}>
                    {passwordValidity.symbol ? (
                      <RiCheckLine size={20} style={{ marginRight: "5px" }} />
                    ) : (
                      <RiCloseLine size={20} style={{ marginRight: "5px" }} />
                    )}
                    At least one symbol
                  </PasswordListItem>
                  <PasswordListItem valid={passwordValidity.length}>
                    {passwordValidity.length ? (
                      <RiCheckLine size={20} style={{ marginRight: "5px" }} />
                    ) : (
                      <RiCloseLine size={20} style={{ marginRight: "5px" }} />
                    )}
                    Minimum 8 characters
                  </PasswordListItem>
                </PasswordList>
              </Form.Control.Feedback>
            </StyledInputGroup>
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
