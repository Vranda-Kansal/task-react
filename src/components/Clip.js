import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Clip = ({ item }) => {
  const { setSelectedUser, selectedUser, setUsers, user, setOpen } =
    useContext(UserContext);
  const RemoveItem = (item) => {
    setUsers([...user, item]);
    setSelectedUser(selectedUser.filter((tmp) => tmp.id !== item.id));
    setOpen(false);
  };
  return (
    <div className="flex items-center w-full cursor-pointer bg-gray-100 rounded-full m-1">
      <div className="flex items-center w-4/5">
        <img className="h-10 p-3" src={item.url} alt="Not found" />
        <span className="font-bold pr-2  text-blue-400 text-[12px]">
          {item.name}
        </span>
      </div>
      <button
        className="p-2 text-red-400 font-bold ml-2"
        onClick={() => RemoveItem(item)}
      >
        X
      </button>
    </div>
  );
};
export default Clip;
