import React, { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa6';

type HandleClick = {
  onClick: () => void;
};
function ScrollToTop({ onClick }: HandleClick): React.JSX.Element {
  const [showScrollToTopBtn, setShowScrollToTopBtn] = useState(false);
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);

  useEffect(() => {
    const documentHeight = window.document.body.scrollHeight;

    const followScroll = (): void => {
      setHasScrolledToBottom(
        window.innerHeight + window.scrollY > documentHeight
      );
      setShowScrollToTopBtn(window.scrollY > 300);
    };

    window.addEventListener('scroll', followScroll);
    return () => {
      window.removeEventListener('scroll', followScroll);
    };
  }, []);

  return (
    <div>
      {showScrollToTopBtn && (
        <div
          className={`fixed bottom-5 right-5 z-10 p-3 border-2 border-amber-500 rounded-full cursor-pointer bg-amber-100 hover:bg-amber-300 transition-all ${
            hasScrolledToBottom ? '!bottom-20' : ''
          }`}
          onClick={onClick}
        >
          <FaAngleUp />
        </div>
      )}
    </div>
  );
}
export default ScrollToTop;
