import Footer from '@/components/general/Footer';
import Navbar from '@/components/general/Navbar';

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <div className="flex-grow py-5 mx-2 pt-20 md:mx-36 text-xl [&_p]:my-6">
        {children}
      </div>
      <Footer />
    </div>
  );
}
