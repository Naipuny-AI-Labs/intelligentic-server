import Link from "next/link"
import { ArrowRight, Calendar, FileText, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col pt-24 pb-16">
      <div className="container max-w-4xl">
        <div className="flex flex-col items-start gap-4 mb-8">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-1 h-3 w-3" />
            <span>Last updated: May 12, 2023</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
          <p className="text-xl text-muted-foreground">Please read these terms carefully before using our platform</p>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="mb-10">
            <p>
              Welcome to INTELLIGENTIC.AI. These Terms of Service ("Terms") govern your access to and use of the
              INTELLIGENTIC.AI website, products, and services ("Services"). By accessing or using our Services, you
              agree to be bound by these Terms and our Privacy Policy.
            </p>
            <p>
              If you are using our Services on behalf of an organization, you are agreeing to these Terms for that
              organization and representing that you have the authority to bind that organization to these Terms. In
              that case, "you" and "your" will refer to that organization.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">1. Using our Services</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">1.1 Account Terms</h3>
            <p>
              You must create an account to use certain features of our Services. You are responsible for maintaining
              the security of your account and password. We cannot and will not be liable for any loss or damage from
              your failure to comply with this security obligation.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">1.2 Age Requirements</h3>
            <p>
              You must be at least 18 years old to use our Services. By using our Services, you represent and warrant
              that you meet the age requirement.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">1.3 Acceptable Use</h3>
            <p>
              You may not use our Services for any purpose that is illegal, harmful, or otherwise prohibited by these
              Terms. This includes but is not limited to:
            </p>
            <ul className="list-disc pl-8 my-4">
              <li>Using our Services to violate any law or regulation</li>
              <li>Infringing on the intellectual property rights of others</li>
              <li>Transmitting malware, viruses, or other harmful code</li>
              <li>Attempting to interfere with or disrupt our Services</li>
              <li>Accessing our Services through automated means without our permission</li>
              <li>
                Impersonating any person or entity, or falsely stating or otherwise misrepresenting your affiliation
                with a person or entity
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">2. Content and Data</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.1 Your Content</h3>
            <p>
              You retain ownership of any content, data, or material that you submit to our Services ("Your Content").
              By submitting Your Content, you grant us a worldwide, non-exclusive, royalty-free license to use,
              reproduce, modify, adapt, publish, and display Your Content solely for the purpose of providing and
              improving our Services.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.2 Data Privacy</h3>
            <p>
              We collect and process personal data as described in our{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              . By using our Services, you consent to such processing and you warrant that all data provided by you is
              accurate.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.3 AI Usage</h3>
            <p>
              Our Services utilize artificial intelligence technologies to process and generate content. While we strive
              to ensure the quality and accuracy of AI-generated content, we do not guarantee its completeness,
              reliability, or suitability for any specific purpose. You are responsible for reviewing and validating any
              AI-generated content before using it.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">3. Subscriptions and Payment</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">3.1 Billing Cycle</h3>
            <p>
              Subscription fees are charged at the beginning of each billing period. Unless otherwise specified, the
              billing period is monthly or annual, depending on the subscription plan you select.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">3.2 Price Changes</h3>
            <p>
              We may change our subscription fees at any time. If we increase fees, we will provide notice at least 30
              days before the change takes effect. If you do not agree to the price change, you may cancel your
              subscription before the change takes effect.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">3.3 Refunds</h3>
            <p>
              Except as required by law, all payments are non-refundable. However, we may provide refunds at our
              discretion in certain circumstances, such as service unavailability or technical issues.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">4.1 Our Intellectual Property</h3>
            <p>
              Our Services and all related materials, including but not limited to software, designs, text, graphics,
              and logos, are owned by us or our licensors and are protected by copyright, trademark, and other
              intellectual property laws.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">4.2 Feedback</h3>
            <p>
              If you provide us with any feedback or suggestions regarding our Services, you grant us the right to use
              such feedback without restriction or compensation to you.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">5. Termination</h2>
            <p>
              We may terminate or suspend your access to our Services immediately, without prior notice or liability,
              for any reason, including breach of these Terms. Upon termination, your right to use our Services will
              immediately cease.
            </p>
            <p>
              You may terminate your account at any time by contacting us or using the account termination feature in
              your account settings. Termination of your account may result in the deletion of your account information
              and content.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">6. Disclaimers and Limitations of Liability</h2>

            <p className="font-medium mb-4">
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
              IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, TITLE, AND NON-INFRINGEMENT.
            </p>

            <p className="font-medium mb-4">
              IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES,
              OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE,
              GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (A) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS
              OR USE THE SERVICES; (B) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES; OR (C) UNAUTHORIZED
              ACCESS, USE OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT.
            </p>

            <p>
              Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of
              liability for certain types of damages. Therefore, some of the above limitations may not apply to you.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">7. Changes to These Terms</h2>
            <p>
              We may revise these Terms from time to time. If we make significant changes, we will notify you by email
              or by posting a notice on our website prior to the changes becoming effective. Your continued use of our
              Services after the effective date of such changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without
              regard to its conflict of law provisions. You agree to submit to the personal and exclusive jurisdiction
              of the courts located within [Jurisdiction].
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">9. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p className="mt-2">
              <strong>Email:</strong> legal@intelligentic.ai
              <br />
              <strong>Address:</strong> 123 AI Innovation Street, Suite 456, San Francisco, CA 94105, USA
            </p>
          </section>
        </div>

        <Separator className="my-10" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <FileText className="h-5 w-5 mr-2" /> Privacy Policy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                Learn how we collect, use, and protect your personal information.
              </CardDescription>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/privacy">
                  View Privacy Policy <ArrowRight className="h-4 w-4 ml-1" />
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
                <FileText className="h-5 w-5 mr-2" /> Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                Have questions about our terms? Get in touch with our team.
              </CardDescription>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/contact">
                  Contact Support <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
