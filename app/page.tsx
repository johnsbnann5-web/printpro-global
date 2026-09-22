"use client";

import { FormEvent, useState } from "react";

const products = [
  { number: "01", title: "Hang Tags & Clothing Labels", detail: "Your primary product line, made to spec for apparel brands.", mark: "TAG", featured: true },
  { number: "02", title: "Packaging Boxes", detail: "Protective structures with a strong shelf presence.", mark: "BOX" },
  { number: "03", title: "Labels & Stickers", detail: "Sharp, durable labels for products and packaging.", mark: "LAB" },
  { number: "04", title: "Catalog & Brochure Printing", detail: "Printed stories for sales teams, retail and trade.", mark: "CAT" },
  { number: "05", title: "Paper Bags", detail: "Branded carry solutions for a memorable handoff.", mark: "BAG" },
  { number: "06", title: "Custom Printing", detail: "A flexible print partner for the work between categories.", mark: "CST" },
];

const processSteps = [
  ["01", "Share your brief", "Send your artwork, dimensions, quantities and delivery needs."],
  ["02", "Review & sample", "We align on materials, finishes and a production-ready sample."],
  ["03", "Produce with precision", "Your order moves through a controlled production workflow."],
  ["04", "Pack & deliver", "Quality-checked goods are prepared for their next destination."],
];

const faqs = [
  ["What is your MOQ?", "MOQ depends on the product, size, material, finishing and production requirements. Tell us what you need and we will advise on the most practical quantity."],
  ["Can I request a sample before production?", "Yes. Sample options can be discussed during quotation, especially when material, structure or finishing needs to be reviewed before a production order."],
  ["Which artwork files do you accept?", "Please send production-ready artwork when available. We can review common print file formats and let you know if anything needs adjustment before production."],
  ["Can you produce custom finishes?", "Yes. Hang tags and printed packaging can be specified with options such as foil stamping, embossing or debossing, spot UV and die cutting, depending on the project."],
  ["How long does production take?", "Lead time varies by product, quantity, materials, finishing and whether sampling is needed. We will confirm timing after reviewing your complete brief."],
  ["Do you ship internationally?", "We support inquiries from international buyers and can discuss destination, packing and delivery requirements as part of the quotation process."],
];

function Arrow() {
  return <span aria-hidden="true" className="text-lg leading-none">↗</span>;
}

function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return <div className="quote-success"><span>✓</span><h3>Thanks for the brief.</h3><p>Your inquiry is ready for review. This front-end demo does not send data yet; connect it to your preferred sales inbox or CRM when ready.</p><button type="button" className="text-link" onClick={() => setSubmitted(false)}>Send another inquiry <Arrow /></button></div>;
  }

  return <form className="quote-form" onSubmit={handleSubmit}>
    <div className="form-field"><label htmlFor="product-type">Product type</label><select id="product-type" name="product-type" defaultValue="Hang Tags & Clothing Labels" required><option>Hang Tags & Clothing Labels</option><option>Packaging Boxes</option><option>Labels & Stickers</option><option>Catalog & Brochure Printing</option><option>Paper Bags</option><option>Custom Printing</option></select></div>
    <div className="form-field"><label htmlFor="size">Size</label><input id="size" name="size" placeholder="e.g. 50 x 90 mm" required /></div>
    <div className="form-field"><label htmlFor="material">Material</label><input id="material" name="material" placeholder="e.g. coated, kraft, uncoated" required /></div>
    <div className="form-field"><label htmlFor="quantity">Quantity</label><input id="quantity" name="quantity" placeholder="Approximate quantity" required /></div>
    <div className="form-field form-wide"><label htmlFor="finishing">Printing / finishing requirements</label><textarea id="finishing" name="finishing" rows={3} placeholder="Colors, foil, embossing, die cut, string or attachment details" /></div>
    <div className="form-field"><label htmlFor="artwork">Artwork availability</label><select id="artwork" name="artwork" defaultValue="Artwork ready"><option>Artwork ready</option><option>Artwork in progress</option><option>Need production guidance</option></select></div>
    <div className="form-field"><label htmlFor="destination">Destination country</label><input id="destination" name="destination" placeholder="Where should we ship?" required /></div>
    <div className="form-field"><label htmlFor="contact">Contact information</label><input id="contact" name="contact" placeholder="Name, email or WhatsApp" required /></div>
    <button type="submit" className="button form-submit">Request a quote <Arrow /></button>
  </form>;
}

