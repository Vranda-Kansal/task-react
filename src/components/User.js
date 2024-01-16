const User = ({ user }) => {
  return (
    <div className="flex items-center w-full mt-1 hover:bg-gray-100 cursor-pointer">
      <div className="flex items-center w-1/2">
        <img className="h-10 p-2" src={user.url} alt="Not found" />
        <span className="font-bold pr-2 text-blue-400">{user.name}</span>
      </div>
      <span className="text-gray-400">{user.email}</span>
    </div>
  );
};
export default User;
