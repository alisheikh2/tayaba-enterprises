import { NextResponse } from 'next/server';
import { isAuthenticatedRequest } from '@/lib/auth';
import { connectToDatabase } from '@/lib/mongodb';
import ContactSubmission from '@/models/ContactSubmission';

export async function GET(request: Request) {
  if (!isAuthenticatedRequest(request)) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
  }

  try {
    const db = await connectToDatabase();
    if (!db) {
      return NextResponse.json({
        submissions: [],
        info: 'MongoDB connection not configured.',
      });
    }

    const submissions = await ContactSubmission.find().sort({ createdAt: -1 }).lean();
    const formatted = submissions.map((sub: any) => ({
      id: sub._id.toString(),
      formType: sub.formType,
      name: sub.name,
      email: sub.email,
      phone: sub.phone || '',
      message: sub.message,
      status: sub.status,
      createdAt: sub.createdAt,
    }));

    return NextResponse.json({ submissions: formatted });
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return NextResponse.json({ error: 'Failed to fetch submissions' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  if (!isAuthenticatedRequest(request)) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID required' }, { status: 400 });
    }

    const db = await connectToDatabase();
    if (!db) {
      return NextResponse.json({ error: 'MongoDB connection not available' }, { status: 400 });
    }

    await ContactSubmission.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting submission:', error);
    return NextResponse.json({ error: 'Failed to delete submission' }, { status: 500 });
  }
}
