// import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import SubmitIdea from './pages/SubmitIdea';
// import UploadMedia from './pages/UploadMedia';
// import ViewGallery from './pages/ViewGallery';
// import VideoUploader from './components/VideoUploader';
// // localStorage.clear();
// // App.tsx or SubmitIdea.tsx
// // localStorage.removeItem("funFridayIdeas");


// function App() {
//   return (
//     <>
//       {/* <Navbar /> */}
//       <div style={{ backgroundColor: '#f7f7f7', minHeight: '100vh' }}>
//         <Routes>
//           <Route path="/" element={<Navbar/>}>
//             <Route path="/" element={<Home />} />
//             <Route path='/VideoUploader'  element={<VideoUploader/>}/>
//             <Route path="/SubmitIdea" element={<SubmitIdea />} />
//             <Route path='/UploadMedia' element={<UploadMedia/>} />
//             <Route path='/ViewGallery' element={<ViewGallery/>} />
//           </Route>
//         </Routes>
//       </div>
//     </>
//   );
// }

// export default App;

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SubmitIdea from './pages/SubmitIdea';
import Gallary from './pages/Gallary';
import IdeaSubmited from './pages/IdeaSubmited';
import VideoUploader from './components/VideoUploader';

function App() {
  return (
    <div style={{ backgroundColor: '#f7f7f7', minHeight: '100dvh', border: ' 1px solid red', width:'100dvw' }}>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />  {/* This means "/" */}
          <Route path="SubmitIdea" element={<SubmitIdea />} />
          <Route path="Gallary" element={<Gallary />} />
          <Route path="IdeaSubmited" element={<IdeaSubmited />} />
          <Route path="VideoUploader" element={<VideoUploader />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
