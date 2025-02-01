import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function GET(request: NextRequest) {
  try {
    // Revalidate all dynamic paths
    revalidatePath('/')
    revalidatePath('/events')
    revalidatePath('/news')
    revalidatePath('/about')
    revalidatePath('/contact')
    revalidatePath('/join')
    revalidatePath('/volunteer')
    revalidatePath('/privacy-policy')
    revalidatePath('/plan/cut-taxes')
    revalidatePath('/plan/reform-nhs')
    revalidatePath('/plan/control-immigration')
    revalidatePath('/plan/fight-crime')
    revalidatePath('/plan/drive-growth')
    
    // Revalidate area pages
    revalidatePath('/areas/erdington')
    revalidatePath('/areas/castle-vale')
    revalidatePath('/areas/pype-hayes')
    revalidatePath('/areas/stockland-green')
    revalidatePath('/areas/kingstanding')

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      message: 'Paths revalidated successfully'
    })
  } catch (err) {
    return NextResponse.json({
      revalidated: false,
      now: Date.now(),
      message: 'Error revalidating paths'
    }, { status: 500 })
  }
}
