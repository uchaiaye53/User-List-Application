import { Link } from "react-router-dom";

const UserCard = (props) => {
  const { id, firstName, lastName, email, address, company, image } = props;

  return (
    <div>
      <div className="bg-purple-200 h-[450px] text-black rounded-xl w-[300px] shadow-2xl">
        <div className="rounded-t-xl  bg-purple-400 flex justify-center items-center h-52">
          <img src={image} alt="" className="h-48 w-48 rounded-full" />
        </div>

        <div className="flex flex-col justify-center items-center pt-3 gap-5">
          <Link to={`/profile/${id}`}>
            <h2 className="font-bold">{`${firstName} ${lastName}`}</h2>
          </Link>
          <table className="mx-2">
            <tbody>
              <tr className="align-top">
                <td className="font-medium">Email:</td>
                <td>
                  <a className="break-all" href={`mailto:${email}`}>
                    {email}
                  </a>
                </td>
              </tr>
              <tr className="align-top">
                <td className="font-medium">Address:</td>
                <td>
                  {address.address}, {address.city}
                </td>
              </tr>
              <tr className="align-top">
                <td className="font-medium">Company:</td>
                <td>{company.name}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