export default function Home() {
  return <main>
    <header className="site-header"><div className="shell header-inner"><a href="#top" className="brand" aria-label="PrintPro Global home"><span className="brand-mark">P<span>+</span></span><span>PrintPro <em>Global</em></span></a><nav className="desktop-nav" aria-label="Main navigation"><a href="#hang-tags">Hang tags</a><a href="#capabilities">Capabilities</a><a href="#process">How it works</a><a href="#faq">FAQ</a></nav><a href="#quote" className="button button-small">Request a quote <Arrow /></a><details className="mobile-menu"><summary aria-label="Open navigation"><span /><span /></summary><nav aria-label="Mobile navigation"><a href="#hang-tags">Hang tags</a><a href="#capabilities">Capabilities</a><a href="#process">How it works</a><a href="#faq">FAQ</a></nav></details></div></header>

    <section id="top" className="hero"><div className="hero-grid" /><div className="shell hero-content"><div className="eyebrow"><span className="eyebrow-line" /> Hang tags & clothing labels</div><h1>Custom Hang Tags<br /><span>Made for</span> Global<br />Fashion Brands</h1><p className="hero-copy">PrintPro Global manufactures custom hang tags, clothing labels and supporting print for apparel brands, importers and wholesalers worldwide.</p><div className="hero-actions"><a href="#quote" className="button">Request a quote <Arrow /></a><a href="#hang-tags" className="text-link">Explore hang tags <Arrow /></a></div><div className="hero-note"><span className="status-dot" /> Direct manufacturing support from brief to shipment.</div></div><div className="hero-visual" aria-label="Placeholder for a future close-up photograph of custom apparel hang tags"><div className="visual-label">PHOTO PLACEHOLDER / HANG TAG DETAIL</div><div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" /><div className="visual-sheet sheet-back" /><div className="visual-sheet sheet-front"><span>TAG<br />YOUR<br />STORY</span></div><div className="visual-caption"><strong>Future image</strong><br />Close-up of tags, stock and finish.</div></div><div className="hero-index">01 <span>/</span> 04</div></section>

    <section id="products" className="section products-section"><div className="shell"><div className="section-heading"><div><p className="kicker">What we manufacture</p><h2>Print that carries<br /><i>your brand forward.</i></h2></div><p className="section-intro">A production-focused print partner for the physical moments between your brand and its customers.</p></div><div className="product-grid">{products.map((product) => <a className={`product-card${product.featured ? " product-card-featured" : ""}`} href={product.featured ? "#hang-tags" : "#quote"} key={product.number}><span className="card-number">{product.number}</span>{product.featured && <span className="primary-label">Primary category</span>}<div className="product-mark">{product.mark}</div><div className="product-card-bottom"><h3>{product.title}</h3><p>{product.detail}</p><span className="card-arrow"><Arrow /></span></div></a>)}</div></div></section>

    <section id="hang-tags" className="section hang-tags-section"><div className="shell hang-tags-layout"><div className="hang-tags-visual" aria-label="Placeholder for real product photography showing a range of custom hang tags"><span>PRODUCT PHOTO PLACEHOLDER<br />APPAREL HANG TAG RANGE</span><div className="hang-tags-stack"><i /><i /><i /></div><small>Insert real product photo:<br />front, reverse, hole and attachment detail.</small></div><div className="hang-tags-copy"><p className="kicker">Featured product / 01</p><h2>Hang tags made<br /><i>to your spec.</i></h2><p>From everyday garment tags to considered brand cards, we help apparel teams choose the right combination of paper, print, shape and attachment for the finished product.</p><div className="spec-grid"><div><strong>01</strong><span>Custom sizes & shapes</span></div><div><strong>02</strong><span>Coated or uncoated paper</span></div><div><strong>03</strong><span>Kraft paper options</span></div><div><strong>04</strong><span>Foil stamping</span></div><div><strong>05</strong><span>Embossing / debossing</span></div><div><strong>06</strong><span>Spot UV & die cutting</span></div><div><strong>07</strong><span>String & attachment options</span></div></div><a href="#quote" className="text-link">Configure your hang tags <Arrow /></a></div></div></section>

    <section className="section why-section"><div className="shell why-layout"><div className="why-title"><p className="kicker">Why PrintPro Global</p><h2>Good printing is<br /><i>good business.</i></h2><p>When every detail matters, you need a manufacturer and supplier who understands the whole picture.</p></div><div className="principles"><div><span>01</span><h3>Made for the real world</h3><p>Materials and finishes chosen for how products are handled, shipped and seen.</p></div><div><span>02</span><h3>Clarity at every step</h3><p>Clear specifications, responsive communication and practical production advice.</p></div><div><span>03</span><h3>Ready to scale with you</h3><p>From an initial run to recurring orders, a process built to stay dependable.</p></div></div></div></section>

    <section id="process" className="section process-section"><div className="shell"><div className="section-heading process-heading"><div><p className="kicker">From idea to arrival</p><h2>A smoother way<br /><i>to get print done.</i></h2></div><p className="section-intro">Simple on the surface. Thoughtful behind the scenes. We make it easy to move from a first conversation to a finished order.</p></div><div className="process-grid">{processSteps.map(([number, title, detail]) => <div className="process-step" key={number}><span>{number}</span><div className="step-line" /><h3>{title}</h3><p>{detail}</p></div>)}</div></div></section>

    <section id="capabilities" className="capabilities-section"><div className="shell capabilities-layout"><div className="capability-visual" aria-label="Placeholder for a future photograph of the printing and finishing floor"><span>FACTORY PHOTO PLACEHOLDER<br />PRINTING + FINISHING FLOOR</span><div className="capability-stamp">PP<br /><small>GLOBAL</small></div><small>Insert real photo: press, finishing<br />or packing workflow.</small></div><div className="capability-copy"><p className="kicker">Built around your brief</p><h2>A manufacturer<br />with <i>room to think.</i></h2><p>Tell us the finished result you need and we can work backward through the production details. The more specific the brief, the more useful the first quotation.</p><div className="capability-list"><div><strong>01</strong><span>Paper & board selection</span></div><div><strong>02</strong><span>Custom size, shape & structure</span></div><div><strong>03</strong><span>Print & finishing options</span></div><div><strong>04</strong><span>String, attachment & packing</span></div></div><div className="send-us"><strong>For a useful quote, send:</strong><span>Product type, size, material, quantity, finish, artwork status and destination country.</span></div><a href="#quote" className="text-link">Send your production brief <Arrow /></a></div></div></section>

    <section id="faq" className="section faq-section"><div className="shell faq-layout"><div><p className="kicker">International buyer guide</p><h2>Questions,<br /><i>answered.</i></h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

    <section id="quote" className="quote-section"><div className="shell quote-layout"><div className="quote-intro"><p className="kicker light">Request a quote</p><h2>Bring us<br /><i>the brief.</i></h2><p>Give us the essentials and our team can review the right production route for your order. No commitment, no invented numbers, just a useful starting point for a conversation.</p><div className="quote-note"><span>01</span><p>All fields help us understand your project. Exact specifications can be confirmed after the first review.</p></div></div><QuoteForm /></div></section>

    <footer className="site-footer"><div className="shell footer-top"><a href="#top" className="brand"><span className="brand-mark">P<span>+</span></span><span>PrintPro <em>Global</em></span></a><div className="footer-links"><div><span>Explore</span><a href="#hang-tags">Hang tags</a><a href="#capabilities">Capabilities</a><a href="#process">How it works</a></div><div><span>Contact</span><a href="mailto:hello@printpro.global">hello@printpro.global</a><a href="#quote">Request a quote</a></div></div></div><div className="shell footer-bottom"><span>© 2026 PrintPro Global. Custom printing for global brands.</span><span>Made for what is next <b>↗</b></span></div></footer>
+  </main>;
}
