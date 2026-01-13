// import { Chip } from "@mui/material";

// export default function RenderNode({ node, level = 0 }) {
//   return (
//     <div className={`ml-${level * 6} space-y-3 break-inside-avoid`}>
//       {/* Section / Heading */}
//       {(node.type === "section" || node.type === "heading") && (
//         <div className="border border-gray-200 rounded p-3 bg-gray-50 print:bg-white print:border-black">
//           <h2
//             className={`${
//               node.type === "heading"
//                 ? node.level === 1
//                   ? "text-2xl font-bold"
//                   : "text-xl font-semibold"
//                 : "text-lg font-semibold"
//             } mb-2`}
//           >
//             {node.title}
//           </h2>

//           {node.content && <p className="text-gray-800 mb-2">{node.content}</p>}

//           {node.points && (
//             <ul className="list-disc ml-5 mb-2">
//               {node.points.map((p, i) => (
//                 <li key={i}>{p}</li>
//               ))}
//             </ul>
//           )}

//           {node.links && (
//             <div className="flex flex-wrap gap-2">
//               {node.links.map((l, i) => (
//                 <Chip key={i} label={l} clickable component="a" href={l} />
//               ))}
//             </div>
//           )}

//           {/* Table */}
//           {node.type === "table" && node.columns && (
//             <table className="w-full border border-gray-400 mt-3">
//               <thead className="bg-gray-200">
//                 <tr>
//                   {node.columns.map((col, i) => (
//                     <th key={i} className="border px-2 py-1 text-left">
//                       {col}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tcontent>
//                 {node.rows.map((row, ri) => (
//                   <tr key={ri}>
//                     {row.map((cell, ci) => (
//                       <td key={ci} className="border px-2 py-1">
//                         {cell}
//                       </td>
//                     ))}
//                   </tr>
//                 ))}
//               </tcontent>
//             </table>
//           )}
//         </div>
//       )}

//       {/* Bullet Group */}
//       {node.type === "bullet_group" && (
//         <ul className="list-disc ml-5 mb-2">
//           {node.points.map((p, i) => (
//             <li key={i}>{p}</li>
//           ))}
//         </ul>
//       )}

//       {/* Custom Block */}
//       {node.type === "custom_block" && (
//         <div className="border border-blue-300 bg-blue-50 rounded p-3 mb-2 print:bg-white print:border-black">
//           <h3 className="font-semibold mb-2">{node.title}</h3>
//           <pre className="bg-white p-2 rounded overflow-auto">
//             {JSON.stringify(node.fields, null, 2)}
//           </pre>
//           {node.links && (
//             <div className="flex flex-wrap gap-2 mt-2">
//               {node.links.map((l, i) => (
//                 <Chip key={i} label={l} clickable component="a" href={l} />
//               ))}
//             </div>
//           )}
//         </div>
//       )}

//       {/* Text Node */}
//       {node.type === "text" && <p className="mb-2">{node.content}</p>}

//       {/* Recursive Children */}
//       {node.children?.map((child) => (
//         <RenderNode key={child.node_id} node={child} level={level + 1} />
//       ))}
//     </div>
//   );
// }

import { useState } from "react";
import { Chip } from "@mui/material";

// === Title Editor ===


 function TitleEditor({ title: initialTitle, level, onChange }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(initialTitle);

  const handleSave = () => {
    onChange(title);
    setEditing(false);
  };

  const handleCancel = () => {
    setTitle(initialTitle);
    setEditing(false);
  };

  return (
    <div className="relative group mb-2">
      {editing ? (
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
            className={`border p-1 rounded w-full font-semibold ${
              level === 0 ? "text-2xl" : "text-lg"
            }`}
          />
          <button
            onClick={handleSave}
            className="text-green-600 hover:text-green-800 px-1"
            title="Save"
          >
            ✔️
          </button>
          <button
            onClick={handleCancel}
            className="text-red-600 hover:text-red-800 px-1"
            title="Cancel"
          >
            ❌
          </button>
        </div>
      ) : (
        <h2
          className={`${level === 0 ? "text-2xl" : "text-lg"} font-semibold`}
          onDoubleClick={() => setEditing(true)}
        >
          {title}
        </h2>
      )}
    </div>
  );
}


// === Content Editor ===
function ContentEditor({ content: initialContent, onChange }) {
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState(initialContent);

  const handleSave = () => {
    onChange(content);
    setEditing(false);
  };

  const handleCancel = () => {
    setContent(initialContent);
    setEditing(false);
  };

  return (
    <div className="relative group mb-2">
      {editing ? (
        <div className="flex flex-col gap-2">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            autoFocus
            className="border p-2 w-full rounded"
            rows={3}
          />
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="text-green-600 hover:text-green-800 px-2 py-1 rounded border"
              title="Save"
            >
              ✔️
            </button>
            <button
              onClick={handleCancel}
              className="text-red-600 hover:text-red-800 px-2 py-1 rounded border"
              title="Cancel"
            >
              ❌
            </button>
          </div>
        </div>
      ) : (
        <p
          onDoubleClick={() => setEditing(true)}
          className="text-gray-800"
        >
          {content}
        </p>
      )}
    </div>
  );
}


