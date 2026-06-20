import Image from "next/image";
import styles from "./Footer.module.css";

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 27 25"
      className={styles.iconInstagram}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M19.5015 0H6.50931C2.92 0 0 2.92086 0 6.51123V18.4007C0 21.991 2.92 24.9119 6.50931 24.9119H19.5015C23.0908 24.9119 26.0108 21.991 26.0108 18.4007V6.51123C26.0108 2.92086 23.0908 0 19.5015 0ZM2.29628 6.51123C2.29628 4.18779 4.18655 2.29695 6.50931 2.29695H19.5015C21.8242 2.29695 23.7145 4.18779 23.7145 6.51123V18.4007C23.7145 20.7241 21.8242 22.6149 19.5015 22.6149H6.50931C4.18655 22.6149 2.29628 20.7241 2.29628 18.4007V6.51123Z"
        fill="white"
      />
      <path
        d="M13.0055 18.5106C16.3432 18.5106 19.0602 15.7942 19.0602 12.454C19.0602 9.11378 16.3447 6.39746 13.0055 6.39746C9.66621 6.39746 6.95068 9.11378 6.95068 12.454C6.95068 15.7942 9.66621 18.5106 13.0055 18.5106ZM13.0055 8.69589C15.0781 8.69589 16.7639 10.3822 16.7639 12.4555C16.7639 14.5288 15.0781 16.2151 13.0055 16.2151C10.9328 16.2151 9.24697 14.5288 9.24697 12.4555C9.24697 10.3822 10.9328 8.69589 13.0055 8.69589Z"
        fill="white"
      />
      <path
        d="M19.6204 7.37797C20.5192 7.37797 21.2518 6.64665 21.2518 5.74612C21.2518 4.84558 20.5207 4.11426 19.6204 4.11426C18.7201 4.11426 17.989 4.84558 17.989 5.74612C17.989 6.64665 18.7201 7.37797 19.6204 7.37797Z"
        fill="white"
      />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className={styles.iconTiktok}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
        fill="white"
      />
    </svg>
  );
}

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/bscreative.sa", Icon: InstagramIcon },
  { label: "TikTok", href: "https://www.tiktok.com/@bscreative.sa", Icon: TikTokIcon },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.row}>
          {/* Logo — right (RTL start) */}
          <a href="#top" aria-label="BS Creative" className={styles.logo}>
            <Image
              src="/logo.png"
              alt="BS Creative"
              width={195}
              height={77}
              className={styles.logoImg}
            />
          </a>

          {/* Social icons — grey circle by default, main brand on hover */}
          <div className={styles.socials}>
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={styles.socialLink}
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* Contact — left (RTL end). Phone → WhatsApp chat, email mailto: */}
          <address className={styles.contact}>
            <a
              href="https://wa.me/966506055708"
              target="_blank"
              rel="noopener noreferrer"
              dir="ltr"
              className={styles.contactLink}
            >
              +966 50 605 5708
            </a>
            <a
              href="mailto:info@bscreative.com"
              dir="ltr"
              className={styles.contactLink}
            >
              info@bscreative.com
            </a>
            <span>adress line 45</span>
          </address>
        </div>

        <p className={styles.copyright}>© 2026 جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
}
