import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function CreatePost() {
  const initialValues = {
    title: "",
    postText: "",
    username: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("You must input a Title."),
    postText: Yup.string().required("You must input a post."),
    username: Yup.string()
      .min(3, "Must be greater than 3 characters.")
      .max(15, "Must be less than 15 Characters")
      .required("You must input a username."),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/posts", data).then((response) => {
      console.log("Worked");
    });
  };

  return (
    <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Title:</label>
          <ErrorMessage name="title" component="span" />
          <Field
            id="inputCreatePost"
            name="title"
            placeholder="Example Title"
            className="ic1"
          />
          <label>Post:</label>
          <ErrorMessage name="postText" component="span" />

          <Field
            id="inputCreatePost"
            name="postText"
            placeholder="Posting about a post"
            className="ic2"
          />
          <label>Username:</label>
          <ErrorMessage name="username" component="span" />

          <Field
            id="inputCreatePost"
            name="username"
            placeholder="Name of user"
            className="ic2"
          />

          <button type="submit"> Create Post</button>
        </Form>
      </Formik>
    </div>
  );
}