// === Points Editor ===
 function PointsEditor({ points: initialPoints, onChange }) {
  const [points, setPoints] = useState(initialPoints);
  const [editingIndex, setEditingIndex] = useState(null);
  const [tempValue, setTempValue] = useState("");

  const startEdit = (i) => {
    setEditingIndex(i);
    setTempValue(points[i]);
  };

  const saveEdit = () => {
    if (tempValue.trim() === "") {
      cancelEdit();
      return;
    }
    const updated = points.map((p, idx) => (idx === editingIndex ? tempValue : p));
    setPoints(updated);
    onChange(updated);
    setEditingIndex(null);
    setTempValue("");
  };

  const cancelEdit = () => {
    setTempValue("");
    setEditingIndex(null);
  };

  const removePoint = (i) => {
    const updated = points.filter((_, idx) => idx !== i);
    setPoints(updated);
    onChange(updated);
    setEditingIndex(null);
    setTempValue("");
  };

  const addPoint = () => {
    const updated = [...points, ""];
    setPoints(updated);
    setEditingIndex(updated.length - 1); // start editing new point immediately
    setTempValue("");
  };

  return (
    <ul className="list-disc ml-5 mb-2">
      {points.map((p, i) => (
        <li key={i} className="relative group mb-1">
          {editingIndex === i ? (
            <div className="flex gap-2 items-center">
              <input
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                autoFocus
                className="border p-1 rounded w-full"
              />
              <button onClick={saveEdit} className="text-green-600 px-1">✔️</button>
              <button onClick={cancelEdit} className="text-red-600 px-1">❌</button>
              <button onClick={addPoint} className="text-blue-600 px-1">+ Add</button>
            </div>
          ) : (
            <span onDoubleClick={() => startEdit(i)}>{p}</span>
          )}
        </li>
      ))}
      {/* Optional: show "Add first point" if list is empty */}
      {points.length === 0 && editingIndex === null && (
        <button
          onClick={addPoint}
          className="px-2 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600 mt-1"
        >
          + Add Point
        </button>
      )}
    </ul>
  );
}



// === Links Editor ===
function LinksEditor({ links: initialLinks, onChange }) {
   const [links, setLinks] = useState(initialLinks);
   const [editingIndex, setEditingIndex] = useState(null);
   const [tempValue, setTempValue] = useState("");
 
   const startEdit = (i) => {
     setEditingIndex(i);
     setTempValue(links[i]);
   };
 
   const saveEdit = () => {
     if (tempValue.trim() === "") return cancelEdit();
     const updated = links.map((l, idx) => (idx === editingIndex ? tempValue : l));
     setLinks(updated);
     onChange(updated);
     setEditingIndex(null);
     setTempValue("");
   };
 
   const cancelEdit = () => {
     setTempValue("");
     setEditingIndex(null);
   };
 
   const removeLink = (i) => {
     const updated = links.filter((_, idx) => idx !== i);
     setLinks(updated);
     onChange(updated);
     setEditingIndex(null);
     setTempValue("");
   };
 
   const addLink = () => {
     const updated = [...links, ""];
     setLinks(updated);
     setEditingIndex(updated.length - 1);
     setTempValue("");
   };
 
   return (
     <div className="flex flex-wrap gap-2 mb-2">
       {links.map((l, i) => (
         <div key={i} className="relative group">
           {editingIndex === i ? (
             <div className="flex gap-2 items-center">
               <input
                 value={tempValue}
                 onChange={(e) => setTempValue(e.target.value)}
                 autoFocus
                 className="border p-1 rounded"
               />
               <button onClick={saveEdit} className="text-green-600 px-1">✔️</button>
               <button onClick={cancelEdit} className="text-red-600 px-1">❌</button>
               <button onClick={addLink} className="text-blue-600 px-1">+ Add</button>
             </div>
           ) : (
             <div className="flex items-center gap-1">
               <Chip
                 label={l}
                 clickable={false} // prevent default click navigation
                 onDoubleClick={() => startEdit(i)}
               />
               {/* Open button appears only on hover and hidden in print */}
               {/* <button
                 onClick={() => window.open(l, "_blank")}
                 className="opacity-0 group-hover:opacity-100 text-xs text-blue-600 px-1 print:hidden"
               >
                 Open
               </button> */}
             </div>
           )}
         </div>
       ))}
     </div>
   );
 }
 



// === Table Renderer ===
function TableRenderer({ node }) {
  if (!node.columns || !node.rows) return null;
  return (
    <table className="w-full border border-gray-400 mt-3">
      <thead className="bg-gray-200">
        <tr>
          {node.columns.map((col, i) => (
            <th key={i} className="border px-2 py-1 text-left">{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {node.rows.map((row, ri) => (
          <tr key={ri}>
            {row.map((cell, ci) => (
              <td key={ci} className="border px-2 py-1">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// === Main RenderNode Component ===
export default function RenderNode({ node, level = 0, onSave }) {
  const [title, setTitle] = useState(node.title || "");
  const [content, setContent] = useState(node.content || "");
  const [points, setPoints] = useState(node.points || []);
  const [links, setLinks] = useState(node.links || []);

  const handleSave = () => {
    if (onSave) onSave(node.node_id, { ...node, title, content, points, links });
  };

  return (
    <div className={`ml-${level * 6} mb-4 break-inside-avoid`}>
      <div className="border border-gray-200 rounded p-3 bg-gray-50 print:bg-white print:border-black">
        <TitleEditor title={title} level={level} onChange={setTitle} />
        <ContentEditor content={content} onChange={setContent} />
        {points.length > 0 && <PointsEditor points={points} onChange={setPoints} />}
        {links.length > 0 && <LinksEditor links={links} onChange={setLinks} />}
        {node.type === "table" && <TableRenderer node={node} />}
      </div>

      {/* Recursive Children */}
      {node.children?.map((child) => (
        <RenderNode
          key={child.node_id || Math.random()}
          node={child}
          level={level + 1}
          onSave={onSave}
        />
      ))}
    </div>
  );
}
