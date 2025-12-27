import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

const InformationSecurityPolicyPage = () => {
  return (
    <div className="bg-white font-montserrat">
      <Header isHeroInView={false} />

      <main>
        <LegalPageLayout>
          <h1>Information Security Policy</h1>
          <p>
            At NaijaSpora, protecting information is essential for our business, customers, and partners. We are fully committed to safeguarding sensitive information in compliance with all relevant laws and regulations.
          </p>
          <p>
            To support reliable, uninterrupted service, we&apos;ve implemented an Information Security Management System (ISMS) aligned with ISO/IEC 27001 standards. This system is core to NaijaSpora’s commitment to operational excellence, designed to ensure the confidentiality, integrity, and availability of information across our organization.
          </p>

          <h2>Our Commitment:</h2>
          <ul>
            <li>Setting clear ISMS objectives and dedicating resources to achieve them.</li>
            <li>Complying with all legal and regulatory requirements, including ISO 27001:2022.</li>
            <li>Protecting critical assets to prevent disruptions and protect stakeholder trust.</li>
            <li>Providing robust security training to all employees to foster awareness and compliance.</li>
            <li>Continuously updating and strengthening our ISMS to maintain ISO 27001 certification and meet evolving standards.</li>
            <li>Regularly reviewing policies and procedures to ensure effectiveness and relevance.</li>
            <li>Using a proactive risk management framework to identify and mitigate information security risks.</li>
          </ul>

          <h2>EMPLOYEE AND PARTNER RESPONSIBILITIES</h2>
          <p>NaijaSpora ensures that all employees, contractors, and relevant partners:</p>
          <ul>
            <li>Are well-informed and trained on our security practices.</li>
            <li>Understand their responsibilities for maintaining information security.</li>
            <li>Adhere to policies and procedures designed to protect sensitive information.</li>
          </ul>

          <h2>POLICY ACCESSIBILITY</h2>
          <p>
            Our Information Security policies are made accessible to employees, contractors, and stakeholders as necessary. This ensures transparency and facilitates compliance across the organization.
          </p>

          <h2>CONTINUOUS REVIEW</h2>
          <p>NaijaSpora reviews this policy regularly to remain responsive to:</p>
          <ul>
            <li>Changes in regulatory requirements.</li>
            <li>Evolving business needs.</li>
            <li>Emerging threats and vulnerabilities.</li>
          </ul>
          <p>This proactive approach ensures our ISMS and overall security posture remain robust and effective.</p>

        </LegalPageLayout>
      </main>

      <Footer />
    </div>
  );
};

export default InformationSecurityPolicyPage;