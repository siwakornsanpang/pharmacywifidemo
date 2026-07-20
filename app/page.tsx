"use client";

import Link from "next/link";
import { useState } from "react";
import {
  AuthCard,
  AuthShell,
  C,
  ConsentCheckbox,
  Field,
} from "./components/AuthShell";
import { usePortal } from "./components/PortalProvider";
import {
  EyeIcon,
  EyeOffIcon,
  LockIcon,
  MicrosoftIcon,
  UserIcon,
} from "./components/icons";

export default function LoginPage() {
  const portal = usePortal();
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AuthShell>
      <AuthCard title="ลงชื่อเข้าใช้เครือข่าย">
        <Field
          icon={<UserIcon />}
          placeholder="ชื่อผู้ใช้งาน"
          value={username}
          onChange={setUsername}
        />

        <Field
          icon={<LockIcon />}
          type={showPassword ? "text" : "password"}
          placeholder="รหัสผ่าน"
          value={password}
          onChange={setPassword}
          rightSlot={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 2,
                marginLeft: 8,
                display: "flex",
                alignItems: "center",
                color: "#8C8A84",
              }}
              aria-label={showPassword ? "ซ่อนรหัสผ่าน" : "แสดงรหัสผ่าน"}
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          }
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
            marginBottom: portal.showMicrosoftLogin ? 10 : 16,
            fontFamily: "inherit",
            boxShadow: "0 2px 4px rgba(115,115,0,0.12)",
          }}
        >
          ลงชื่อเข้าใช้
        </button>

        {portal.showMicrosoftLogin ? (
          <button
            type="button"
            style={{
              width: "100%",
              padding: "12px 0",
              borderRadius: 8,
              border: "1.2px solid #D5D2C9",
              background: "#FFF",
              color: C,
              fontSize: 14,
              fontWeight: 500,
              cursor: "pointer",
              marginBottom: 16,
              fontFamily: "inherit",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            }}
          >
            <MicrosoftIcon />
            ลงชื่อเข้าใช้ด้วย Microsoft
          </button>
        ) : null}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 16,
          }}
        >
          <div style={{ flex: 1, height: 1, background: "#E2DFD8" }} />
          <span style={{ fontSize: 13, color: "#8C8A84" }}>หรือ</span>
          <div style={{ flex: 1, height: 1, background: "#E2DFD8" }} />
        </div>

        <Link
          href="/register"
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
          สมัครใช้งาน
        </Link>
      </AuthCard>
    </AuthShell>
  );
}
