"use client";

import Link from "next/link";
import { useState } from "react";
import {
  AuthCard,
  AuthShell,
  C,
  ConsentCheckbox,
  Field,
} from "../components/AuthShell";
import { useLocale } from "../components/LocaleProvider";
import {
  EmailIcon,
  IdCardIcon,
  UserIcon,
} from "../components/icons";

export default function RegisterPage() {
  const { t } = useLocale();
  const [agreed, setAgreed] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [idOrPassport, setIdOrPassport] = useState("");
  const [phoneOrEmail, setPhoneOrEmail] = useState("");

  return (
    <AuthShell>
      <AuthCard title={t.registerTitle}>
        <Field
          icon={<UserIcon />}
          placeholder={t.firstName}
          value={firstName}
          onChange={setFirstName}
        />
        <Field
          icon={<UserIcon />}
          placeholder={t.lastName}
          value={lastName}
          onChange={setLastName}
        />
        <Field
          icon={<IdCardIcon />}
          placeholder={t.idOrPassport}
          value={idOrPassport}
          onChange={setIdOrPassport}
        />
        <Field
          icon={<EmailIcon />}
          placeholder={t.phoneOrEmail}
          value={phoneOrEmail}
          onChange={setPhoneOrEmail}
        />

        <ConsentCheckbox checked={agreed} onChange={setAgreed} />

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
          }}
        >
          {t.register}
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
          }}
        >
          {t.backToSignIn}
        </Link>
      </AuthCard>
    </AuthShell>
  );
}
