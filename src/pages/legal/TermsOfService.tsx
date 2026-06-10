import LegalPage from "./LegalPage";

const TermsOfService = () => {
  return (
    <LegalPage
      title="Terms of Service"
      updated="9 June 2026"
      intro="These terms govern website use, consultation requests, and engagement with GDSS investigation and verification services."
      sections={[
        { heading: "Lawful Purpose Required", body: ["Clients must request services only for lawful, legitimate, and ethical purposes.", "GDSS may refuse, pause, or terminate any assignment that appears unlawful, abusive, deceptive, or outside professional investigation standards."] },
        { heading: "Scope and Deliverables", body: ["Each assignment is governed by the agreed scope, available records, location access, and legal constraints.", "Findings are based on verified observations and available evidence at the time of reporting; no outcome is guaranteed."] },
        { heading: "Client Responsibilities", body: ["Clients must provide accurate information, authority to request the verification, and prompt clarification when needed.", "Clients must not misuse reports for harassment, unlawful surveillance, discrimination, or public disclosure."] },
        { heading: "Fees and Confidentiality", body: ["Fees, timelines, and reporting format are confirmed before paid work begins.", "Both parties are expected to protect confidential information shared during the engagement."] },
      ]}
    />
  );
};

export default TermsOfService;
