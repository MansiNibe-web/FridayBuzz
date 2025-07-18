import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SubmitIdea from './pages/SubmitIdea';
import UploadMedia from './pages/UploadMedia';
import ViewGallery from './pages/ViewGallery';
// localStorage.clear();
// App.tsx or SubmitIdea.tsx
// localStorage.removeItem("funFridayIdeas");


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SubmitIdea" element={<SubmitIdea />} />
        <Route path='/UploadMedia' element={<UploadMedia/>} />
        <Route path='/ViewGallery' element={<ViewGallery/>} />
      </Routes>
    </>
  );
}

export default App;
