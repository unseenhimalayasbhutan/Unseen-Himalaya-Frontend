import { Download, ExternalLink, FileText, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { CtaSection } from "../components/CtaSection";

const legalDocuments = [
  {
    title: "Technical Clearance",
    description: "Official technical clearance for Unseen Himalayas Bhutan.",
    href: "/legal-documents/technical-clearance.pdf",
    preview: "/legal-documents/technical-clearance-preview.png",
    previewAlt: "Technical Clearance certificate for Unseen Himalayas Bhutan",
  },
  {
    title: "Business License",
    description: "Official business license for Unseen Himalayas Bhutan.",
    href: "/legal-documents/business-license.pdf",
    preview: "/legal-documents/business-license-preview.png",
    previewAlt: "Business License certificate for Unseen Himalayas Bhutan",
  },
];

const verificationHref =
  "https://services.bhutan.travel/search/tour-operator?company_name=Unseen%20Himalayas";

export default function LegalDocumentsPage() {
  return (
    <>
      <Header />

      <main className="legal-documents-page">
        <section className="legal-documents-section">
          <h1>Legal Documents</h1>
          <p className="legal-documents-intro">
            View our official operator documents below, or verify Unseen
            Himalayas directly through the Bhutan Travel operator search.
          </p>

          <a
            href={verificationHref}
            className="legal-documents-verify-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShieldCheck aria-hidden="true" />
            Verify us on Bhutan Travel
            <ExternalLink aria-hidden="true" />
          </a>

          <div className="legal-documents-grid">
            {legalDocuments.map((document) => (
              <article key={document.title} className="legal-document-card">
                <h2>{document.title}</h2>
                <p>{document.description}</p>

                <div className="legal-document-preview">
                  <Image
                    src={document.preview}
                    alt={document.previewAlt}
                    width={1488}
                    height={2105}
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="legal-document-preview-image"
                  />
                </div>

                <div className="legal-document-actions">
                  <a href={document.href} target="_blank" rel="noopener noreferrer">
                    <FileText aria-hidden="true" />
                    Open PDF
                  </a>
                  <a href={document.href} download>
                    <Download aria-hidden="true" />
                    Download
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <CtaSection />
      <Footer />
    </>
  );
}
