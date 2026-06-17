import Image from "next/image";
import styles from "./Footer.module.css";

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className={styles.iconLinkedin}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M0.828173 4.61156C0.275065 4.09802 0 3.46236 0 2.70602C0 1.94969 0.276536 1.28606 0.828173 0.771046C1.38128 0.257505 2.09326 0 2.96558 0C3.83791 0 4.52195 0.257505 5.07358 0.771046C5.62669 1.28459 5.90176 1.93056 5.90176 2.70602C5.90176 3.48149 5.62522 4.09802 5.07358 4.61156C4.52047 5.1251 3.81878 5.38261 2.96558 5.38261C2.11239 5.38261 1.38128 5.1251 0.828173 4.61156ZM5.43692 7.55744V23.3021H0.46336V7.55744H5.43692Z"
        fill="#FEFFFC"
      />
      <path
        d="M21.9935 9.11439C23.0777 10.2916 23.619 11.9072 23.619 13.9643V23.0256H18.8956V14.603C18.8956 13.5656 18.6264 12.7592 18.0895 12.1853C17.5525 11.6115 16.8288 11.3231 15.9226 11.3231C15.0165 11.3231 14.2927 11.61 13.7558 12.1853C13.2188 12.7592 12.9496 13.5656 12.9496 14.603V23.0256H8.19824V7.51491H12.9496V9.57201C13.4307 8.88631 14.0794 8.34482 14.8944 7.94606C15.7093 7.54729 16.6258 7.34863 17.6452 7.34863C19.4605 7.34863 20.9109 7.93722 21.9935 9.11292V9.11439Z"
        fill="#FEFFFC"
      />
    </svg>
  );
}

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

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/", Icon: InstagramIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/", Icon: LinkedInIcon },
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

          {/* Contact — left (RTL end). Phone tel:, email mailto: */}
          <address className={styles.contact}>
            <a href="tel:+966535976279" dir="ltr" className={styles.contactLink}>
              +966 535 976 279
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
