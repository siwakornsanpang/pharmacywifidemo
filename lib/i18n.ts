export type Locale = "th" | "en";

export type Dictionary = {
  brandName: string;
  brandNameEn: string;
  logoAlt: string;
  loginTitle: string;
  registerTitle: string;
  username: string;
  password: string;
  showPassword: string;
  hidePassword: string;
  consent: string;
  signIn: string;
  signInMicrosoft: string;
  or: string;
  register: string;
  firstName: string;
  lastName: string;
  nationalId: string;
  passport: string;
  phone: string;
  email: string;
  backToSignIn: string;
  aboutUs: string;
  privacyPolicy: string;
  contactUs: string;
};

const th: Dictionary = {
  brandName: "สภาเภสัชกรรม",
  brandNameEn: "THE PHARMACY COUNCIL OF THAILAND",
  logoAlt: "สภาเภสัชกรรม",
  loginTitle: "ลงชื่อเข้าใช้เครือข่าย",
  registerTitle: "สมัครใช้งานเครือข่าย",
  username: "ชื่อผู้ใช้งาน",
  password: "รหัสผ่าน",
  showPassword: "แสดงรหัสผ่าน",
  hidePassword: "ซ่อนรหัสผ่าน",
  consent:
    "ข้าพเจ้าได้อ่านและยอมรับเงื่อนไขการใช้งาน และนโยบายคุ้มครองข้อมูลส่วนบุคคล",
  signIn: "ลงชื่อเข้าใช้",
  signInMicrosoft: "ลงชื่อเข้าใช้ด้วย Microsoft",
  or: "หรือ",
  register: "สมัครใช้งาน",
  firstName: "ชื่อ",
  lastName: "นามสกุล",
  nationalId: "เลขบัตรประชาชน",
  passport: "หรือ Passport สำหรับชาวต่างชาติ",
  phone: "เบอร์โทรศัพท์",
  email: "E-mail",
  backToSignIn: "กลับไปลงชื่อเข้าใช้",
  aboutUs: "เกี่ยวกับเรา",
  privacyPolicy: "นโยบายความเป็นส่วนตัว",
  contactUs: "ติดต่อเรา",
};

const en: Dictionary = {
  brandName: "สภาเภสัชกรรม",
  brandNameEn: "THE PHARMACY COUNCIL OF THAILAND",
  logoAlt: "The Pharmacy Council of Thailand",
  loginTitle: "Sign in to the network",
  registerTitle: "Register for network access",
  username: "Username",
  password: "Password",
  showPassword: "Show password",
  hidePassword: "Hide password",
  consent:
    "I have read and accept the terms of use and personal data protection policy",
  signIn: "Sign in",
  signInMicrosoft: "Sign in with Microsoft",
  or: "or",
  register: "Register",
  firstName: "First name",
  lastName: "Last name",
  nationalId: "National ID number",
  passport: "or Passport for foreigners",
  phone: "Phone number",
  email: "E-mail",
  backToSignIn: "Back to sign in",
  aboutUs: "About us",
  privacyPolicy: "Privacy policy",
  contactUs: "Contact us",
};

export const dictionaries: Record<Locale, Dictionary> = { th, en };

export const LOCALE_STORAGE_KEY = "portal-lang";
