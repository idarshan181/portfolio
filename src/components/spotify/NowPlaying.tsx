'use client'; // Runs on client-side

import { Music, Pause, Play, Volume2 } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { FaSpotify } from 'react-icons/fa6';
import { fetchNowPlaying, fetchRecentlyPlayed } from '@/app/actions/actions';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

// const formatTime = (ms: number) => {
//   const seconds = Math.floor(ms / 1000);
//   const minutes = Math.floor(seconds / 60);
//   const remainingSeconds = seconds % 60;
//   return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
// };

export default function NowPlaying() {
  const [song, setSong] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [nowPlaying, setNowPlaying] = useState<boolean>(false);

  // useEffect(() => {
  //   async function fetchSong() {
  //     setLoading(true);
  //     const data = await fetchNowPlaying();
  //     setSong(data);
  //     setLoading(false);
  //   }

  //   fetchSong();
  // }, []);

  useEffect(() => {
    async function fetchSong() {
      setLoading(true);

      const nowPlayingTrack = await fetchNowPlaying();
      if (nowPlayingTrack) {
        setSong(nowPlayingTrack);
        setNowPlaying(true);
      } else {
        setNowPlaying(false);
        const recentlyPlayed = await fetchRecentlyPlayed();
        if (recentlyPlayed?.items?.length) {
          setSong(recentlyPlayed.items[0].track);
        }
      }

      setLoading(false);
    }

    fetchSong();
  }, []);

  if (loading) {
    return (
      <Card className="w-full max-w-md overflow-hidden bg-background/50 backdrop-blur-sm border border-border/50">
        <CardContent className="p-6 flex items-center justify-center h-[180px]">
          <div className="animate-pulse flex space-x-4 w-full">
            <div className="rounded-md bg-muted h-24 w-24"></div>
            <div className="flex-1 space-y-4 py-1">
              <div className="h-4 bg-muted rounded w-3/4"></div>
              <div className="h-4 bg-muted rounded w-1/2"></div>
              <div className="h-4 bg-muted rounded w-full"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
  if (!song) {
    return (
      <Card className="w-full max-w-lg overflow-hidden bg-background/50 backdrop-blur-sm border border-border/50">
        <CardContent className="p-6 flex items-center space-x-4">
          <div className="h-16 w-16 rounded-md bg-primary/10 flex items-center justify-center">
            <Music className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-lg">Not Playing</h3>
            <span className="text-muted-foreground">
              Spotify is currently idle
            </span>
          </div>
        </CardContent>
      </Card>
    );
  }

  // ✅ Show "Last Played" if Spotify is idle but has a recently played track
  if (!nowPlaying && song) {
    return (
      <Card className="w-full max-w-lg overflow-hidden bg-background/50 backdrop-blur-sm border border-border/50 relative group">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 opacity-50"></div>

        <CardContent className="p-6 relative z-10">
          <div className="flex items-start space-x-8">
            {/* Album Art */}
            <div className="relative items-center justify-center my-auto">
              <div className="h-32 w-32 rounded-md overflow-hidden ring-1 ring-border/50 shadow-lg">
                <Image
                  src={song?.album?.images[0]?.url}
                  alt={song?.album?.name}
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Song Info */}
            <div className="flex-1">
              <div className="space-y-1">
                <h3 className="font-medium text-lg">Last Played</h3>
                <p className="font-medium text-lg text-green-500">
                  {song.name}
                </p>
                <p className="text-muted-foreground text-sm overflow-hidden whitespace-nowrap relative w-full">
                  <motion.div
                    className="inline-block"
                    initial={{ x: '100%' }}
                    animate={{ x: '-100%' }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  >
                    {song.artists.map((artist: any) => artist.name).join(', ')}
                  </motion.div>
                </p>
                <p className="text-muted-foreground/70 text-xs">{song?.album?.name}</p>
              </div>

              {/* Volume Indicator */}
              <div className="flex items-center justify-between pt-2">

                {/* Spotify Button */}
                <div className="flex items-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 mt-4 px-2 text-xs rounded-full bg-primary/10 hover:bg-green-600/20 text-green-600"
                  >
                    <FaSpotify />
                    Listen on Spotify
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

    );
  }

  const albumImage = song.album.images[0]?.url;
  const artistName = song.artists?.map((artist: any) => artist.name).join(', ');
  const albumName = song.album.name;
  const songUrl = song.external_urls.spotify;

  return (
    <Card className="w-full max-w-lg overflow-hidden bg-background/50 backdrop-blur-sm border border-border/50 relative group">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

      {/* Animated vinyl record effect behind album art */}
      <div className="absolute top-6 left-6 w-24 h-24 rounded-full bg-black opacity-0 group-hover:opacity-80 transition-all duration-700 group-hover:scale-150 -z-10"></div>

      <Link href={songUrl} target="_blank" rel="noopener noreferrer" className="block">
        <CardContent className="p-6 relative z-10">
          <div className="flex items-start space-x-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: song ? 360 : 0 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className={cn(
                  'h-32 w-32 rounded-md overflow-hidden ring-1 ring-border/50 shadow-lg transform transition-all duration-500',
                  'group-hover:scale-105',
                )}
              >
                <Image
                  src={albumImage}
                  alt={albumName}
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </motion.div>
              <div className="absolute -bottom-2 -right-2 bg-background rounded-full p-1 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {!song
                  ? (
                      <Pause className="h-4 w-4 text-primary" />
                    )
                  : (
                      <Play className="h-4 w-4 text-primary" />
                    )}
              </div>
            </div>

            <div className="flex-1">
              <div className="space-y-1">
                <AnimatePresence mode="wait">
                  <motion.h3
                    key={song.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="font-medium text-lg line-clamp-1 text-green-500 dark:text-green-600  transition-colors duration-300"
                  >
                    {song.name}
                  </motion.h3>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={artistName}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-muted-foreground text-sm line-clamp-1"
                  >
                    <motion.span
                      className="inline-block"
                      initial={{ x: '100%' }}
                      animate={{ x: '-100%' }}
                      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    >

                      {artistName}
                    </motion.span>
                  </motion.p>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={albumName}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="text-muted-foreground/70 text-xs line-clamp-1"
                  >
                    {albumName}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* <div className="pt-2">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                  <span>{formatTime(progress)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
                <Progress value={progressValue} className="h-1" />
              </div> */}

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center space-x-1">
                  <Volume2 className="h-3 w-3 text-muted-foreground" />
                  <div className="flex space-x-0.5">
                    {[1, 2, 3, 4].map(i => (
                      <div
                        key={i}
                        className={cn(
                          'h-3 w-0.5 rounded-full',
                          i <= 3 ? 'bg-green-500' : 'bg-muted',
                        )}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex items-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 px-2 text-xs rounded-full bg-primary/10 hover:bg-green-600/20 text-green-600"
                  >
                    <FaSpotify />
                    Listen on Spotify
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
