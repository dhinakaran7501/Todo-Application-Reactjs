import { useFormik } from "formik";
import { useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import image from "../assets/register.png";
import { siteLogo } from "../config";
import Loader from "../components/loader";
import InputBox from "../components/Inputbox";
import { signupValidationSchema } from "../validation/SchemaValidation";
import { getErrorMessage, toastMessage } from "../utils/helpers";
import { createUser } from "../services/UserService";
import { useUserDetails } from "../utils/storeData";

const Signup = () => {
  const userDetails = useUserDetails();

  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);
  const [isShowPassword, setisShowPassword] = useState(false);

  const { values, handleSubmit, handleChange, errors, touched } = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
    validationSchema: signupValidationSchema,
    onSubmit: () => {
      handleSignup();
    },
  });

  const handleSignup = async () => {
    setisLoading(true);

    const isExistingUser = userDetails?.some(
      (user: { email: string }) => user.email === values?.email
    );

    if (isExistingUser) {
      toastMessage(
        "error",
        "Email already exists. Please use a different email."
      );
      setisLoading(false);
      return;
    }

    try {
      const apiResponse = await createUser(values);
      const { status } = apiResponse ?? {};
      if (status === 201) {
        toastMessage("success", "Account created successfully!.");
        navigate("/login");
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
            alt="Signup Background"
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
            <h2 className="text-2xl font-semibold text-center mb-4">Signup</h2>

            <InputBox
              id="first_name"
              label="First Name"
              placeholder="Enter your first name"
              value={values.first_name}
              onChange={handleChange("first_name")}
              error={errors.first_name}
              touched={touched.first_name}
            />

            <InputBox
              id="last_name"
              label="Last Name"
              placeholder="Enter your last name"
              value={values.last_name}
              onChange={handleChange("last_name")}
              error={errors.last_name}
              touched={touched.last_name}
            />

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

            <div className="flex justify-end mb-4">
              <span
                className="text-blue-500 text-sm cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Already have an account? Login here
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-blue-600 transition-all"
              onClick={() => handleSubmit()}
            >
              Register <IoMdArrowRoundForward />
            </button>
          </div>
        </div>
      </div>

      {isLoading && <Loader isVisible={isLoading} />}
    </>
  );
};

export default Signup;
