import { Link, Outlet, useSearchParams } from "react-router-dom";
const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  const handleActiveUsers = () => {
    setSearchParams({ filter: "active" });
  };
  const handleRestFilter = () => {
    setSearchParams({});
  };
  return (
    <div>
      <Link className="link">User1</Link>

      <Link className="link">User2</Link>

      <Link className="link">User3</Link>

      <Outlet />
      <div>
        <button onClick={handleActiveUsers}>Active Users</button>
        <button onClick={handleRestFilter}>Reset Filter</button>
      </div>
      {showActiveUsers ? (
        <h2> Showing Active Users</h2>
      ) : (
        <h2>Showing All Users</h2>
      )}
    </div>
  );
};

export default Users;
