import { li } from "motion/react-client";

const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Work',
    href: '#work'
  },
  {
    label: 'Contact me',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://www.github.com/impushpesh'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/pushpeshpant'
  },
  {
    label: 'Twitter X',
    href: 'https://x.com/iPushpesh_Pant'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/impushpesh'
  }
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] font-preahvihear">Drop a mail at</h2>
            <a href="mailto:ppant9418@gmail.com" className="inline-block bg-sky-500 text-white px-6 py-3 rounded-xl hover:bg-sky-600 transition-colors">
              Email
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2">Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 " target="_blank">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className=" pt-10 mb-8">
            <p className="text-zinc-500 text-sm">Made by Pushpesh Pant</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
