import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Services',
      links: [
        {
          text: 'WordPress optimization',
          href: '/our-wordpress-speed-optimization-services',
        },
      ],
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Contact',
      href: '/contact',
    },
  ],
};
  
export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'NDA', href: '/non-disclosure-agreements-nda' },
        { text: 'Security', href: '/security' },
        { text: 'Resources', href: '/resources' },

      ],
    },
    {
      title: 'Services',
      links: [
        { text: 'WordPress optimization', href: '/our-wordpress-speed-optimization-services' },

      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Uptime', href: '#' },

      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '/blog' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/mgknetcom' },
  ],
  footNote: `
     © 2019 – 2023 MGKNeT LLC All rights reserved.
  `,
};
