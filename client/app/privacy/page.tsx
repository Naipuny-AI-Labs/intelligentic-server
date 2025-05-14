import Link from "next/link"
import { ArrowRight, Calendar, FileText, Shield, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function PrivacyPolicyPage() {
  return (
    <main className="flex min-h-screen flex-col pt-24 pb-16">
      <div className="container max-w-4xl">
        <div className="flex flex-col items-start gap-4 mb-8">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-1 h-3 w-3" />
            <span>Last updated: May 12, 2023</span>
            <Badge variant="outline" className="ml-3">
              Version 2.1
            </Badge>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground">How we collect, use, and protect your information</p>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="mb-10">
            <p>
              At INTELLIGENTIC.AI, we take your privacy seriously. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our website, products, and services (collectively,
              the "Services"). Please read this privacy policy carefully. If you do not agree with the terms of this
              privacy policy, please do not access our Services.
            </p>
            <p>
              We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert
              you about any changes by updating the "Last updated" date of this Privacy Policy. You are encouraged to
              periodically review this Privacy Policy to stay informed of updates.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">1.1 Personal Information</h3>
            <p>
              We may collect personal information that you voluntarily provide to us when you register for an account,
              express interest in obtaining information about us or our products and Services, participate in activities
              on our Services, or otherwise contact us. The personal information we collect may include:
            </p>
            <ul className="list-disc pl-8 my-4">
              <li>Name, email address, and contact information</li>
              <li>Billing information and payment details</li>
              <li>Account credentials</li>
              <li>Preferences and settings</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">1.2 Information Automatically Collected</h3>
            <p>
              When you access our Services, we may automatically collect certain information about your device and usage
              of our Services. This information may include:
            </p>
            <ul className="list-disc pl-8 my-4">
              <li>Device information (such as your IP address, browser type, and operating system)</li>
              <li>Usage data (such as pages visited, time spent on pages, and links clicked)</li>
              <li>Location information</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">1.3 Information from Third Parties</h3>
            <p>
              We may receive information about you from third parties including business partners, marketing agencies,
              and data providers. This information may be combined with other information we collect about you.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including:</p>
            <ul className="list-disc pl-8 my-4">
              <li>Providing, maintaining, and improving our Services</li>
              <li>Processing transactions and sending related information</li>
              <li>Responding to your comments, questions, and requests</li>
              <li>Sending you technical notices, updates, security alerts, and administrative messages</li>
              <li>Communicating with you about products, services, offers, promotions, and events</li>
              <li>Monitoring and analyzing trends, usage, and activities in connection with our Services</li>
              <li>Detecting, investigating, and preventing fraudulent transactions and other illegal activities</li>
              <li>Personalizing and improving your experience with our Services</li>
              <li>Training and improving our AI models and algorithms</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">3. How We Share Your Information</h2>
            <p>We may share your information in the following situations:</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">3.1 With Service Providers</h3>
            <p>
              We may share your information with third-party vendors, service providers, contractors, or agents who
              perform services for us or on our behalf and require access to such information to do that work.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">3.2 Business Transfers</h3>
            <p>
              We may share or transfer your information in connection with, or during negotiations of, any merger, sale
              of company assets, financing, or acquisition of all or a portion of our business to another company.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">3.3 With Your Consent</h3>
            <p>We may share your information with your consent or at your direction.</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">3.4 Legal Requirements</h3>
            <p>
              We may disclose your information where we are legally required to do so in order to comply with applicable
              law, governmental requests, a judicial proceeding, court order, or legal process.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">3.5 Vital Interests and Legal Rights</h3>
            <p>
              We may disclose information where we believe it is necessary to investigate, prevent, or take action
              regarding potential violations of our policies, suspected fraud, situations involving potential threats to
              the safety of any person, or as evidence in litigation.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
            <p>
              We have implemented appropriate technical and organizational security measures designed to protect the
              security of any personal information we process. However, despite our safeguards and efforts to secure
              your information, no electronic transmission over the Internet or information storage technology can be
              guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other
              unauthorized third parties will not be able to defeat our security and improperly collect, access, steal,
              or modify your information.
            </p>
            <p>
              We will make any legally required disclosures of any breach of the security, confidentiality, or integrity
              of your unencrypted electronically stored personal data to you via email or conspicuous posting on our
              Services as promptly as possible and without unreasonable delay, consistent with (i) the legitimate needs
              of law enforcement or (ii) any measures necessary to determine the scope of the breach and restore the
              reasonable integrity of the data system.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">5. Your Privacy Rights</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">5.1 Account Information</h3>
            <p>
              You can review and change your personal information by logging into your account settings. You may also
              contact us directly to request access to, correct, or delete any personal information that you have
              provided to us.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">5.2 Marketing Communications</h3>
            <p>
              You can opt out of receiving marketing emails from us by following the unsubscribe instructions provided
              in those emails. Even if you opt out of marketing communications, we may still send you administrative
              emails about your account or our Services.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">5.3 Cookies and Tracking Technologies</h3>
            <p>
              Most web browsers are set to accept cookies by default. If you prefer, you can usually set your browser to
              remove or reject cookies. Please note that removing or rejecting cookies could affect the availability and
              functionality of our Services. For more information about cookies and how to manage them, please see our{" "}
              <Link href="/cookies" className="text-primary hover:underline">
                Cookie Policy
              </Link>
              .
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">5.4 Data Subject Rights</h3>
            <p>Depending on your location, you may have certain rights regarding your personal information, such as:</p>
            <ul className="list-disc pl-8 my-4">
              <li>The right to access personal information we hold about you</li>
              <li>The right to request correction of inaccurate personal information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to object to processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided in the "Contact Us" section
              below.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">6. International Data Transfers</h2>
            <p>
              Our Services are operated in the United States. If you are located in the European Economic Area (EEA),
              United Kingdom, or other regions with laws governing data collection and use that may differ from U.S.
              law, please note that we may transfer information, including personal information, to a country and
              jurisdiction that does not have the same data protection laws as your jurisdiction.
            </p>
            <p>
              By using our Services or providing us with any information, you consent to the transfer, processing, and
              storage of your information in the United States and other countries where we or our service providers
              operate.
            </p>
            <p>
              When we transfer personal information from the EEA, United Kingdom, or Switzerland to the United States or
              other countries which the European Commission has not determined provide adequate protection, we use legal
              mechanisms designed to help ensure your rights and protections, such as Standard Contractual Clauses or
              obtaining your consent.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">7. Children's Privacy</h2>
            <p>
              Our Services are not directed to children under the age of 18, and we do not knowingly collect personal
              information from children under the age of 18. If we learn that we have collected personal information
              from a child under the age of 18, we will promptly delete that information. If you believe we have
              collected personal information from a child under the age of 18, please contact us using the information
              provided in the "Contact Us" section below.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">8. California Privacy Rights</h2>
            <p>
              If you are a California resident, you have specific rights regarding your personal information under the
              California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA). These include:
            </p>
            <ul className="list-disc pl-8 my-4">
              <li>The right to know what personal information we collect about you</li>
              <li>The right to know whether your personal information is sold or disclosed and to whom</li>
              <li>The right to opt out of the sale of your personal information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to non-discrimination for exercising your privacy rights</li>
              <li>The right to correct inaccurate personal information</li>
              <li>The right to limit the use and disclosure of sensitive personal information</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided in the "Contact Us" section
              below.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">9. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated version will be indicated by an updated
              "Last updated" date and the updated version will be effective as soon as it is accessible. If we make
              material changes to this Privacy Policy, we may notify you either by prominently posting a notice of such
              changes or by directly sending you a notification. We encourage you to review this Privacy Policy
              frequently to be informed of how we are protecting your information.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
            <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
            <p className="mt-2">
              <strong>Email:</strong> privacy@intelligentic.ai
              <br />
              <strong>Address:</strong> 123 AI Innovation Street, Suite 456, San Francisco, CA 94105, USA
              <br />
              <strong>Data Protection Officer:</strong> dpo@intelligentic.ai
            </p>
          </section>
        </div>

        <Separator className="my-10" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <FileText className="h-5 w-5 mr-2" /> Terms of Service
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                Review our terms and conditions for using our platform.
              </CardDescription>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/terms">
                  View Terms <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <Shield className="h-5 w-5 mr-2" /> Cookie Policy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                Understand how we use cookies and similar technologies.
              </CardDescription>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/cookies">
                  View Cookie Policy <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <Lock className="h-5 w-5 mr-2" /> Data Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                Learn about our security practices and data protection measures.
              </CardDescription>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/contact">
                  Contact Security Team <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
