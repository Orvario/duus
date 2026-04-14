import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DocumentHead from './components/DocumentHead';
import HomePage from './pages/HomePage';
import FullMenuPage from './pages/FullMenuPage';
import RoomsPage from './pages/RoomsPage';
import RoomDetailPage from './pages/RoomDetailPage';

export default function App() {
  return (
    <BrowserRouter>
      <DocumentHead />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<FullMenuPage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/rooms/:slug" element={<RoomDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
