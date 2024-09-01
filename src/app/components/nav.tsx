"use client";  // Mark this file as a Client Component

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../image/image_1.jpg";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link href="../" ><Image src={logo} width={50} height={50} alt="Logo" /></Link>
      </div>
      <button className="navbar-toggle" onClick={toggleNavbar}>
        ☰
      </button>
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about_me">About me</Link></li>
        <li><Link href="/pokemon">Pokemon</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
