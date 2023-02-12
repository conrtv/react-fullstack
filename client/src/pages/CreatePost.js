import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function CreatePost() {
  return (
    <div className="createPostPage">
      <Formik /*initialValues={} onSubmit={} validationSchema={}*/>
        <Form className="formContainer">
          <label>Title:</label>
          <Field
            id="inputCreatePost"
            name="title"
            placeholder="Example Title"
            className="ic1"
          />
          <label>Post:</label>
          <Field
            id="inputCreatePost"
            name="postText"
            placeholder="Posting about a post"
            className="ic2"
          />
          <label>Username:</label>
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
