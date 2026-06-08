import './App.css';

function App() {
  return (
    <main className="app">
      <section className="hero">
        <nav className="navbar">
          <div className="logo">GlassCue AI</div>

          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How it works</a>
            <a href="#future">Future</a>
          </div>
        </nav>

        <div className="hero-content">
          <div className="hero-text">
            <p className="badge">AI-powered live response assistant</p>

            <h1>
              Real-time AI support for meetings, presentations, and technical
              discussions.
            </h1>

            <p className="description">
              GlassCue AI helps users upload source materials, start a live
              session, receive one ready-to-say AI response, and review detailed
              feedback after the session.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">Start Building</button>
              <button className="secondary-btn">View Features</button>
            </div>
          </div>

          <div className="glass-card">
            <div className="card-header">
              <span className="live-dot"></span>
              <span>Live Assistant</span>
            </div>

            <div className="question-box">
              <p className="small-title">Detected question</p>
              <p>Why did you choose React for this project?</p>
            </div>

            <div className="answer-box">
              <p className="small-title">Suggested response</p>
              <p>
                I chose React because it allows me to build reusable UI
                components, manage dynamic state clearly, and create an
                interactive user experience. For this project, React is useful
                because the app needs live transcript updates, AI response
                panels, and a responsive dashboard.
              </p>
            </div>

            <div className="card-actions">
              <button>Shorter</button>
              <button>Professional</button>
              <button>Technical</button>
            </div>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <h2>Core Features</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>Source Upload</h3>
            <p>
              Upload PDFs, notes, CVs, meeting documents, or presentation
              materials before starting a session.
            </p>
          </div>

          <div className="feature-card">
            <h3>One Live Answer</h3>
            <p>
              During a live session, the app shows one clean answer instead of
              too many bullet points.
            </p>
          </div>

          <div className="feature-card">
            <h3>Session Review</h3>
            <p>
              After the session, review transcript, key points, mistakes,
              follow-up questions, and speaking feedback.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;