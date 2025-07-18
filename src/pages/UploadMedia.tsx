// // const UploadMedia = () => {
// //     return(
// //         <div style={{ paddingTop: '1rem', paddingLeft: '1.5rem' }}>
// //         <h2 >Got a Cool Moment? Drop Your Pics & Clips Here! 🚀</h2>
// //         </div>
// //     );
// // }
// // export default UploadMedia;


// // const UploadMedia = () => {
// //     return (
// //         <div style={{ padding: '2rem 1.5rem', minHeight: '100vh' }}>
// //             <h2 style={{ marginTop: '1rem' }}>
// //                 Got a Cool Moment? Drop Your Pics & Clips Here! 🚀
// //             </h2>
// //         </div>
// //     );
// // };

// // export default UploadMedia;

// import { useState } from 'react';

// const UploadMedia = () => {
//     const [mediaFiles, setMediaFiles] = useState<File[]>([]);

//     const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const files = e.target.files;
//         if (files) {
//             const fileArray = Array.from(files);
//             setMediaFiles(fileArray);
//         }
//     };

//     return (
//         <div style={{ padding: '2rem 1.5rem', minHeight: '100vh' }}>
//             <h2 style={{ marginTop: '1rem', marginBottom: '1rem' }}>
//                 Got a Cool Moment? Drop Your Pics & Clips Here! 🚀
//             </h2>

//             <input
//                 type="file"
//                 accept="image/*,video/*"
//                 multiple
//                 onChange={handleFileChange}
//                 style={{
//                     marginBottom: '2rem',
//                     padding: '0.5rem',
//                     border: '1px solid #ccc',
//                     borderRadius: '5px',
//                     cursor: 'pointer'
//                 }}
//             />

//             <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
//                 {mediaFiles.map((file, index) => {
//                     const fileURL = URL.createObjectURL(file);
//                     const isImage = file.type.startsWith('image/');
//                     const isVideo = file.type.startsWith('video/');

//                     return (
//                         <div key={index} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '0.5rem' }}>
//                             {isImage && (
//                                 <img
//                                     src={fileURL}
//                                     alt={`preview-${index}`}
//                                     width="200"
//                                     style={{ borderRadius: '8px' }}
//                                 />
//                             )}
//                             {isVideo && (
//                                 <video
//                                     width="200"
//                                     controls
//                                     style={{ borderRadius: '8px' }}
//                                 >
//                                     <source src={fileURL} type={file.type} />
//                                     Your browser does not support the video tag.
//                                 </video>
//                             )}
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };

// export default UploadMedia;
// import { useState } from 'react';

// const UploadMedia = () => {
//     const [mediaFiles, setMediaFiles] = useState<File[]>([]);

//     const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const files = e.target.files;
//         if (files) {
//             const fileArray = Array.from(files);
//             setMediaFiles(fileArray);
//         }
//     };

//     const handleDownload = (file: File) => {
//         const url = URL.createObjectURL(file);
//         const a = document.createElement('a');
//         a.href = url;
//         a.download = file.name;
//         a.click();
//         URL.revokeObjectURL(url);
//     };

//     const handleShare = async (file: File) => {
//         const fileURL = URL.createObjectURL(file);

//         if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
//             try {
//                 await navigator.share({
//                     title: 'Fun Friday Media',
//                     text: 'Check this out!',
//                     files: [file]
//                 });
//             } catch (error) {
//                 console.error('Sharing failed', error);
//             }
//         } else {
//             alert('Sharing not supported on this browser/device.');
//         }

//         URL.revokeObjectURL(fileURL);
//     };

//     return (
//         <div style={{ padding: '2rem 1.5rem', minHeight: '100vh' }}>
//             <h2 style={{ marginTop: '1rem', marginBottom: '1rem' }}>
//                 Got a Cool Moment? Drop Your Pics & Clips Here! 🚀
//             </h2>

//             <input
//                 type="file"
//                 accept="image/*,video/*"
//                 multiple
//                 onChange={handleFileChange}
//                 style={{
//                     marginBottom: '2rem',
//                     padding: '0.5rem',
//                     border: '1px solid #ccc',
//                     borderRadius: '5px',
//                     cursor: 'pointer'
//                 }}
//             />

//             <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
//                 {mediaFiles.map((file, index) => {
//                     const fileURL = URL.createObjectURL(file);
//                     const isImage = file.type.startsWith('image/');
//                     const isVideo = file.type.startsWith('video/');

