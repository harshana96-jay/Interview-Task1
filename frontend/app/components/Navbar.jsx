"use client";
import { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <h2 className="logo">Turtlesegg Realty</h2>

      {/* Desktop Links */}
      <div className="nav-links">
        <a href="/properties" className="nav-link">For Sale</a>
        <a href="/properties" className="nav-link">For Rent</a>
        <a href="/properties" className="nav-link">Lease</a>
      </div>

      {/* Desktop Buttons */}
      <div className="nav-actions">
        <a href="/login" className="btn-outline">Login</a>
        <a href="/signup" className="btn-filled">Sign Up</a>
      </div>

      {/* Mobile Hamburger */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mobile-menu">
          <a href="/properties" className="mobile-link">For Sale</a>
          <a href="/properties" className="mobile-link">For Rent</a>
          <a href="/properties" className="mobile-link">Lease</a>

          <a href="/login" className="btn-outline mobile-btn">Login</a>
          <a href="/signup" className="btn-filled mobile-btn">Sign Up</a>
        </div>
      )}
    </nav>
  );
}
