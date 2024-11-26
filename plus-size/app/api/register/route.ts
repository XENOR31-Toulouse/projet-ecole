import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
  companyName: String,
  email: String,
  phoneNumber: String,
  address: String,
  city: String,
  country: String,
  password: String,
});

const Company = mongoose.models.Company || mongoose.model('Company', companySchema);

async function connectToDB() {
  if (mongoose.connection.readyState === 1) return; // Already connected
  await mongoose.connect('mongodb://admin:password@localhost:27017/mydb');
}

export async function POST(request: Request) {
  await connectToDB();
  const body = await request.json();
  const { companyName, email, phoneNumber, address, city, country, password } = body;

  try {
    const newCompany = new Company({ companyName, email, phoneNumber, address, city, country, password });
    await newCompany.save();

    return NextResponse.json({ message: 'Company registered successfully!' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error registering company' }, { status: 500 });
  }
}
