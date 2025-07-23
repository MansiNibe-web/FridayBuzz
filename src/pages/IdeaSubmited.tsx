// import { useEffect, useState } from 'react';

// interface Idea {
//   id: number;
//   text: string;
//   media: {
//     url: string;
//     type: string;
//   }[];
// }

// const IdeaSubmited = () => {
//   const [ideas, setIdeas] = useState<Idea[]>([]);

//   useEffect(() => {
//     const storedIdeas = JSON.parse(localStorage.getItem('funFridayIdeas') || '[]');
//     setIdeas(storedIdeas);
//   }, []);

//   return (
//     <div style={{ marginTop: '5rem', padding: '1rem' }}>
//       <h2>🎉 Shared Fun Friday Ideas</h2>

//       {ideas.length === 0 ? (
//         <p>No ideas submitted yet.</p>
//       ) : (
//         ideas.map((idea) => (
//           <div
//             key={idea.id}
//             style={{
//               border: '1px solid #ccc',
//               margin: '1rem 0',
//               padding: '1rem',
//               borderRadius: '8px'
//             }}
//           >
//             <p style={{ fontWeight: 'bold' }}>{idea.text}</p>

//             <div
//              style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(4, 1fr)',
//                 gap: '1rem',
//                 marginTop: '1rem'
//             }}
//             >
//               {idea.media.map((media, index) => (
//                 <div key={index} style={{ borderRadius: '4px', overflow: 'hidden' }}>
//                   {media?.type?.startsWith('image/') ? (
//                     <img
//                       src={media.url}
//                       alt="Uploaded"
//                       style={{
//                         width: '100%',
//                         height: 'auto',
//                         borderRadius: '4px'
//                       }}
//                     />
//                   ) : media?.type?.startsWith('video/') ? (
//                     <video
//                       src={media.url}
//                       controls
//                       style={{
//                         width: '100%',
//                         borderRadius: '4px'
//                       }}
//                     />
//                   ) : (
//                     <span>Unsupported media</span>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default IdeaSubmited;
import DeleteIcon from '@mui/icons-material/Delete'
import { useEffect, useState } from 'react';

interface Idea {
  id: number;
  text: string;
  media: {
    url: string;
    type: string;
  }[];
}

const IdeaSubmited = () => {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [expandedIdeaIds, setExpandedIdeaIds] = useState<number[]>([]);

  useEffect(() => {
    const storedIdeas = JSON.parse(localStorage.getItem('funFridayIdeas') || '[]');
    setIdeas(storedIdeas);
  }, []);

  const toggleExpand = (id: number) => {
    setExpandedIdeaIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleDelete = (id: number) => {
    const updatedIdeas = ideas.filter((idea) => idea.id !==id);
    setIdeas(updatedIdeas);
    localStorage.setItem('funFridayIdeas', JSON.stringify(updatedIdeas));
  }

  return (
    <div style={{ marginTop: '5rem', padding: '1rem' }}>
      <h2>🎉 Shared Fun Friday Ideas</h2>

      {ideas.length === 0 ? (
        <p>No ideas submitted yet.</p>
      ) : (
        ideas.map((idea) => {
          const isExpanded = expandedIdeaIds.includes(idea.id);
          const mediaToShow = isExpanded ? idea.media : idea.media.slice(0, 1);

          return (
            <div
              key={idea.id}
              style={{
                border: '1px solid #ccc',
                margin: '1rem 0',
                padding: '1rem',
                borderRadius: '8px'
              }}
            >

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p style={{ fontWeight: 'bold', margin: 0 }}>{idea.text}</p>
                <button
                    onClick={() => handleDelete(idea.id)}
                    style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#ff4d4d'
                    }}
                    aria-label="Delete Idea"
                >
                    <DeleteIcon />
                </button>
                </div>

              <p style={{ fontWeight: 'bold' }}>{idea.text}</p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '1rem',
                  marginTop: '1rem'
                }}
              >
                {mediaToShow.map((media, index) => (
                  <div key={index} style={{ borderRadius: '4px', overflow: 'hidden' }}>
                    {media.type.startsWith('image/') ? (
                      <img
                        src={media.url}
                        alt="Uploaded"
                        style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
                      />
                    ) : media.type.startsWith('video/') ? (
                      <video
                        src={media.url}
                        controls
                        style={{ width: '100%', borderRadius: '4px' }}
                      />
                    ) : (
                      <span>Unsupported media</span>
                    )}
                  </div>
                ))}
              </div>

              {idea.media.length > 1 && (
                <button
                  onClick={() => toggleExpand(idea.id)}
                  style={{
                    marginTop: '0.5rem',
                    background: 'none',
                    color: '#007bff',
                    border: 'none',
                    textDecoration: 'underline',
                    cursor: 'pointer'
                  }}
                >
                  {isExpanded
                    ? 'Hide Media'
                    : `View All Media (${idea.media.length})`}
                </button>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default IdeaSubmited;
