// import React, { useState } from "react";

// const VideoUploader: React.FC = () => {
//   const [videos, setVideos] = useState<File[]>([]);

//   const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       const fileArray = Array.from(e.target.files);
//       setVideos((prev) => [...prev, ...fileArray]);
//     }
//   };

//   return (
//     <div style={{ marginTop: "2rem" }}>
//       <h3>Upload Indoor Game Videos</h3>
//       <input
//         type="file"
//         accept="video/mp4,video/x-m4v,video/*"
//         multiple
//         onChange={handleVideoUpload}
//         style={{ marginBottom: "1rem" }}
//       />
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
//         {videos.map((video, index) => (
//           <video
//             key={index}
//             width="300"
//             controls
//             style={{ borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
//           >
//             <source src={URL.createObjectURL(video)} type={video.type} />
//             Your browser does not support the video tag.
//           </video>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VideoUploader;

import React, { useEffect, useState } from "react";
import { get, set } from "idb-keyval";

const VideoUploader: React.FC = () => {
  const [videos, setVideosState] = useState<File[]>([]);

  // Load videos from IndexedDB on mount
  useEffect(() => {
    const loadVideos = async () => {
      const saved = await get<File[]>("funFridayVideos");
      if (saved) {
        setVideosState(saved);
      }
    };
    loadVideos();
  }, []);

  // Save videos to IndexedDB
  const saveToIndexedDB = async (newVideos: File[]) => {
    try {
      await set("funFridayVideos", newVideos);
    } catch (err) {
      console.error("Error saving videos to IndexedDB:", err);
    }
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files);
      const newVideos = [...videos, ...fileArray];
      setVideosState(newVideos);
      saveToIndexedDB(newVideos);
    }
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <h3>Upload Indoor Game Videos</h3>
      <input
        type="file"
        accept="video/mp4,video/x-m4v,video/*"
        multiple
        onChange={handleVideoUpload}
        style={{ marginBottom: "1rem" }}
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {videos.map((video, index) => (
          <video
            key={index}
            width="300"
            controls
            style={{ borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
          >
            <source src={URL.createObjectURL(video)} type={video.type} />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>
    </div>
  );
};

export default VideoUploader;
