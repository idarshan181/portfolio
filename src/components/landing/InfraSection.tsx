import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';

type BlogSectionProps = React.ComponentProps<'div'>;

export default function InfraSection({ className = '', style, ...props }: BlogSectionProps) {
  return (
    <div className={`relative mx-10 flex flex-col rounded-lg bg-gradient-to-tr from-[#e0f7e9] via-white to-white p-20 md:mx-20 ${className}`} style={style} {...props}>
      <div className="flex flex-col rounded-lg ">

        {/* Section Name */}
        <div className="flex w-fit items-center gap-x-4 rounded-lg ">
          <div className="h-8 w-5 rounded-sm bg-gradient-to-b from-[#007f4e] to-[#00b86b]" />
          <h1 className="font-normal text-black">Infrastructure</h1>
        </div>

        {/* Section Header/SubHeader */}
        <div className="mt-8 flex flex-col ">
          <h2 className="text-6xl font-normal text-black">
            Infinite Computing
            <br />
            at your fingertips
          </h2>
          <p className="mt-0 text-lg font-normal text-gray-600">Experience ultra-fast, highly accurate LLMs crafted to answer your queries with unmatched precision.</p>
        </div>

        {/* Section Cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="flex flex-col items-start justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-shadow duration-200 hover:shadow-lg">
            {/* <div className="mb-4"><Image src="/path-to-icon1.svg" alt="Icon" className="h-8 w-8" /></div> */}
            <h3 className="mb-2 text-xl font-semibold text-gray-800">Privacy-First AI Assistance</h3>
            <p className="mb-4 text-lg text-gray-600">Deliver accurate and lightning-fast responses using offline LLM-based RAG solutions designed to prioritize user privacy and secure data ownership.</p>
            <Link href="#" className="flex items-center font-medium text-black hover:underline">
              Learn more
              <FiChevronRight className="ml-1" size={24} />

            </Link>
          </div>

          <div className="flex flex-col items-start justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-shadow duration-200 hover:shadow-lg">
            {/* <div className="mb-4"><Image src="/path-to-icon1.svg" alt="Icon" className="h-8 w-8" /></div> */}
            <h3 className="mb-2 text-xl font-semibold text-gray-800">Your Data, Your Control</h3>
            <p className="mb-4 text-lg text-gray-600">Experience offline-ready LLM solutions that ensure complete data privacy and empower you with unparalleled control over your information.</p>
            <Link href="#" className="flex items-center font-medium text-black hover:underline ">
              <span>Learn more</span>
              <FiChevronRight className="ml-1" size={24} />
            </Link>
          </div>

          <div className="flex flex-col items-start justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-shadow duration-200 hover:shadow-lg">
            {/* <div className="mb-4"><Image src="/path-to-icon1.svg" alt="Icon" className="h-8 w-8" /></div> */}
            <h3 className="mb-2 text-xl font-semibold text-gray-800">Secure, Accurate AI at Your Fingertips</h3>
            <p className="mb-4 text-lg text-gray-600">Harness the power of offline LLM technology for rapid and precise query resolution, all while keeping your data safe and fully under your ownership.</p>
            <Link href="#" className="flex flex-row items-center font-medium text-black hover:underline">
              <span>Learn more</span>
              <FiChevronRight className="ml-1" size={24} />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
