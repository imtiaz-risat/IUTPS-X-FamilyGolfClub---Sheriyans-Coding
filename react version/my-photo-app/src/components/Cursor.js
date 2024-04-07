// components/Cursor.js
import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

function Cursor() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(event) {
      setCursorPos({ x: event.clientX, y: event.clientY });
    }

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const crsr = document.querySelector('#cursor');
    const crsrBlur = document.querySelector('#cursor-blur');

    gsap.to(crsr, { left: cursorPos.x + 10, top: cursorPos.y + 15, duration: 0.5, ease: 'power1.out' });
    gsap.to(crsrBlur, { left: cursorPos.x - 175, top: cursorPos.y - 175, duration: 1, ease: 'power1.out', delay: 0.3 });
  }, [cursorPos]);

  return (
    <>
      <div id="cursor" />
      <div id="cursor-blur" />
    </>
  );
}

export default Cursor;
