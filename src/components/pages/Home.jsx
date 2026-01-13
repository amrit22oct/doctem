import { useRef, useState } from "react";
import { data } from "../../mock/apidata/apidata";
import RenderNode from "./RenderNode";

export default function Home() {
  const doc = data[0];
  const printRef = useRef();
  const [documentData, setDocumentData] = useState(doc);

  const handlePrint = () => {
    const printContent = printRef.current.innerHTML;
    const newWin = window.open("", "_blank");
    newWin.document.write(`
      <html>
        <head>
          <title>${doc.title}</title>
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.3.2/dist/tailwind.min.css" rel="stylesheet">
        </head>
        <body>${printContent}</body>
      </html>
    `);
    newWin.document.close();
    newWin.print();
  };

  // Recursive node update
  const updateNode = (nodeId, newContent, nodes = documentData.children) => {
    return nodes.map(node => {
      if (node.node_id === nodeId) return { ...node, content: newContent };
      if (node.children) node.children = updateNode(nodeId, newContent, node.children);
      return node;
    });
  };

  const handleSaveNode = (nodeId, newContent) => {
    const updatedChildren = updateNode(nodeId, newContent);
    setDocumentData({ ...documentData, children: updatedChildren });
  };

  return (
    <div className="p-6 bg-gray-200 min-h-screen">
      <button
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={handlePrint}
      >
        Print Document
      </button>

      {/* Document Preview */}
      <div
        ref={printRef}
        className="mx-auto bg-white shadow-lg border border-gray-300"
        style={{ width: "210mm", minHeight: "297mm", padding: "20mm", fontFamily: "Arial, sans-serif" }}
      >
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-2xl font-bold mb-2">{documentData.title}</h1>
          <p className="text-gray-600 mb-2">{documentData.description}</p>
          {documentData.links && (
            <div className="flex flex-wrap gap-2 mb-2">
              {documentData.links.map((l, i) => (
                <a key={i} href={l} className="text-blue-600 underline">{l}</a>
              ))}
            </div>
          )}
          <hr className="border-gray-400 mb-4" />
        </header>

        {/* Content */}
        <section>
          {documentData.children?.map((node) => (
            <RenderNode
              key={node.node_id || Math.random()} // node_id or fallback
              node={node}
              onSave={handleSaveNode}
            />
          ))}
        </section>
      </div>
    </div>
  );
}







// import { useRef } from "react";
// import { data } from "../../mock/apidata/apidata";
// import RenderNode from "./RenderNode";

// export default function Home() {
//   const doc = data[0];
//   const printRef = useRef();

//   const handlePrint = () => {
//     const printContent = printRef.current.innerHTML;
//     const newWin = window.open("", "_blank");
//     newWin.document.write(`
//       <html>
//         <head>
//           <title>${doc.title}</title>
//           <link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.3.2/dist/tailwind.min.css" rel="stylesheet">
//         </head>
//         <body>${printContent}</body>
//       </html>
//     `);
//     newWin.document.close();
//     newWin.print();
//   };

//   return (
//     <div className="p-6 bg-gray-200 min-h-screen">
//       <button
//         className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//         onClick={handlePrint}
//       >
//         Print Document
//       </button>

//       {/* Document Preview */}
//       <div
//         ref={printRef}
//         className="mx-auto bg-white shadow-lg border border-gray-300"
//         style={{ width: "210mm", minHeight: "297mm", padding: "20mm", fontFamily: "Arial, sans-serif" }}
//       >
//         {/* Header */}
//         <header className="mb-6">
//           <h1 className="text-2xl font-bold mb-2">{doc.title}</h1>
//           <p className="text-gray-600 mb-2">{doc.description}</p>
//           {doc.links && (
//             <div className="flex flex-wrap gap-2 mb-2">
//               {doc.links.map((l, i) => (
//                 <a key={i} href={l} className="text-blue-600 underline">{l}</a>
//               ))}
//             </div>
//           )}
//           <hr className="border-gray-400 mb-4" />
//         </header>

//         {/* Content */}
//         <section>
//           {doc.sections?.map((node) => (
//             <RenderNode key={node.node_id} node={node} />
//           ))}
//         </section>
//       </div>
//     </div>
//   );
// }
