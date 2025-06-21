export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to the Urgency Classifier 🚨</h1>
        <p>Classify your messages as urgent or not using AI.</p>
        <a href="/predict" className="btn">Try It Now</a>
      </div>
    </section>
  );
}
