import UserCard from "./UserCard";
import { useContext, useState } from "react";
import { AppContext } from "./UserContextApi";
import SearchSortAdd from "./SearchSortAdd";
import NoData from "./kit/NoData";
//import AddUserForm from "./pages/AddUserForm";

const UserList = () => {
  const { users } = useContext(AppContext);

  //form theke props akare function pathiye data neya
  // const [userData, setUserData] = useState(null);
  // const handleUserDataForm =(data)=>{
  //   setUserData(data);
  // }
  // console.log(userData);

  // let userData = JSON.parse(localStorage.getItem('user-Data'));
  // console.log(userData)


  //console.log(users);

 
  
  return (
    <div className="m-auto w-5/6 ">
      {/* <AddUserForm handleUserDataForm={handleUserDataForm}/> */}
      <SearchSortAdd />
      {users.length === 0 && <NoData />}
      <div className="mt-14 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        {users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            firstName={user.firstName}
            lastName={user.lastName}
            email={user.email}
            address={user.address}
            company={user.company}
            image={user.image}
          />
        ))}
      </div>
    </div>
  );
};

export default UserList;
