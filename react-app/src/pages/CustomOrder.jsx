import { useState } from 'react';
import './CustomOrder.css';

const WHATSAPP_NUMBER = 918870178081

const INITIAL = {
  name: '', mobile: '', occasion: '', outfit: '',
  fabric: '', color: '', chest: '', waist: '', hip: '',
  height: '', notes: '',
};

function CustomOrder() {
  const [form, setForm]     = useState(INITIAL);
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendViaWhatsApp = (e) => {
    e.preventDefault();
    const msg = `*Custom Order Request - Nila Instyle*

*Name:* ${form.name}
*Mobile:* ${form.mobile}
*Occasion:* ${form.occasion}
*Outfit Type:* ${form.outfit}
*Fabric Preference:* ${form.fabric}
*Color Preference:* ${form.color}

*Measurements:*
• Chest: ${form.chest}
• Waist: ${form.waist}
• Hip: ${form.hip}
• Height: ${form.height}

*Additional Notes:* ${form.notes || 'None'}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
    setStatus('sent');
    setForm(INITIAL);
  };

  return (
    <>
      <div
        className="page-title"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/6634451/pexels-photo-6634451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
      >
        <h1>Custom Order</h1>
        <p>Tell us your vision — we'll craft it perfectly</p>
      </div>

      <div className="custom-order-container">
        <div className="custom-order-info">
          <h2>How It Works</h2>
          <div className="step">
            <div className="step-num">1</div>
            <div>
              <h4>Fill the Form</h4>
              <p>Share your outfit idea, occasion, measurements and preferences.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <div>
              <h4>We Connect on WhatsApp</h4>
              <p>Our team will reach out to confirm details and fabric options.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <div>
              <h4>We Craft Your Outfit</h4>
              <p>Skilled tailors bring your design to life with premium quality.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">4</div>
            <div>
              <h4>Pick Up / Delivery</h4>
              <p>Collect in store or we arrange delivery to your doorstep.</p>
            </div>
          </div>

          <div className="custom-order-note">
            <i className="fas fa-info-circle"></i>
            <p>Custom orders typically take <strong>5–10 working days</strong>. Rush orders may be available — mention it in your notes.</p>
          </div>
        </div>

        <form className="custom-order-form" onSubmit={sendViaWhatsApp}>
          <div className="co-form-header">
            <h2>Order Details</h2>
            <p>Fill in your preferences and we'll reach out to confirm.</p>
          </div>
          <div className="co-form-body">

          <div className="co-section-title"><i className="fas fa-user"></i> Personal Info</div>
          <div className="form-row">
            <div className="form-group">
              <label>Your Name *</label>
              <input name="name" value={form.name} onChange={handleChange} placeholder="Full name" required />
            </div>
            <div className="form-group">
              <label>Mobile Number *</label>
              <input name="mobile" type="tel" value={form.mobile} onChange={handleChange} placeholder="+91 XXXXX XXXXX" required />
            </div>
          </div>

          <div className="co-section-title"><i className="fas fa-calendar-alt"></i> Occasion & Outfit</div>
          <div className="form-row">
            <div className="form-group">
              <label>Occasion *</label>
              <select name="occasion" value={form.occasion} onChange={handleChange} required>
                <option value="">Select occasion</option>
                <option>Wedding</option>
                <option>Festival</option>
                <option>Party</option>
                <option>Casual Wear</option>
                <option>Office Wear</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Outfit Type *</label>
              <select name="outfit" value={form.outfit} onChange={handleChange} required>
                <option value="">Select type</option>
                <option>Blouse</option>
                <option>Salwar Kameez</option>
                <option>Top</option>
                <option>Churidar</option>
                <option>Dress</option>
                <option>Kids Wear</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="co-section-title"><i className="fas fa-palette"></i> Fabric & Color</div>
          <div className="form-row">
            <div className="form-group">
              <label>Fabric Preference</label>
              <input name="fabric" value={form.fabric} onChange={handleChange} placeholder="e.g. Cotton, Silk, Georgette" />
            </div>
            <div className="form-group">
              <label>Color Preference</label>
              <input name="color" value={form.color} onChange={handleChange} placeholder="e.g. Red, Pastel Pink" />
            </div>
          </div>

          <h3 className="measurements-heading"><i className="fas fa-ruler-combined"></i> Measurements (in inches)</h3>

          <div className="form-row four-col">
            <div className="form-group">
              <label>Chest</label>
              <input name="chest" value={form.chest} onChange={handleChange} placeholder='e.g. 36"' />
            </div>
            <div className="form-group">
              <label>Waist</label>
              <input name="waist" value={form.waist} onChange={handleChange} placeholder='e.g. 30"' />
            </div>
            <div className="form-group">
              <label>Hip</label>
              <input name="hip" value={form.hip} onChange={handleChange} placeholder='e.g. 40"' />
            </div>
            <div className="form-group">
              <label>Height</label>
              <input name="height" value={form.height} onChange={handleChange} placeholder="e.g. 5ft 4in" />
            </div>
          </div>

          <div className="co-section-title"><i className="fas fa-sticky-note"></i> Additional Notes</div>
          <div className="form-group">
            <label>Special Requests</label>
            <textarea name="notes" value={form.notes} onChange={handleChange} rows="4" placeholder="Any special requests, embroidery style, sleeve length, neckline preferences..." />
          </div>

          {status === 'sent' && (
            <p className="form-success">
              <i className="fas fa-check-circle"></i> Your order details have been sent to WhatsApp! We'll confirm shortly.
            </p>
          )}

          <button type="submit" className="submit-btn">
            <i className="fab fa-whatsapp"></i> Send Order via WhatsApp
          </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CustomOrder;
