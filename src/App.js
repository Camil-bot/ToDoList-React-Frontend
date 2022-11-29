// import './App.css';
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
  Router
} from "react-router-dom";
import Unauthenticated from "./layouts/Unauthenticated";
import Authenticated from "./layouts/Authenticated";

const App = () => {
  return (
    <Routes>
      <Route path="/admin/*" element={<Authenticated />} />
      <Route path="/auth/*" element={<Unauthenticated />} />
      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};

export default App;
