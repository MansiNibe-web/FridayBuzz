import axios from 'axios';
import React, { useState } from 'react';

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
//         padding: '1rem',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         minHeight: '100vh',
//     }}>
//       <div style={{
//         width: '100%',
//         maxWidth: '700px',
//         border: '1px solid #ddd',
//         borderRadius: '10px',
//         padding: '2rem',
//         backgroundColor: '#fff',
//         boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
//         alignItems:'center',
//         // marginLeft:'10rem',
//         // marginLeft:'26rem',
//       }}>
//         <h2 style={{
//           textAlign: 'center',
//           marginBottom: '2rem',
//           color: '#222'
//         }}>
//           Share Your Fun Friday Idea 🎯
//         </h2>

//         <form onSubmit={handleSubmit}>
//           <div style={{ marginBottom: '1.5rem' }}>
//             <label style={{ fontWeight: 'bold', marginBottom: '0.5rem', display: 'block' }}>
//               💡 Idea Description
//             </label>
//             <textarea
//               value={ideaText}
//               onChange={(e) => setIdeaText(e.target.value)}
//               rows={5}
//               style={{
//                 width: '100%',
//                 padding: '0.75rem',
//                 borderRadius: '8px',
//                 border: '1px solid #ccc',
//                 fontSize: '1rem',
//                 resize: 'vertical',
//                 boxSizing: 'border-box',
//               }}
//               placeholder="Describe your idea or activity..."
//               required
//             />
//           </div>

//           <div style={{ marginBottom: '1.5rem' }}>
//             <label style={{ fontWeight: 'bold', marginBottom: '0.5rem', display: 'block' }}>
//               📎 Upload Image or Video
//             </label>
//             <input
//               type="file"
//               accept="image/*,video/*"
//               multiple
//               onChange={handleFileChange}
//               ref={fileInputRef}
//             />
//           </div>

//           <button
//             type="submit"
//             style={{
//               backgroundColor: '#1976d2',
//               color: '#fff',
//               padding: '0.9rem',
//               width: '100%',
//               border: 'none',
//               borderRadius: '8px',
//               fontSize: '1.1rem',
//               cursor: 'pointer',
//               fontWeight: 'bold'
//             }}
//           >
//             🚀 Submit Idea
//           </button>
//         </form>

//         {successMessage && (
//           <div style={{
//             marginTop: '1.5rem',
//             backgroundColor: '#e6f9ec',
//             color: '#2e7d32',
//             padding: '1rem',
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


const SubmitIdea: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [submittedBy, setSubmittedBy] = useState('');
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('submitted_by', submittedBy);

    selectedFiles.forEach((file) => {
      formData.append('files', file); // important: use "files" not "files[]"
    });

    try {
      await axios.post('http://localhost:8000/idea', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setSuccessMessage('🎉 Idea submitted successfully!');
      setErrorMessage('');
      setTitle('');
      setDescription('');
      setSubmittedBy('');
      setSelectedFiles([]);
    } catch (error: any) {
      console.error('Error submitting idea:', error.response?.data || error);
      setErrorMessage('❌ Something went wrong. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2>Submit Your Idea</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label><br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Description:</label><br />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Submitted By:</label><br />
          <input
            type="text"
            value={submittedBy}
            onChange={(e) => setSubmittedBy(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Upload Files:</label><br />
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            accept="image/*,application/pdf"
          />
        </div>

        <button type="submit" style={{ marginTop: '12px' }}>Submit</button>
      </form>

      {successMessage && (
        <div style={{ color: 'green', marginTop: '10px' }}>{successMessage}</div>
      )}
      {errorMessage && (
        <div style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</div>
      )}
    </div>
  );
};

export default SubmitIdea;