//                     return (
//                         <div
//                             key={index}
//                             style={{
//                                 border: '1px solid #ccc',
//                                 borderRadius: '8px',
//                                 padding: '0.5rem',
//                                 width: 'fit-content'
//                             }}
//                         >
//                             {isImage && (
//                                 <img
//                                     src={fileURL}
//                                     alt={`preview-${index}`}
//                                     width="200"
//                                     style={{ borderRadius: '8px', marginBottom: '0.5rem' }}
//                                 />
//                             )}
//                             {isVideo && (
//                                 <video
//                                     width="200"
//                                     controls
//                                     style={{ borderRadius: '8px', marginBottom: '0.5rem' }}
//                                 >
//                                     <source src={fileURL} type={file.type} />
//                                     Your browser does not support the video tag.
//                                 </video>
//                             )}
//                             <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem' }}>
//                                 <button
//                                     onClick={() => handleDownload(file)}
//                                     style={{
//                                         padding: '0.3rem 0.7rem',
//                                         backgroundColor: '#007bff',
//                                         color: '#fff',
//                                         border: 'none',
//                                         borderRadius: '4px',
//                                         cursor: 'pointer'
//                                     }}
//                                 >
//                                     Download
//                                 </button>
//                                 <button
//                                     onClick={() => handleShare(file)}
//                                     style={{
//                                         padding: '0.3rem 0.7rem',
//                                         backgroundColor: '#28a745',
//                                         color: '#fff',
//                                         border: 'none',
//                                         borderRadius: '4px',
//                                         cursor: 'pointer'
//                                     }}
//                                 >
//                                     Share
//                                 </button>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };

// export default UploadMedia;

import { useEffect, useState } from 'react';

type StoredMedia = {
  name: string;
  type: string;
  dataUrl: string;
};

const UploadMedia = () => {
  const [mediaFiles, setMediaFiles] = useState<StoredMedia[]>([]);

  // Load from localStorage on component mount
  useEffect(() => {
    const savedMedia = localStorage.getItem('uploadedMedia');
    if (savedMedia) {
      setMediaFiles(JSON.parse(savedMedia));
    }
  }, []);

  // Helper: Convert file to base64 data URL
  const fileToDataUrl = (file: File): Promise<StoredMedia> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve({
          name: file.name,
          type: file.type,
          dataUrl: reader.result as string,
        });
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  // Handle file selection
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      const converted = await Promise.all(fileArray.map(fileToDataUrl));
      const updatedMedia = [...mediaFiles, ...converted];
      setMediaFiles(updatedMedia);
      localStorage.setItem('uploadedMedia', JSON.stringify(updatedMedia));
    }
  };

  const handleDownload = (media: StoredMedia) => {
    const a = document.createElement('a');
    a.href = media.dataUrl;
    a.download = media.name;
    a.click();
  };

  const handleShare = async (media: StoredMedia) => {
    const response = await fetch(media.dataUrl);
    const blob = await response.blob();
    const file = new File([blob], media.name, { type: media.type });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({
          title: 'Fun Friday Media',
          text: 'Check this out!',
          files: [file],
        });
      } catch (error) {
        console.error('Sharing failed', error);
      }
    } else {
      alert('Sharing not supported on this browser/device.');
    }
  };

  return (
    <div style={{ padding: '2rem 1.5rem', minHeight: '100vh' }}>
      <h2 style={{ marginTop: '1rem', marginBottom: '1rem' }}>
        Got a Cool Moment? Drop Your Pics & Clips Here! 🚀
      </h2>

      <input
        type="file"
        accept="image/*,video/*"
        multiple
        onChange={handleFileChange}
        style={{
          marginBottom: '2rem',
          padding: '0.5rem',
          border: '1px solid #ccc',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {mediaFiles.map((media, index) => {
          const isImage = media.type.startsWith('image/');
          const isVideo = media.type.startsWith('video/');

          return (
            <div
              key={index}
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '0.5rem',
                width: 'fit-content'
              }}
            >
              {isImage && (
                <img
                  src={media.dataUrl}
                  alt={`preview-${index}`}
                  width="200"
                  style={{ borderRadius: '8px', marginBottom: '0.5rem' }}
                />
              )}
              {isVideo && (
                <video
                  width="200"
                  controls
                  style={{ borderRadius: '8px', marginBottom: '0.5rem' }}
                >
                  <source src={media.dataUrl} type={media.type} />
                  Your browser does not support the video tag.
                </video>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem' }}>
                <button
                  onClick={() => handleDownload(media)}
                  style={{
                    padding: '0.3rem 0.7rem',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Download
                </button>
                <button
                  onClick={() => handleShare(media)}
                  style={{
                    padding: '0.3rem 0.7rem',
                    backgroundColor: '#28a745',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Share
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UploadMedia;
