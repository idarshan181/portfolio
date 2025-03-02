import NowPlaying from '@/components/spotify/NowPlaying';
import TopTracks from '@/components/spotify/TopTracks';

export async function generateMetadata() {
  return {
    title: 'Hobbies - Darshan Patel',
    description: 'Explore Darshan \'s hobbies, interests, and personal activities beyond coding.',
  };
}

export default async function DashboardPage() {
  return (
    <div className="container mx-auto px-4">
      <p className="text-lg font-semibold">Dashboard</p>
      <h2 className="text-4xl font-bold tracking-tight">My Spotify Stats</h2>
      <p className="text-muted-foreground mt-2">
        Check out what I&apos;m listening to
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 items-start">
        {/* Left Section */}
        <div>

          {/* Now Playing Section */}
          <div className="mt-6">
            <NowPlaying />
          </div>

        </div>

        {/* Right Section (Future Content or Another Component) */}
        <div className="flex flex-col space-y-6 w-full">
          <div className="mt-6">
            <TopTracks />
          </div>
        </div>
      </div>
    </div>

  );
};
