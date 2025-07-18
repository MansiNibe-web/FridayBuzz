// import React, { useState, useRef } from 'react';

// const SubmitIdea = () => {
//   const [ideaText, setIdeaText] = useState('');
//   const [mediaFiles, setMediaFiles] = useState<File[]>([]);
//   const [successMessage, setSuccessMessage] = useState('');
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       setMediaFiles(Array.from(e.target.files));
//     }
//   };

//   const convertFileToDataUrl = (file: File): Promise<{ url: string; type: string }> => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onload = () =>
//         resolve({
//           url: reader.result as string,
//           type: file.type,
//         });
//       reader.onerror = reject;
//       reader.readAsDataURL(file);
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const media = await Promise.all(mediaFiles.map(convertFileToDataUrl));

//     const newIdea = {
//       id: Date.now(),
//       text: ideaText,
//       media,
//     };

//     const existingIdeas = JSON.parse(localStorage.getItem('funFridayIdeas') || '[]');
//     const updatedIdeas = [...existingIdeas, newIdea];
//     localStorage.setItem('funFridayIdeas', JSON.stringify(updatedIdeas));

//     setSuccessMessage('🎉 Idea submitted successfully!');
//     setIdeaText('');
//     setMediaFiles([]);
//     if (fileInputRef.current) {
//       fileInputRef.current.value = '';
//     }

//     setTimeout(() => setSuccessMessage(''), 3000);
//   };

//   return (
//     <div style={{ marginTop: '5rem', padding: '1rem' }}>
//       <h2>Share Your Fun Friday Idea 🎯</h2>
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: '1rem' }}>
//           <label>💡 Idea Description:</label><br />
//           <textarea
//             value={ideaText}
//             onChange={(e) => setIdeaText(e.target.value)}
//             rows={4}
//             style={{ width: '100%' }}
//             placeholder="Describe your idea or activity..."
//             required
//           />
//         </div>

//         <div style={{ marginBottom: '1rem' }}>
//           <label>📎 Upload Image or Video:</label><br />
//           <input
//             type="file"
//             accept="image/*,video/*"
//             multiple
//             onChange={handleFileChange}
//             ref={fileInputRef}
//           />
//         </div>

//         <button type="submit">🚀 Submit Idea</button>
//       </form>

//       {successMessage && (
//         <div style={{ marginTop: '1rem', color: 'green', fontWeight: 'bold' }}>
//           {successMessage}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SubmitIdea;


// import React, { useState, useRef } from 'react';

// const SubmitIdea = () => {
//   const [ideaText, setIdeaText] = useState('');
//   const [mediaFiles, setMediaFiles] = useState<File[]>([]);
//   const [successMessage, setSuccessMessage] = useState('');
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       setMediaFiles(Array.from(e.target.files));
//     }
//   };

//   const convertFileToDataUrl = (file: File): Promise<{ url: string; type: string }> => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onload = () =>
//         resolve({
//           url: reader.result as string,
//           type: file.type,
//         });
//       reader.onerror = reject;
//       reader.readAsDataURL(file);
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const media = await Promise.all(mediaFiles.map(convertFileToDataUrl));

//     const newIdea = {
//       id: Date.now(),
//       text: ideaText,
//       media,
//     };

//     const existingIdeas = JSON.parse(localStorage.getItem('funFridayIdeas') || '[]');
//     const updatedIdeas = [...existingIdeas, newIdea];
//     localStorage.setItem('funFridayIdeas', JSON.stringify(updatedIdeas));

//     setSuccessMessage('🎉 Idea submitted successfully!');
//     setIdeaText('');
//     setMediaFiles([]);
//     if (fileInputRef.current) {
//       fileInputRef.current.value = '';
//     }

//     setTimeout(() => setSuccessMessage(''), 3000);
//   };

//   return (
//     <div style={{
//       marginTop: '5rem',
//       display: 'flex',
//       justifyContent: 'center',
//       padding: '1rem'
//     }}>
//       <div style={{
//         maxWidth: '600px',
//         width: '100%',
//         border: '1px solid #ddd',
//         borderRadius: '10px',
//         padding: '2rem',
//         boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//         backgroundColor: '#fff'
//       }}>
//         <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#333' }}>
//           Share Your Fun Friday Idea 🎯
//         </h2>

