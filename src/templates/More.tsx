import Image from 'next/image';

import { Section } from '@/layout/Section';

const More = () => (
  <Section
    title="Powerful Tools, Seamless Integration"
    description="Enhance your video streaming experience with cutting-edge integrations from industry-leading platforms."
  >
    <table className="mx-auto border-collapse">
      <tbody>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <a
              href="https://drive.google.com"
              target="_blank"
            >
              <Image
                src="/assets/images/drive.webp"
                alt="Sentry – Error Monitoring & Performance Tracking"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a
              href="https://onedrive.live.com/"
              target="_blank"
            >
              <Image
                src="/assets/images/onedrive.png"
                alt="Better Stack – Observability & Monitoring"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a href="https://www.icloud.com/">
              <Image
                src="/assets/images/icloud.png"
                alt="Nextless.js – React SaaS Boilerplate for Next.js"
                width={260}
                height={224}
              />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </Section>
);


export { More };
