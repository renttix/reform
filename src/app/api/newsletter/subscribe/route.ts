import { NextResponse } from 'next/server'
import mailchimp from '@mailchimp/mailchimp_marketing'

export async function POST(request: Request) {
  // Check if Mailchimp is configured
  if (!process.env.MAILCHIMP_API_KEY || !process.env.MAILCHIMP_LIST_ID || !process.env.MAILCHIMP_API_SERVER) {
    return NextResponse.json(
      { message: 'Newsletter signup is temporarily unavailable.' },
      { status: 503 }
    )
  }

  // Configure Mailchimp
  mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER,
  })

  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    try {
      // Add member to list with double opt-in enabled
      await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID!, {
        email_address: email,
        status: 'pending', // This triggers the double opt-in email
        merge_fields: {
          // Add any additional fields you want to collect
          SIGNUP_SRC: 'Website',
        },
      })

      return NextResponse.json({
        message: 'Confirmation email sent. Please check your inbox.',
      })
    } catch (error: any) {
      // Handle Mailchimp specific errors
      if (error.response?.body?.title === 'Member Exists') {
        return NextResponse.json(
          { error: 'You are already subscribed to our newsletter.' },
          { status: 400 }
        )
      }

      throw error
    }
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    )
  }
}
