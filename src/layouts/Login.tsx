import { useFormik } from "formik";
import { useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import image from "../assets/login.png";
import { credential, siteLogo } from "../config";
import Loader from "../components/loader";
import { loginValidationSchema } from "../validation/SchemaValidation";
import InputBox from "../components/Inputbox";
import { getErrorMessage, setCookie, toastMessage } from "../utils/helpers";
import { getUserByEmail } from "../services/UserService";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);
  const [isShowPassword, setisShowPassword] = useState(false);

  const { values, handleSubmit, handleChange, errors, touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: () => {
      handleLogin();
    },
  });

  const handleLogin = async () => {
    setisLoading(true);
    try {
      const apiResponse = await getUserByEmail(values?.email, values?.password);
      const { data } = apiResponse;

      if (data.length > 0) {
        setCookie(credential, data);
        toastMessage("success", "Login successful!");
        navigate("/todo/dashboard");
      } else {
        toastMessage("error", "Invalid email or password. Please try again.");
      }
    } catch (error) {
      getErrorMessage(error);
    } finally {
      setisLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
        <div className="lg:w-[50%] flex items-center justify-center bg-blue-100">
          <img
            src={image}
            alt="Login Background"
            className="w-[50%] lg:w-[60%] object-cover"
          />
        </div>

        <div className="lg:w-[50%] flex flex-col items-center justify-center p-6">
          <img
            src={siteLogo}
            alt="Site Logo"
            className="w-[40%] md:w-[15%] mb-6"
          />

          <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

            <InputBox
              id="email"
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange("email")}
              error={errors.email}
              touched={touched.email}
            />

            <InputBox
              id="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange("password")}
              error={errors.password}
              touched={touched.password}
              isSecure={true}
              isShowPassword={isShowPassword}
              onToggleVisibility={() => setisShowPassword(!isShowPassword)}
            />

            <div className="my-4 text-end">
              <span
                className="text-blue-500 text-sm cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                Don't have an account? Signup here
              </span>
            </div>

            <button
              type="submit"
              onClick={() => handleSubmit()}
              className="w-full bg-blue-500 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-blue-600 transition-all"
            >
              Login <IoMdArrowRoundForward />
            </button>
          </div>
        </div>
      </div>

      {isLoading && <Loader isVisible={isLoading} />}
    </>
  );
};

export default Login;
