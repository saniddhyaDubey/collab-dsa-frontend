import { useEffect, useRef } from "react";
import Pusher, { Channel } from "pusher-js";

type UsePusherParams = {
  roomId: string;
  onCodeChange: (code: string, user: string) => void;
};

type CodeChangePayload = {
  code: string;
  user: string;
};

export default function usePusher({ roomId, onCodeChange }: UsePusherParams) {
  const pusherRef = useRef<Pusher | null>(null);

  useEffect(() => {
    const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
      cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
      authEndpoint: "/api/pusher/auth", // if using presence/private channels
    });

    const channel: Channel = pusher.subscribe(`presence-room-${roomId}`);

    channel.bind("code-change", (data: CodeChangePayload) => {
      onCodeChange(data.code, data.user);
    });

    pusherRef.current = pusher;

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
      pusher.disconnect();
    };
  }, [roomId, onCodeChange]);

  return pusherRef;
}
