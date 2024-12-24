import ContactBanner from '@/components/landing/ContactBanner';
import Hero from '@/components/landing/Hero';
import InfraSection from '@/components/landing/InfraSection';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type IIndexProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IIndexProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Index(props: IIndexProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  // const t = await getTranslations({
  //   locale,
  //   namespace: 'Index',
  // });

  return (
    <div className="xs:gap-y-8 flex w-full flex-col justify-center p-0 md:gap-y-0">
      <div className="relative  mb-10 h-screen ">
        <div className="square-grid-bg mask-radial" />
        <Hero />
      </div>
      {/* <Sponsors /> */}
      <InfraSection />
      <ContactBanner className="mt-8 md:mt-4" />
    </div>
  );
};
