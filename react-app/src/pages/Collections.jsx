import { useState } from 'react';
import './Collections.css';

const WHATSAPP_NUMBER = 918870178081

const CATEGORY_META = {
  all:         { label: 'All',         icon: 'fas fa-th' },
  tops:        { label: 'Tops',        icon: 'fas fa-tshirt' },
  blouse:      { label: 'Blouse',      icon: 'fas fa-female' },
  salvar:      { label: 'Salwar',      icon: 'fas fa-spa' },
  fashion:     { label: 'Fashion',     icon: 'fas fa-star' },
  kids:        { label: 'Kids',        icon: 'fas fa-child' },
  accessories: { label: 'Accessories', icon: 'fas fa-gem' },
};

const CATEGORIES = Object.keys(CATEGORY_META);

const PRODUCTS = [
  { id: 1,  src: '/images/tops/Media (1).jpeg',           alt: 'Tops',   title: 'Stylish Top',       category: 'tops',   isNew: true },
  { id: 2,  src: '/images/tops/Media (2).jpeg',           alt: 'Tops',   title: 'Stylish Top',       category: 'tops' },
  { id: 3,  src: '/images/tops/Media (3).jpeg',           alt: 'Tops',   title: 'Stylish Top',       category: 'tops' },
  { id: 4,  src: '/images/tops/Media (4).jpeg',           alt: 'Tops',   title: 'Stylish Top',       category: 'tops',   featured: true },
  { id: 5,  src: '/images/tops/Media (6).jpeg',           alt: 'Tops',   title: 'Stylish Top',       category: 'tops' },
  { id: 6,  src: '/images/tops/Media (7).jpeg',           alt: 'Tops',   title: 'Stylish Top',       category: 'tops' },
  { id: 7,  src: '/images/blouse/sharedimage (2).jpeg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse', isNew: true },
  { id: 8,  src: '/images/blouse/sharedimage (3).jpeg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse' },
  { id: 9,  src: '/images/blouse/sharedimage (4).jpeg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse', featured: true },
  { id: 10, src: '/images/blouse/sharedimage (5).jpeg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse' },
  { id: 11, src: '/images/blouse/sharedimage (6).jpeg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse' },
];

const SIZE_GUIDE = [
  { size: 'XS', bust: '32"', waist: '26"', hip: '36"' },
  { size: 'S',  bust: '34"', waist: '28"', hip: '38"' },
  { size: 'M',  bust: '36"', waist: '30"', hip: '40"' },
  { size: 'L',  bust: '38"', waist: '32"', hip: '42"' },
  { size: 'XL', bust: '40"', waist: '34"', hip: '44"' },
  { size: 'XXL',bust: '42"', waist: '36"', hip: '46"' },
];

function Collections() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [search, setSearch]             = useState('');
  const [modalImage, setModalImage]     = useState(null);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  const filtered = PRODUCTS.filter(p => {
    const matchCat    = activeFilter === 'all' || p.category === activeFilter;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
                        p.category.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const orderOnWhatsApp = (product) => {
    const msg = encodeURIComponent(`Hi Nila Instyle! I'm interested in ordering: ${product.title} (${product.category}). Please let me know the price and availability.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  return (
    <>
      <div
        className="page-title"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
      >
        <h1>Our Collections</h1>
        <p>Discover your perfect style</p>
      </div>

      {/* Toolbar */}
      <div className="coll-toolbar">
        <div className="coll-search-wrap">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Search by name or category..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {search && (
            <button className="coll-search-clear" onClick={() => setSearch('')}>
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>
        <div className="coll-toolbar-right">
          <span className="coll-count">{filtered.length} item{filtered.length !== 1 ? 's' : ''}</span>
          <button className="coll-size-btn" onClick={() => setShowSizeGuide(true)}>
            <i className="fas fa-ruler-horizontal"></i> Size Guide
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="coll-filters">
        <div className="coll-filters-inner">
          {CATEGORIES.map(cat => {
            const meta = CATEGORY_META[cat];
            return (
              <button
                key={cat}
                className={`coll-filter-btn${activeFilter === cat ? ' active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                <i className={meta.icon}></i>
                <span>{meta.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Products */}
      {filtered.length === 0 ? (
        <div className="coll-empty">
          <div className="coll-empty-icon"><i className="fas fa-search"></i></div>
          <h3>No products found</h3>
          <p>We couldn't find anything matching "<strong>{search}</strong>"</p>
          <button onClick={() => { setSearch(''); setActiveFilter('all'); }}>
            <i className="fas fa-redo"></i> Clear Filters
          </button>
        </div>
      ) : (
        <div className="coll-grid">
          {filtered.map(product => (
            <div key={product.id} className="coll-card">
              {product.isNew    && <span className="coll-badge new">New</span>}
              {product.featured && <span className="coll-badge featured"><i className="fas fa-star"></i> Featured</span>}

              <div className="coll-img-wrap">
                <img src={product.src} alt={product.alt} />
                <div className="coll-overlay">
                  <button
                    className="coll-overlay-btn view"
                    onClick={() => setModalImage(product.src)}
                    title="Quick View"
                  >
                    <i className="fas fa-expand-alt"></i>
                  </button>
                  <button
                    className="coll-overlay-btn wa"
                    onClick={() => orderOnWhatsApp(product)}
                    title="Order via WhatsApp"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </button>
                </div>
                <div className="coll-cat-tag">
                  <i className={CATEGORY_META[product.category]?.icon}></i>
                  {CATEGORY_META[product.category]?.label || product.category}
                </div>
              </div>

              <div className="coll-card-body">
                <h3>{product.title}</h3>
                {/* <button className="coll-wa-btn" onClick={() => orderOnWhatsApp(product)}>
                  <i className="fab fa-whatsapp"></i> Order via WhatsApp
                </button> */}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Image Lightbox */}
      {modalImage && (
        <div className="coll-lightbox" onClick={() => setModalImage(null)}>
          <button className="coll-lb-close" onClick={() => setModalImage(null)}>
            <i className="fas fa-times"></i>
          </button>
          <img src={modalImage} alt="Preview" onClick={e => e.stopPropagation()} />
        </div>
      )}

      {/* Size Guide Modal */}
      {showSizeGuide && (
        <div className="coll-lightbox" onClick={() => setShowSizeGuide(false)}>
          <div className="coll-sg-modal" onClick={e => e.stopPropagation()}>
            <div className="coll-sg-header">
              <div>
                <h2><i className="fas fa-ruler-combined"></i> Size Guide</h2>
                <p>All measurements in inches</p>
              </div>
              <button className="coll-sg-close" onClick={() => setShowSizeGuide(false)}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="coll-sg-body">
              <p className="coll-sg-note">
                <i className="fas fa-info-circle"></i>
                Measure over undergarments for the best fit.
              </p>
              <table className="coll-sg-table">
                <thead>
                  <tr><th>Size</th><th>Bust</th><th>Waist</th><th>Hip</th></tr>
                </thead>
                <tbody>
                  {SIZE_GUIDE.map(row => (
                    <tr key={row.size}>
                      <td><span className="sg-size-pill">{row.size}</span></td>
                      <td>{row.bust}</td>
                      <td>{row.waist}</td>
                      <td>{row.hip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="coll-sg-tip">
                <i className="fas fa-comment-alt"></i>
                Not sure? <a href="/contact">Contact us</a> for personalised sizing help.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Collections;
