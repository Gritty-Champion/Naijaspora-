import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

const TermsOfServicePage = () => {
  return (
    <div className="bg-white font-montserrat">
      <Header isHeroInView={false} />

      <main>
        <LegalPageLayout>
          <h1>Terms of Service</h1>
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of NaijaSpora&apos;s services, website, mobile applications, and all related platforms (collectively, the &quot;Services&quot;). By accessing or using our Services, you agree to comply with these Terms. If you do not agree, you may not use our Services.
          </p>
          <p>
            These Terms apply to your use of our Services through any device — desktop, laptop, mobile phone, tablet, or other internet-enabled device (each, a &quot;Device&quot;).
          </p>
          <p>
            These Terms do not apply to services that are not owned or controlled by NaijaSpora, including third-party websites or applications linked through our platform. Third-party services have their own terms, which we encourage you to review.
          </p>

          <h2>ELIGIBILITY</h2>
          <p>
            You must be at least 18 years old to use NaijaSpora&apos;s Services. By accessing or using our Services, you represent and warrant that you meet this age requirement and have the legal capacity to enter into a binding agreement.
          </p>

          <h2>ACCOUNT REGISTRATION</h2>
          <p>
            To access certain features of our Services, including agent verification, visa guidance, or travel loan applications, you must create a NaijaSpora account. When registering, you agree to:
          </p>
          <ul>
            <li>Provide accurate, complete, and up-to-date information.</li>
            <li>Maintain the confidentiality of your account credentials.</li>
            <li>Notify us immediately of any unauthorized use of your account.</li>
          </ul>
          <p>You are responsible for all activities that occur under your account.</p>

          <h2>USE OF SERVICE</h2>
          <p>
            You agree to use NaijaSpora&apos;s Services only for lawful purposes and in accordance with these Terms. You must not:
          </p>
          <ul>
            <li>Engage in any fraudulent, misleading, or harmful activity.</li>
            <li>Violate any applicable laws or regulations.</li>
            <li>Interfere with the operation or security of our Services.</li>
            <li>Attempt to gain unauthorized access to any accounts, systems, or networks connected to our Services.</li>
          </ul>
          <p>NaijaSpora reserves the right to suspend or terminate your access if you violate these Terms.</p>

          <h2>INTELLECTUAL PROPERTY</h2>
          <p>
            All content, trademarks, logos, and materials available through NaijaSpora are the property of NaijaSpora or its licensors. You may not copy, reproduce, modify, distribute, or create derivative works from any content without our prior written consent.
          </p>
          
          <h2>PAYMENT AND FEES</h2>
          <p>Certain Services may require payment. By using paid features, you agree to:</p>
          <ul>
            <li>Provide accurate billing information.</li>
            <li>Pay all applicable fees in a timely manner.</li>
            <li>Comply with our payment terms.</li>
          </ul>
          <p>All payments are non-refundable unless otherwise stated.</p>

          <h2>THIRD-PARTY SERVICES</h2>
          <p>
            NaijaSpora may provide links or access to third-party services, such as travel consultants, migration agents, or educational institutions. We are not responsible for the content, accuracy, or practices of these third parties. Your use of third-party services is governed by their own terms.
          </p>

          <h2>LIMITATION OF LIABILITY</h2>
          <p>To the fullest extent permitted by law, NaijaSpora shall not be liable for:</p>
          <ul>
            <li>Any indirect, incidental, special, or consequential damages arising from your use of our Services.</li>
            <li>Errors, omissions, or interruptions in the Services.</li>
            <li>Actions taken based on information provided through the Services.</li>
          </ul>
          <p>Your use of our Services is at your own risk.</p>
          
          <h2>DISCLAIMERS</h2>
          <p>
            Our Services are provided &quot;as is&quot; and &quot;as available.&quot; NaijaSpora does not guarantee that the Services will be uninterrupted, error-free, or free of viruses or other harmful components.
          </p>

          <h2>TERMINATION</h2>
          <p>We may suspend or terminate your account or access to the Services at our discretion, including:</p>
          <ul>
            <li>Violation of these Terms.</li>
            <li>Suspected fraudulent or unlawful activity.</li>
            <li>At your request.</li>
          </ul>
          <p>Upon termination, your rights to use the Services immediately cease, but we may retain certain information as required by law or for fraud prevention.</p>

          <h2>GOVERNING LAW</h2>
          <p>
            These Terms are governed by the laws of Nigeria. Any disputes arising from these Terms or your use of our Services shall be resolved in the courts of Nigeria, unless otherwise agreed.
          </p>

          <h2>CHANGES TO THESE TERMS</h2>
          <p>
            We may update these Terms periodically to reflect new services, legal requirements, or operational changes. Updates will be posted on this page with a revised &quot;Last Updated&quot; date. Continued use of NaijaSpora after changes constitutes acceptance of the updated Terms.
          </p>

          <h2>CONTACT US</h2>
          <p>If you have any questions, comments or concerns about this Terms, you may contact us by:</p>
          <ul>
            <li>reaching out to the customer service support available on the website.</li>
            <li>sending an email to privacy@naijaspora.com</li>
          </ul>
          <p>
            If you feel that we have not addressed your questions or concerns adequately, or you believe that your data protection or privacy rights have been infringed, you can complain to your local Data Protection Authority.
          </p>
          
          <p><strong>Last updated: October 5, 2025</strong></p>

        </LegalPageLayout>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfServicePage;