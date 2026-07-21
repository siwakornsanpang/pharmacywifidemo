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
  idOrPassport: string;
  phoneOrEmail: string;
  backToSignIn: string;
  forgotPassword: string;
  forgotPasswordTitle: string;
  forgotPasswordHint1: string;
  forgotPasswordHint2: string;
  emailLabel: string;
  emailPlaceholder: string;
  sendResetLink: string;
  backToLogin: string;
  forgotPasswordSpamTip: string;
  termsTitle: string;
  termsBody: string;
  termsAccept: string;
  termsScrollHint: string;
  termsCancel: string;
};

const th: Dictionary = {
  brandName: "สภาเภสัชกรรม",
  brandNameEn: "THE PHARMACY COUNCIL OF THAILAND",
  logoAlt: "สภาเภสัชกรรม",
  loginTitle: "ลงชื่อเข้าใช้งานเครือข่าย",
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
  idOrPassport: "เลขบัตรประชาชน/Passport",
  phoneOrEmail: "เบอร์โทรศัพท์/E-mail",
  backToSignIn: "กลับสู่หน้าหลัก",
  forgotPassword: "ลืมรหัสผ่าน?",
  forgotPasswordTitle: "ลืมรหัสผ่าน",
  forgotPasswordHint1: "กรุณากรอกอีเมลที่ท่านใช้ลงชื่อเข้าใช้",
  forgotPasswordHint2: "เราจะส่งลิงก์สำหรับรีเซ็ตรหัสผ่านไปยังอีเมลของท่าน",
  emailLabel: "อีเมล",
  emailPlaceholder: "example@gmail.com",
  sendResetLink: "ส่งลิงก์รีเซ็ตรหัสผ่าน",
  backToLogin: "กลับสู่หน้าหลัก",
  forgotPasswordSpamTip:
    "หากไม่พบอีเมล กรุณาตรวจสอบในกล่องจดหมายขยะ (Spam)",
  termsTitle: "เงื่อนไขการใช้งานและนโยบายคุ้มครองข้อมูลส่วนบุคคล",
  termsBody: `เอกสารนี้เป็นตัวอย่างเพื่อการทดสอบระบบ (Mock-up) เท่านั้น ไม่ใช่เอกสารทางกฎหมายฉบับจริง

หมวดที่ 1 วัตถุประสงค์การใช้งาน
1.1 ผู้ใช้ตกลงใช้เครือข่ายตามวัตถุประสงค์ที่กำหนด และไม่นำไปใช้ในทางที่ผิดกฎหมาย
1.2 เครือข่ายนี้จัดไว้เพื่อสนับสนุนการปฏิบัติงาน การติดต่อสื่อสาร และการเข้าถึงบริการของสภาเภสัชกรรม
1.3 ห้ามใช้เครือข่ายเพื่อกิจกรรมเชิงพาณิชย์ส่วนตัวที่ไม่เกี่ยวข้อง เว้นแต่ได้รับอนุญาตเป็นลายลักษณ์อักษร

หมวดที่ 2 ความปลอดภัยของระบบ
2.1 สภาเภสัชกรรมอาจบันทึกข้อมูลการเชื่อมต่อเพื่อความปลอดภัยและการดูแลระบบ
2.2 ผู้ใช้มีหน้าที่รักษาชื่อผู้ใช้งานและรหัสผ่านเป็นความลับ และไม่เปิดเผยแก่บุคคลอื่น
2.3 หากสงสัยว่าบัญชีถูกเข้าถึงโดยไม่ได้รับอนุญาต ให้แจ้งผู้ดูแลระบบทันที
2.4 ห้ามพยายามเจาะระบบ ดักข้อมูล หรือรบกวนการทำงานของเครือข่าย

หมวดที่ 3 ข้อมูลส่วนบุคคล
3.1 ข้อมูลส่วนบุคคลจะถูกใช้เพื่อยืนยันตัวตนและการให้บริการเครือข่ายเท่านั้น
3.2 สภาเภสัชกรรมจะเก็บรักษาข้อมูลตามระยะเวลาที่จำเป็นต่อการให้บริการและตามที่กฎหมายกำหนด
3.3 ผู้ใช้มีสิทธิขอเข้าถึง แก้ไข หรือสอบถามเกี่ยวกับข้อมูลส่วนบุคคลของตนผ่านช่องทางที่กำหนด
3.4 ข้อมูลอาจถูกเปิดเผยเมื่อมีคำสั่งตามกฎหมายหรือเพื่อคุ้มครองสิทธิอันชอบธรรมขององค์กร

หมวดที่ 4 พฤติกรรมที่ยอมรับได้
4.1 ผู้ใช้ต้องไม่เผยแพร่เนื้อหาที่ไม่เหมาะสม ละเมิดสิทธิ์ผู้อื่น หรือก่อกวนระบบเครือข่าย
4.2 ห้ามดาวน์โหลดหรือเผยแพร่ซอฟต์แวร์ที่ละเมิดลิขสิทธิ์ มัลแวร์ หรือไฟล์ที่เป็นอันตราย
4.3 ห้ามใช้เครือข่ายเพื่อกลั่นแกล้ง คุกคาม หรือสร้างความเสียหายแก่บุคคลหรือองค์กรอื่น
4.4 การใช้งานต้องเคารพสิทธิความเป็นส่วนตัวของผู้อื่นและไม่ละเมิดนโยบายภายใน

หมวดที่ 5 การจำกัดและการระงับบริการ
5.1 การเข้าถึงเครือข่ายอาจถูกจำกัดตามนโยบายความปลอดภัยขององค์กร
5.2 สภาเภสัชกรรมขอสงวนสิทธิ์ในการระงับการใช้งานหากพบการใช้งานผิดวัตถุประสงค์
5.3 อาจมีการบำรุงรักษาตามกำหนดเวลา ซึ่งอาจทำให้บริการหยุดชะงักชั่วคราว
5.4 ผู้ดูแลระบบมีสิทธิตรวจสอบและจัดการอุปกรณ์ที่เชื่อมต่อเมื่อมีความจำเป็นด้านความปลอดภัย

หมวดที่ 6 ความรับผิดชอบของผู้ใช้
6.1 ผู้ใช้ควรออกจากระบบทุกครั้งหลังใช้งานเสร็จบนอุปกรณ์สาธารณะ
6.2 ผู้ใช้รับผิดชอบต่อกิจกรรมทั้งหมดที่เกิดขึ้นภายใต้บัญชีของตน
6.3 หากพบปัญหาการใช้งาน ให้แจ้งผู้ดูแลระบบผ่านช่องทางติดต่อที่ระบุไว้
6.4 ผู้ใช้ควรอัปเดตอุปกรณ์และซอฟต์แวร์ให้ปลอดภัยตามคำแนะนำของผู้ดูแลระบบ

หมวดที่ 7 การปรับปรุงเงื่อนไข
7.1 สภาเภสัชกรรมอาจปรับปรุงเงื่อนไขนี้ได้ตามความเหมาะสม
7.2 การเปลี่ยนแปลงสำคัญจะแจ้งให้ทราบผ่านช่องทางที่กำหนด
7.3 การใช้งานต่อหลังมีการปรับปรุง ถือว่าท่านยอมรับเงื่อนไขฉบับล่าสุด

หมวดที่ 8 บทสรุป
8.1 หากข้อความใดในเงื่อนไขนี้ไม่มีผลใช้บังคับ ข้อความส่วนอื่นยังคงมีผลใช้บังคับต่อไป
8.2 เงื่อนไขนี้อยู่ภายใต้กฎหมายที่เกี่ยวข้องของราชอาณาจักรไทย

การกด "ยอมรับ" ถือว่าท่านได้อ่าน เข้าใจ และยอมรับเงื่อนไขข้างต้นครบถ้วนแล้ว`,
  termsAccept: "ยอมรับ",
  termsScrollHint: "เลื่อนอ่านจนถึงด้านล่างสุดเพื่อยอมรับ",
  termsCancel: "ยกเลิก",
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
  idOrPassport: "National ID / Passport",
  phoneOrEmail: "Phone number / E-mail",
  backToSignIn: "Back to sign in",
  forgotPassword: "Forgot password?",
  forgotPasswordTitle: "Forgot password",
  forgotPasswordHint1: "Please enter the email you use to sign in",
  forgotPasswordHint2: "We will send a password reset link to your email",
  emailLabel: "Email",
  emailPlaceholder: "example@mail.com",
  sendResetLink: "Send reset link",
  backToLogin: "Back to login",
  forgotPasswordSpamTip: "If you don't see the email, please check your Spam folder",
  termsTitle: "Terms of use and personal data protection policy",
  termsBody: `This document is a mock-up for system testing only and is not a real legal document.

Section 1 Purpose of use
1.1 Users agree to use the network for its intended purpose and not for illegal activities.
1.2 This network supports official work, communication, and access to Pharmacy Council services.
1.3 Commercial personal use is not allowed unless written permission is granted.

Section 2 System security
2.1 The Pharmacy Council may log connection data for security and system maintenance.
2.2 Users must keep usernames and passwords confidential and must not share them.
2.3 Suspected unauthorized access must be reported to the system administrator immediately.
2.4 Attempts to breach systems, intercept data, or disrupt the network are prohibited.

Section 3 Personal data
3.1 Personal data will be used only for identity verification and network service.
3.2 Data will be retained as needed for service delivery and as required by law.
3.3 Users may request access to or correction of their personal data through designated channels.
3.4 Data may be disclosed when required by law or to protect the organization's lawful rights.

Section 4 Acceptable use
4.1 Users must not distribute inappropriate content, infringe others' rights, or disrupt the network.
4.2 Downloading or sharing pirated software, malware, or harmful files is prohibited.
4.3 Harassment, threats, or actions that harm individuals or organizations are not allowed.
4.4 Users must respect others' privacy and internal policies at all times.

Section 5 Service limits and suspension
5.1 Network access may be restricted according to organizational security policies.
5.2 The Pharmacy Council reserves the right to suspend access if misuse is found.
5.3 Scheduled maintenance may temporarily interrupt service.
5.4 Administrators may inspect and manage connected devices when security requires it.

Section 6 User responsibilities
6.1 Users should sign out after finishing on shared devices.
6.2 Users are responsible for all activity under their accounts.
6.3 Service issues should be reported through the designated contact channels.
6.4 Users should keep devices and software updated as advised by administrators.

Section 7 Updates to these terms
7.1 The Pharmacy Council may update these terms as appropriate.
7.2 Material changes will be announced through designated channels.
7.3 Continued use after updates means acceptance of the latest terms.

Section 8 Closing
8.1 If any clause is unenforceable, the remaining clauses remain in effect.
8.2 These terms are governed by the applicable laws of Thailand.

By tapping "Accept", you confirm that you have fully read, understood, and agreed to the terms above.`,
  termsAccept: "Accept",
  termsScrollHint: "Scroll to the bottom to accept",
  termsCancel: "Cancel",
};

export const dictionaries: Record<Locale, Dictionary> = { th, en };

export const LOCALE_STORAGE_KEY = "portal-lang";
