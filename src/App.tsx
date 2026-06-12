import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicPage from "./pages/PublicPage";
import AdminPage from "./pages/AdminPage";
import FinishPage from "./components/Public/FinishPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/finish" element={<FinishPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
