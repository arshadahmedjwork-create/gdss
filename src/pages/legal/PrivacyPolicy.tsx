import LegalPage from "./LegalPage";

const PrivacyPolicy = () => {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="9 June 2026"
      intro="This policy explains how GDSS handles personal information shared for investigation, verification, consultation, and support requests."
      sections={[
        { heading: "Information We Collect", body: ["We collect contact details, case descriptions, service preferences, location information, appointment details, and documents voluntarily submitted through secure inquiry channels.", "We may receive supporting records from clients for lawful verification purposes, including identity, employment, address, claim, vendor, property, or relationship context."] },
        { heading: "How We Use Information", body: ["Information is used to assess requests, plan lawful verification activity, communicate updates, prepare reports, and maintain operational records.", "We do not sell client or subject data. Access is limited to authorized personnel and field partners who need the information for the assigned scope."] },
        { heading: "Data Security", body: ["GDSS uses controlled access, secure communication practices, and confidentiality procedures to reduce unauthorized exposure.", "Clients should not submit unnecessary financial credentials, passwords, or unrelated sensitive material through website forms."] },
        { heading: "Retention and Requests", body: ["Case records are retained only for operational, legal, compliance, and dispute-resolution needs.", "Clients may request correction or deletion of non-essential records, subject to lawful retention obligations and active investigation requirements."] },
      ]}
    />
  );
};

export default PrivacyPolicy;
