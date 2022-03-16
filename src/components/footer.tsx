import React from 'react';

const navigation = {
  main: [
    { name: 'Privacy Policy', href: '/legal/privacy' },
    { name: 'Imprint', href: '/legal/imprint' },
  ],
  social: [
    {
      name: 'Github',
      href: 'https://github.com/kevinkrs7',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 32.58 31.77" {...props}>
          <path
            fillRule="evenodd"
            d="M16.29,0C7.29,0,0,7.29,0,16.29c0,7.2,4.67,13.3,11.14,15.46,.81,.15,1.11-.35,1.11-.79,0-.39-.01-1.41-.02-2.77-4.53,.98-5.49-2.18-5.49-2.18-.74-1.88-1.81-2.38-1.81-2.38-1.48-1.01,.11-.99,.11-.99,1.63,.12,2.5,1.68,2.5,1.68,1.45,2.49,3.81,1.77,4.74,1.35,.15-1.05,.57-1.77,1.03-2.18-3.62-.41-7.42-1.81-7.42-8.05,0-1.78,.63-3.23,1.68-4.37-.17-.41-.73-2.07,.16-4.31,0,0,1.37-.44,4.48,1.67,1.3-.36,2.69-.54,4.08-.55,1.38,0,2.78,.19,4.08,.55,3.11-2.11,4.48-1.67,4.48-1.67,.89,2.24,.33,3.9,.16,4.31,1.04,1.14,1.67,2.59,1.67,4.37,0,6.26-3.81,7.63-7.44,8.04,.58,.5,1.11,1.5,1.11,3.02,0,2.18-.02,3.93-.02,4.47,0,.44,.29,.94,1.12,.78,6.47-2.16,11.13-8.26,11.13-15.45C32.58,7.29,25.29,0,16.29,0Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="mt-10 pt-10">
      <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <div className="mt-6 flex justify-center space-x-6">
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            {navigation.main.map((item) => (
              <div key={item.name} className="px-5 py-2">
                <a
                  href={item.href}
                  target={'_blank'}
                  className="text-base text-gray-200 hover:text-gray-400"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              className="text-gray-200 hover:text-gray-400"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6 mx-2" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-300">
          &copy; {new Date().getFullYear()} Kevin Kraus | Hamburg, Germany
        </p>
      </div>
    </footer>
  );
}
