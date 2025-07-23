import DownloadIcon from '@mui/icons-material/Download';
import ShareIcon from '@mui/icons-material/Share';
import { useEffect, useState } from 'react';


type StoredMedia = {
  name: string;
  type: string;
  dataUrl: string;
};

const Gallary = () => {
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
      localStorage.setItem('Gallary', JSON.stringify(updatedMedia));
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



//   return (
//     <div style={{ padding: '2rem 1.5rem', minHeight: '100vh' }}>
//       <h2 style={{ marginTop: '1rem', marginBottom: '1rem' }}>
//         Got a Cool Moment? Drop Your Pics & Clips Here! 🚀
//       </h2>

//       <input
//         type="file"
//         accept="image/*,video/*"
//         multiple
//         onChange={handleFileChange}
//         style={{
//           marginBottom: '2rem',
//           padding: '0.5rem',
//           border: '1px solid #ccc',
//           borderRadius: '5px',
//           cursor: 'pointer'
//         }}
//       />

//       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
//         {mediaFiles.map((media, index) => {
//           const isImage = media.type.startsWith('image/');
//           const isVideo = media.type.startsWith('video/');

//           return (
//             <div
//               key={index}
//               style={{
//                 border: '1px solid #ccc',
//                 borderRadius: '8px',
//                 padding: '0.5rem',
//                 width: 'fit-content'
//               }}
//             >
//               {isImage && (
//                 <img
//                   src={media.dataUrl}
//                   alt={`preview-${index}`}
//                   width="200"
//                   style={{ borderRadius: '8px', marginBottom: '0.5rem' }}
//                 />
//               )}
//               {isVideo && (
//                 <video
//                   width="200"
//                   controls
//                   style={{ borderRadius: '8px', marginBottom: '0.5rem' }}
//                 >
//                   <source src={media.dataUrl} type={media.type} />
//                   Your browser does not support the video tag.
//                 </video>
//               )}
//               <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem' }}>
//                 <button
//                   onClick={() => handleDownload(media)}
//                   style={{
//                     padding: '0.3rem 0.7rem',
//                     backgroundColor: '#007bff',
//                     color: '#fff',
//                     border: 'none',
//                     borderRadius: '4px',
//                     cursor: 'pointer'
//                   }}
//                 >
//                   <DownloadIcon fontSize='small'/>
//                 </button>
//                 <button
//                   onClick={() => handleShare(media)}
//                   style={{
//                     padding: '0.3rem 0.7rem',
//                     backgroundColor: '#28a745',
//                     color: '#fff',
//                     border: 'none',
//                     borderRadius: '4px',
//                     cursor: 'pointer'
//                   }}
//                 >
//                   <ShareIcon fontSize='small'/>
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
const iconButtonStyle = (bgColor: string) => ({
  padding: '0.4rem 0.6rem',
  backgroundColor: bgColor,
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1rem'
});

return (
  <div style={{ padding: '2rem 1.5rem', minHeight: '100vh', backgroundColor: '#f7f7f7' }}>
    <h2 style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
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

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '1.5rem'
      }}
    >
      {mediaFiles.map((media, index) => {
        const isImage = media.type.startsWith('image/');
        const isVideo = media.type.startsWith('video/');

        return (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '0.5rem',
              backgroundColor: '#fff',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '300px'
            }}
          >
            <div style={{ flexGrow: 1, marginBottom: '0.5rem' }}>
              {isImage && (
                <img
                  src={media.dataUrl}
                  alt={`preview-${index}`}
                  style={{
                    height: '180px',
                    width: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
              )}
              {isVideo && (
                <video
                  height="180"
                  width="200"
                  controls
                  style={{ borderRadius: '8px', objectFit: 'cover' }}
                >
                  <source src={media.dataUrl} type={media.type} />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
              <button
                onClick={() => handleDownload(media)}
                style={iconButtonStyle('#007bff')}
                title="Download"
              >
                <DownloadIcon fontSize="small" />
              </button>
              <button
                onClick={() => handleShare(media)}
                style={iconButtonStyle('#28a745')}
                title="Share"
              >
                <ShareIcon fontSize="small" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);
};
export default Gallary;
