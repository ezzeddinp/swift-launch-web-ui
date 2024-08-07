import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black bg-opacity-30 text-white py-10 pt-32">
      <div className="max-w-9xl mx-auto flex flex-col md:flex-row justify-center gap-8 lg:gap-52 px-4">
        <div className="flex flex-col items-start text-left">
          <h4 className="font-medium">Product</h4>
          <ul className="mt-2 space-y-2 text-neutral-500">
            <li><Link href="/store">Store</Link></li>
            <li><Link href="/developer">Developer</Link></li>
            <li><Link href="/teams">Teams</Link></li>
            <li><Link href="/pro">Pro <span className="inline-block bg-red-500 text-xs rounded-full px-2 py-1 ml-2 text-neutral-200">New</span></Link></li>
            <li><a href="/api-docs" target="_blank" rel="noopener noreferrer">API Docs</a></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/changelog">Changelog</Link></li>
            <li><a href="/manual" target="_blank" rel="noopener noreferrer">Manual</a></li>
            <li><a href="/troubleshooting" target="_blank" rel="noopener noreferrer">Troubleshooting</a></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>
        <div className="flex flex-col items-start text-left">
          <h4 className="font-medium">Company</h4>
          <ul className="mt-2 space-y-2 text-neutral-500">
            <li><a href="/careers" target="_blank" rel="noopener noreferrer">Careers</a></li>
            <li><Link href="/manifesto">Manifesto</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service">Terms of Service</Link></li>
            <li><Link href="/data-process-agreement">Data Process Agreement</Link></li>
            <li><a href="/press-kit" target="_blank" rel="noopener noreferrer">Press Kit</a></li>
            <li><a href="/contact" target="_blank" rel="noopener noreferrer">Contact</a></li>
          </ul>
        </div>
        <div className="flex flex-col items-start text-left">
          <h4 className="font-medium">Community</h4>
          <ul className="mt-2 space-y-2 text-neutral-500">
            <li><Link href="/community-stories">Community Stories</Link></li>
            <li><a href="https://slack.com" target="_blank" rel="noopener noreferrer">Slack</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">Dribbble</a></li>
          </ul>
        </div>
        <div className="flex flex-col items-start text-left">
          <h4 className="font-medium">By Raycast</h4>
          <ul className="mt-2 space-y-2 text-neutral-500">
            <li><a href="/snippets" target="_blank" rel="noopener noreferrer">Snippets</a></li>
            <li><a href="/prompts" target="_blank" rel="noopener noreferrer">Prompts</a></li>
            <li><a href="https://ray.so" target="_blank" rel="noopener noreferrer">ray.so</a></li>
            <li><a href="/icon-maker" target="_blank" rel="noopener noreferrer">Icon Maker</a></li>
            <li><a href="/wallpapers" target="_blank" rel="noopener noreferrer">Wallpapers</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
