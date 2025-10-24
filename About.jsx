import "./About.css";

const About = () => {
  return (
    <div>
      <header>
        <h1>Plan & Go ✈</h1>
        <nav>
          <ul>
            <li><a href="/project">Home</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/signup">Sign Up</a></li>
          </ul>
        </nav>
      </header>

      <section className="about-section">
        <div className="about-container">
          <h2>About Us</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Welcome to <strong>Plan & Go</strong>! We are dedicated to make travel <strong>simple, smart, and memorable</strong>. 
                Our platform helps you plan your trips with ease, and discover exciting destinations—all in one place.
              </p>
              <p>
                At Plan & Go, we believe every journey should be <strong>stress-free</strong> and full of experiences. 
                That's why we've built a platform that lets you create, organize, and share your travel plans effortlessly.
                Whether you're planning a solo trip, a family vacation, or an adventure with friends, Plan & Go is here to guide you every step of the way.
              </p>
            </div>
            <div className="about-images">
              <img src="/aboutus bg 1.png" alt="Travel Planning" />
              <img src="/about us bg2.png" alt="Destination Discovery" />
            </div>
          </div>
        </div>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img src="/sejal.png" alt="Sejal" />
            <h3>Sejal</h3>
            <p>+1 800-123-4567</p>
          </div>
          <div className="team-member">
            <img src="https://i.pinimg.com/236x/55/c7/cc/55c7cc5d7ae7e121684f1be0a381f965.jpg" alt="Shreya" />
            <h3>Shreya</h3>
            <p>+1 800-111-2222</p>
          </div>
          <div className="team-member">
            <img src="/srishti.png" alt="Srishti" />
            <h3>Srishti</h3>
            <p>+1 800-987-6543</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
