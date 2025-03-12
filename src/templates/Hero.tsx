import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://jellyfin.tannerrln7.com">Sign in</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Enterprise-Grade Video Hosting For\n'}
            <span className="text-primary-500">Everyone</span>
          </>
        }
        description="Seamless, high-performance video hosting optimized for individuals, businesses, and enterprises alike."
        button={
          <Link href="https://jellyfin.tannerln7.com">
            <Button xl>Get Started Now</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
