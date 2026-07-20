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
  GlobeIcon,
  IdCardIcon,
  PhoneIcon,
  UserIcon,
} from "../components/icons";

export default function RegisterPage() {
  const { t } = useLocale();
  const [agreed, setAgreed] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [passport, setPassport] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

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
          placeholder={t.nationalId}
          value={nationalId}
          onChange={setNationalId}
        />
        <Field
          icon={<GlobeIcon />}
          placeholder={t.passport}
          value={passport}
          onChange={setPassport}
        />
        <Field
          icon={<PhoneIcon />}
          type="tel"
          placeholder={t.phone}
          value={phone}
          onChange={setPhone}
        />
        <Field
          icon={<EmailIcon />}
          type="email"
          placeholder={t.email}
          value={email}
          onChange={setEmail}
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
