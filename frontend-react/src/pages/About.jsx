import './About.css';

const VALUES = [
  { icon: 'fas fa-star', title: 'Quality', desc: 'We carefully select each piece, ensuring the highest quality in materials and craftsmanship.' },
  { icon: 'fas fa-heart', title: 'Style', desc: 'We stay ahead of fashion trends while maintaining timeless elegance in our collections.' },
  { icon: 'fas fa-leaf', title: 'Sustainability', desc: 'We are committed to ethical and sustainable fashion practices.' },
  { icon: 'fas fa-user-friends', title: 'Customer Service', desc: 'We provide personalized attention to help you find your perfect style.' },
];

function About() {
  return (
    <>
      <div
        className="page-title"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
      >
        <h1>Our Story</h1>
        <p>Discover the passion behind our boutique</p>
      </div>

      <div className="about-content">
        <div className="story-section">
          <img src="https://images.pexels.com/photos/4492076/pexels-photo-4492076.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Who We Are" />
          <div className="story-text">
            <h2>Who We Are</h2>
            <p>Welcome to our fashion sanctuary, where style meets sophistication. We began our journey with a simple yet powerful vision: to create a boutique that celebrates individuality and empowers through fashion.</p>
            <p>Our carefully curated collections feature pieces that combine contemporary trends with timeless elegance, ensuring that every item you find here is both fashionable and enduring.</p>
          </div>
        </div>

        <div className="story-section">
          <div className="story-text">
            <h2>Our Mission</h2>
            <p>We believe that fashion is more than just clothing — it's a form of self-expression and confidence. Our mission is to make every customer feel beautiful and empowered through our carefully curated selection.</p>
            <p>We are committed to offering not just products, but a complete fashion experience that inspires and delights.</p>
          </div>
          <img src="https://images.pexels.com/photos/6634451/pexels-photo-6634451.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Our Mission" />
        </div>
      </div>

      <div className="values-section">
        <h2>Our Values</h2>
        <div className="values-grid">
          {VALUES.map((v, i) => (
            <div key={i} className="value-card">
              <i className={v.icon}></i>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
