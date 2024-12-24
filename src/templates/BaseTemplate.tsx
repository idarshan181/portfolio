import { AppConfig } from '@/utils/AppConfig';
import Link from 'next/link';

export const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  // const t = useTranslations('BaseTemplate');

  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      <div className="mx-auto">
        <header className="h-20 items-center px-2">
          <div className="flex h-full items-center justify-around">
            <nav>
              <h1 className="h-full items-center text-3xl font-bold text-gray-900">
                <Link href="/">
                  {AppConfig.name}
                </Link>
              </h1>
            </nav>

            <nav>
              <ul className="flex h-full flex-wrap items-center gap-x-5 text-lg font-medium">
                {props.leftNav}
              </ul>
            </nav>

            <nav>
              <ul className="flex h-full flex-wrap items-center gap-x-2 text-lg font-medium">
                {props.rightNav}
              </ul>
            </nav>
          </div>
        </header>

        <main>{props.children}</main>

      </div>
    </div>
  );
};
