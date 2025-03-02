import type { NextApiRequest, NextApiResponse } from 'next';

import { getTopTracks, SpotifyTrack } from '@/lib/spotify';

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  const tracks: SpotifyTrack[] | null = await getTopTracks();

  if (!tracks) {
    return res.status(500).json({ message: 'Failed to fetch top tracks.' });
  }

  return res.status(200).json(tracks);
}
