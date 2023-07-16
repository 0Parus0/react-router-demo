import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p>Home</p>
      <button onClick={() => navigate("order-summary")}>Place order</button>
    </div>
  );
};

export default Home;
