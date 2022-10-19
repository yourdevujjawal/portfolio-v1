import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const [alert, setAlert] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", data }),
    })
      .then((res) => {
        setAlert(
          "We have received your message and will get back to you soon."
        );
        reset();
      })
      .catch((error) =>
        setAlert(
          "There was an unexpected error. Please try again after some time."
        )
      )
      .finally(() => {
        setTimeout(() => {
          setAlert("");
        }, 5000);
      });
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  return (
    <>
      {!!alert && (
        <div role="alert" className="alert">
          {alert}
        </div>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        name="contact"
        action="/"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="form-group">
          <label htmlFor="fullName">
            Name: <span className="text-red">*</span>
          </label>
          <input
            id="fullName"
            className="form-control"
            name="fullName"
            {...register("fullName", { required: "Please enter your name" })}
          />
          {errors.fullName && (
            <span className="field-error">{errors.fullName.message}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Email: <span className="text-red">*</span>
          </label>
          <input
            id="email"
            className="form-control"
            type="email"
            name="email"
            {...register("email", {
              required: "Please enter your email address",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors.email && (
            <span className="field-error">{errors.email.message}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Message: <span className="text-red">*</span>
          </label>
          <textarea
            name="message"
            id="message"
            className="form-control textarea"
            {...register("message", { required: "Please enter your message" })}
          ></textarea>
          {errors.message && (
            <span className="field-error">{errors.message.message}</span>
          )}
        </div>

        <button type="submit" className="btn btn-outlined">
          Send
        </button>
      </form>
    </>
  );
}
