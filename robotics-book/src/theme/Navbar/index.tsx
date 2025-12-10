import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import Navbar from '@theme-original/Navbar';

export default function NavbarWrapper(props) {
  const { colorMode, setColorMode } = useColorMode();

  const toggleTheme = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <Navbar {...props} />
      <div className="navbar__item theme-toggle-container" style={{
        position: 'absolute',
        right: '20px',
        top: '50%',
        transform: 'translateY(-50%)'
      }}>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
        >
          {colorMode === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </>
  );
}