import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Inquire now to"
      subtitle="See The Difference."
      button={
        <Link href="https://jellyfin.tannerln7.com">
          <Button>Get Started</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
