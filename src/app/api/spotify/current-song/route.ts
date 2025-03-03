import { getCurrentSong, SpotifyTrack } from '@/lib/spotify';

export async function GET() {
  const song: SpotifyTrack | null = await getCurrentSong();

  if (!song) {
    return new Response(JSON.stringify({ message: 'No song is currently playing.' }), {
      status: 204,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify(song), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
