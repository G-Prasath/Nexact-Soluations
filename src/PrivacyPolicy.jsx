import { useState } from "react";

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState("terms");

  const tabs = [
    { id: "terms", label: "Terms & Conditions" },
    { id: "privacy", label: "Privacy Policy" },
  ];

  return (
    <section className="min-h-screen px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-4xl font-bold md:text-5xl">
          Legal
        </h1>

        <p className="mb-8 text-sm opacity-70">
          Effective Date: September 12, 2026
        </p>

        <div className="mb-10 flex gap-2 border-b border-white/10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "border-b-2 border-white text-white"
                  : "text-white hover:text-white/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "terms" && <TermsContent onLinkToPrivacy={() => setActiveTab("privacy")} />}
        {activeTab === "privacy" && <PrivacyContent />}
      </div>
    </section>
  );
}

function TermsContent({ onLinkToPrivacy }) {
  return (
    <div className="space-y-8 leading-7">
      <section>
        <p>
          Welcome to Nexact Solutions. These Terms & Conditions ("Terms")
          govern your use of our website and any services provided by
          Nexact Solutions ("we," "us," "our"). By accessing our website,
          submitting an enquiry, or engaging our services, you agree to be
          bound by these Terms.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold">1. About Us</h2>
        <p>
          Nexact Solutions is a full-stack web development service provider
          specializing in React, Node.js, PHP, and MERN stack applications,
          offering website design, web application development, and
          related digital services to businesses and individuals.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold">
          2. Use of Our Website
        </h2>
        <p className="mb-3">
          You agree to use our website only for lawful purposes and in a
          manner that does not infringe the rights of, or restrict or
          inhibit the use and enjoyment of, this website by any third
          party. You must not:
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            Attempt to gain unauthorized access to our website, servers, or
            systems
          </li>
          <li>
            Use our website to transmit any harmful code, spam, or
            malicious content
          </li>
          <li>
            Copy, reproduce, or redistribute our website content without
            permission
          </li>
        </ul>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold">3. Services</h2>
        <p className="mb-3">
          We offer web development and related services, including but not
          limited to:
        </p>
        <ul className="mb-4 list-disc space-y-1 pl-6">
          <li>Website design and development</li>
          <li>
            Web application development (React, Node.js, PHP, MERN stack)
          </li>
          <li>Maintenance and support services</li>
        </ul>

        <p className="mb-3">
          <span className="font-medium">Enquiries and Quotations:</span>{" "}
          Submitting an enquiry through our website, lead form, WhatsApp,
          or Instagram/Facebook messaging does not create a binding
          contract. A formal engagement begins only after both parties
          agree on the project scope, pricing, and timelines, typically
          confirmed in writing (email or signed agreement).
        </p>

        <p>
          <span className="font-medium">Project Terms:</span> Specific
          terms for each project — including deliverables, payment
          schedule, timelines, and revisions — will be agreed upon
          separately with each client before work begins, and will take
          precedence over these general Terms for that project.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold">4. Payments</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            Payment terms (advance, milestones, or full payment) will be
            communicated and agreed upon before the start of any project
          </li>
          <li>
            All prices quoted are exclusive of applicable taxes unless
            stated otherwise
          </li>
          <li>
            Delays in payment may result in delays to project delivery or a
            pause in ongoing work
          </li>
        </ul>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold">
          5. Intellectual Property
        </h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            All content on this website, including text, graphics, logos,
            and design, is the property of Nexact Solutions unless
            otherwise stated, and may not be used without permission
          </li>
          <li>
            Upon full and final payment for a completed project, ownership
            of the final delivered work (source code, design files) will
            transfer to the client, unless otherwise agreed in writing. Any
            pre-existing tools, frameworks, or proprietary code libraries
            used in development remain the property of Nexact Solutions or
            their respective owners
          </li>
        </ul>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold">
          6. Client Responsibilities
        </h2>
        <p className="mb-3">Clients agree to:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            Provide accurate and timely information, content, and feedback
            required for project completion
          </li>
          <li>
            Respond to review requests within a reasonable timeframe to
            avoid project delays
          </li>
          <li>
            Ensure they have the rights to any content, images, or material
            provided to us for use in their project
          </li>
        </ul>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold">
          7. Limitation of Liability
        </h2>
        <p className="mb-3">
          While we strive to deliver high-quality, reliable web solutions,
          Nexact Solutions is not liable for:
        </p>
        <ul className="mb-4 list-disc space-y-1 pl-6">
          <li>
            Any indirect, incidental, or consequential loss arising from the
            use of our website or services
          </li>
          <li>
            Downtime or issues caused by third-party hosting providers,
            domain registrars, or external APIs/services integrated into a
            project
          </li>
          <li>
            Loss of data due to circumstances outside our reasonable control
          </li>
        </ul>
        <p>
          Our total liability for any claim arising from our services will
          not exceed the amount paid by the client for the specific project
          in question.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold">
          8. Advertising and Lead Forms
        </h2>
        <p>
          When you submit your details through our Facebook or Instagram
          advertisements, Instant Forms, or messaging channels, you consent
          to being contacted by our team via phone, email, or WhatsApp
          regarding your enquiry, in accordance with our{" "}
          <button
            onClick={onLinkToPrivacy}
            className="underline underline-offset-2"
          >
            Privacy Policy
          </button>
          .
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold">9. Termination</h2>
        <p>
          We reserve the right to suspend or terminate an ongoing project
          engagement if a client breaches these Terms, fails to make agreed
          payments, or engages in abusive or unlawful conduct.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold">10. Governing Law</h2>
        <p>
          These Terms are governed by and construed in accordance with the
          laws of India. Any disputes arising out of or relating to these
          Terms or our services shall be subject to the exclusive
          jurisdiction of the courts in Tamil Nadu, India.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold">
          11. Changes to These Terms
        </h2>
        <p>
          We may update these Terms from time to time. Continued use of our
          website or services after changes are posted constitutes
          acceptance of the revised Terms.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold">12. Contact Us</h2>
        <p className="mb-4">
          For any questions regarding these Terms & Conditions, please
          contact us:
        </p>
        <p className="font-medium">Nexact Solutions</p>
        <p>Email: nexactsolution@gmail.com</p>
        <p>Phone / WhatsApp: +91 6369260614</p>
        <p>Address: Chennai, Tamil Nadu, India</p>
        <p>
          Website:{" "}
          <a href="https://www.nexactsolutions.in" className="underline">
            www.nexactsolutions.in
          </a>
        </p>
      </section>
    </div>
  );
}

