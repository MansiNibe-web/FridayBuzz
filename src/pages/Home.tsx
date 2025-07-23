// import SearchBar from "../components/SearchBar";
import VideoUploader from "../components/VideoUploader";
const Home = () => {
  return (
    <>
      <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem', color: '#444', marginLeft:'10rem' }}>
        Welcome to <span style={{ color: '#FF6B6B' }}>FridayBuzz 🎉</span>
      </h2>

      {/* Search Component */}
      {/* <div style={{ marginBottom: '2rem' }}>
        <SearchBar />
      </div> */}

      {/* Logo or Banner */}
      <img
        src="/cat.jpg"
        alt="Friday Buzz"
        style={{
          width: '90%',
          maxWidth: '1000px',
          borderRadius: '12px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
        }}
      />
      {/* <div
        style={{
          width: '90%',
          maxWidth: '1000px',
          height: '300px',
          backgroundImage: 'url("/logop99soft.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '12px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
          margin: '0 auto',
        }}
      /> */}

      {/* Video Uploader */}
      <VideoUploader />
    </>
  );
};

export default Home;
