import useStore from "../../store/store";
import { useNavigate } from "react-router-dom";
import { logout } from "../../utils/authServices";

function Dashboard() {
  const navigate = useNavigate();
  const { setIsLoggedIn, setUser } = useStore();

  const handleLogout = async () => {
    try {
      await logout();
      setIsLoggedIn(false);
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="flex items-center justify-center h-screen bg-gray-700 dashboard">
      <h1 className="text-5xl font-bold text-white">Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </main>
  );
}

export default Dashboard;
