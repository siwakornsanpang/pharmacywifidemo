"use client";

import { Leaf } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useLocale } from "./LocaleProvider";
import { usePortal } from "./PortalProvider";

const C = "#737300";

function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

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
          onClick={() => setLocale("th")}
          style={{
            padding: "4px 14px",
            fontSize: 12,
            fontWeight: 500,
            background: locale === "th" ? "#EFEDE8" : "#FFF",
            color: locale === "th" ? C : "#8C8A84",
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
          onClick={() => setLocale("en")}
          style={{
            padding: "4px 14px",
            fontSize: 12,
            fontWeight: 500,
            background: locale === "en" ? "#EFEDE8" : "transparent",
            color: locale === "en" ? C : "#8C8A84",
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
  const portal = usePortal();
  const { t } = useLocale();

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
            alt={t.logoAlt}
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
            {t.brandName}
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
            {t.brandNameEn}
          </p>
        </div>
      </div>

      <div className="portal-badge">
        <div className="decor-divider">
          <div
            style={{
              flex: 1,
              height: 1,
              background:
                "linear-gradient(to left, #C5C2B9, rgba(197, 194, 185, 0))",
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
              style={{
                transform: "scaleX(-1) rotate(-25deg)",
                marginRight: -2,
              }}
            />
            <Leaf
              size={14}
              strokeWidth={1.75}
              style={{ transform: "rotate(25deg)" }}
            />
          </span>
          <div
            style={{
              flex: 1,
              height: 1,
              background:
                "linear-gradient(to right, #C5C2B9, rgba(197, 194, 185, 0))",
            }}
          />
        </div>
        <span className="portal-wifi-label">{portal.label}</span>
      </div>
    </>
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
          padding: "48px 16px 24px",
          minHeight: 0,
          overflowY: "auto",
        }}
      >
        <BrandHeader />
        {children}
      </div>
    </div>
  );
}

export function AuthCard({
  title,
  children,
  topSlot,
}: {
  title: string;
  children: ReactNode;
  topSlot?: ReactNode;
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
      {topSlot}

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
  marginBottom = 12,
}: {
  icon: ReactNode;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  rightSlot?: ReactNode;
  marginBottom?: number;
}) {
  const isPassword = type === "password";

  return (
    <div
      className="field-wrap"
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #D5D2C9",
        borderRadius: 8,
        padding: "12px 14px",
        marginBottom,
        background: "#FFF",
        color: "#8C8A84",
      }}
    >
      <span
        style={{
          flexShrink: 0,
          marginRight: 10,
          display: "flex",
          alignItems: "center",
        }}
      >
        {icon}
      </span>
      <div style={{ flex: 1, position: "relative", minWidth: 0 }}>
        {!value ? (
          <span
            aria-hidden
            className="field-placeholder"
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              display: "flex",
              alignItems: "center",
              fontSize: 14,
              lineHeight: 2,
              color: "#aaa",
              pointerEvents: "none",
              whiteSpace: "nowrap",
              overflow: "visible",
              paddingBottom: 3,
            }}
          >
            {placeholder}
          </span>
        ) : null}
        {isPassword ? (
          <input
            type={type}
            aria-label={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="field-input"
            style={{
              width: "100%",
              border: "none",
              outline: "none",
              fontSize: 14,
              lineHeight: 2,
              padding: "2px 0 4px",
              margin: 0,
              background: "transparent",
              color: "#333",
              fontFamily: "inherit",
              boxSizing: "border-box",
              position: "relative",
              zIndex: 1,
            }}
          />
        ) : (
          <textarea
            aria-label={placeholder}
            value={value}
            rows={1}
            inputMode={
              type === "tel" ? "tel" : type === "email" ? "email" : undefined
            }
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") e.preventDefault();
            }}
            className="field-input"
            style={{
              width: "100%",
              border: "none",
              outline: "none",
              fontSize: 14,
              lineHeight: 2,
              padding: "2px 0 4px",
              margin: 0,
              background: "transparent",
              color: "#333",
              fontFamily: "inherit",
              boxSizing: "border-box",
              position: "relative",
              zIndex: 1,
              resize: "none",
              overflow: "visible",
              display: "block",
              minHeight: 28,
            }}
          />
        )}
      </div>
      {rightSlot ? (
        <span
          style={{
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          {rightSlot}
        </span>
      ) : null}
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
  const { t } = useLocale();
  const [open, setOpen] = useState(false);
  const [reachedBottom, setReachedBottom] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      setReachedBottom(false);
      return;
    }

    const el = bodyRef.current;
    if (!el) return;

    const checkScroll = () => {
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 8;
      setReachedBottom(atBottom);
    };

    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [open, t.termsBody]);

  const closeModal = () => setOpen(false);

  return (
    <>
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
          onChange={(e) => {
            if (e.target.checked) {
              setOpen(true);
              return;
            }
            onChange(false);
          }}
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
          {t.consent}
        </span>
      </label>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="terms-title"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
            background: "rgba(0,0,0,0.35)",
          }}
          onClick={closeModal}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 420,
              maxHeight: "80vh",
              background: "#FFF",
              borderRadius: 16,
              border: "1px solid #EBE7DF",
              boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ padding: "18px 20px 10px" }}>
              <h3
                id="terms-title"
                style={{
                  margin: 0,
                  fontSize: 16,
                  fontWeight: 700,
                  color: C,
                  lineHeight: 1.4,
                }}
              >
                {t.termsTitle}
              </h3>
            </div>

            <div
              ref={bodyRef}
              style={{
                padding: "0 20px",
                overflowY: "auto",
                flex: 1,
                minHeight: 0,
              }}
            >
              <p
                style={{
                  margin: "0 0 8px",
                  fontSize: 13,
                  color: "#4A4842",
                  lineHeight: 1.7,
                  whiteSpace: "pre-line",
                }}
              >
                {t.termsBody}
              </p>
            </div>

            {!reachedBottom ? (
              <p
                style={{
                  margin: 0,
                  padding: "8px 20px 0",
                  fontSize: 12,
                  color: "#8C8A84",
                  textAlign: "center",
                }}
              >
                {t.termsScrollHint}
              </p>
            ) : null}

            <div
              style={{
                display: "flex",
                gap: 10,
                padding: 16,
                borderTop: "1px solid #EBE7DF",
              }}
            >
              <button
                type="button"
                onClick={closeModal}
                style={{
                  flex: 1,
                  padding: "11px 0",
                  borderRadius: 8,
                  border: "1.2px solid #D5D2C9",
                  background: "#FFF",
                  color: "#6B6963",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                {t.termsCancel}
              </button>
              <button
                type="button"
                disabled={!reachedBottom}
                onClick={() => {
                  if (!reachedBottom) return;
                  onChange(true);
                  closeModal();
                }}
                style={{
                  flex: 1,
                  padding: "11px 0",
                  borderRadius: 8,
                  border: "none",
                  background: reachedBottom ? C : "#C5C2B9",
                  color: "#FFF",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: reachedBottom ? "pointer" : "not-allowed",
                  fontFamily: "inherit",
                  opacity: reachedBottom ? 1 : 0.7,
                }}
              >
                {t.termsAccept}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export { C };
