const MARQUEE_ITEMS = [
  { icon: 'fas fa-store',       text: 'Now Open in Mohanur, Namakkal — Visit Us Today!' },
  { icon: 'fas fa-cut',         text: 'Custom Outfits Tailored Just for You — Blouses, Salwars, Tops & More.' },
  { icon: 'fas fa-star',        text: 'Premium Fabrics · Expert Tailors · Perfect Fit — Every Time.' },
  { icon: 'fab fa-whatsapp',    text: 'Order via WhatsApp — Quick, Easy & Personalised.' },
  { icon: 'fas fa-heart',       text: 'Crafted with Love for Every Occasion — Weddings, Festivals & Daily Wear.' },
];

function Marquee() {
  const content = MARQUEE_ITEMS.map((item, i) => (
    <span key={i} className="marquee-item">
      <i className={item.icon}></i>
      {item.text}
      <span className="marquee-sep">✦</span>
    </span>
  ));

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {content}
        {content}
      </div>
    </div>
  );
}

export default Marquee;
