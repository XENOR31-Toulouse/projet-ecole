// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// POST: Create a new company
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Destructure form data
    const {
      companyName,
      email,
      phoneNumber,
      address,
      city,
      country,
      password,
    } = body;

    // Create a new user (company)
    const company = await prisma.company.create({
      data: {
        companyName,
        email,
        phoneNumber,
        address,
        city,
        country,
        password,
      },
    });

    return NextResponse.json(company, { status: 201 });
  } catch (error) {
    console.error('Error creating company:', error);
    return NextResponse.json({ error: 'Error creating company' }, { status: 500 });
  }
}
