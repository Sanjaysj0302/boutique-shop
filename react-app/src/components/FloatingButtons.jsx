import { useState, useEffect } from 'react';
import './FloatingButtons.css';

const WHATSAPP_NUMBER = process.env.REACT_APP_WHATSAPP_NUMBER;
const WHATSAPP_MSG = encodeURIComponent("Hi Nila Instyle! I'm interested in your collections.");

function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <a
        className="whatsapp-float"
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      {showTop && (
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <i className="fas fa-chevron-up"></i>
        </button>
      )}
    </>
  );
}

export default FloatingButtons;
