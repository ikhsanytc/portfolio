"use client";
import { sendMessage } from "@/service/api";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submit = (data) => {
    sendMessage(data?.name, data?.email, data?.message).then((bool) => {
      if (bool) {
        const name = document.querySelector("#name");
        const email = document.querySelector("#email");
        const message = document.querySelector("#message");
        name.value = "";
        email.value = "";
        message.value = "";
        alert("Thanks for contact :)");
      }
    });
  };
  //   console.log(errors);
  return (
    <>
      <section className="h-screen pt-20" id="contact">
        <h1 className="text-center font-bold text-4xl md:text-5xl mb-10 underline underline-offset-8">
          Contact
        </h1>
        <div className="w-full md:w-1/2 mx-auto px-4">
          <div className="border-[4px] border-white rounded-lg p-5 shadow-2xl text-white">
            <form
              className="flex flex-col gap-3"
              onSubmit={handleSubmit(submit)}
            >
              <div>
                <label htmlFor="name" className="font-semibold">
                  Name<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required!",
                    },
                  })}
                  className={`bg-white text-black outline-none border-[3px] p-2 rounded-lg w-full ${
                    errors?.name ? "border-red-600" : "border-gray-500"
                  }`}
                  placeholder="Name..."
                />
                <p className="text-red-600">{errors?.name?.message}</p>
              </div>
              <div>
                <label htmlFor="email" className="font-semibold">
                  Email<span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required!",
                    },
                  })}
                  className={`bg-white text-black outline-none border-[3px] ${
                    errors?.email ? "border-red-600" : "border-gray-500"
                  } p-2 rounded-lg w-full`}
                  placeholder="Email..."
                />
                <p className="text-red-600">{errors?.email?.message}</p>
              </div>
              <div>
                <label htmlFor="message" className="font-semibold">
                  Message<span className="text-red-600">*</span>
                </label>
                <textarea
                  type="text"
                  id="message"
                  {...register("message", {
                    required: {
                      value: true,
                      message: "Message is required!",
                    },
                  })}
                  className={`bg-white text-black outline-none border-[3px] ${
                    errors?.message ? "border-red-600" : "border-gray-500"
                  } p-2 rounded-lg w-full`}
                  placeholder="Message..."
                ></textarea>
                <p className="text-red-600">{errors?.message?.message}</p>
              </div>
              <button className="btn btn-neutral text-white" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <div className="p-10"></div>
    </>
  );
};

export default Contact;
