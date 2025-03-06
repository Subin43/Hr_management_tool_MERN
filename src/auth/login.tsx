import * as Yup from "yup";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import Referalcompoenent from "../components/referalcompoenent";

interface EmployeeForm {
  employeeNo: string;
  password: string;
}

const Login = () => {
  const initialValues: EmployeeForm = {
    employeeNo: "",
    password: "",
  };
  const navigate = useNavigate()

  const validationSchema = Yup.object().shape({
    employeeNo: Yup.string()
      .matches(/^\d{3}$/, 'Employee Number must be 3 digits and contain only numbers')
      .required("Employee No is required"),

    password: Yup.string()
      .min(8, "Password must be 8 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[!@#$%^&*()<>?:{}|,./;:]/, "Password must contain at least one special character")
      .required("Password is required"),
  });

  const handleFormSubmit = (values: EmployeeForm) => {
    console.log("Form submitted", values);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md mr-80">
      <h1 className="text-2xl font-bold text-center mb-4">greytHR</h1>
      <h2 className="text-lg text-gray-600 text-center mb-6">Hello there!👋</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <label htmlFor="employeeNo" className="block font-medium mb-1">Employee No</label>
              <Field
                type="text"
                id="employeeNo"
                name="employeeNo"
                placeholder="Enter employee number"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <ErrorMessage name="employeeNo" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block font-medium mb-1">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <ErrorMessage name="password" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <div className="text-end mb-6">
            <button className="text-blue-500 hover:underline" onClick={() => navigate("/forgot-password")}>Forgot Password</button>
            </div>
            
            <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all mb-4"
            disabled={isSubmitting}>
              Login
            </button>
          </Form>
        )}
      </Formik>
      </div>

      <Referalcompoenent />
    </div>
  );
};

export default Login;
