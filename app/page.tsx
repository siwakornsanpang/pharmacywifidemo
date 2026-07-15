"use client";

import Image from "next/image";
import { useState } from "react";

/* ─────── สีหลัก #737300 ─────── */
const C = "#737300";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh", // บังคับให้สูงพอดีจอ 100vh
        background: "#FAF8F5",
        fontFamily: "var(--font-sarabun), 'Sarabun', sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* ═══════ 1. Language Switcher ═══════ */}
      {/* ใช้ position absolute เพื่อให้ปุ่มลอยทับอยู่มุมขวาบน โดยไม่ไปเบียดดันโครงสร้างของ Logo ด้านล่างให้ขยับลงมาหรือถูกกินหัว */}
      <div
        style={{
          position: "absolute",
          top: "16px",
          right: "20px",
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            border: "1.2px solid #E2DFD8",
            borderRadius: "999px",
            background: "#FFF",
            overflow: "hidden",
            boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
          }}
        >
          <button
            style={{
              padding: "4px 14px",
              fontSize: 12,
              fontWeight: 500,
              background: "#FFF",
              color: C,
              border: "none",
              borderRight: "1.2px solid #E2DFD8",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            ไทย
          </button>
          <button
            style={{
              padding: "4px 14px",
              fontSize: 12,
              fontWeight: 500,
              background: "transparent",
              color: "#8C8A84",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            EN
          </button>
        </div>
      </div>

      {/* ═══════ 2. Main Content ═══════ */}
      <div
        className="main-container"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px 16px 16px", // เพิ่ม padding-top เพื่อเว้นพื้นที่ไม่ให้ชนปุ่มเลือกภาษาด้านบน
          minHeight: 0,
          overflowY: "auto",
        }}
      >
        {/* CSS สำหรับ Responsive */}
        <style jsx global>{`
          .brand-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            margin-bottom: 8px;
            flex-shrink: 0;
          }
          .title-text-group {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .guest-wifi-label {
            display: block;
            font-size: 13px;
            font-weight: 600;
            color: ${C};
            letter-spacing: 0.1em;
            margin: 4px 0 0 0;
            text-transform: uppercase;
          }
          .decor-divider {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            margin-bottom: 16px;
            width: 100%;
            max-width: 280px;
            flex-shrink: 0;
          }
          
          /* หน้าจอ Desktop (กว้างมากกว่า 1024px) */
          @media (min-width: 1025px) {
            .brand-section {
              flex-direction: row;
              text-align: left;
              align-items: center;
              gap: 20px;
              margin-bottom: 12px;
            }
            .title-text-group {
              align-items: flex-start;
            }
            .guest-wifi-label {
              display: none;
            }
            .decor-divider {
              display: none;
            }
          }
        `}</style>

        {/* ── Brand Section (Responsive) ── */}
        <div className="brand-section">
          {/* Logo */}
          <div style={{ width: 75, height: 95, position: "relative", flexShrink: 0, marginBottom: "4px" }}>
            <Image
              src="/logo.png"
              alt="สภาเภสัชกรรม"
              fill
              sizes="75px"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>

          {/* Title Text */}
          <div className="title-text-group">
            <h1
              style={{
                fontSize: 34,
                fontWeight: 700,
                color: C,
                lineHeight: 1.1,
                margin: 0,
                letterSpacing: "0.01em",
              }}
            >
              สภาเภสัชกรรม
            </h1>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: C,
                letterSpacing: "0.08em",
                margin: "2px 0 0 0",
              }}
            >
              THE PHARMACY COUNCIL OF THAILAND
            </p>
            <span className="guest-wifi-label">GUEST WIFI</span>
          </div>
        </div>

        {/* ── ใบมะกอกคู่และตัวขีดไล่เฉดบางฟุ้ง ── */}
        <div className="decor-divider">
          <div
            style={{
              flex: 1,
              height: "1px",
              background: `linear-gradient(to left, #C5C2B9, rgba(197, 194, 185, 0))`,
            }}
          ></div>
          <svg width="22" height="12" viewBox="0 0 24 14" fill={C}>
            <path d="M11.5 12.5C7 11.5 5 7 5 7S8.5 7 11 9.5c1.2 1.2 1.1 2.5.5 3z" opacity="0.9" />
            <path d="M12.5 12.5C17 11.5 19 7 19 7S15.5 7 13 9.5c-1.2 1.2-1.1 2.5-.5 3z" opacity="0.9" />
          </svg>
          <div
            style={{
              flex: 1,
              height: "1px",
              background: `linear-gradient(to right, #C5C2B9, rgba(197, 194, 185, 0))`,
            }}
          ></div>
        </div>

        {/* ═══════ Login Card ═══════ */}
        <div
          style={{
            width: "100%",
            maxWidth: 400,
            background: "#FFF",
            borderRadius: 20,
            padding: "24px 24px",
            boxShadow: "0 8px 24px rgba(115,115,0,0.03)",
            border: "1px solid #EBE7DF",
            display: "flex",
            flexDirection: "column",
            flexShrink: 0,
          }}
        >
          {/* Card title */}
          <h2
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: 700,
              color: C,
              margin: "0 0 4px",
            }}
          >
            ลงชื่อเข้าใช้เครือข่าย
          </h2>
          
          {/* ใบมะกอกตกแต่งใต้คำว่าลงชื่อเข้าใช้ */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              marginBottom: 20,
            }}
          >
            <div
              style={{
                width: 24,
                height: "1px",
                background: `linear-gradient(to left, #E2DFD8, rgba(226, 223, 216, 0))`,
              }}
            ></div>
            <svg width="14" height="8" viewBox="0 0 24 14" fill={C}>
              <path d="M11.5 12.5C7 11.5 5 7 5 7S8.5 7 11 9.5c1.2 1.2 1.1 2.5.5 3z" opacity="0.8" />
              <path d="M12.5 12.5C17 11.5 19 7 19 7S15.5 7 13 9.5c-1.2 1.2-1.1 2.5-.5 3z" opacity="0.8" />
            </svg>
            <div
              style={{
                width: 24,
                height: "1px",
                background: `linear-gradient(to right, #E2DFD8, rgba(226, 223, 216, 0))`,
              }}
            ></div>
          </div>

          {/* Username Input */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #D5D2C9",
              borderRadius: 8,
              padding: "10px 14px",
              marginBottom: 12,
              background: "#FFF",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8C8A84" strokeWidth="1.5" style={{ flexShrink: 0, marginRight: 10 }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            <input
              type="text"
              placeholder="ชื่อผู้ใช้งาน"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                fontSize: 14,
                background: "transparent",
                color: "#333",
                fontFamily: "inherit",
              }}
            />
          </div>

          {/* Password Input */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #D5D2C9",
              borderRadius: 8,
              padding: "10px 14px",
              marginBottom: 14,
              background: "#FFF",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8C8A84" strokeWidth="1.5" style={{ flexShrink: 0, marginRight: 10 }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="รหัสผ่าน"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                fontSize: 14,
                background: "transparent",
                color: "#333",
                fontFamily: "inherit",
              }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 2, marginLeft: 8, display: "flex", alignItems: "center" }}
            >
              {showPassword ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8C8A84" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8C8A84" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              )}
            </button>
          </div>

          {/* Consent Checkbox */}
          <label
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 10,
              marginBottom: 20,
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              style={{
                width: 15,
                height: 15,
                marginTop: 2,
                flexShrink: 0,
                accentColor: C,
              }}
            />
            <span style={{ fontSize: 11, color: "#666", lineHeight: 1.5, userSelect: "none" }}>
              ข้าพเจ้าได้อ่านและยอมรับเงื่อนไขการใช้งาน
              และนโยบายคุ้มครองข้อมูลส่วนบุคคล
            </span>
          </label>

          {/* Login Button */}
          <button
            style={{
              width: "100%",
              padding: "12px 0",
              borderRadius: 8,
              border: "none",
              background: C,
              color: "#FFF",
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
              marginBottom: 10,
              fontFamily: "inherit",
              boxShadow: "0 2px 4px rgba(115,115,0,0.12)",
              transition: "opacity 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = "0.95")}
            onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
          >
            ลงชื่อเข้าใช้
          </button>

          {/* Register Button */}
          <button
            style={{
              width: "100%",
              padding: "12px 0",
              borderRadius: 8,
              border: `1.2px solid ${C}`,
              background: "#FFF",
              color: C,
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "background 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#FAF8F5")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#FFF")}
          >
            สมัครใช้งาน
          </button>
        </div>
      </div>

      {/* ═══════ 3. Footer ═══════ */}
      <footer
        style={{
          background: "#FFF",
          borderTop: "1.2px solid #EBE7DF",
          padding: "12px 16px",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            maxWidth: 500,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {/* เกี่ยวกับเรา */}
          <a href="#" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, color: "#4A4842", textDecoration: "none", fontSize: 11, fontWeight: 500 }}>
            <span style={{
              width: 18,
              height: 18,
              borderRadius: "50%",
              border: "1.5px solid #4A4842",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 10,
              fontWeight: "bold",
              fontFamily: "serif"
            }}>i</span>
            เกี่ยวกับเรา
          </a>

          <div style={{ height: 24, width: "1px", background: "#E2DFD8" }}></div>

          {/* นโยบายความเป็นส่วนตัว */}
          <a href="#" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, color: "#4A4842", textDecoration: "none", fontSize: 11, fontWeight: 500 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A4842" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            นโยบายความเป็นส่วนตัว
          </a>

          <div style={{ height: 24, width: "1px", background: "#E2DFD8" }}></div>

          {/* ติดต่อเรา */}
          <a href="#" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, color: "#4A4842", textDecoration: "none", fontSize: 11, fontWeight: 500 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A4842" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            ติดต่อเรา
          </a>
        </div>
      </footer>
    </div>
  );
}
