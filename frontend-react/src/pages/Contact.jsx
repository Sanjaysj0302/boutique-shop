import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', mobile: '', Collections: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const apiUrl = `${window.location.protocol}//${window.location.host}/send-message`;

    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', mobile: '', Collections: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
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

      <div className="map-container">
        <iframe
          title="Nila Instyle Location"
          src="https://maps.google.com/maps?q=11.0651517,78.1407908&z=17&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Visit Us</h3>
            <p>Mohanur, Namakkal</p>
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <h3>Call Us</h3>
            <p>+91 994-436-3616</p>
            <p>+91 979-157-9129</p>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <h3>Email Us</h3>
            <p>sanjaysj0302@gmail.com</p>
          </div>
          <div className="business-hours">
            <h3>Business Hours</h3>
            <ul className="hours-list">
              <li><span>Monday - Friday</span><span>10:00 AM - 8:00 PM</span></li>
              <li><span>Saturday</span><span>10:00 AM - 6:00 PM</span></li>
              <li><span>Sunday</span><span>Closed</span></li>
            </ul>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile No</label>
              <input type="tel" id="mobile" name="mobile" placeholder="Your mobile" value={formData.mobile} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="Collections">Collections</label>
              <input type="text" id="Collections" name="Collections" placeholder="Collections" value={formData.Collections} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Explain Us your Needs in Details" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            </div>

            {status === 'success' && <p className="form-success">Message sent successfully! We'll get back to you soon.</p>}
            {status === 'error'   && <p className="form-error">Failed to send message. Please try again.</p>}

            <button type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
