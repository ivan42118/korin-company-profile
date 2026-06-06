"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logoKorin from "../../assets/logo-korin.png";
import { navLinks } from "../../content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <Link href="/" className="brand" aria-label="PT Korin Technomic home">
          <Image src={logoKorin} alt="" width={52} height={52} priority />
          <span>
            <strong>KORIN</strong>
            <small>TECHNOMIC</small>
          </span>
        </Link>

        <nav className="navbar__links" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/#contact" className="nav-cta">
          Start Inquiry <span aria-hidden="true">-&gt;</span>
        </Link>

        <button className="menu-button" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu size={24} />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className="mobile-menu__close" onClick={() => setOpen(false)} aria-label="Close menu">
              <X size={28} />
            </button>
            <nav>
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <Link href={link.href} onClick={() => setOpen(false)}>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.06 }}
              >
                <Link href="/#contact" className="btn-primary mobile-menu__cta" onClick={() => setOpen(false)}>
                  Start Inquiry <span aria-hidden="true">-&gt;</span>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
