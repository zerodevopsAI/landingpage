import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    // Connect to MongoDB
    const client = await MongoClient.connect(process.env.MONGODB_URI!);
    const db = client.db();
    const collection = db.collection('contact_leads');

    // Insert lead
    await collection.insertOne({
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
    });

    await client.close();
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving contact lead:', error);
    return NextResponse.json({ error: 'Failed to save contact lead.' }, { status: 500 });
  }
} 