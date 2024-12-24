import Footer from '@/components/Footer';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { Button } from '@/components/ui/button';
import { BaseTemplate } from '@/templates/BaseTemplate';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'RootLayout',
  });

  return (
    <>
      {/* <DemoBanner /> */}
      <BaseTemplate
        leftNav={(
          <>
            <li className="rounded-lg px-2 py-1 hover:bg-slate-200">
              <Link
                href="/about/"
                className="border-none text-gray-950"
              >
                {t('about_link')}
              </Link>
            </li>

            <li className="rounded-lg px-2 py-1 hover:bg-slate-200">
              <Link
                href="/features/"
                className="border-none text-gray-950"
              >
                {t('feature_link')}
              </Link>
            </li>
            <li className="rounded-lg px-2 py-1 hover:bg-slate-200">
              <Link
                href="/pricing/"
                className="border-none text-gray-950"
              >
                {t('pricing_link')}
              </Link>
            </li>
            <li className="rounded-lg px-2 py-1 hover:bg-slate-200">
              <Link
                href="/contact/"
                className="border-none text-gray-950"
              >
                {t('contact_link')}
              </Link>
            </li>
            <li className="rounded-lg px-2 py-1 hover:bg-slate-100">
              <Link
                href="/blogs/"
                className="border-none text-gray-950"
              >
                {t('blog_link')}
              </Link>
            </li>
          </>
        )}
        rightNav={(
          <>
            <li className="rounded-lg px-2 hover:bg-slate-200">
              <Link
                href="/sign-in/"
                className="border-none text-gray-950 hover:text-gray-900"
              >
                {t('sign_in_link')}
              </Link>
            </li>

            <li>
              <Button asChild>
                <Link
                  href="/sign-up/"
                  className="group relative border-none text-white transition-all"
                >
                  {t('sign_up_link')}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-2 ">
                    →
                  </span>
                </Link>
              </Button>
            </li>

            <li className="ml-6">
              <LocaleSwitcher />
            </li>
          </>
        )}
      >
        <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
        <Footer />
      </BaseTemplate>
    </>
  );
}
