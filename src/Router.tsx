import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage, MainPage } from "./pages/index";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
