import Cal from '@/components/Cal';
import ContactForm from '@/components/ContactForm';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type IContactProps = {
  params: Promise<{ slug: string; locale: string }>;
};

export async function generateMetadata(props: IContactProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Contact',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Contact(props: IContactProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'Contact',
  });

  const formTranslations = {
    firstName: t('form.first_name'),
    lastName: t('form.last_name'),
    email: t('form.email'),
    phone: t('form.phone'),
    message: t('form.message'),
    services: t('form.services'),
    submit: t('form.submit'),
    sending: t('form.sending'),
    success: t('form.success_message'),
    error: t('form.error_message'),
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex flex-col items-center">
        <h1 className="mb-4 text-center text-4xl font-bold">
          {t('header_title')}
        </h1>
        <Cal />
      </div>

      <p className="mx-auto mb-8 max-w-2xl text-center text-base text-gray-600">
        {t('header_description')}
      </p>

      <div className="mx-auto grid max-w-xl grid-cols-1 gap-20 px-1">
        <div className="col-span-2 rounded-lg bg-white p-6 shadow">
          <ContactForm
            translations={formTranslations}
          />
        </div>

      </div>
    </div>
  );
};
