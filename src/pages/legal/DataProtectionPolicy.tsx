import LegalPage from "./LegalPage";

const DataProtectionPolicy = () => (
  <LegalPage
    title="Data Protection Policy"
    updated="9 June 2026"
    intro="This page summarizes the safeguards GDSS applies when receiving, processing, storing, and sharing case-related data."
    sections={[
      { heading: "Data Minimization", body: ["GDSS requests only information relevant to the agreed case scope.", "Clients are encouraged to redact unrelated data before sharing documents."] },
      { heading: "Controlled Storage", body: ["Access to case records is limited to authorized personnel and retained only for operational, legal, and compliance needs.", "Digital reports and attachments should be handled through secure client-approved channels."] },
      { heading: "Third-Party Handling", body: ["Field partners receive only the details needed for their assigned verification task.", "GDSS expects partners to preserve confidentiality and avoid secondary use of case data."] },
    ]}
  />
);

export default DataProtectionPolicy;
