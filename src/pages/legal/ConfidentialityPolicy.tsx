import LegalPage from "./LegalPage";

const ConfidentialityPolicy = () => {
  return (
    <LegalPage
      title="Confidentiality Policy"
      updated="9 June 2026"
      intro="Confidentiality is central to GDSS case handling for corporate, matrimonial, insurance, NRI, and due diligence assignments."
      sections={[
        { heading: "Need-to-Know Access", body: ["Case details are shared only with authorized staff, investigators, or field partners who require them to complete the approved scope.", "Sensitive client identities and subject details are minimized wherever practical."] },
        { heading: "Client Communications", body: ["Updates may be shared by phone, email, or WhatsApp with authorized contacts specified during intake.", "GDSS avoids exposing case names, subject identities, or sensitive facts in unnecessary message previews or public channels."] },
        { heading: "Reports and Evidence", body: ["Reports are intended for the client or authorized legal/compliance team only.", "Clients should store reports securely and avoid forwarding them beyond the agreed purpose."] },
        { heading: "Exceptions", body: ["Confidentiality may be limited where disclosure is required by law, court order, client authorization, or immediate safety concerns.", "GDSS does not support illegal surveillance, intimidation, or misuse of private information."] },
      ]}
    />
  );
};

export default ConfidentialityPolicy;
