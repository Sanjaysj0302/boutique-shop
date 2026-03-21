import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const WHATSAPP_NUMBER = 918870178081

const IMAGES = [
  'https://images.pexels.com/photos/27155550/pexels-photo-27155550.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/7168818/pexels-photo-7168818.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/25184955/pexels-photo-25184955.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/4715311/pexels-photo-4715311.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/20777180/pexels-photo-20777180.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/7364219/pexels-photo-7364219.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/25184992/pexels-photo-25184992.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/7139184/pexels-photo-7139184.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/25185004/pexels-photo-25185004.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/32985958/pexels-photo-32985958.jpeg?auto=compress&cs=tinysrgb&w=1920',
];

const STATS = [
  { value: 500,  suffix: '+', label: 'Happy Customers' },
  { value: 5,    suffix: '+', label: 'Years Experience' },
  { value: 1000, suffix: '+', label: 'Designs Created' },
  { value: 100,  suffix: '%', label: 'Satisfaction Rate' },
];

const OCCASIONS = [
  { label: 'Wedding',  img: 'https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=800', icon: 'fas fa-ring' },
  { label: 'Festival', img: 'https://images.pexels.com/photos/3622622/pexels-photo-3622622.jpeg?auto=compress&cs=tinysrgb&w=800', icon: 'fas fa-star' },
  { label: 'Party',    img: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800', icon: 'fas fa-music' },
  { label: 'Casual',   img: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800', icon: 'fas fa-sun' },
];

const STEPS = [
  { num: '01', icon: 'fas fa-search',         title: 'Browse & Choose',      desc: 'Explore our collections online or visit us in store. Pick your favourite design or bring your own idea.' },
  { num: '02', icon: 'fas fa-ruler-combined', title: 'Share Measurements',   desc: 'Send us your measurements via WhatsApp or come for a fitting session at our boutique.' },
  { num: '03', icon: 'fas fa-cut',            title: 'We Craft It',          desc: 'Our skilled tailors bring your outfit to life using premium fabrics and careful attention to detail.' },
  { num: '04', icon: 'fas fa-gift',           title: 'Pick Up / Delivery',   desc: 'Collect your finished outfit from our store or we arrange a convenient home delivery for you.' },
];

const FEATURED = [
  { id: 1, src: '/images/tops/Media (1).jpeg',         title: 'Stylish Top',     category: 'Tops',   isNew: true },
  { id: 2, src: '/images/blouse/sharedimage (2).jpeg', title: 'Designer Blouse', category: 'Blouse', isNew: true },
  { id: 3, src: '/images/tops/Media (4).jpeg',         title: 'Trendy Top',      category: 'Tops',   featured: true },
  { id: 4, src: '/images/blouse/sharedimage (4).jpeg', title: 'Party Blouse',    category: 'Blouse', featured: true },
  { id: 5, src: '/images/tops/Media (6).jpeg',         title: 'Casual Top',      category: 'Tops' },
  { id: 6, src: '/images/blouse/sharedimage (5).jpeg', title: 'Ethnic Blouse',   category: 'Blouse' },
];

const TESTIMONIALS = [
  { name: 'Sofia N.',    location: 'Chennai', text: 'Absolutely love the quality and designs here! Got my saree blouse stitched perfectly. Highly recommend Nila Instyle!', stars: 5 },
  { name: 'Nithra Aakash.',   location: 'Mohanur',    text: "The custom outfit for my daughter's was stunning. Great craftsmanship.", stars: 5 },
  { name: 'Sanjana P.', location: 'Namakkal',  text: 'Best boutique in Mohanur! The tops and dress materials are so trendy and affordable. Will definitely come back!', stars: 5 },
  { name: 'Malarvizhi P.',  location: 'Namakkal', text: 'Beautiful collection and excellent stitching. The team understood exactly what I wanted. Very satisfied!', stars: 5 },
];

const GALLERY = [
  'https://images.pexels.com/photos/7249953/pexels-photo-7249953.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/7168818/pexels-photo-7168818.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/4715311/pexels-photo-4715311.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/7364219/pexels-photo-7364219.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/25184992/pexels-photo-25184992.jpeg?auto=compress&cs=tinysrgb&w=600',
];

const FAQS = [
  { q: 'How long does custom stitching take?',           a: 'Custom orders typically take 5–10 working days. Rush orders are available — mention it when you place your order.' },
  { q: 'Do you provide home delivery?',                  a: 'Yes! We deliver within Namakkal district. For other areas, we ship via courier. Contact us for delivery charges.' },
  { q: 'Can I bring my own fabric?',                     a: 'Absolutely! You can bring your own fabric and we will stitch it to your measurements and design preferences.' },
  { q: 'How do I share my measurements?',                a: 'You can visit us for a fitting session or send your measurements via WhatsApp. We guide you through the process.' },
  { q: 'What types of outfits do you stitch?',           a: 'We stitch blouses, salwar kameez, tops, churidars, kids wear, and occasion wear for weddings, festivals and parties.' },
  { q: 'Do you offer alterations for existing clothes?', a: 'Yes, we do alterations and repairs. Bring your garment to the store and we will assess and give you a quote.' },
];

function Counter({ target, suffix, started }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 2000 / steps);
    return () => clearInterval(timer);
  }, [started, target]);
  return <>{count}{suffix}</>;
}

