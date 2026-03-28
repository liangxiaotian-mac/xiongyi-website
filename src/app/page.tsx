import dynamic from "next/dynamic";

const nodeRegistry = {
  "10-43": dynamic(() => import("@/components/nodes/Node10_43")),
  "10-44": dynamic(() => import("@/components/nodes/Node10_44")),
  "10-45": dynamic(() => import("@/components/nodes/Node10_45")),
  "10-46": dynamic(() => import("@/components/nodes/Node10_46")),
  "10-47": dynamic(() => import("@/components/nodes/Node10_47")),
  "10-48": dynamic(() => import("@/components/nodes/Node10_48")),
  "10-50": dynamic(() => import("@/components/nodes/Node10_50")),
  "10-52": dynamic(() => import("@/components/nodes/Node10_52")),
} as const;

const pageNodes: Array<keyof typeof nodeRegistry> = ["10-43", "10-44", "10-45", "10-46", "10-47", "10-48", "10-50", "10-52"];

export default function Home() {
  return (
    <main>
      {pageNodes.map((nodeId) => {
        const NodeComponent = nodeRegistry[nodeId];
        return <NodeComponent key={nodeId} />;
      })}
    </main>
  );
}
