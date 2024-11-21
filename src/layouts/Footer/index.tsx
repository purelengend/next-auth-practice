import Link from 'next/link';

// Components
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  Container,
} from '@/components';

interface FooterLinkItem {
  href: string;
  label: string;
}

interface FooterLinkProps {
  heading: string;
  links: FooterLinkItem[];
}

const footerLinks: FooterLinkProps[] = [
  {
    heading: 'Information',
    links: [
      { href: '/', label: 'About' },
      { href: '/', label: 'Product' },
      { href: '/', label: 'Blog' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { href: '/', label: 'Community' },
      { href: '/', label: 'Career' },
      { href: '/', label: 'Our Story' },
    ],
  },
  {
    heading: 'Contact',
    links: [
      { href: '/', label: 'Getting Started' },
      { href: '/', label: 'Pricing' },
      { href: '/', label: 'Resources' },
    ],
  },
];

const FooterSection = ({ heading, links }: FooterLinkProps) => (
  <section aria-label={`${heading.toLowerCase()}-heading`}>
    <h3
      className="text-lg font-semibold"
      id={`${heading.toLowerCase()}-heading`}
    >
      {heading}
    </h3>
    <ul className="mt-2 space-y-2">
      {links.map(({ href, label }) => (
        <li key={`${href}-${label}`}>
          <Link
            className="text-text-secondary hover:text-text-default"
            href={href}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

const Footer = () => (
  <footer aria-label="footer-heading" className="mt-10 py-10 border-t">
    <Container className="px-4 flex flex-col lg:flex-row justify-between">
      <h2 className="sr-only" id="footer-heading">
        Footer
      </h2>

      {/* Footer Left Content */}
      <div
        aria-label="logo-heading"
        className="footer-left flex flex-col gap-6 mb-8 lg:mb-0"
      >
        <Link
          className="text-3xl tracking-widest font-quella"
          href="/"
          title="Homepage"
        >
          GREENMIND
        </Link>
        <p className="w-40 text-text-secondary">
          We help you find your dream plant
        </p>
        <ul className="flex gap-6">
          <li className="p-2 cursor-pointer rounded-full border border-border-secondary">
            <FacebookIcon customClass="w-4 h-4" />
          </li>
          <li className="p-2 cursor-pointer rounded-full border border-border-secondary">
            <InstagramIcon customClass="w-4 h-4" />
          </li>
          <li className="p-2 cursor-pointer rounded-full border border-border-secondary">
            <TwitterIcon customClass="w-4 h-4" />
          </li>
        </ul>
      </div>

      {/* Footer Right Content */}
      <div className="footer-right grid grid-cols-2 sm:grid-cols-3 gap-8">
        {footerLinks.map((section) => (
          <FooterSection
            key={section.heading}
            heading={section.heading}
            links={section.links}
          />
        ))}
      </div>
    </Container>

    {/* Footer Copyright */}
    <div className="container mt-8 mx-auto px-4 text-text-secondary">
      <p>&copy; 2024 Your Company. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
