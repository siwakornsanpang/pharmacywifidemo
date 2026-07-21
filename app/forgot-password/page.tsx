"use client";

import { KeyRound } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  AuthCard,
  AuthShell,
  C,
  Field,
} from "../components/AuthShell";
import { useLocale } from "../components/LocaleProvider";
import { EmailIcon } from "../components/icons";

export default function ForgotPasswordPage() {
  const { t } = useLocale();
  const [email, setEmail] = useState("");

  return (
    <AuthShell>
      <AuthCard
        title={t.forgotPasswordTitle}
        topSlot={
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: "#EEF0D8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 14px",
              color: C,
            }}
          >
            <KeyRound size={28} strokeWidth={1.75} aria-hidden />
          </div>
        }
      >
        <p
          style={{
            margin: "0 0 18px",
            textAlign: "center",
            fontSize: 13,
            color: "#6B6963",
            lineHeight: 1.8,
          }}
        >
          {t.forgotPasswordHint1}
          <br />
          {t.forgotPasswordHint2}
        </p>

        <label
          style={{
            display: "block",
            fontSize: 13,
            fontWeight: 500,
            color: "#6B6963",
            marginBottom: 6,
            lineHeight: 1.8,
          }}
        >
          {t.emailLabel}
        </label>

        <Field
          icon={<EmailIcon />}
          type="email"
          placeholder={t.emailPlaceholder}
          value={email}
          onChange={setEmail}
          marginBottom={16}
        />

        <button
          type="button"
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
            lineHeight: 1.8,
          }}
        >
          {t.sendResetLink}
        </button>

        <Link
          href="/"
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
            textDecoration: "none",
            display: "block",
            textAlign: "center",
            boxSizing: "border-box",
            lineHeight: 1.8,
            marginBottom: 16,
          }}
        >
          {t.backToLogin}
        </Link>

        <p
          style={{
            margin: 0,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: 6,
            fontSize: 11,
            color: "#8C8A84",
            lineHeight: 1.7,
            textAlign: "left",
          }}
        >
          <span
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              border: "1.2px solid #8C8A84",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 9,
              fontWeight: 700,
              flexShrink: 0,
              marginTop: 2,
              fontFamily: "serif",
            }}
            aria-hidden
          >
            i
          </span>
          <span>{t.forgotPasswordSpamTip}</span>
        </p>
      </AuthCard>
    </AuthShell>
  );
}
