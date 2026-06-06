"use client";

import { CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { site } from "../../content";
import { Reveal } from "../ui/Reveal";
import { SplitHeadline } from "../ui/SplitHeadline";

type FormState = {
  name: string;
  company: string;
  email: string;
  productType: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  company: "",
  email: "",
  productType: "",
  message: "",
};

export function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const errors = useMemo(() => {
    return {
      name: form.name.trim() ? "" : "Name is required.",
      company: form.company.trim() ? "" : "Company is required.",
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? "" : "Enter a valid email.",
      productType: form.productType ? "" : "Select a product type.",
      message: form.message.trim().length >= 12 ? "" : "Tell us a little more about your project.",
    };
  }, [form]);

  const update = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched({ name: true, company: true, email: true, productType: true, message: true });
    if (Object.values(errors).some(Boolean)) return;
    setLoading(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `New Inquiry from ${form.name} — ${form.company}`,
          from_name: form.name,
          ...form,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setForm(initialForm);
      } else {
        throw new Error(data.message);
      }
    } catch (err) {
      console.error("Form submission error:", err);
      alert("Gagal mengirim pesan. Silakan coba lagi atau hubungi kami via email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-shell contact-grid">
        <Reveal>
          <p className="label">Get In Touch</p>
          <SplitHeadline text="Ready to Start Your Project?" />
          <p>
            Tell us about your requirements. Our engineering team will get back to you within 24 hours.
          </p>
          <div className="contact-info">
            <ContactInfo icon={<MapPin size={20} />} label="Tangerang" value={site.address} />
            <ContactInfo icon={<MapPin size={20} />} label="Cirebon" value={site.addressCirebon} />
            <ContactInfo icon={<Mail size={20} />} label="Email" value={site.email} />
            <ContactInfo icon={<Phone size={20} />} label="Phone" value={site.phone} />
            <ContactInfo icon={<Clock size={20} />} label="Working Hours" value={site.hours} />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {submitted && (
              <div className="success-message">
                <CheckCircle2 size={20} />
                Inquiry received. We will respond shortly.
              </div>
            )}
            <Field label="Name" error={touched.name ? errors.name : ""}>
              <input value={form.name} onBlur={() => setTouched((x) => ({ ...x, name: true }))} onChange={(e) => update("name", e.target.value)} />
            </Field>
            <Field label="Company" error={touched.company ? errors.company : ""}>
              <input value={form.company} onBlur={() => setTouched((x) => ({ ...x, company: true }))} onChange={(e) => update("company", e.target.value)} />
            </Field>
            <Field label="Email" error={touched.email ? errors.email : ""}>
              <input type="email" value={form.email} onBlur={() => setTouched((x) => ({ ...x, email: true }))} onChange={(e) => update("email", e.target.value)} />
            </Field>
            <Field label="Product Type" error={touched.productType ? errors.productType : ""}>
              <select value={form.productType} onBlur={() => setTouched((x) => ({ ...x, productType: true }))} onChange={(e) => update("productType", e.target.value)}>
                <option value="">Select one</option>
                <option>Footwear Components</option>
                <option>Plastic Injection Parts</option>
                <option>Synthetic Rattan</option>
                <option>Mold / Tooling</option>
                <option>Other</option>
              </select>
            </Field>
            <Field label="Message" error={touched.message ? errors.message : ""}>
              <textarea rows={4} value={form.message} onBlur={() => setTouched((x) => ({ ...x, message: true }))} onChange={(e) => update("message", e.target.value)} />
            </Field>
            <button className="button button--primary contact-submit" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Inquiry"} <span>-&gt;</span>
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className={`field ${error ? "field--error" : ""}`}>
      <span>{label}</span>
      {children}
      {error ? <small>{error}</small> : null}
    </label>
  );
}

function ContactInfo({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <article>
      {icon}
      <span>{label}</span>
      <strong>{value}</strong>
    </article>
  );
}
