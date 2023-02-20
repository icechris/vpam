import React, { useState } from "react";
import "./register.css";
import { Formik, useFormik } from "formik";
import * as yup from "yup";

const emailValidationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("required"),
});

const initialValueEmail = {
  email: "",
};

export const Register = (props) => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  //   const formik = useFormik({
  //     initialValues: {
  //       email: "",
  //     },
  //     validationSchema: yup.object({
  //       email: yup
  //         .string()
  //         .email("Invalid email address")
  //         .required("email is a required field"),
  //     }),
  //     onSubmit: () => {
  //       formik.preventDefault();
  //       // console.log(formik.values);
  //     },
  //   });
  //   console.log(formik.errors);

  const handleFormSubmit = (values, onSubmitProps) => {
    /* LOGIC FOR SUBMITTING FORM */
  };

  return (
    <div>
      <h2 className="head-text">Enter Email/Phone to recieve token</h2>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValueEmail}
        validationSchema={emailValidationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
          resetForm,
        }) => (
          <form className="login-form">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="enter your email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={Boolean(touched.lastName) && Boolean(errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
            {errors.email ? (
              <p className="errorStyle" style={{ color: "red" }}>
                {errors.email}
              </p>
            ) : null}

            <button
              className="send-btn"
              type="submit"
              onClick={() => props.onFormSwitch("loginForm")}
            >
              {" "}
              Send{" "}
            </button>

            <button
              className="link-btn"
              type="button"
              onClick={() => props.onFormSwitch("Phone")}
            >
              {" "}
              Use phone{" "}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default Register;
