// src/components/Navbar.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import "./Navbar.css";

function Navbar({ cartItemCount, onCartClick }) {
  // keep user in state so we don't need to reload the page
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user")) || null;
    } catch {
      return null;
    }
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSuccess = (credentialResponse) => {
    try {
      const userData = jwtDecode(credentialResponse.credential);
      const cleanUser = {
        name: userData.name || "",
        email: userData.email || "",
        picture: userData.picture || null,
      };
      localStorage.setItem("user", JSON.stringify(cleanUser));
      setUser(cleanUser); // update UI immediately
    } catch (err) {
      console.error("JWT Decode Error:", err);
      alert("Login succeeded, but decoding failed.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setDropdownOpen(false);
  };

  const getInitial = (u) => {
    if (u?.name && u.name.trim()) return u.name.trim().charAt(0).toUpperCase();
    if (u?.email && u.email.trim()) return u.email.trim().charAt(0).toUpperCase();
    return "?";
  };

  // Nice deterministic background colors (YouTube/Gmail vibe)
  const palette = ["#1E88E5", "#43A047", "#FB8C00", "#8E24AA", "#3949AB", "#E53935", "#00897B"];
  const stringToColor = (str) => {
    if (!str) return palette[0];
    let hash = 0;
    for (let i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash);
    return palette[Math.abs(hash) % palette.length];
    };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="logo">
        Sri Pathrakali Crackers
      </Link>

      {/* Navigation Links */}
      <div className="nav-links">
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/after-payment">After Payment</Link>

        {/* Cart */}
        <button className="cart-button" onClick={onCartClick}>
          <ShoppingCart size={22} />
          <span style={{ marginLeft: 4 }}>{cartItemCount}</span>
        </button>

        {/* Auth Section */}
        <div className="auth-section" ref={dropdownRef}>
          {user ? (
            <div style={{ position: "relative" }}>
              {/* Avatar (like YouTube): picture OR initial */}
              <div
                onClick={() => setDropdownOpen((v) => !v)}
                title={user.name || user.email}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  cursor: "pointer",
                  overflow: "hidden",
                  display: "grid",
                  placeItems: "center",
                  fontWeight: 700,
                  fontSize: 16,
                  textTransform: "uppercase",
                  background: user.picture ? "transparent" : stringToColor(user.email || user.name),
                  color: "#fff",
                }}
              >
                {user.picture ? (
                  <img
                    src={user.picture}
                    alt="profile"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  getInitial(user)
                )}
              </div>

              {/* Dropdown */}
              {dropdownOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: 45,
                    right: 0,
                    background: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: 8,
                    boxShadow: "0px 6px 18px rgba(0,0,0,0.12)",
                    padding: 10,
                    minWidth: 180,
                    zIndex: 1000,
                  }}
                >
                  <div style={{ marginBottom: 8 }}>
                    <div style={{ fontWeight: 600, fontSize: 14, color: "#111827" }}>
                      {user.name || "User"}
                    </div>
                    <div style={{ fontSize: 12, color: "#6B7280", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {user.email}
                    </div>
                  </div>
                  <hr style={{ border: "none", borderTop: "1px solid #f3f4f6", margin: "8px 0" }} />
                  <button
                    onClick={handleLogout}
                    style={{
                      background: "transparent",
                      border: "none",
                      width: "100%",
                      textAlign: "left",
                      padding: "6px 4px",
                      borderRadius: 6,
                      cursor: "pointer",
                      fontSize: 14,
                      color: "#DC2626",
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <GoogleLogin
              onSuccess={handleSuccess}
              onError={() => alert("❌ Login Failed")}
              useOneTap
            />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
