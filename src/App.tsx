import { Route, Routes, useLocation } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import MenuPage from "./pages/MenuPage";
import { useSelector } from "react-redux";

function App() {
  const routes = useSelector((state: any) => state.routes.routes)
  const location = useLocation();

  return (
    <div >
      <Routes>
        {
          routes.map((route: any) => (
            <Route key={route.id} path={route.path} element={route.element} />

          ))
        }
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
      <CustomCursor key={location.pathname} />

    </div>
  );
}

export default App;
