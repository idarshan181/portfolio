'use client';

import { fetchTopTracks } from '@/app/actions/actions';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ExternalLink, Music } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Define Types for Spotify Data
interface SpotifyArtist {
  name: string;
  external_urls: { spotify: string };
}

interface SpotifyAlbum {
  name: string;
  images: { url: string; height: number; width: number }[];
  external_urls: { spotify: string };
}

interface SpotifyTrack {
  id: string;
  name: string;
  album: SpotifyAlbum;
  artists: SpotifyArtist[];
  external_urls: { spotify: string };
}

// TrackItem component moved to the top level
const TrackItem = ({
  track,
  setHoveredTrack,
  hoveredTrack,
}: {
  track: SpotifyTrack;
  setHoveredTrack: (id: string | null) => void;
  hoveredTrack: string | null;
}) => {
  const artistName = track.artists.map(artist => artist.name).join(', ');
  const albumImage = track.album.images[0]?.url;
  const songUrl = track.external_urls.spotify;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      onMouseEnter={() => setHoveredTrack(track.id)}
      onMouseLeave={() => setHoveredTrack(null)}
    >
      <Link
        href={songUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center space-x-3 p-2 rounded-md hover:bg-primary/5 transition-colors duration-300"
      >
        <div className="relative h-12 w-12 rounded-md overflow-hidden ring-1 ring-border/50 shadow-sm">
          {albumImage
            ? (
                <Image
                  src={albumImage}
                  alt={track.name}
                  width={48}
                  height={48}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              )
            : (
                <div className="h-full w-full bg-primary/10 flex items-center justify-center">
                  <Music className="h-6 w-6 text-primary/60" />
                </div>
              )}

          <div
            className={cn(
              'absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 transition-opacity duration-300',
              hoveredTrack === track.id ? 'opacity-100' : '',
            )}
          >
            <ExternalLink className="h-5 w-5 text-white" />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex-1 space-y-2 py-1">
            <div className="font-medium text-sm rounded w-3/4 line-clamp-1">{track.name}</div>
            <div className="text-xs rounded line-clamp-1">{artistName}</div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default function TopTracks() {
  const [tracks, setTracks] = useState<SpotifyTrack[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [hoveredTrack, setHoveredTrack] = useState<string | null>(null);

  useEffect(() => {
    const getTopTracks = async () => {
      setLoading(true);
      try {
        const data = await fetchTopTracks();
        setTracks(data as SpotifyTrack[]);
      } catch {
        setError('Failed to fetch top tracks');
      } finally {
        setLoading(false);
      }
    };
    getTopTracks();
  }, []);

  const firstColumnTracks = tracks.slice(0, 5);
  const secondColumnTracks = tracks.slice(5, 10);

  if (loading) {
    return (
      <Card className="w-full bg-background/50 backdrop-blur-sm border border-border/50">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">My Top Tracks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[0, 1].map(colIndex => (
              <div key={colIndex} className="space-y-4">
                {[...Array.from({ length: 5 })].map((_, i) => (
                  <div key={i} className="animate-pulse flex space-x-3">
                    <div className="rounded-md bg-muted h-12 w-12"></div>
                    <div className="flex-1 space-y-2 py-1">
                      <div className="h-3 bg-muted rounded w-3/4"></div>
                      <div className="h-2 bg-muted rounded w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="w-full bg-background/50 backdrop-blur-sm border border-border/50">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-red-500">Error</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-red-400">{error}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full bg-background/50 backdrop-blur-sm border border-border/50">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold flex items-center">
          <span className="text-green-500">
            My Top Tracks
          </span>
          <div className="ml-2 h-1 w-1 rounded-full bg-green-500 animate-pulse"></div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <AnimatePresence>
              {firstColumnTracks.map(track => (
                <TrackItem key={track.id} track={track} setHoveredTrack={setHoveredTrack} hoveredTrack={hoveredTrack} />
              ))}
            </AnimatePresence>
          </div>
          <div className="space-y-1">
            <AnimatePresence>
              {secondColumnTracks.map(track => (
                <TrackItem key={track.id} track={track} setHoveredTrack={setHoveredTrack} hoveredTrack={hoveredTrack} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
