import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  LoginPage,
  MainPage,
  SentChangeRequestDetailPage,
  TimetableManagementPage,
  PlanWritingPage,
} from './pages';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route
          path="/timetableManagement"
          element={<TimetableManagementPage />}
        />
        <Route path="" element={<LoginPage />} />
        <Route
          path="/sentChangeRequestDetail"
          element={<SentChangeRequestDetailPage />}
        />
        <Route path="/planWritingPage" element={<PlanWritingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
