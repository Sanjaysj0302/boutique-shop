import { useEffect, useState } from 'react';
import './SplashScreen.css';

function SplashScreen({ onDone }) {
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHiding(true);
      setTimeout(onDone, 600);
    }, 2200);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div className={`splash${hiding ? ' splash--hide' : ''}`}>
      <div className="splash-content">
        <img src="/images/title.jpeg" alt="Nila Instyle" className="splash-logo" />
        <h1 className="splash-name">Nila Instyle</h1>
        <p className="splash-tagline">Where Style Meets Elegance</p>
        <div className="splash-dots">
          <span></span><span></span><span></span>
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;
