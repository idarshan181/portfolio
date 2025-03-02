'use server';

import { getCurrentSong, getRecentlyPlayedTracks, getTopTracks } from '@/lib/spotify';

export async function fetchNowPlaying() {
  return await getCurrentSong();
}

export async function fetchRecentlyPlayed() {
  return await getRecentlyPlayedTracks();
}

export async function fetchTopTracks() {
  return await getTopTracks();
}
