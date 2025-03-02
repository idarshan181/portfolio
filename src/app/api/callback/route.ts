/* eslint-disable unused-imports/no-unused-vars */
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import * as qs from 'qs';

// Environment variables
const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID as string;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET as string;
const redirect_uri = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI as string;

// Handle GET request for /api/callback
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const code = url.searchParams.get('code');

  if (!code) {
    return NextResponse.json({ error: 'Missing authorization code' }, { status: 400 });
  }

  try {
    // Exchange authorization code for an access token & refresh token
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      qs.stringify({
        grant_type: 'authorization_code',
        code,
        redirect_uri,
      }),
      {
        headers: {
          'Authorization': `Basic ${btoa(`${client_id}:${client_secret}`)}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );

    const { access_token, refresh_token } = response.data;

    return NextResponse.json({ access_token, refresh_token }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to get access token' }, { status: 500 });
  }
}
