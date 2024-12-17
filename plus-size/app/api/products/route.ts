import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const productName = formData.get("productName") as string;
    const description = formData.get("description") as string;
    const price = parseFloat(formData.get("price") as string);
    const quantity = parseInt(formData.get("quantity") as string);
    const category = formData.get("category") as string;

    // Save to DB
    const product = await prisma.product.create({
      data: {
        productName,
        description,
        price,
        quantity,
        category,
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to add product" }, { status: 500 });
  }
}
