import { Link } from 'react-router-dom';
import './About.css';

const VALUES = [
  { icon: 'fas fa-star',         title: 'Quality',          desc: 'We carefully select each piece, ensuring the highest quality in materials and craftsmanship.' },
  { icon: 'fas fa-heart',        title: 'Style',             desc: 'We stay ahead of fashion trends while maintaining timeless elegance in our collections.' },
  { icon: 'fas fa-leaf',         title: 'Sustainability',    desc: 'We are committed to ethical and sustainable fashion practices.' },
  { icon: 'fas fa-user-friends', title: 'Customer Service',  desc: 'We provide personalized attention to help you find your perfect style.' },
];

const MILESTONES = [
  { value: '2025', label: 'Founded' },
  { value: '500+', label: 'Happy Customers' },
  { value: '1000+', label: 'Outfits Crafted' },
  { value: '100%', label: 'Handmade' },
];

const WHY_US = [
  { icon: 'fas fa-cut',            title: 'Expert Tailoring',     desc: 'Every stitch is done by skilled hands with years of experience in fashion craftsmanship.' },
  { icon: 'fas fa-palette',        title: 'Unique Designs',       desc: 'We blend tradition with modernity to create designs you won\'t find anywhere else.' },
  { icon: 'fas fa-clock',          title: 'On-Time Delivery',     desc: 'We respect your time. Orders are completed and delivered within the promised timeline.' },
  { icon: 'fas fa-thumbs-up',      title: 'Trusted by Many',      desc: 'Over 500 satisfied customers trust us for their special occasions and everyday wear.' },
  { icon: 'fas fa-rupee-sign',     title: 'Affordable Pricing',   desc: 'Premium quality doesn\'t have to be expensive. We offer competitive prices for all budgets.' },
  { icon: 'fas fa-sync-alt',       title: 'Free Alterations',     desc: 'Not satisfied with the fit? We offer free alterations to ensure the perfect fit every time.' },
];

function About() {
  return (
    <>
      {/* Hero */}
      <div
        className="page-title"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
      >
        <h1>Our Story</h1>
        <p>Discover the passion behind our boutique</p>
      </div>

      {/* Intro strip */}
      <div className="about-intro-strip">
        <p>"Fashion is not just clothing — it's how you tell the world who you are."</p>
      </div>

      {/* Who We Are */}
      <div className="about-split-section">
        <div className="about-split-img">
          <img src="https://images.pexels.com/photos/4492076/pexels-photo-4492076.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Who We Are" />
          <div className="about-img-badge"><i className="fas fa-award"></i> Est. 2021</div>
        </div>
        <div className="about-split-text">
          <span className="about-section-tag">Our Beginning</span>
          <h2>Who We Are</h2>
          <div className="about-divider"></div>
          <p>Welcome to <strong>Nila Instyle</strong> — your fashion sanctuary in Mohanur, Namakkal. We began our journey with a simple yet powerful vision: to create a boutique that celebrates individuality and empowers through fashion.</p>
          <p>Our carefully curated collections feature pieces that combine contemporary trends with timeless elegance, ensuring that every item you find here is both fashionable and enduring.</p>
          <div className="about-highlights">
            <div className="about-highlight"><i className="fas fa-check-circle"></i> Premium Fabrics</div>
            <div className="about-highlight"><i className="fas fa-check-circle"></i> Expert Tailors</div>
            <div className="about-highlight"><i className="fas fa-check-circle"></i> Custom Designs</div>
            <div className="about-highlight"><i className="fas fa-check-circle"></i> Personal Attention</div>
          </div>
        </div>
      </div>

      {/* Milestones */}
      <div className="milestones-section">
        <div className="milestones-bg-text">NILA</div>
        {MILESTONES.map((m, i) => (
          <div key={i} className="milestone-item">
            <div className="milestone-value">{m.value}</div>
            <div className="milestone-label">{m.label}</div>
          </div>
        ))}
      </div>

      {/* Our Mission */}
      <div className="about-split-section reverse">
        <div className="about-split-text">
          <span className="about-section-tag">What Drives Us</span>
          <h2>Our Mission</h2>
          <div className="about-divider"></div>
          <p>We believe that fashion is more than just clothing — it's a form of self-expression and confidence. Our mission is to make every customer feel beautiful and empowered through our carefully curated selection.</p>
          <p>We are committed to offering not just products, but a complete fashion experience that inspires and delights. From the first stitch to the final fitting, every detail matters to us.</p>
          <Link to="/custom-order" className="about-cta-btn">
            <i className="fas fa-cut"></i> Start Your Custom Order
          </Link>
        </div>
        <div className="about-split-img">
          <img src="https://images.pexels.com/photos/6634451/pexels-photo-6634451.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Our Mission" />
          <div className="about-img-badge right"><i className="fas fa-heart"></i> Made with Love</div>
        </div>
      </div>

      {/* Values */}
      <div className="values-section">
        <div className="values-header">
          <span className="about-section-tag centered">Our Core</span>
          <h2>Our Values</h2>
          <p>The principles that guide everything we do</p>
        </div>
        <div className="values-grid">
          {VALUES.map((v, i) => (
            <div key={i} className="value-card">
              <div className="value-icon-wrap"><i className={v.icon}></i></div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="why-us-section">
        <div className="why-us-header">
          <span className="about-section-tag centered light">Our Advantage</span>
          <h2>Why Choose Nila Instyle?</h2>
          <p>Six reasons our customers keep coming back</p>
        </div>
        <div className="why-us-grid">
          {WHY_US.map((item, i) => (
            <div key={i} className="why-card">
              <div className="why-icon"><i className={item.icon}></i></div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="about-final-cta">
        <div className="about-final-cta-inner">
          <h2>Ready to Find Your Perfect Style?</h2>
          <p>Visit us in Mohanur or reach out on WhatsApp — we'd love to help you.</p>
          <div className="about-final-btns">
            <Link to="/collections" className="btn-gold">Browse Collections</Link>
            <a
              href="https://wa.me/918870178081?text=Hi%20Nila%20Instyle!%20I%20want%20to%20know%20more."
              target="_blank" rel="noreferrer"
              className="btn-whatsapp"
            >
              <i className="fab fa-whatsapp"></i> Chat with Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
