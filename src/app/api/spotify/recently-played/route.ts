import type { NextApiRequest, NextApiResponse } from 'next';

import { getRecentlyPlayedTracks, SpotifyRecentlyPlayedResponse } from '@/lib/spotify';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const tracks: SpotifyRecentlyPlayedResponse | null = await getRecentlyPlayedTracks();

  if (!tracks) {
    return res.status(500).json({ message: 'Failed to fetch recently played tracks.' });
  }

  return res.status(200).json(tracks);
}
