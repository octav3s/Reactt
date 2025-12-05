import "./App.css";

function App() {

  const personName = "John Doe";
  const description = "An aspiring java fullstack developer in the making.";

  const cardStyle = {
    width: "200px",
    padding: "20px",
    borderRadius: "12px",
    border: "2px solid #ccc",
    backgroundColor: "#f0f8ff",
    textAlign: "center",
  };

  const imgStyle = {
    width: "100%",
    borderRadius: "10px",
    marginBottom: "15px"
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div style={cardStyle}>

        {/* External image */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2SjBvQ7YIoNKkzrVF7vQj110TqkFCLp0q_A&s"
          alt="External"
          style={imgStyle}
        />

        <h2>{personName}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default App;
