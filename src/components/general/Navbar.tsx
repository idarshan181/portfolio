import { display, person } from '@/resources';
import NavItems from './NavItems';
import { ThemeToggle } from './ThemeToggle';
import TimeDisplay from './TimeDisplay';

const Navbar: React.FC = () => {
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
              <ul className="flex h-full  flex-wrap items-center text-lg font-medium md:gap-x-2">
                <NavItems />
              </ul>
            </nav>
            <nav>
              <ul className="flex h-full flex-wrap items-center gap-x-2 text-lg font-medium ">
                <li className="">
                  <ThemeToggle />
                </li>
              </ul>
            </nav>
          </div>
          <div className="hidden w-fit md:block">
            {display.time && <TimeDisplay timeZone={person.timezone} />}
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
