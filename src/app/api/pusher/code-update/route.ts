import { NextResponse } from "next/server";
import Pusher from "pusher";

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.NEXT_PUBLIC_PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
  useTLS: true,
});

export async function POST(req: Request) {
  const body = await req.json();
  const { roomId, code, user } = body;

  try {
    await pusher.trigger(`presence-room-${roomId}`, "code-change", {
      code,
      user,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Pusher trigger failed:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
