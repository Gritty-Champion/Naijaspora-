import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

const AcceptableUsePolicyPage = () => {
  return (
    <div className="bg-white font-montserrat">
      <Header isHeroInView={false} />

      <main>
        <LegalPageLayout>
          <h1>Acceptable Use Policy</h1>
          <p>
            This Acceptable Use Policy (&quot;Policy&quot;) outlines the rules and guidelines for using NaijaSpora&apos;s services, website, mobile applications, and all related platforms (collectively, the &quot;Services&quot;). By accessing or using our Services, you agree to comply with this Policy.
          </p>
          <p>
            This Policy applies to your use of our Services through any device — desktop, laptop, mobile phone, tablet, or other internet-enabled device (each, a &quot;Device&quot;).
          </p>
          <p>
            This Policy does not apply to services not owned or controlled by NaijaSpora, including third-party websites or applications linked through our platform. Please review the terms and policies of these third parties before using their services.
          </p>

          <h2>PROHIBITED ACTIVITIES</h2>
          <p>
            You agree not to use NaijaSpora&apos;s Services for any unlawful or harmful purposes. Prohibited activities include, but are not limited to:
          </p>
          <ul>
            <li><strong>ILLEGAL ACTIVITIES:</strong> Engaging in fraud, money laundering, or other illegal actions.</li>
            <li><strong>MISUSE OF SERVICES:</strong> Attempting to interfere with the operation of the platform, including hacking, data scraping, or distributing malware.</li>
            <li><strong>SPAM AND UNAUTHORIZED COMMUNICATIONS:</strong> Sending unsolicited messages, advertisements, or promotional materials without consent.</li>
            <li><strong>OFFENSIVE OR HARMFUL CONTENT:</strong> Uploading, sharing, or distributing content that is abusive, defamatory, obscene, or discriminatory.</li>
            <li><strong>VIOLATION OF OTHERS&apos; RIGHTS:</strong> Infringing on intellectual property, privacy, or other rights of third parties.</li>
            <li><strong>IMPERSONATION OR DECEPTION:</strong> Misrepresenting your identity or creating accounts for deceptive purposes.</li>
            <li><strong>UNAUTHORIZED FINANCIAL OR TRAVEL TRANSACTIONS:</strong> Attempting transactions that violate regulations, terms, or platform rules.</li>
          </ul>
          <p>
            NaijaSpora reserves the right to take action against users engaging in prohibited activities, including account suspension or termination.
          </p>

          <h2>USER RESPONSIBILITIES</h2>
          <p>As a user of NaijaSpora&apos;s Services, you are responsible for:</p>
          <ul>
            <li>Maintaining the confidentiality of your account credentials.</li>
            <li>Providing accurate, complete, and current information during registration and service use.</li>
            <li>Using the Services in compliance with applicable laws, regulations, and this Policy.</li>
            <li>Reporting any unauthorized use of your account or security breaches.</li>
            <li>Ensuring that your use of third-party services accessed via NaijaSpora complies with their respective policies.</li>
          </ul>

          <h2>SERVICE MONITORING AND ENFORCEMENT</h2>
          <p>
            NaijaSpora may monitor activity on its platform to ensure compliance with this Policy, prevent abuse, and protect the integrity of our Services.
          </p>
          <p>
            NaijaSpora may monitor activity on its platform to ensure compliance with this Policy, prevent abuse, and protect the integrity of our Services.
          </p>
          <ul>
            <li>Warnings or temporary restrictions.</li>
            <li>Suspension or termination of your account.</li>
            <li>Reporting to law enforcement or regulatory authorities, where required.</li>
          </ul>

          <h2>DATA USAGE AND PRIVACY</h2>
          <p>
            All information collected during your use of NaijaSpora&apos;s Services is handled in accordance with our Privacy Policy. Monitoring for compliance does not compromise our commitment to protecting your personal data.
          </p>
          
          <h2>THIRD-PARTY SERVICES</h2>
          <p>
            Your use of third-party websites, applications, or services accessed via NaijaSpora is subject to the acceptable use policies and rules of those services. NaijaSpora is not responsible for the content, conduct, or practices of third-party services.
          </p>

          <h2>CHANGES TO THESE TERMS</h2>
          <p>
            We may update these Terms periodically to reflect new services, legal requirements, or operational changes. Updates will be posted on this page with a revised &quot;Last Updated&quot; date. Continued use of NaijaSpora after changes constitutes acceptance of the updated Terms.
          </p>
          
          <h2>REPORTING VIOLATIONS</h2>
          <p>
            If you become aware of any activity or content that violates this Policy, you should report it immediately by contacting us at:
          </p>
          <ul>
            <li>reaching out to the customer service support available on the website.</li>
            <li>sending an email to privacy@naijaspora.com</li>
          </ul>
          <p>
            If you feel that we have not addressed your questions or concerns adequately, or you believe that your data protection rights have been infringed, you can complain to your local Data Protection Authority.
          </p>
          
          <p><strong>Last updated: October 5, 2025</strong></p>

        </LegalPageLayout>
      </main>

      <Footer />
    </div>
  );
};

export default AcceptableUsePolicyPage;