import { getTopTracks, SpotifyTrack } from '@/lib/spotify';

export async function GET() {
  const tracks: SpotifyTrack[] | null = await getTopTracks();

  if (!tracks) {
    return new Response(JSON.stringify({ error: 'Failed to fetch top tracks.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify(tracks), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
