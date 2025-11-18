import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient, DATABASE_ID, COLLECTIONS } from '@/lib/appwrite-server';
import { ID } from 'node-appwrite';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, hometown, zipcode, howCanYouHelp } = body;

    // Validate required fields
    if (!name || !email || !hometown || !zipcode) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate zipcode (5 digits)
    if (!/^\d{5}$/.test(zipcode)) {
      return NextResponse.json(
        { success: false, error: 'Invalid zipcode format. Must be 5 digits.' },
        { status: 400 }
      );
    }

    const { databases } = createAdminClient();

    // Create supporter signup document
    const document = await databases.createDocument(
      DATABASE_ID,
      COLLECTIONS.SUPPORTER_SIGNUPS,
      ID.unique(),
      {
        name,
        email,
        hometown,
        zipcode,
        howCanYouHelp: howCanYouHelp || '',
        submittedAt: new Date().toISOString(),
      }
    );

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully joined the Verona Bike Loop!',
        documentId: document.$id,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating supporter signup:', error);

    // Handle duplicate email error
    if (error.code === 409) {
      return NextResponse.json(
        { success: false, error: 'This email is already registered.' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { success: false, error: 'Failed to submit signup. Please try again.' },
      { status: 500 }
    );
  }
}
