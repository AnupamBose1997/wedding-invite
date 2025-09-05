import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

// This API route will be called by Sanity webhooks to trigger revalidation
export async function POST(request: NextRequest) {
  try {
    // Get the secret from environment variables
    const secret = process.env.REVALIDATE_SECRET
    
    // Check if the secret matches
    const body = await request.json()
    if (body.secret !== secret) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
    }

    // Revalidate the home page
    revalidatePath('/')
    
    console.log('✅ Revalidated home page')
    
    return NextResponse.json({ 
      revalidated: true, 
      message: 'Home page revalidated successfully',
      timestamp: new Date().toISOString()
    })
  } catch (err) {
    console.error('❌ Error revalidating:', err)
    return NextResponse.json({ 
      message: 'Error revalidating', 
      error: err instanceof Error ? err.message : 'Unknown error'
    }, { status: 500 })
  }
}

// Also handle GET requests for testing
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const secret = searchParams.get('secret')
  
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  try {
    revalidatePath('/')
    return NextResponse.json({ 
      revalidated: true, 
      message: 'Home page revalidated successfully (GET)',
      timestamp: new Date().toISOString()
    })
  } catch (err) {
    return NextResponse.json({ 
      message: 'Error revalidating', 
      error: err instanceof Error ? err.message : 'Unknown error'
    }, { status: 500 })
  }
}
