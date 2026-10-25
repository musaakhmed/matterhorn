import { NextResponse } from 'next/server';
import { fetchMatterhornVisibility } from '@/lib/weather';

export const revalidate = 900; // 15-minute ISR / cache revalidation

export async function GET() {
  try {
    const data = await fetchMatterhornVisibility();
    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=300',
      },
    });
  } catch (error) {
    console.error('Error in /api/visibility:', error);
    return NextResponse.json(
      { error: 'Failed to compute Matterhorn visibility metrics' },
      { status: 500 }
    );
  }
}
