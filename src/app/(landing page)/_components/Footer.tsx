import HeaderLogo from '@/components/HeaderLogo';
import { Linkedin, Twitter } from 'lucide-react';

type NavigationKey = 'Practice' | 'Learn' | 'Company';

interface NavigationItem {
  name: string;
  href: string;
}

interface Navigation {
  Practice: NavigationItem[];
  Learn: NavigationItem[];
  Company: NavigationItem[];
}

const navigation: Navigation = {
  Practice: [
    { name: 'Questions', href: '/questions' },
    { name: 'Projects', href: '/projects' },
    { name: 'Interviews', href: '/interviews' },
  ],
  Learn: [
    { name: 'Courses', href: '/courses' },
    { name: 'Guides', href: '/guides' },
  ],
  Company: [
    { name: 'About', href: '/about' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms and Conditions', href: '/terms-and-conditions' },
  ],
};

const navigationKeys = Object.keys(navigation) as NavigationKey[];

export default function Footer() {
  return (
    <footer className="bg-primary" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="items-left flex flex-col gap-y-8">
            <HeaderLogo />
            <div className="flex items-center">
              <a
                className="inline-flex size-10 items-center justify-center gap-x-2 rounded-lg border border-transparent text-sm font-semibold hover:bg-white/10 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:pointer-events-none disabled:opacity-50"
                href="https://www.linkedin.com/company/frontend-hire/"
              >
                <Linkedin className="size-4 flex-shrink-0" />
              </a>
              <a
                className="inline-flex size-10 items-center justify-center gap-x-2 rounded-lg border border-transparent text-sm font-semibold hover:bg-white/10 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:pointer-events-none disabled:opacity-50"
                href="https://twitter.com/frontendhire"
              >
                <Twitter className="size-4 flex-shrink-0" />
              </a>
            </div>
          </div>
          <div className="mt-16 flex w-fit items-center sm:ml-auto xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-8">
              {navigationKeys.map((key: NavigationKey, index: number) => (
                <div key={index} className={index > 0 ? 'mt-10 md:mt-0' : ''}>
                  <h3 className="text-sm font-medium leading-6">{key}</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation[key].map((item: NavigationItem) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 hover:underline"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-24 flex w-full items-center justify-between">
          <p className="m-auto text-sm font-medium text-lightest">
            © 2024 Frontend Hire. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
