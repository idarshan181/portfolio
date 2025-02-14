import Footer from '@/components/Footer';
import TimeDisplay from '@/components/TimeDisplay';
import { display, person } from '@/resources';

type BaseTemplateProps = {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  centerNav?: React.ReactNode;
  children: React.ReactNode;
};

export const BaseTemplate: React.FC<BaseTemplateProps> = (props) => {
  // const t = useTranslations('BaseTemplate');

  return (
    <div className="w-full px-1 antialiased">
      <div className="mx-auto">
        <header className="fixed bottom-2 z-50 mx-auto flex h-14 w-full items-center justify-around px-5 md:top-2">
          <div className="hidden md:block">
            {display.location && <span>{person.location}</span>}
          </div>
          <div className="mx-auto flex size-full max-w-fit items-center justify-around rounded-lg border border-gray-200 bg-background/80 px-4 shadow-lg drop-shadow-lg backdrop-blur-md dark:border-gray-700 dark:bg-gray-800/60">
            <nav>
              <ul className="flex h-full flex-wrap items-center gap-x-5 text-lg font-medium">
                {props.leftNav}
              </ul>
            </nav>
            <nav>
              <ul className="flex h-full  flex-wrap items-center text-lg font-medium md:gap-x-2">
                {props.centerNav}
              </ul>
            </nav>
            <nav>
              <ul className="flex h-full flex-wrap items-center gap-x-2 text-lg font-medium ">
                {props.rightNav}
              </ul>
            </nav>
          </div>
          <div className="hidden w-fit md:block">
            {display.time && <TimeDisplay timeZone={person.timezone} />}
          </div>
        </header>

        <main className="mx-2 pt-20 md:mx-36">{props.children}</main>
        <Footer />
      </div>
    </div>
  );
};
