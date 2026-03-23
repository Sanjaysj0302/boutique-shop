import { useState } from 'react';
import './Contact.css';

const WHATSAPP_NUMBER = 918870178081
const WHATSAPP_MSG = encodeURIComponent("Hi Nila Instyle! I'm interested in your collections.");

const HOURS = [
  { day: 'Monday – Friday', time: '10:00 AM – 8:00 PM' },
  { day: 'Saturday',        time: '10:00 AM – 6:00 PM' },
  { day: 'Sunday',          time: 'Closed' },
];

function Contact() {
  const [formData, setFormData] = useState({ name: '', mobile: '', Collections: '', message: '' });
  const [status, setStatus]     = useState('idle');

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    const apiUrl = `${window.location.protocol}//${window.location.host}/send-message`;
    try {
      const res    = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      const result = await res.json();
      if (result.success) { setStatus('success'); setFormData({ name: '', mobile: '', Collections: '', message: '' }); }
      else setStatus('error');
    } catch { setStatus('error'); }
  };

  return (
    <>
      <div
        className="page-title"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
      >
        <h1>Contact Us</h1>
        <p>We'd love to hear from you</p>
      </div>

      {/* Quick contact cards */}
      {/* <div className="quick-contact-strip">
        {CONTACT_ITEMS.map((item, i) => (
          <div key={i} className={`quick-card${item.isWa ? ' wa' : ''}`}>
            <div className="quick-card-icon"><i className={item.icon}></i></div>
            <div>
              <h4>{item.title}</h4>
              {item.lines.map((l, j) => <p key={j}>{l}</p>)}
            </div>
          </div>
        ))}
      </div> */}

      {/* Main section */}
      <div className="contact-main">

        {/* Left — info + hours */}
        <div className="contact-left">
          <div className="contact-info-card">
            <h3><i className="fas fa-store"></i> Nila Instyle</h3>
            <p className="contact-tagline">Your fashion destination in Mohanur, Namakkal. We're here to help you look and feel your best.</p>

            <div className="contact-detail-list">
              <div className="contact-detail">
                <i className="fas fa-map-marker-alt"></i>
                <div><strong>Address</strong><span>Mohanur, Namakkal, Tamil Nadu</span></div>
              </div>
              <div className="contact-detail">
                <i className="fas fa-phone-alt"></i>
                <div><strong>Phone</strong><span>+91 994-436-3616</span><span>+91 979-157-9129</span></div>
              </div>
              <div className="contact-detail">
                <i className="fas fa-envelope"></i>
                <div><strong>Email</strong><span>nila-instyle@gmail.com</span></div>
              </div>
            </div>

            <div className="contact-hours">
              <h4><i className="fas fa-clock"></i> Business Hours</h4>
              <ul>
                {HOURS.map((h, i) => (
                  <li key={i} className={h.time === 'Closed' ? 'closed' : ''}>
                    <span>{h.day}</span><span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank" rel="noreferrer"
              className="wa-quick-btn"
            >
              <i className="fab fa-whatsapp"></i> Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Right — form */}
        <div className="contact-right">
          <div className="contact-form-card">
            <div className="form-card-header">
              <h3>Send Us a Message</h3>
              <p>Fill in the form and we'll get back to you as soon as possible.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="cf-row">
                <div className="cf-group">
                  <label htmlFor="name"><i className="fas fa-user"></i> Your Name</label>
                  <input type="text" id="name" name="name" placeholder="Full name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="cf-group">
                  <label htmlFor="mobile"><i className="fas fa-phone"></i> Mobile No</label>
                  <input type="tel" id="mobile" name="mobile" placeholder="+91 XXXXX XXXXX" value={formData.mobile} onChange={handleChange} required />
                </div>
              </div>

              <div className="cf-group">
                <label htmlFor="Collections"><i className="fas fa-tshirt"></i> Collections / Interest</label>
                <input type="text" id="Collections" name="Collections" placeholder="e.g. Blouse, Tops, Custom Design..." value={formData.Collections} onChange={handleChange} required />
              </div>

              <div className="cf-group">
                <label htmlFor="message"><i className="fas fa-comment-alt"></i> Your Message</label>
                <textarea id="message" name="message" placeholder="Tell us about your needs in detail..." rows="5" value={formData.message} onChange={handleChange} required></textarea>
              </div>

              {status === 'success' && (
                <div className="cf-success">
                  <i className="fas fa-check-circle"></i>
                  Message sent! We'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="cf-error">
                  <i className="fas fa-exclamation-circle"></i>
                  Failed to send. Please try WhatsApp instead.
                </div>
              )}

              <button type="submit" className="cf-submit" disabled={status === 'loading'}>
                {status === 'loading'
                  ? <><i className="fas fa-spinner fa-spin"></i> Sending...</>
                  : <><i className="fas fa-paper-plane"></i> Send Message</>}
              </button>
            </form>
          </div>
        </div>


      </div>

      {/* Map */}
      <div className="contact-map-section">
        <div className="contact-map-header">
          <i className="fas fa-map-marker-alt"></i>
          <span>Find Us Here</span>
        </div>
        <div className="contact-map-box">
          <iframe
            title="Nila Instyle Location"
            src="https://maps.google.com/maps?q=11.0651517,78.1407908&z=17&output=embed"
            style={{ border: 0, display: 'block', width: '100%', height: '100%' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Contact;
