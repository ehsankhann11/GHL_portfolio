import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.fullName || !data.email || !data.businessName || !data.service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create leads directory if it doesn't exist
    const leadsDir = path.join(process.cwd(), 'leads');
    if (!existsSync(leadsDir)) {
      await mkdir(leadsDir, { recursive: true });
    }

    // Save to JSON file
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `lead-${timestamp}.json`;
    const filepath = path.join(leadsDir, filename);
    
    await writeFile(filepath, JSON.stringify({
      ...data,
      submittedAt: new Date().toISOString()
    }, null, 2));

    // Log to console (you can integrate with EmailJS, SendGrid, etc.)
    console.log('🔔 NEW LEAD SUBMITTED:');
    console.log('Name:', data.fullName);
    console.log('Email:', data.email);
    console.log('Business:', data.businessName);
    console.log('Service:', data.service);
    console.log('Budget:', data.budget || 'Not specified');
    console.log('Details:', data.projectDetails || 'No details provided');
    console.log('---');

    // Here you can add email integration like EmailJS, SendGrid, etc.
    // For now, we'll just return success
    
    return NextResponse.json({ 
      success: true, 
      message: 'Lead submitted successfully' 
    });
  } catch (error) {
    console.error('Error processing lead:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

