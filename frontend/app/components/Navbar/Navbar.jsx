export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="logo">Urgency Classifier</a>
      <div className="links">
        <a href="/">Home</a>
        <a href="/predict">Predict</a>
      </div>
    </nav>
  );
}
