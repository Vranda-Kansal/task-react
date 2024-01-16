import { createContext, useState } from "react";
import { users } from "../utils/constant";

export const UserContext = createContext(null);

const UserProvider = (props) => {
  const [user, setUsers] = useState(users);
  const [selectedUser, setSelectedUser] = useState([]);
  const [open, setOpen] = useState(false);

  return (
    <UserContext.Provider
      value={{
        open,
        setOpen,
        user,
        setSelectedUser,
        setUsers,
        selectedUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