function Stars({ count }) {
  return (
    <div className="stars">
      {Array.from({ length: count }).map((_, i) => <i key={i} className="fas fa-star"></i>)}
    </div>
  );
}

function Home() {
  const [currentIndex, setCurrentIndex]           = useState(0);
  const [opacity, setOpacity]                     = useState(1);
  const [testimonialIndex, setTestimonialIndex]   = useState(0);
  const [galleryModal, setGalleryModal]           = useState(null);
  const [statsStarted, setStatsStarted]           = useState(false);
  const [openFaq, setOpenFaq]                     = useState(null);
  const [email, setEmail]                         = useState('');
  const [newsletterDone, setNewsletterDone]       = useState(false);
  const slideRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const preload = (url) => { new Image().src = url; };
    preload(IMAGES[1]);
    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % IMAGES.length);
        setOpacity(1);
        preload(IMAGES[(currentIndex + 2) % IMAGES.length]);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    const t = setInterval(() => setTestimonialIndex(prev => (prev + 1) % TESTIMONIALS.length), 4000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsStarted(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const handleNewsletter = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Hi! I'd like to subscribe to Nila Instyle updates. My email: ${email}`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
    setNewsletterDone(true);
    setEmail('');
  };

  return (
    <>
      {/* Offer Banner */}
      {/* {offerVisible && (
        <div className="offer-banner">
          <i className="fas fa-tag"></i>
          <span><strong>Grand Opening Special!</strong> Get 10% off on all custom orders — Valid till 27th Aug!</span>
          <button className="offer-close" onClick={() => setOfferVisible(false)}>&times;</button>
        </div>
      )} */}

      {/* Hero */}
      <div
        className="hero-section"
        ref={slideRef}
        style={{
          backgroundImage: `url('${IMAGES[currentIndex]}')`,
          opacity,
          transition: 'opacity 0.5s ease-in-out',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-content">
          <p className="hero-sub">Welcome to Nila Instyle</p>
          <h1>Where Style Meets Elegance</h1>
          <p className="hero-desc">Custom stitching · Premium fabrics · Made just for you</p>
          <div className="hero-btns">
            <Link to="/collections" className="btn-primary">Explore Collections</Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi! I want to place a custom order.')}`}
              target="_blank" rel="noreferrer"
              className="btn-secondary"
            >
              <i className="fab fa-whatsapp"></i> Order on WhatsApp
            </a>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>

      {/* Features Strip */}
      <div className="features-strip">
        <div className="feature-item"><i className="fas fa-cut"></i><span>Custom Stitching</span></div>
        <div className="feature-item"><i className="fas fa-star"></i><span>Premium Quality</span></div>
        <div className="feature-item"><i className="fas fa-truck"></i><span>Quick Delivery</span></div>
        <div className="feature-item"><i className="fas fa-heart"></i><span>Made with Love</span></div>
      </div>

      {/* Stats */}
      <div className="stats-section" ref={statsRef}>
        <div className="stats-bg-text">NILA</div>
        {STATS.map((s, i) => (
          <div key={i} className="stat-item">
            <div className="stat-number"><Counter target={s.value} suffix={s.suffix} started={statsStarted} /></div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Occasions */}
      <div className="occasions-section">
        <div className="section-header">
          <h2>Shop by Occasion</h2>
          <p>Find the perfect outfit for every moment</p>
        </div>
        <div className="occasions-grid">
          {OCCASIONS.map((occ, i) => (
            <Link key={i} to="/collections" className="occasion-card">
              <img src={occ.img} alt={occ.label} />
              <div className="occasion-overlay">
                <i className={occ.icon}></i>
                <h3>{occ.label}</h3>
                <span>Explore Now <i className="fas fa-arrow-right"></i></span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* How to Order */}
      <div className="how-to-section">
        <div className="section-header light">
          <h2>How It Works</h2>
          <p>Getting your perfect outfit is easy</p>
        </div>
        <div className="steps-grid">
          {STEPS.map((step, i) => (
            <div key={i} className="step-card">
              <div className="step-num-badge">{step.num}</div>
              <div className="step-icon-wrap"><i className={step.icon}></i></div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="how-to-cta">
          <Link to="/custom-order" className="btn-primary">Start Your Custom Order</Link>
        </div>
      </div>

      {/* Featured Products */}
      <div className="featured-section">
        <div className="section-header">
          <h2>Featured Picks</h2>
          <p>Our most loved designs — handpicked for you</p>
        </div>
        <div className="featured-scroll">
          {FEATURED.map(p => (
            <div key={p.id} className="featured-card">
              {p.isNew    && <span className="fp-badge new">New</span>}
              {p.featured && <span className="fp-badge hot">Featured</span>}
              <div className="featured-img-wrap">
                <img src={p.src} alt={p.title} />
                <div className="featured-hover">
                  <Link to="/collections" className="fp-view-btn">View All</Link>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi! I'm interested in: ${p.title} (${p.category})`)}`}
                    target="_blank" rel="noreferrer"
                    className="fp-wa-btn"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
              <div className="featured-info">
                <span className="fp-category">{p.category}</span>
                <h4>{p.title}</h4>
              </div>
            </div>
          ))}
        </div>
        <div className="featured-footer">
          <Link to="/collections" className="btn-outline">View All Collections <i className="fas fa-arrow-right"></i></Link>
        </div>
      </div>

      {/* WhatsApp CTA */}
      <div className="wa-cta-section">
        <div className="wa-cta-inner">
          <div className="wa-cta-text">
            <h2>Have a Design in Mind?</h2>
            <p>Send us a photo or describe your idea — we'll make it happen.</p>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Nila Instyle! I'd like to discuss a custom outfit idea.")}`}
            target="_blank" rel="noreferrer"
            className="wa-cta-btn"
          >
            <i className="fab fa-whatsapp"></i> Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Gallery */}
      <div className="gallery-section">
        <div className="section-header">
          <h2>Our Styles</h2>
          <p>A glimpse into our beautiful collections</p>
        </div>
        <div className="gallery-grid">
          {GALLERY.map((src, i) => (
            <div key={i} className={`gallery-item${i === 0 ? ' tall' : ''}`} onClick={() => setGalleryModal(src)}>
              <img src={src} alt={`Gallery ${i + 1}`} />
              <div className="gallery-overlay"><i className="fas fa-expand"></i></div>
            </div>
          ))}
        </div>
        <div className="gallery-footer">
          <Link to="/collections" className="btn-outline">View Full Collections <i className="fas fa-arrow-right"></i></Link>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials-section">
        <div className="section-header">
          <h2>What Our Customers Say</h2>
          <p>Real stories from real customers</p>
        </div>
        <div className="testimonials-track">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className={`testimonial-card${i === testimonialIndex ? ' active' : ''}`}>
              <Stars count={t.stars} />
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{t.name[0]}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="testimonial-dots">
          {TESTIMONIALS.map((_, i) => (
            <button key={i} className={`dot${i === testimonialIndex ? ' active' : ''}`} onClick={() => setTestimonialIndex(i)} />
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about Nila Instyle</p>
        </div>
        <div className="faq-list">
          {FAQS.map((faq, i) => (
            <div key={i} className={`faq-item${openFaq === i ? ' open' : ''}`}>
              <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>{faq.q}</span>
                <i className={`fas fa-chevron-${openFaq === i ? 'up' : 'down'}`}></i>
              </button>
              <div className="faq-answer"><p>{faq.a}</p></div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="newsletter-section">
        <div className="newsletter-inner">
          <div className="newsletter-text">
            <h2>Stay in the Loop</h2>
            <p>Get notified about new arrivals, offers and events from Nila Instyle.</p>
          </div>
          {newsletterDone ? (
            <div className="newsletter-done">
              <i className="fas fa-check-circle"></i> Thank you! We'll keep you updated.
            </div>
          ) : (
            <form className="newsletter-form" onSubmit={handleNewsletter}>
              <input type="email" placeholder="Enter your email address" value={email} onChange={e => setEmail(e.target.value)} required />
              <button type="submit">Subscribe <i className="fas fa-paper-plane"></i></button>
            </form>
          )}
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Have a Custom Outfit in Mind?</h2>
        <p>Tell us your vision — we'll bring it to life.</p>
        <Link to="/custom-order" className="btn-primary">Place Custom Order</Link>
      </div>

      {/* Gallery Modal */}
      {galleryModal && (
        <div className="modal" onClick={() => setGalleryModal(null)}>
          <span className="modal-close" onClick={() => setGalleryModal(null)}>&times;</span>
          <img className="modal-img" src={galleryModal} alt="Gallery preview" />
        </div>
      )}
    </>
  );
}

export default Home;
