import { AppConfig } from '@/utils/AppConfig';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaXTwitter, FaYoutube } from 'react-icons/fa6';

type FooterProps = React.ComponentProps<'footer'>;

export default function Footer({ className = '', style, ...props }: FooterProps) {
  return (
    <footer className={`mt-10 ${className}`} style={style} {...props}>
      <div className="mx-20 mb-10 grid grid-cols-2 md:grid-cols-5">

        {/* Solution */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Popular Models</h3>
          <ul className="mt-4 flex flex-col gap-y-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#009959]">Llama-3.3-70B-Instruct</Link>
            <Link href="/" className="hover:text-[#009959]">Gemma 2 9B Instruct</Link>
            <Link href="/" className="hover:text-[#009959]">Mistral 7B Instruct v0.2</Link>
            <Link href="/" className="hover:text-[#009959]">Deepseek Coder</Link>
          </ul>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Product</h3>
          <ul className="mt-4 flex flex-col gap-y-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#009959]">Pricing</Link>
            <Link href="/" className="hover:text-[#009959]">Success Stories</Link>
            <Link href="/" className="hover:text-[#009959]">Terms of Service</Link>
            <Link href="/" className="hover:text-[#009959]">Privacy Policy</Link>
          </ul>
        </div>

        {/* Developers/Resources */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Developers</h3>
          <ul className="mt-4 flex flex-col gap-y-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#009959]">Changelog</Link>
            <Link href="/" className="hover:text-[#009959]">Status</Link>
            <Link href="/" className="hover:text-[#009959]">Docs</Link>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Company</h3>
          <ul className="mt-4 flex flex-col gap-y-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#009959]">About</Link>
            <Link href="/" className="hover:text-[#009959]">Blog</Link>
            <div>
              <Link href="/" className="hover:text-[#009959]">Careers</Link>
              <span className="ml-2 text-xs font-light uppercase text-[#009959]">We’re hiring</span>
            </div>
          </ul>
        </div>

        {/* Company Socials */}
        <div className="ml-auto">
          <h1 className="text-right text-3xl font-bold text-gray-900">
            <Link href="/">
              {AppConfig.name}
            </Link>
          </h1>
          <ul className="mt-4 flex flex-row gap-x-4 text-lg text-gray-500">
            <Link href="/" className="hover:text-black">
              <FaGithub />
            </Link>
            <Link href="/" className="hover:text-black">
              <FaXTwitter />
            </Link>
            <Link href="/" className="hover:text-[#0077B5]"><FaLinkedin /></Link>
            <Link href="/" className="hover:text-[#FF0000]">
              <FaYoutube />
            </Link>
          </ul>
        </div>

      </div>

      {/* * PLEASE READ THIS SECTION
       * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
       * The link doesn't need to appear on every pages, one link on one page is enough.
       * For example, in the `About` page. Thank you for your support, it'll mean a lot to me. */}
      <div className="mx-20 flex flex-row justify-stretch border-t  border-gray-300 py-8 text-sm">
        <p>{`© Copyright ${new Date().getFullYear()} ${AppConfig.name}. `}</p>
        <div className="ml-auto flex flex-row gap-x-4 ">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>

  );
}
