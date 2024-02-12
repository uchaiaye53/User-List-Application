import React, { useEffect, useContext } from "react";
import { AppContext } from "../UserContextApi";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoaderAnimation from "../kit/LoaderAnimation";

const UserProfile = () => {
  const navigate = useNavigate();
  const { user, setUser, setSearch, setSortBy } = useContext(AppContext);
  const { userId } = useParams();

  const handleBackButtonClick = () => {
    setUser(null); // Clearing the user data
    navigate("/");
    setSearch("");
    setSortBy("default");
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/user/${userId}`
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [userId, setUser]);

  if (!user) {
    return <LoaderAnimation />;
  }

  return (
    <div>
      <div className="bg-purple-300 min-h-screen flex justify-center items-center">
        <div className=" h-[500px] bg-purple-200 shadow-lg rounded-lg overflow-hidden sm:w-full  md:w-1/2">
          <div className="px-4 py-2 ">
            <div className=" flex flex-col sm:items-center md:items-start items-center">
              <button
                onClick={handleBackButtonClick}
                className="flex items-center text-purple-500 text-xl md:mt-6 md:ms-10 sm:mt-0 mt-0 "
              >
                {" "}
                Back
              </button>
            </div>

            <h1 className="text-center text-purple-600 font-bold text-2xl">
              User Profile
            </h1>

            <div className="flex justify-center mt-11">
              <img
                src={user?.image}
                alt={`${user?.firstName} ${user?.lastName}`}
                className="w-32 h-32 rounded-full"
              />
            </div>

            <div className="text-center mt-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {user?.firstName} {user?.lastName}
              </h2>
              <a className="break-all" href={`mailto:${user?.email}`}>
                {user?.email}
              </a>
            </div>

            <div className="mt-6 text-center">
              <p className="text-md text-gray-700">
                <span className="font-semibold">Address:</span>{" "}
                {user?.address?.address}, {user?.address?.city}
              </p>
              <p className="text-md text-gray-700 mt-1">
                <span className="font-semibold">Company:</span>{" "}
                {user?.company?.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
