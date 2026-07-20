"use client";

import { Leaf } from "lucide-react";
import Image from "next/image";
import { useState, type ReactNode } from "react";
import {
  ContactPhoneIcon,
  DocumentIcon,
  InfoIcon,
} from "./icons";

const C = "#737300";

function LanguageSwitcher() {
  const [lang, setLang] = useState<"th" | "en">("th");

  return (
    <div
      style={{
        position: "absolute",
        top: 16,
        right: 20,
        zIndex: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          border: "1.2px solid #E2DFD8",
          borderRadius: 999,
          background: "#FFF",
          overflow: "hidden",
          boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
        }}
      >
        <button
          type="button"
          onClick={() => setLang("th")}
          style={{
            padding: "4px 14px",
            fontSize: 12,
            fontWeight: 500,
            background: lang === "th" ? "#EFEDE8" : "#FFF",
            color: lang === "th" ? C : "#8C8A84",
            border: "none",
            borderRight: "1.2px solid #E2DFD8",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          ไทย
        </button>
        <button
          type="button"
          onClick={() => setLang("en")}
          style={{
            padding: "4px 14px",
            fontSize: 12,
            fontWeight: 500,
            background: lang === "en" ? "#EFEDE8" : "transparent",
            color: lang === "en" ? C : "#8C8A84",
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          EN
        </button>
      </div>
    </div>
  );
}

function BrandHeader() {
  return (
    <>
      <div className="brand-section">
        <div
          style={{
            width: 75,
            height: 95,
            position: "relative",
            flexShrink: 0,
            marginBottom: 4,
          }}
        >
          <Image
            src="/logo.png"
            alt="สภาเภสัชกรรม"
            fill
            sizes="75px"
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

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

      <div className="decor-divider">
        <div
          style={{
            flex: 1,
            height: 1,
            background: "linear-gradient(to left, #C5C2B9, rgba(197, 194, 185, 0))",
          }}
        />
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            color: C,
          }}
          aria-hidden
        >
          <Leaf
            size={14}
            strokeWidth={1.75}
            style={{ transform: "scaleX(-1) rotate(-25deg)", marginRight: -2 }}
          />
          <Leaf size={14} strokeWidth={1.75} style={{ transform: "rotate(25deg)" }} />
        </span>
        <div
          style={{
            flex: 1,
            height: 1,
            background: "linear-gradient(to right, #C5C2B9, rgba(197, 194, 185, 0))",
          }}
        />
      </div>
    </>
  );
}

function Footer() {
  const linkStyle = {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    color: "#4A4842",
    textDecoration: "none",
    fontSize: 11,
    fontWeight: 500,
    flex: 1,
    textAlign: "center" as const,
    lineHeight: 1.3,
    whiteSpace: "nowrap" as const,
  };

  return (
    <footer
      style={{
        background: "#FFF",
        borderTop: "1.2px solid #EBE7DF",
        flexShrink: 0,
      }}
    >
      <div style={{ padding: "12px 16px" }}>
        <div
          style={{
            maxWidth: 500,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <a href="#" style={linkStyle}>
            <InfoIcon />
            เกี่ยวกับเรา
          </a>

          <div style={{ height: 24, width: 1, background: "#E2DFD8" }} />

          <a href="#" style={linkStyle}>
            <DocumentIcon />
            นโยบายความเป็นส่วนตัว
          </a>

          <div style={{ height: 24, width: 1, background: "#E2DFD8" }} />

          <a href="#" style={linkStyle}>
            <ContactPhoneIcon />
            ติดต่อเรา
          </a>
        </div>
      </div>
      <div style={{ height: 4, background: C }} />
    </footer>
  );
}

export function AuthShell({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        background: "#FAF8F5",
        fontFamily: "var(--font-sarabun), 'Sarabun', sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <LanguageSwitcher />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px 16px 16px",
          minHeight: 0,
          overflowY: "auto",
        }}
      >
        <BrandHeader />
        {children}
      </div>

      <Footer />
    </div>
  );
}

export function AuthCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
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
      <h2
        style={{
          textAlign: "center",
          fontSize: 20,
          fontWeight: 700,
          color: C,
          margin: "0 0 4px",
        }}
      >
        {title}
      </h2>

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
            height: 1,
            background: "linear-gradient(to left, #E2DFD8, rgba(226, 223, 216, 0))",
          }}
        />
        <Leaf
          size={14}
          strokeWidth={1.75}
          color={C}
          style={{ transform: "rotate(20deg)" }}
          aria-hidden
        />
        <div
          style={{
            width: 24,
            height: 1,
            background: "linear-gradient(to right, #E2DFD8, rgba(226, 223, 216, 0))",
          }}
        />
      </div>

      {children}
    </div>
  );
}

export function Field({
  icon,
  type = "text",
  placeholder,
  value,
  onChange,
  rightSlot,
}: {
  icon: ReactNode;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  rightSlot?: ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #D5D2C9",
        borderRadius: 8,
        padding: "10px 14px",
        marginBottom: 12,
        background: "#FFF",
        color: "#8C8A84",
      }}
    >
      <span style={{ flexShrink: 0, marginRight: 10, display: "flex" }}>{icon}</span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          flex: 1,
          border: "none",
          outline: "none",
          fontSize: 14,
          background: "transparent",
          color: "#333",
          fontFamily: "inherit",
          minWidth: 0,
        }}
      />
      {rightSlot}
    </div>
  );
}

export function ConsentCheckbox({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
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
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        style={{
          width: 15,
          height: 15,
          marginTop: 2,
          flexShrink: 0,
          accentColor: C,
        }}
      />
      <span
        style={{
          fontSize: 11,
          color: "#666",
          lineHeight: 1.5,
          userSelect: "none",
        }}
      >
        ข้าพเจ้าได้อ่านและยอมรับเงื่อนไขการใช้งาน
        และนโยบายคุ้มครองข้อมูลส่วนบุคคล
      </span>
    </label>
  );
}

export { C };
