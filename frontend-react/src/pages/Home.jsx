import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Marquee from '../components/Marquee';
import './Home.css';

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

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const slideRef = useRef(null);

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

  return (
    <>
      <Marquee />
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
        <h1>New Arrivals</h1>
        <p>Discover our latest collection</p>
        <Link to="/collections" className="shop-now-btn">Explore Now</Link>
      </div>
    </div>
    </>
  );
}

export default Home;
