import { ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <ReactFlow />
    </main>
  );
}
