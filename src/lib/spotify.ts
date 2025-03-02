import { Buffer } from 'node:buffer';

import axios from 'axios';

import * as qs from 'qs';
// Spotify API Endpoints
const GET_ACCESS_TOKEN = 'https://accounts.spotify.com/api/token';
const GET_CURRENT_SONG_ACTIVITY = 'https://api.spotify.com/v1/me/player/currently-playing';
const GET_TOP_TRACKS = 'https://api.spotify.com/v1/me/top/tracks';
const GET_RECENTLY_PLAYED_TRACKS = 'https://api.spotify.com/v1/me/player/recently-played';

// Load environment variables
const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID as string;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET as string;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN as string;

if (!client_id || !client_secret || !refresh_token) {
  console.error('❌ Missing required environment variables for Spotify API.');
}

const getAccessToken = async (): Promise<string | null> => {
  try {
    if (!refresh_token) {
      console.error('❌ Error: Missing refresh_token in environment variables.');
      return null;
    }

    const authHeader = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

    const response = await axios.post(
      GET_ACCESS_TOKEN,
      qs.stringify({
        grant_type: 'refresh_token',
        refresh_token,
      }),
      {
        headers: {
          'Authorization': `Basic ${authHeader}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );

    return response.data.access_token;
  } catch (error: any) {
    console.error('❌ Error fetching access token:', error.response?.data || error.message);
    return null;
  }
};

// Define response interfaces
export interface SpotifyTrack {
  name: string;
  artists: { name: string }[];
  album: { images: { url: string }[] };
  external_urls: { spotify: string };
}

export interface SpotifyRecentlyPlayedResponse {
  items: { track: SpotifyTrack }[];
}

export const getCurrentSong = async (): Promise<SpotifyTrack | null> => {
  const access_token = await getAccessToken();
  if (!access_token) {
    console.error('❌ Error: Unable to fetch access token for current song.');
    return null;
  }

  try {
    const response = await axios.get(GET_CURRENT_SONG_ACTIVITY, {
      headers: { Authorization: `Bearer ${access_token}` },
    });
    return response.data.item;
  } catch (error: any) {
    console.error('❌ Error fetching current song:', error.response?.data || error.message);
    return null;
  }
};

export const getTopTracks = async (): Promise<SpotifyTrack[] | null> => {
  const access_token = await getAccessToken();
  if (!access_token) {
    console.error('❌ Error: Unable to fetch access token for top tracks.');
    return null;
  }

  try {
    const response = await axios.get(GET_TOP_TRACKS, {
      headers: { Authorization: `Bearer ${access_token}` },
      params: { time_range: 'short_term' },
    });

    return response.data.items;
  } catch (error: any) {
    console.error('❌ Error fetching top tracks:', error.response?.data || error.message);
    return null;
  }
};

export const getRecentlyPlayedTracks = async (): Promise<SpotifyRecentlyPlayedResponse | null> => {
  const access_token = await getAccessToken();
  if (!access_token) {
    console.error('❌ Error: Unable to fetch access token for recently played tracks.');
    return null;
  }

  try {
    const response = await axios.get(GET_RECENTLY_PLAYED_TRACKS, {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    return response.data;
  } catch (error: any) {
    console.error('❌ Error fetching recently played tracks:', error.response?.data || error.message);
    return null;
  }
};

export const getTopArtists = async (): Promise<SpotifyTrack[] | null> => {
  const access_token = await getAccessToken();
  if (!access_token) {
    console.error('❌ Error: Unable to fetch access token for top tracks.');
    return null;
  }

  try {
    const response = await axios.get(GET_TOP_TRACKS, {
      headers: { Authorization: `Bearer ${access_token}` },
      params: { time_range: 'short_term' },
    });

    return response.data.items;
  } catch (error: any) {
    console.error('❌ Error fetching top tracks:', error.response?.data || error.message);
    return null;
  }
};
