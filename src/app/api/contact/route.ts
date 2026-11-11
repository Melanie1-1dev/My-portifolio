import { NextResponse } from "next/server";
import {
  sendContactMessage,
  validateContactInput,
} from "../../../../backend/contact";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Please send a valid message." },
      { status: 400 },
    );
  }

  const validation = validateContactInput(body);

  if (!validation.ok) {
    return NextResponse.json(
      { error: validation.error },
      { status: validation.status },
    );
  }

  const result = await sendContactMessage(validation.data);

  if (!result.ok) {
    return NextResponse.json(
      { error: result.error },
      { status: result.status },
    );
  }

  return NextResponse.json({ success: true });
}
