import React, { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "./UserContextApi";
import axios from "axios";
import { Link } from "react-router-dom";

const SearchSortAdd = () => {
  const { setUsers, search, setSearch, sortBy, setSortBy } =
    useContext(AppContext);

  //searching funtionality
  useEffect(() => {
    const fetchName = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/user/search?q=${search}`
        );
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchName();
  }, [search, setUsers]);

  //sorting functionality

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="bg-purple-100 rounded-lg shadow-md flex flex-col sm:flex-row items-center justify-between p-4 mt-10 sticky top-0">
      {/* Search Field */}
      <input
        type="text"
        placeholder="Search"
        className="border-none bg-purple-100 focus:outline-none flex-grow mr-2 sm:mb-0 sm:mr-0"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {/* Sorting Select Field */}
      <select
        className="border-none bg-purple-100 focus:outline-none w-full sm:w-24 mr-2"
        value={sortBy || "default"}
        onChange={handleSortChange}
      >
        <option value="">Sort By</option>
        <option value="name">Name</option>
        <option value="email">Email</option>
        <option value="company">Company Name</option>
      </select>
      {/* Add Button */}
      <Link to="/addUser">
        <button className="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600 focus:outline-none sm:px-4 sm:py-2">
          Add User
        </button>
      </Link>
    </div>
  );
};

export default SearchSortAdd;
