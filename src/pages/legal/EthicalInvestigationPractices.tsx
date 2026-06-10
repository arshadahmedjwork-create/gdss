import LegalPage from "./LegalPage";

const EthicalInvestigationPractices = () => (
  <LegalPage
    title="Ethical Investigation Practices"
    updated="9 June 2026"
    intro="GDSS conducts investigation and verification work within legal, professional, and privacy-conscious boundaries."
    sections={[
      { heading: "Professional Boundaries", body: ["Assignments must have a legitimate purpose and must not be used for harassment, intimidation, stalking, or unlawful surveillance.", "Investigators are expected to use proportionate methods and avoid unnecessary intrusion."] },
      { heading: "Evidence Integrity", body: ["Findings are separated from assumptions, and high-risk claims are corroborated where practical.", "Reports identify verification status, open questions, and limitations in the available information."] },
      { heading: "Subject Dignity", body: ["Even in sensitive or adverse cases, GDSS avoids tactics that create avoidable harm, public embarrassment, or unsafe confrontation.", "Matrimonial and family cases receive additional discretion because of their personal impact."] },
    ]}
  />
);

export default EthicalInvestigationPractices;
