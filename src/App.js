// import './App.css';
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet
} from "react-router-dom";
import Unauthenticated from "./layouts/Unauthenticated";

const App = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Unauthenticated />} />
    </Routes>
  );
};

export default App;
