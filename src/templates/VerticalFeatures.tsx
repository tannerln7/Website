import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Secure & Scalable Cloud Streaming"
    description="Experience seamless, high-quality video hosting with cutting-edge security and effortless scalability. Perfect for businesses, creators, and enterprises."
  >
    <VerticalFeatureRow
      title="Crystal-Clear Streaming, Anytime"
      description="Deliver ultra-smooth, high-definition video with adaptive streaming technology. No buffering, just seamless playback across all devices."
      image="/assets/images/feature.svg"
      imageAlt="High-quality streaming illustration"
    />
    <VerticalFeatureRow
      title="Stream Anywhere, On Any Device"
      description="Intuitive apps make it easy to upload, manage, and stream your content—whether you're on desktop, mobile, or smart TV."
      image="/assets/images/feature2.svg"
      imageAlt="App compatibility illustration"
      reverse
    />
    <VerticalFeatureRow
      title="Effortless Content Mobility"
      description="Take your content wherever you go. Our cloud-based platform ensures instant access, smooth playback, and secure storage from anywhere."
      image="/assets/images/feature3.svg"
      imageAlt="Cloud-based video accessibility illustration"
    />
  </Section>
);


export { VerticalFeatures };
