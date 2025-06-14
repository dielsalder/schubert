import { ReactFlowProvider } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import Chart from "~/features/flowchart/Chart";

export default function HomePage() {
  return (
    <main>
      <ReactFlowProvider>
        <Chart />
      </ReactFlowProvider>
    </main>
  );
}
