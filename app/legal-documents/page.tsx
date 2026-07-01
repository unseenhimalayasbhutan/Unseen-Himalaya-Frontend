import { FileText } from "lucide-react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { CtaSection } from "../components/CtaSection";

const legalDocuments = [
  {
    title: "Technical Clearance",
    note: "Official document image pending upload",
  },
  {
    title: "Business License",
    note: "Official document image pending upload",
  },
];

export default function LegalDocumentsPage() {
  return (
    <>
      <Header />

      <main className="legal-documents-page">
        <section className="legal-documents-section">
          <h1>Legal Documents</h1>

          <div className="legal-documents-grid">
            {legalDocuments.map((document) => (
              <article key={document.title} className="legal-document-card">
                <h2>{document.title}</h2>

                <div className="legal-document-placeholder" role="note">
                  <FileText aria-hidden="true" />
                  <strong>{document.title}</strong>
                  <span>{document.note}</span>
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
