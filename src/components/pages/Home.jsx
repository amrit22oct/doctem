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







import { useRef } from "react";
import { data } from "../../mock/apidata/apidata";
import RenderNode from "./RenderNode";

export default function Home() {
  const doc = data[0];
  const printRef = useRef();

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
          <h1 className="text-2xl font-bold mb-2">{doc.title}</h1>
          <p className="text-gray-600 mb-2">{doc.description}</p>
          {doc.links && (
            <div className="flex flex-wrap gap-2 mb-2">
              {doc.links.map((l, i) => (
                <a key={i} href={l} className="text-blue-600 underline">{l}</a>
              ))}
            </div>
          )}
          <hr className="border-gray-400 mb-4" />
        </header>

        {/* Content */}
        <section>
          {doc.sections?.map((node) => (
            <RenderNode key={node.node_id} node={node} />
          ))}
        </section>
      </div>
    </div>
  );
}
