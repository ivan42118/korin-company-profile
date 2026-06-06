import Image from "next/image";
import logoKorin from "../../assets/logo-korin.png";
import { footerProducts, navLinks, site } from "../../content";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__line" />
      <div className="section-shell footer__grid">
        <div>
          <a href="#top" className="brand brand--footer" aria-label="PT Korin Technomic home">
            <Image src={logoKorin} alt="" width={54} height={54} />
            <span>
              <strong>KORIN</strong>
              <small>TECHNOMIC</small>
            </span>
          </a>
          <p className="footer__tagline">Precision plastic injection manufacturing from Indonesia.</p>
          <div className="footer__socials">
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="Instagram">Instagram</a>
          </div>
        </div>
        <div>
          <h3>Quick Links</h3>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>
        <div>
          <h3>Products</h3>
          {footerProducts.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div>
          <h3>Contact</h3>
          <span>{site.address}</span>
          <span>{site.addressCirebon}</span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>{site.phone}</span>
          <span>{site.hours}</span>
        </div>
      </div>
      <div className="section-shell footer__bottom">
        <span>© {new Date().getFullYear()} PT Korin Technomic. All rights reserved.</span>
        <em>Crafted with precision.</em>
      </div>
    </footer>
  );
}
