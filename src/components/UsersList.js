import { useContext } from "react";
import User from "./User";
import { UserContext } from "../context/UserContext";

const UsersList = ({ menuPosition }) => {
  const { setSelectedUser, selectedUser, setOpen, setUsers, user } =
    useContext(UserContext);

  const handleAddUser = (item) => {
    setSelectedUser([...selectedUser, item]);
    setUsers(user?.filter((itm) => itm.id !== item.id));
    setOpen(false);
    // console.log(user);
  };
  return (
    <div
      className="flex flex-col shadow-xl w-[22rem] h-[10rem] border-2 border-gray-100  overflow-y-scroll rounded-xl scrollbar-thumb-gray-200 scrollbar-track-white scrollbar-thin absolute top-34"
      style={{ left: menuPosition.left }}
    >
      {user?.map((item, key) => (
        <div onClick={() => handleAddUser(item)} key={user.id}>
          <User user={item} />
        </div>
      ))}
    </div>
  );
};
export default UsersList;
