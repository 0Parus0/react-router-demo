import { useNavigate } from "react-router-dom";
const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>Your order has been placed successfully.</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default OrderSummary;