//         <form onSubmit={handleSubmit}>
//           <div style={{ marginBottom: '1.2rem' }}>
//             <label style={{ fontWeight: 'bold' }}>💡 Idea Description</label><br />
//             <textarea
//               value={ideaText}
//               onChange={(e) => setIdeaText(e.target.value)}
//               rows={5}
//               style={{
//                 width: '100%',
//                 padding: '0.75rem',
//                 borderRadius: '6px',
//                 border: '1px solid #ccc',
//                 resize: 'vertical',
//                 fontSize: '1rem',
//                 maxWidth:'100%',
//                 minWidth:'100%',
//               }}
//               placeholder="Describe your idea or activity..."
//               required
//             />
//           </div>

//           <div style={{ marginBottom: '1.2rem' }}>
//             <label style={{ fontWeight: 'bold' }}>📎 Upload Image or Video</label><br />
//             <input
//               type="file"
//               accept="image/*,video/*"
//               multiple
//               onChange={handleFileChange}
//               ref={fileInputRef}
//               style={{ marginTop: '0.5rem' }}
//             />
//           </div>

//           <button type="submit" style={{
//             backgroundColor: '#1976d2',
//             color: '#fff',
//             padding: '0.75rem 1.5rem',
//             fontSize: '1rem',
//             borderRadius: '6px',
//             border: 'none',
//             cursor: 'pointer',
//             width: '100%'
//           }}>
//             🚀 Submit Idea
//           </button>
//         </form>

//         {successMessage && (
//           <div style={{
//             marginTop: '1.5rem',
//             backgroundColor: '#e6f9ec',
//             color: '#2e7d32',
//             padding: '0.75rem',
//             borderRadius: '6px',
//             textAlign: 'center',
//             fontWeight: 'bold'
//           }}>
//             {successMessage}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SubmitIdea;
import React, { useState, useRef } from 'react';

const SubmitIdea = () => {
  const [ideaText, setIdeaText] = useState('');
  const [mediaFiles, setMediaFiles] = useState<File[]>([]);
  const [successMessage, setSuccessMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setMediaFiles(Array.from(e.target.files));
    }
  };

  const convertFileToDataUrl = (file: File): Promise<{ url: string; type: string }> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () =>
        resolve({
          url: reader.result as string,
          type: file.type,
        });
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const media = await Promise.all(mediaFiles.map(convertFileToDataUrl));

    const newIdea = {
      id: Date.now(),
      text: ideaText,
      media,
    };

    const existingIdeas = JSON.parse(localStorage.getItem('funFridayIdeas') || '[]');
    const updatedIdeas = [...existingIdeas, newIdea];
    localStorage.setItem('funFridayIdeas', JSON.stringify(updatedIdeas));

    setSuccessMessage('🎉 Idea submitted successfully!');
    setIdeaText('');
    setMediaFiles([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }

    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div style={{
      marginTop: '5rem',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '700px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '2rem',
        backgroundColor: '#fff',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
        marginLeft:'26rem',
      }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '2rem',
          color: '#222'
        }}>
          Share Your Fun Friday Idea 🎯
        </h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ fontWeight: 'bold', marginBottom: '0.5rem', display: 'block' }}>
              💡 Idea Description
            </label>
            <textarea
              value={ideaText}
              onChange={(e) => setIdeaText(e.target.value)}
              rows={5}
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '8px',
                border: '1px solid #ccc',
                fontSize: '1rem',
                resize: 'vertical',
                boxSizing: 'border-box',
              }}
              placeholder="Describe your idea or activity..."
              required
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ fontWeight: 'bold', marginBottom: '0.5rem', display: 'block' }}>
              📎 Upload Image or Video
            </label>
            <input
              type="file"
              accept="image/*,video/*"
              multiple
              onChange={handleFileChange}
              ref={fileInputRef}
            />
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: '#1976d2',
              color: '#fff',
              padding: '0.9rem',
              width: '100%',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1.1rem',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            🚀 Submit Idea
          </button>
        </form>

        {successMessage && (
          <div style={{
            marginTop: '1.5rem',
            backgroundColor: '#e6f9ec',
            color: '#2e7d32',
            padding: '1rem',
            borderRadius: '6px',
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
            {successMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default SubmitIdea;
