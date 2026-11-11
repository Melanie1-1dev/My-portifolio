import { NextResponse } from "next/server";
import {
  sendContactMessage,
  validateContactInput,
  
} from "../../../../backend/contact";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();

  }catch (error) {
    return NextResponse.json(
      { error: "Please send a valid message." },
      { status: 400 }
    );
  }
}