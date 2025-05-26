import ClientPlayground from "@/components/ClientPlayground";

export default function PlaygroundPage() {
  const roomId = "test-room-123"; // 🔧 You can change this dynamically later

  return (
    <div className="bg-[#0d0f17] min-h-screen">
      <ClientPlayground roomId={roomId} />
    </div>
  );
}
