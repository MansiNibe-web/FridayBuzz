// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     return(
//         <nav style={{
//         padding: '1rem',
//         backgroundColor: '#f0f0f0',
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100%',
//         zIndex: 1000,
//         display: 'flex',
//         gap: '1rem',
//         justifyContent: 'center',
//         boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//       }}>
//         <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
//         <Link to="/SubmitIdea" style={{ marginRight: '1rem' }}>Submit Idea</Link>
//         <Link to="/UploadMedia" style={{ marginRight: '1rem' }}>Upload Media</Link>
//         <Link to="/ViewGallery">Gallery</Link>
//     </nav>
//     );
// };
// export default Navbar;

// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav
//       style={{
//         padding: '1rem 2rem',
//         backgroundColor: '#ffffff',
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100%',
//         zIndex: 1000,
//         display: 'flex',
//         gap: '2rem',
//         justifyContent: 'center',
//         alignItems: 'center',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
//         fontFamily: 'Segoe UI, sans-serif',
//         fontWeight: '500',
//       }}
//     >
//       <Link to="/" style={linkStyle}>Home</Link>
//       <Link to="/SubmitIdea" style={linkStyle}>Submit Idea</Link>
//       <Link to="/UploadMedia" style={linkStyle}>Upload Media</Link>
//       <Link to="/ViewGallery" style={linkStyle}>Gallery</Link>
//     </nav>
//   );
// };

// const linkStyle: React.CSSProperties = {
//   textDecoration: 'none',
//   color: '#333',
//   fontSize: '1.05rem',
//   transition: 'all 0.2s ease-in-out',
// };

// export default Navbar;


// import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav
//       style={{
//         padding: '1rem',
//         backgroundColor: '#f0f0f0',
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100%',
//         zIndex: 1000,
//         display: 'flex',
//         gap: '1rem',
//         justifyContent: 'center',
//         boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//       }}
//     >
//       <NavLink
//         to="/"
//         style={({ isActive }) => ({
//           marginRight: '1rem',
//           textDecoration: 'none',
//           fontWeight: isActive ? 'bold' : 'normal',
//           color: isActive ? '#007bff' : '#000',
//           borderBottom: isActive ? '2px solid #007bff' : 'none',
//         })}
//       >
//         Home
//       </NavLink>
//       <NavLink
//         to="/SubmitIdea"
//         style={({ isActive }) => ({
//           marginRight: '1rem',
//           textDecoration: 'none',
//           fontWeight: isActive ? 'bold' : 'normal',
//           color: isActive ? '#007bff' : '#000',
//           borderBottom: isActive ? '2px solid #007bff' : 'none',
//         })}
//       >
//         Submit Idea
//       </NavLink>
//       <NavLink
//         to="/UploadMedia"
//         style={({ isActive }) => ({
//           marginRight: '1rem',
//           textDecoration: 'none',
//           fontWeight: isActive ? 'bold' : 'normal',
//           color: isActive ? '#007bff' : '#000',
//           borderBottom: isActive ? '2px solid #007bff' : 'none',
//         })}
//       >
//         Upload Media
//       </NavLink>
//       <NavLink
//         to="/ViewGallery"
//         style={({ isActive }) => ({
//           textDecoration: 'none',
//           fontWeight: isActive ? 'bold' : 'normal',
//           color: isActive ? '#007bff' : '#000',
//           borderBottom: isActive ? '2px solid #007bff' : 'none',
//         })}
//       >
//         Gallery
//       </NavLink>
//     </nav>
//   );
// };

// export default Navbar;


// src/components/Navbar.tsx
import { NavLink, Outlet } from 'react-router-dom';

const navLinkStyle = ({ isActive }: { isActive: boolean }) => ({
  display: 'block',
  marginBottom: '1rem',
  textDecoration: 'none',
  fontWeight: isActive ? 'bold' : 'normal',
  color: isActive ? '#007bff' : '#000',
//   borderBottom: isActive ? '2px solid #007bff' : 'none',
});

const Navbar = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
      {/* Sidebar */}
      <aside
        style={{
          width: '150px',
        //   backgroundColor: '#f7f7f7',
          padding: '2rem 1rem',
          boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
        }}
      >
        <NavLink to="/" style={navLinkStyle}>Home</NavLink>
        <NavLink to="/SubmitIdea" style={navLinkStyle}>Submit Idea</NavLink>
        <NavLink to="/Gallary" style={navLinkStyle}>Gallery</NavLink>
        <NavLink to="/IdeaSubmited" style={navLinkStyle}>Idea submitted</NavLink>
      </aside>

      {/* Main content for the current route */}
      <main
        style={{
          flex: 1,
          width:'100%',
          padding: '2rem 1.5rem',
          background: 'linear-gradient(to bottom, #f9f9f9, #ffffff)',
        }}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default Navbar;
