import { getCurrentSong, SpotifyTrack } from '@/lib/spotify';
import { NextApiRequest, NextApiResponse } from 'next';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const song: SpotifyTrack | null = await getCurrentSong();

  if (!song) {
    return res.status(204).json({ message: 'No song is currently playing.' });
  }

  return res.status(200).json(song);
}
