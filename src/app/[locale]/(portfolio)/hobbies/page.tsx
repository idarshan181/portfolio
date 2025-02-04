import { getTranslations, setRequestLocale } from 'next-intl/server';

type IHobbyProps = {
  params: Promise<{ slug: string; locale: string }>;
};

export async function generateMetadata(props: IHobbyProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Hobbies',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function About(props: IHobbyProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'Hobbies',
  });

  return (
    <>
      <p>{t('about_paragraph')}</p>
    </>
  );
};
