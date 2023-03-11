---
title: 'Security'
layout: '~/layouts/MarkdownLayout.astro'
---

_Last updated_: 10 March, 2023

Encryption
----------

Data is always encrypted, both while in transit and at rest. In transit using strong, modern TLS. And at rest, we use one of the strongest block chippers available, the 256-bit Advanced Encryption Standard (AES-256). Additionally, all secret keys are automatically rotated on a regular basis.

Threat detection
----------------

Our infrastructure has automated vulnerability scanning, threat detection, and bot protection. Our partners Cloudflare and Amazon Web Services, are industry leaders in security.

Data location
-------------

All data is safely stored within the European Union, currently in Germany. This facilitates compliance with privacy regulations and leverages the EU’s strong standards for data protection.

Site Reliability
----------------

Our systems continuously monitor for failures and escalate to our team as needed to minimize downtime and prevent issues for our users. We strive for 99.95% uptime at least.

Application security
--------------------

Our web application is designed and frequently tested with OWASP Top 10 in mind. This accounts for the most common types of attacks such as injection, broken authentication, XSS, CSRF, and several others.

Security best practices
-----------------------

We use two-factor authentication on all accounts with access to our infrastructure. All secrets are encrypted, and keys are rotated regularly. All development equipment uses disk encryption. We follow the Principle of Least Privilege at all levels of our infrastructure.
