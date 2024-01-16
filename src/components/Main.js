import { useContext, useState } from "react";
import User from "./User";
import UsersList from "./UsersList";
import { UserContext } from "../context/UserContext";
import Clip from "./Clip";

const Main = () => {
  const [menuPosition, setMenuPosition] = useState({ left: 0 });

  const { selectedUser, open, setOpen } = useContext(UserContext);

  const handleClick = (e) => {
    const { clientX } = e;
    const left = `${clientX}px`;
    setMenuPosition({ left });
    setOpen(true);
  };
  return (
    <div>
      <div>
        <div className=" text-3xl font-bold m-4 p-2 text-blue-500">
          Pick Users
        </div>
        <div className="w-1/2 m-auto border-b-4 border-blue-500">
          <div className="w-full p-1 " onClick={(e) => handleClick(e)}>
            <div className="flex w-36G m-2">
              {selectedUser.length >= 1 ? (
                selectedUser?.map((user) => <Clip item={user} />)
              ) : (
                <span>Add a User</span>
              )}
            </div>
          </div>
        </div>
        <div>{open && <UsersList menuPosition={menuPosition} />}</div>
      </div>
    </div>
  );
};
export default Main;
