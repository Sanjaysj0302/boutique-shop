import { useState } from 'react';
import './Collections.css';

const CATEGORIES = ['all', 'tops', 'blouse', 'salvar', 'fashion', 'kids', 'accessories'];

const PRODUCTS = [
  { id: 1, src: '/images/tops/Media (1).jpeg', alt: 'Tops', title: 'Stylish Top', category: 'tops' },
  { id: 2, src: '/images/tops/Media (2).jpeg', alt: 'Tops', title: 'Stylish Top', category: 'tops' },
  { id: 3, src: '/images/tops/Media (3).jpeg', alt: 'Tops', title: 'Stylish Top', category: 'tops' },
  { id: 4, src: '/images/tops/Media (4).jpeg', alt: 'Tops', title: 'Stylish Top', category: 'tops' },
  { id: 5, src: '/images/tops/Media (6).jpeg', alt: 'Tops', title: 'Stylish Top', category: 'tops' },
  { id: 6, src: '/images/tops/Media (7).jpeg', alt: 'Tops', title: 'Stylish Top', category: 'tops' },
  { id: 7, src: '/images/blouse/sharedimage (2).jpeg', alt: 'Blouse', title: 'Designer Blouse', category: 'blouse' },
  { id: 8, src: '/images/blouse/sharedimage (3).jpeg', alt: 'Blouse', title: 'Designer Blouse', category: 'blouse' },
  { id: 9, src: '/images/blouse/sharedimage (4).jpeg', alt: 'Blouse', title: 'Designer Blouse', category: 'blouse' },
  { id: 10, src: '/images/blouse/sharedimage (5).jpeg', alt: 'Blouse', title: 'Designer Blouse', category: 'blouse' },
  { id: 11, src: '/images/blouse/sharedimage (6).jpeg', alt: 'Blouse', title: 'Designer Blouse', category: 'blouse' },
];

function Collections() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [modalImage, setModalImage] = useState(null);

  const filtered = PRODUCTS.filter(p => activeFilter === 'all' || p.category === activeFilter);

  return (
    <>
      <div
        className="page-title"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
      >
        <h1>Our Collections</h1>
        <p>Discover your perfect style</p>
      </div>

      <div className="filter-section">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            className={`filter-btn${activeFilter === cat ? ' active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filtered.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img
                src={product.src}
                alt={product.alt}
                onClick={() => setModalImage(product.src)}
              />
              <div className="quick-view" onClick={() => setModalImage(product.src)}>
                Quick View
              </div>
            </div>
            <div className="product-info">
              <h3>{product.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {modalImage && (
        <div className="modal" onClick={() => setModalImage(null)}>
          <span className="close" onClick={() => setModalImage(null)}>&times;</span>
          <img className="modal-content" src={modalImage} alt="Preview" />
        </div>
      )}
    </>
  );
}

export default Collections;
