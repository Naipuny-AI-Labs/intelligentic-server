import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, FileText, Shield, Settings } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Cookie Policy | Intelligentic AI",
  description: "Learn about how we use cookies and similar technologies on our platform.",
}

export default function CookiePolicyPage() {
  return (
    <div className="container max-w-4xl py-12">
      <div className="mb-8 space-y-4">
        <div className="flex items-center gap-2">
          <h1 className="text-4xl font-bold tracking-tight">Cookie Policy</h1>
          <Badge variant="outline" className="h-6">v1.2</Badge>
        </div>
        <p className="text-muted-foreground">Last updated: May 10, 2025</p>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            This Cookie Policy explains how Intelligentic AI ("we", "us", or "our") uses cookies and similar technologies 
            to recognize you when you visit our website and use our services. It explains what these technologies are and 
            why we use them, as well as your rights to control our use of them.
          </p>
          <p>
            This Cookie Policy should be read together with our Privacy Policy and Terms of Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. What Are Cookies</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
            Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well 
            as to provide reporting information.
          </p>
          <p>
            Cookies set by the website owner (in this case, Intelligentic AI) are called "first-party cookies". Cookies 
            set by parties other than the website owner are called "third-party cookies". Third-party cookies enable 
            third-party features or functionality to be provided on or through the website (e.g., advertising, interactive 
            content, and analytics). The parties that set these third-party cookies can recognize your computer both when 
            it visits the website in question and also when it visits certain other websites.
          </p>
          <p>
            We also use other similar technologies like web beacons, pixels, local storage, and mobile device identifiers 
            for similar purposes as cookies. These technologies may be used to track users across different websites and 
            services. In this policy, we refer to all of these technologies as "cookies".
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
          
          <h3 className="text-xl font-medium mt-6 mb-3">3.1 Essential Cookies</h3>
          <p>
            These cookies are strictly necessary to provide you with services available through our website and to use 
            some of its features, such as access to secure areas. Without these cookies, services you have asked for, 
            like secure login or shopping carts, cannot be provided.
          </p>
          <div className="bg-muted/50 p-4 rounded-md my-4">
            <p className="font-medium">Examples:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Authentication cookies that identify you when you log into our platform</li>
              <li>Session cookies that maintain your session state</li>
              <li>Security cookies that help prevent fraudulent use of accounts and protect user data</li>
              <li>Load balancing cookies that distribute traffic to make our services more reliable</li>
            </ul>
          </div>

          <h3 className="text-xl font-medium mt-6 mb-3">3.2 Functional Cookies</h3>
          <p>
            These cookies allow our website to remember choices you make when you use our website, such as remembering 
            your language preferences or your login details. The purpose of these cookies is to provide you with a more 
            personal experience and to avoid you having to re-enter your preferences every time you visit our website.
          </p>
          <div className="bg-muted/50 p-4 rounded-md my-4">
            <p className="font-medium">Examples:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Language preference cookies</li>
              <li>Theme or display preference cookies</li>
              <li>Cookies that remember your previous settings and configurations</li>
              <li>Cookies that pre-fill forms with information you've previously provided</li>
            </ul>
          </div>

          <h3 className="text-xl font-medium mt-6 mb-3">3.3 Analytics Cookies</h3>
          <p>
            These cookies collect information that is used either in aggregate form to help us understand how our website 
            is being used or how effective our marketing campaigns are, or to help us customize our website for you.
          </p>
          <div className="bg-muted/50 p-4 rounded-md my-4">
            <p className="font-medium">Examples:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Google Analytics cookies that track how you use our website</li>
              <li>Cookies that help us measure the performance of our site and applications</li>
              <li>Cookies that help us identify and fix errors or performance issues</li>
              <li>A/B testing cookies that help us improve our service</li>
            </ul>
          </div>

          <h3 className="text-xl font-medium mt-6 mb-3">3.4 Marketing Cookies</h3>
          <p>
            These cookies are used to track visitors across websites. The intention is to display ads that are relevant 
            and engaging for the individual user and thereby more valuable for publishers and third-party advertisers.
          </p>
          <div className="bg-muted/50 p-4 rounded-md my-4">
            <p className="font-medium">Examples:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Cookies used to show you relevant advertisements on other websites</li>
              <li>Cookies that help us measure the effectiveness of our advertising campaigns</li>
              <li>Social media cookies that enable social sharing and engagement features</li>
              <li>Cookies that help us understand which content is most valuable to users</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Third-Party Cookies</h2>
          <p>
            We may allow third parties to place cookies on your device when you visit our website. These third parties 
            include analytics providers, advertising networks, and social media platforms. The third-party cookies are 
            used for the following purposes:
          </p>
          <ul className="list-disc pl-5 mt-2 mb-4">
            <li>To understand how you use our website (analytics)</li>
            <li>To provide you with relevant advertising on other websites (advertising)</li>
            <li>To allow you to share content on social media (social sharing)</li>
            <li>To enhance your user experience (functionality)</li>
          </ul>
          <p>
            The following third parties may place cookies on your device when you visit our website:
          </p>
          <div className="bg-muted/50 p-4 rounded-md my-4">
            <ul className="list-disc pl-5">
              <li>Google (Analytics, Advertising)</li>
              <li>Facebook/Meta (Social sharing, Advertising)</li>
              <li>Twitter/X (Social sharing)</li>
              <li>LinkedIn (Social sharing, Advertising)</li>
              <li>Stripe (Payment processing)</li>
              <li>Intercom (Customer support)</li>
              <li>Hotjar (Analytics)</li>
            </ul>
          </div>
          <p>
            Please note that we do not control the cookies placed by third parties. For more information about these 
            cookies, please refer to the privacy policies of the respective third parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Cookie Lifespan</h2>
          <p>
            Cookies can remain on your computer or mobile device for different periods of time. Some cookies are 
            'session cookies', which means they only exist when your browser is open and are automatically deleted 
            when you close your browser. Other cookies are 'persistent cookies', meaning they survive after your 
            browser is closed. They can be used by the website to recognize your computer when you open your browser 
            and browse the Internet again.
          </p>
          <div className="bg-muted/50 p-4 rounded-md my-4">
            <p className="font-medium">Cookie Lifespans:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Session cookies: These expire when you close your browser</li>
              <li>Short-term persistent cookies: These typically last for 1 day to 1 week</li>
              <li>Medium-term persistent cookies: These typically last for 1 month to 6 months</li>
              <li>Long-term persistent cookies: These can last for 1 year or longer</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Your Cookie Choices</h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences 
            in the following ways:
          </p>
          <h3 className="text-xl font-medium mt-6 mb-3">6.1 Cookie Preference Center</h3>
          <p>
            You can set or amend your cookie preferences at any time by using our cookie preference center, which you 
            can access by clicking on the "Cookie Settings" link in the footer of our website.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">6.2 Browser Controls</h3>
          <p>
            Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, 
            or to alert you when cookies are being sent. The methods for doing so vary from browser to browser, and 
            from version to version. You can obtain up-to-date information about blocking and deleting cookies via the 
            support pages of your browser:
          </p>
          <ul className="list-disc pl-5 mt-2 mb-4">
            <li>Chrome: <Link href="https://support.google.com/chrome/answer/95647" className="text-primary hover:underline" target="_blank">https://support.google.com/chrome/answer/95647</Link></li>
            <li>Firefox: <Link href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" className="text-primary hover:underline" target="_blank">https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop</Link></li>
            <li>Safari: <Link href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-primary hover:underline" target="_blank">https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac</Link></li>
            <li>Edge: <Link href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-primary hover:underline" target="_blank">https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09</Link></li>
          </ul>
          <p>
            Please note that if you choose to reject cookies, you may not be able to use the full functionality of our 
            website. For example, you may not be able to log in to your account or use certain features of our platform.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">6.3 Do Not Track</h3>
          <p>
            Some browsers have a "Do Not Track" feature that lets you tell websites that you do not want to have your 
            online activities tracked. At this time, we do not respond to browser "Do Not Track" signals.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">6.4 Third-Party Opt-Out Tools</h3>
          <p>
            You can opt out of interest-based advertising through the following tools:
          </p>
          <ul className="list-disc pl-5 mt-2 mb-4">
            <li>Digital Advertising Alliance: <Link href="https://optout.aboutads.info/" className="text-primary hover:underline" target="_blank">https://optout.aboutads.info/</Link></li>
            <li>Network Advertising Initiative: <Link href="https://optout.networkadvertising.org/" className="text-primary hover:underline" target="_blank">https://optout.networkadvertising.org/</Link></li>
            <li>European Interactive Digital Advertising Alliance: <Link href="https://www.youronlinechoices.eu/" className="text-primary hover:underline" target="_blank">https://www.youronlinechoices.eu/</Link></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies 
            we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy 
            regularly to stay informed about our use of cookies and related technologies.
          </p>
          <p>
            The date at the top of this Cookie Policy indicates when it was last updated.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
          <p>
            If you have any questions about our use of cookies or other technologies, please contact us at:
          </p>
          <div className="bg-muted/50 p-4 rounded-md my-4">
            <p>Email: privacy@intelligentic.ai</p>
            <p>Address: 123 AI Boulevard, Tech City, TC 12345, United States</p>
            <p>Data Protection Officer: dpo@intelligentic.ai</p>
          </div>
        </section>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Privacy Policy
            </CardTitle>
            <CardDescription>Read our complete privacy policy</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/privacy">
                View Policy
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Terms of Service
            </CardTitle>
            <CardDescription>Review our terms and conditions</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/terms">
                View Terms
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Cookie Settings
            </CardTitle>
            <CardDescription>Manage your cookie preferences</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button className="w-full">
              Open Settings
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
