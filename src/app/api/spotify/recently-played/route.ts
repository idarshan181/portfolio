import { getRecentlyPlayedTracks, SpotifyRecentlyPlayedResponse } from '@/lib/spotify';

export async function GET() {
  const tracks: SpotifyRecentlyPlayedResponse | null = await getRecentlyPlayedTracks();

  if (!tracks) {
    return new Response(JSON.stringify({ error: 'Failed to fetch recently played tracks.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify(tracks), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
