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
          text: 'WordPress Care Plans',
          href: '/services/wordpress-care-plans',
        },
        {
          text: 'WordPress Optimization',
          href: '/services/wordpress-speed-optimization-services',
        },
        {
          text: 'Consulting',
          href: '/services/consulting',
        },
         {
          text: 'Audits',
          href: '/services/audits',
        },

      ],
    },
    {
      text: 'About',
      href: '/about',
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
        { text: 'WordPress Otimization', href: '/services/wordpress-speed-optimization-services' },
        { text: 'WordPress Care Plans', href: '/services/wordpress-care-plans' },
        { text: 'Consulting', href: '/services/consulting' },
        { text: 'Audits', href: '/services/audits' },
        { text: 'Managment', href: '/services/managment' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Uptime', href: 'https://status.mgknet.com/' },

      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'FAQ', href: '/faq' },
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
