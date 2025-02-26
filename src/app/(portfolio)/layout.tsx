import { ClientThemeSwitcher } from '@/components/General/ClientThemeSwitcher';
import NavItem from '@/components/General/NavItem';
import { BaseTemplate } from '@/templates/BaseTemplate';
import { getTranslations, setRequestLocale } from 'next-intl/server';

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

  const navLabels = {
    home: t('home_link'),
    about: t('about_link'),
    projects: t('project_link'),
    hobbies: t('hobbies_link'),
    contact: t('contact_link'),
  };

  return (
    <>
      {/* <DemoBanner /> */}
      <BaseTemplate
        leftNav={(
          <>

          </>
        )}
        centerNav={<NavItem labels={navLabels} />}
        rightNav={(
          <>
            <li className="">
              <ClientThemeSwitcher />
            </li>
          </>
        )}
      >
        <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
      </BaseTemplate>
    </>
  );
}
