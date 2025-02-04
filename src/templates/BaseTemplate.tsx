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
        <header className="fixed top-2 z-50 mx-auto flex h-14 w-full items-center justify-around px-5">
          <div className="">
            {display.location && <span>{person.location}</span>}
          </div>
          <div className="mx-auto flex size-full max-w-fit items-center justify-around rounded-lg border-2 bg-background px-4 shadow-lg">
            {/* <nav>
              <h1 className="h-full items-center text-3xl font-bold text-foreground">
                <Link href="/">
                  {AppConfig.name}
                </Link>
              </h1>
            </nav> */}
            <nav>
              <ul className="flex h-full flex-wrap items-center gap-x-5 text-lg font-medium">
                {props.leftNav}
              </ul>
            </nav>
            <nav>
              <ul className="flex h-full flex-wrap items-center gap-x-2 text-lg font-medium">
                {props.centerNav}
              </ul>
            </nav>
            <nav>
              <ul className="flex h-full flex-wrap items-center gap-x-2 text-lg font-medium">
                {props.rightNav}
              </ul>
            </nav>
          </div>
          <div className="w-fit">
            {display.time && <TimeDisplay timeZone={person.timezone} />}
          </div>
        </header>

        <main className="mx-40 pt-20">{props.children}</main>
        <Footer />
      </div>
    </div>
  );
};
