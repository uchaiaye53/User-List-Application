import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddUserForm = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const handleCloseButtonClick = () => {
    navigate("/");
  };

  const schema = yup.object().shape({
    image: yup.string().required("image url is required!"),
    firstName: yup.string().required("first name is required!"),
    lastName: yup.string().required(" last name is required!"),
    email: yup.string().email().required("please input valid email!"),
    address: yup.object().shape({
      address: yup.string().required("street address is required!"),
      city: yup.string().required("city name is required!"),
    }),
    company: yup.object().shape({
      name: yup.string().required("company name is required!"),
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onDataSubmit = async (formData) => {
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const response = await axios.post(
        "https://dummyjson.com/users/add",
        formData,
        config
      );
      setUserData(response.data);

      //props.handleUserDataForm(userData);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  //localStorage.setItem('user-Data', JSON.stringify(userData));

  //console.log(userData);

  return (
    <div>
      <div className="bg-purple-300 min-h-screen flex justify-center items-center">
        <div className=" bg-purple-200 shadow-lg rounded-lg overflow-hidden sm:w-full  md:w-1/2">
          <div className="px-4 py-2 ">
            {/* close button start */}
            <div className=" flex flex-col sm:items-center md:items-end items-center">
              <button
                onClick={handleCloseButtonClick}
                className="flex items-center text-purple-500 md:mt-6 md:me-10 sm:mt-0 mt-0  "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <h1 className="text-center text-purple-600 font-bold text-2xl">
              Add New User
            </h1>

            <div>
              <div className="max-w-md mx-auto mt-10 mb-10">
                <form
                  className="space-y-4"
                  onSubmit={handleSubmit(onDataSubmit)}
                >
                  <div>
                    <label htmlFor="image" className="block mb-1">
                      Image URL:
                    </label>
                    <input
                      type="text"
                      placeholder="put your image link"
                      className="w-full rounded border px-3 py-2"
                      {...register("image")}
                    />
                    <p className="text-red-800">{errors.image?.message}</p>
                  </div>
                  <div>
                    <label htmlFor="firstName" className="block mb-1">
                      First Name:
                    </label>
                    <input
                      type="text"
                      placeholder="first name"
                      className="w-full rounded border px-3 py-2"
                      {...register("firstName")}
                    />
                    <p className="text-red-800">{errors.firstName?.message}</p>
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block mb-1">
                      Last Name:
                    </label>
                    <input
                      type="text"
                      placeholder="last name"
                      className="w-full rounded border px-3 py-2"
                      {...register("lastName")}
                    />
                    <p className="text-red-800">{errors.lastName?.message}</p>
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-1">
                      Email:
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      className="w-full rounded border px-3 py-2"
                      {...register("email")}
                    />
                    <p className="text-red-800">{errors.email?.message}</p>
                  </div>
                  <div>
                    <label htmlFor="street" className="block mb-1">
                      Street:
                    </label>
                    <input
                      type="text"
                      placeholder="street"
                      className="w-full rounded border px-3 py-2"
                      {...register("address.address")}
                    />
                    <p className="text-red-800">
                      {errors.address?.address?.message}
                    </p>
                  </div>
                  <div>
                    <label htmlFor="city" className="block mb-1">
                      City:
                    </label>
                    <input
                      type="text"
                      placeholder="city"
                      className="w-full rounded border px-3 py-2"
                      {...register("address.city")}
                    />
                    <p className="text-red-800">
                      {errors.address?.city?.message}
                    </p>
                  </div>
                  <div>
                    <label htmlFor="companyName" className="block mb-1">
                      Company Name:
                    </label>
                    <input
                      type="text"
                      placeholder="company"
                      className="w-full rounded border px-3 py-2"
                      {...register("company.name")}
                    />
                    <p className="text-red-800">
                      {errors.company?.name?.message}
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="bg-purple-500 text-white rounded px-4 py-2"
                    >
                      {isSubmitting ? "...Loading" : "Submit"}
                    </button>
                  </div>

                  {isSubmitSuccessful && (
                    <p className="text-green-950 text-lg text-center">
                      "Form submitted successfully"
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserForm;
