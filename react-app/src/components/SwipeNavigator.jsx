import { useRef } from 'react';

function SwipeNavigator({ children }) {
  const startX        = useRef(null);
  const startY        = useRef(null);

  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e) => {
    // Swipe navigation disabled globally
    // if (startX.current === null) return;

    // // Don't navigate if swipe started inside a horizontally scrollable element
    // if (e.target.closest('[data-no-swipe]')) {
    //   startX.current = null;
    //   return;
    // }

    // const deltaX = startX.current - e.changedTouches[0].clientX;
    // const deltaY = Math.abs(startY.current - e.changedTouches[0].clientY);

    // // Ignore if swipe is mostly vertical (user is scrolling)
    // if (Math.abs(deltaX) < SWIPE_THRESHOLD || deltaY > Math.abs(deltaX)) {
    //   startX.current = null;
    //   return;
    // }

    // const idx = PAGES.indexOf(location.pathname);
    // if (idx === -1) { startX.current = null; return; }

    // if (deltaX > 0 && idx < PAGES.length - 1) {
    //   navigate(PAGES[idx + 1]); // swipe left → next page
    // } else if (deltaX < 0 && idx > 0) {
    //   navigate(PAGES[idx - 1]); // swipe right → prev page
    // }

    startX.current = null;
  };

  return (
    <div className="app-body" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      {children}
    </div>
  );
}

export default SwipeNavigator;
