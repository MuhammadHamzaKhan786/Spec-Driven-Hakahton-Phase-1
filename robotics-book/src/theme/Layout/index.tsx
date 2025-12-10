import React, { useEffect } from 'react';
import OriginalLayout from '@theme-original/Layout';
import ChatbotWidget from '@site/src/components/ChatbotWidget';

export default function Layout(props) {
  useEffect(() => {
    // Add scroll to top button functionality
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.className = 'scroll-to-top';
    scrollToTopButton.innerHTML = '↑'; // Up arrow icon
    scrollToTopButton.setAttribute('aria-label', 'Scroll to top');

    scrollToTopButton.style.display = 'none'; // Initially hidden

    document.body.appendChild(scrollToTopButton);

    const handleScroll = () => {
      if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'flex';
      } else {
        scrollToTopButton.style.display = 'none';
      }
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    window.addEventListener('scroll', handleScroll);
    scrollToTopButton.addEventListener('click', scrollToTop);

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
      scrollToTopButton.removeEventListener('click', scrollToTop);
      if (scrollToTopButton.parentNode) {
        scrollToTopButton.parentNode.removeChild(scrollToTopButton);
      }
    };
  }, []);

  return (
    <>
      <OriginalLayout {...props}>
        {props.children}
        <ChatbotWidget />
      </OriginalLayout>
    </>
  );
}