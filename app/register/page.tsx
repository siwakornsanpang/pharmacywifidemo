"use client";

import { useState } from "react";
import {
  AuthCard,
  AuthShell,
  C,
  ConsentCheckbox,
  Field,
} from "../components/AuthShell";
import {
  EmailIcon,
  GlobeIcon,
  IdCardIcon,
  PhoneIcon,
  UserIcon,
} from "../components/icons";

export default function RegisterPage() {
  const [agreed, setAgreed] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [passport, setPassport] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  return (
    <AuthShell>
      <AuthCard title="สมัครใช้งานเครือข่าย">
        <Field
          icon={<UserIcon />}
          placeholder="ชื่อ"
          value={firstName}
          onChange={setFirstName}
        />
        <Field
          icon={<UserIcon />}
          placeholder="นามสกุล"
          value={lastName}
          onChange={setLastName}
        />
        <Field
          icon={<IdCardIcon />}
          placeholder="เลขบัตรประชาชน"
          value={nationalId}
          onChange={setNationalId}
        />
        <Field
          icon={<GlobeIcon />}
          placeholder="หรือ Passport สำหรับชาวต่างชาติ"
          value={passport}
          onChange={setPassport}
        />
        <Field
          icon={<PhoneIcon />}
          type="tel"
          placeholder="เบอร์โทรศัพท์"
          value={phone}
          onChange={setPhone}
        />
        <Field
          icon={<EmailIcon />}
          type="email"
          placeholder="E-mail"
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
            fontFamily: "inherit",
            boxShadow: "0 2px 4px rgba(115,115,0,0.12)",
          }}
        >
          สมัครใช้งาน
        </button>
      </AuthCard>
    </AuthShell>
  );
}