function PrivacyContent() {
  return (
    <div className="space-y-8 leading-7">
      <section>
        <p>
          Nexact Solutions ("we," "us," "our") respects your privacy and is
          committed to protecting the personal information you share with
          us. This Privacy Policy explains how we collect, use, store, and
          protect your information when you visit our website, contact us,
          or interact with our advertisements on platforms such as Facebook
          and Instagram (Meta Platforms, Inc.).
        </p>
        <p className="mt-4">
          By using our website or submitting your information through our
          contact forms, lead forms, or messaging channels (Instant Forms,
          WhatsApp, Instagram), you agree to the practices described in this
          policy.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold">
          1. Information We Collect
        </h2>

        <p className="mb-3 font-medium">a) Information you provide directly</p>
        <ul className="mb-4 list-disc space-y-1 pl-6">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>City / location</li>
          <li>Project requirements or budget details</li>
          <li>
            Any other information you voluntarily share via our contact
            forms, lead forms, WhatsApp, or Instagram/Facebook messages
          </li>
        </ul>

        <p className="mb-3 font-medium">b) Information collected automatically</p>
        <ul className="mb-4 list-disc space-y-1 pl-6">
          <li>IP address</li>
          <li>Browser type and device information</li>
          <li>Pages visited and time spent on our website</li>
          <li>Referring website or advertisement source</li>
          <li>Cookies and similar tracking technologies</li>
        </ul>

        <p className="mb-3 font-medium">c) Information from third-party platforms</p>
        <p>
          When you interact with our advertisements on Meta
          (Facebook/Instagram), we may receive information through Meta's
          Lead Ads, Instant Forms, Meta Pixel, or Conversions API, including
          the details you submit and engagement data related to our ads.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold">
          2. How We Use Your Information
        </h2>
        <p className="mb-3">We use the information we collect to:</p>
        <ul className="mb-4 list-disc space-y-1 pl-6">
          <li>
            Respond to your enquiries and provide quotations for our web
            development services
          </li>
          <li>Contact you via phone, email, or WhatsApp regarding your project</li>
          <li>Improve our website, services, and advertising campaigns</li>
          <li>
            Measure and optimize the performance of our Facebook and
            Instagram ad campaigns
          </li>
          <li>
            Send you relevant updates about our services (only where you
            have not opted out)
          </li>
          <li>Comply with legal obligations</li>
        </ul>
        <p>
          We do not sell, rent, or trade your personal information to third
          parties for their marketing purposes.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold">
          3. Cookies and Tracking Technologies
        </h2>
        <p className="mb-3">
          Our website may use cookies and similar technologies (such as
          Meta Pixel and Google Analytics) to:
        </p>
        <ul className="mb-4 list-disc space-y-1 pl-6">
          <li>Understand how visitors use our website</li>
          <li>Measure the effectiveness of our advertising campaigns</li>
          <li>Improve user experience</li>
        </ul>
        <p>
          You can control or disable cookies through your browser settings.
          Disabling cookies may affect certain features of our website.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold">
          4. Sharing of Information
        </h2>
        <p className="mb-3">We may share your information with:</p>
        <ul className="mb-4 list-disc space-y-1 pl-6">
          <li>
            Service providers who help us operate our business (e.g.,
            hosting providers, email/CRM tools, WhatsApp Business API
            providers)
          </li>
          <li>
            Meta Platforms, Inc. (Facebook/Instagram), solely for the
            purpose of running and measuring our advertising campaigns
          </li>
          <li>
            Legal authorities, where required by law or to protect our
            legal rights
          </li>
        </ul>
        <p>
          We do not share your personal information with unrelated third
          parties for their own marketing use.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold">
          5. Data Storage and Security
        </h2>
        <p className="mb-3">
          We take reasonable technical and organizational measures to
          protect your personal information from unauthorized access,
          alteration, disclosure, or destruction. However, no method of
          electronic transmission or storage is 100% secure, and we cannot
          guarantee absolute security.
        </p>
        <p>
          Your information is retained only for as long as necessary to
          fulfil the purposes described in this policy, or as required by
          applicable law.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold">6. Your Rights</h2>
        <p className="mb-3">
          Depending on applicable law, including the Digital Personal Data
          Protection Act, 2023 (India), you have the right to:
        </p>
        <ul className="mb-4 list-disc space-y-1 pl-6">
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate or incomplete information</li>
          <li>Request deletion of your personal information</li>
          <li>
            Withdraw consent for us to contact you or use your data, at any
            time
          </li>
          <li>Lodge a complaint with the relevant data protection authority</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us using the
          details below.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold">7. Third-Party Links</h2>
        <p>
          Our website or ads may contain links to third-party websites
          (e.g., our social media pages). We are not responsible for the
          privacy practices or content of these third-party sites. We
          encourage you to review their privacy policies separately.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold">
          8. Children's Privacy
        </h2>
        <p>
          Our services are intended for businesses and individuals aged 18
          and above. We do not knowingly collect personal information from
          children under 18.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold">
          9. Changes to This Privacy Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time to reflect
          changes in our practices or legal requirements. The updated
          version will be posted on this page with a revised "Effective
          Date."
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold">10. Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about this Privacy Policy or
          how your data is handled, please contact us:
        </p>
        <p className="font-medium">Nexact Solutions</p>
        <p>Email: nexactsolution@gmail.com</p>
        <p>Phone / WhatsApp: +91 6369260614</p>
        <p>Address: [Chennai, Tamil Nadu, India]</p>
        <p>
          Website:{" "}
          <a href="https://www.nexactsolutions.in" className="underline">
            www.nexactsolutions.in
          </a>
        </p>
      </section>
    </div>
  );
}