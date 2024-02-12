import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

const UserContextApi = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState('default');
  
  const fetchData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/users");
      setUsers(response.data.users);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const sortedUsers = [...users].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.firstName.localeCompare(b.firstName);
      case "email":
        return a.email.localeCompare(b.email);
      case "company":
        return a.company.name.localeCompare(b.company.name);
      default:
        return users;
    }
  });

  return (
    <div>
      <AppContext.Provider
        value={{
          users: sortedUsers,
          setUsers,
          user,
          setUser,
          search,
          setSearch,
          sortBy,
          setSortBy,
        }}
      >
        {children}
      </AppContext.Provider>
    </div>
  );
};

export { UserContextApi, AppContext };
