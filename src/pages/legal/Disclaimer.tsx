import LegalPage from "./LegalPage";

const Disclaimer = () => (
  <LegalPage
    title="Disclaimer"
    updated="9 June 2026"
    intro="Website content and sample materials are informational and do not replace legal, financial, employment, or insurance advice."
    sections={[
      { heading: "No Guaranteed Outcome", body: ["Investigation findings depend on available information, lawful access, location constraints, and cooperation from relevant sources.", "GDSS does not guarantee that every fact, person, record, or asset can be located or verified."] },
      { heading: "Professional Advice", body: ["Clients should consult legal counsel, HR advisors, insurance specialists, or financial advisors before taking formal action based on any report.", "GDSS reports support decision-making but do not determine legal liability."] },
      { heading: "Sample Reports", body: ["Sample reports are illustrative, redacted, and simplified for website review.", "Actual deliverables vary by assignment scope, evidence availability, and client requirements."] },
    ]}
  />
);

export default Disclaimer;
