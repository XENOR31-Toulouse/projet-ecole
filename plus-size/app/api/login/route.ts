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
  const { email, password } = body;

  try {
    const company = await Company.findOne({ email });
    if (!company || company.password !== password) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    return NextResponse.json({ message: 'Login successful' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error logging in' }, { status: 500 });
  }
}
