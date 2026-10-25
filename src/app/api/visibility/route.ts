import { NextResponse } from 'next/server';
import { fetchMatterhornVisibility } from '@/lib/weather';

export const revalidate = 900; // 15-minute ISR / cache revalidation

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept',
  'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=300',
};

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: CORS_HEADERS,
  });
}

export async function GET() {
  try {
    const data = await fetchMatterhornVisibility();
    return NextResponse.json(data, {
      status: 200,
      headers: CORS_HEADERS,
    });
  } catch (error) {
    console.error('Error in /api/visibility:', error);
    return NextResponse.json(
      { error: 'Failed to compute Matterhorn visibility metrics' },
      { status: 500, headers: CORS_HEADERS }
    );
  }
}
