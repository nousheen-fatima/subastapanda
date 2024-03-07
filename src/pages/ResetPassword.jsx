import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Container, Form, Image } from "react-bootstrap";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import * as yup from "yup";
import subastaPandaLogo from "../assets/subastapanda.png";

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

const resetSchema = yup
  .object({
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Must at least one uppercase letter, one lowercase letter, one symbol, one digit, and be at least 8 characters long"
      )
      .required(),
    confirm_password: yup
      .string()
      .required("Please fill in this field")
      .oneOf([yup.ref("password"), null], "Password did'nt match"),
  })
  .required();

const ResetPasswordPage = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(resetSchema),
  });

  const onSubmit = (data) => {
    // let userCredenials = {
    //   username,
    //   password,
    // };
    // dispatch(loginUser(userCredenials)).then((result) => {
    //   if (result.payload) {
    //     navigate("/");
    //   }
    // });
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
          <h5>New Password</h5>
          <Form.Group>
            <StyledInput
              type="password"
              {...register("confirm_password")}
              placeholder="Confirm password"
            />
            {errors.confirm_password && (
              <p>{errors.confirm_password.message}</p>
            )}
          </Form.Group>
          <Form.Group>
            <StyledInput
              type="password"
              {...register("password")}
              placeholder="Enter New password"
            />
            {errors.password && <p>{errors.password.message}</p>}
          </Form.Group>
          <StyledButton type="submit" variant="dark">
            Submit
          </StyledButton>
        </StyledForm>
      </StyledFormContainer>
    </StyledContainer>
  );
};

export default ResetPasswordPage;
