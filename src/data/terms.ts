type Term = {
  id: number;
  title: string;
  content?: string;
  list?: string[];
};

export const terms: Term[] = [
  {
    id: 1,
    title: "1. Eligibility & Acceptance",
    content: `You represent that you are at least the age of majority in your jurisdiction and have the legal capacity to enter into these Terms. Your continued use of the Service constitutes acceptance of the most recent version of these Terms.`,
  },
  {
    id: 2,
    title: "2. Use of the Service",
    content: `You agree to use the Service only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the Service. We may update, suspend, or discontinue any part of the Service at any time without notice.`,
  },
  {
    id: 3,
    title: "3. Accounts & Security",
    content: `If any portion of the Service requires an account, you are responsible for maintaining the confidentiality of your credentials and for all activities under your account. Notify us immediately of any unauthorized use or security breach.`,
  },
  {
    id: 4,
    title: "4. Content & Intellectual Property",
    content: `All content on the Service—including text, graphics, logos, and design—is owned by or licensed to Learn Plus and protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without prior written permission, except as permitted by mandatory law or expressly allowed by these Terms.`,
  },
  {
    id: 5,
    title: "5. User Submissions",
    content: `If you submit feedback or materials, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and display such materials for the purpose of operating and improving the Service. You confirm you have all necessary rights to grant this license and that your submissions do not infringe third-party rights.`,
  },
  {
    id: 6,
    title: "6. Prohibited Conduct",
    list: [
      "Attempting to gain unauthorized access to the Service;",
      "Interfering with or disrupting the Service or servers;",
      "Uploading malicious code, scraping, or data mining;",
      "Infringing any intellectual property or privacy rights;",
      "Engaging in any unlawful or fraudulent activity.",
    ],
  },
  {
    id: 7,
    title: "7. Third-Party Links",
    content: `The Service may include links to third-party websites or services that we do not control. We are not responsible for their content, policies, or practices. Access them at your own risk and review their terms and privacy policies.`,
  },
  {
    id: 8,
    title: "8. Disclaimers",
    content: `The Service is provided on an “as is” and “as available” basis, without warranties of any kind, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee that the Service will be uninterrupted, secure, or error-free.`,
  },
  {
    id: 9,
    title: "9. Limitation of Liability",
    content: `To the maximum extent permitted by law, Learn Plus and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenues, data, or goodwill, arising from or related to your use of the Service, even if advised of the possibility of such damages.`,
  },
  {
    id: 10,
    title: "10. Indemnification",
    content: `You agree to indemnify and hold harmless Learn Plus and its affiliates from any claims, liabilities, damages, losses, and expenses, including reasonable legal fees, arising out of or in any way connected with your use of the Service or your violation of these Terms.`,
  },
  {
    id: 11,
    title: "11. Governing Law & Jurisdiction",
    content: `These Terms are governed by the laws of the European Union and the Republic of Croatia, without regard to conflict of law principles. Courts located in the Republic of Croatia shall have exclusive jurisdiction over any dispute arising out of or relating to these Terms or the Service, subject to mandatory consumer protection rules that may provide otherwise.`,
  },
  {
    id: 12,
    title: "12. Changes to These Terms",
    content: `We may update these Terms from time to time. Any changes will be posted on this page with an updated “Last updated” date. Your continued use of the Service after changes become effective constitutes acceptance of the revised Terms.`,
  },
];
