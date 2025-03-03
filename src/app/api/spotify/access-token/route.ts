/* eslint-disable unused-imports/no-unused-vars */
import axios from 'axios';
import { NextResponse } from 'next/server';
import * as qs from 'qs';

const GET_ACCESS_TOKEN = 'https://accounts.spotify.com/api/token';

const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID as string;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET as string;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN as string;

export async function GET() {
  if (!refresh_token) {
    return NextResponse.json({ error: 'Missing refresh token' }, { status: 400 });
  }

  try {
    const authHeader = btoa(`${client_id}:${client_secret}`);

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

    return NextResponse.json({ access_token: response.data.access_token }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to get access token' }, { status: 500 });
  }
}
