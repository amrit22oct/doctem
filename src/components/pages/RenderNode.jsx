import { Chip } from "@mui/material";

export default function RenderNode({ node, level = 0 }) {
  return (
    <div className={`ml-${level * 6} space-y-3 break-inside-avoid`}>
      {/* Section / Heading */}
      {(node.type === "section" || node.type === "heading") && (
        <div className="border border-gray-200 rounded p-3 bg-gray-50 print:bg-white print:border-black">
          <h2
            className={`${
              node.type === "heading"
                ? node.level === 1
                  ? "text-2xl font-bold"
                  : "text-xl font-semibold"
                : "text-lg font-semibold"
            } mb-2`}
          >
            {node.title}
          </h2>

          {node.body && <p className="text-gray-800 mb-2">{node.body}</p>}

          {node.points && (
            <ul className="list-disc ml-5 mb-2">
              {node.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          )}

          {node.links && (
            <div className="flex flex-wrap gap-2">
              {node.links.map((l, i) => (
                <Chip key={i} label={l} clickable component="a" href={l} />
              ))}
            </div>
          )}

          {/* Table */}
          {node.type === "table" && node.columns && (
            <table className="w-full border border-gray-400 mt-3">
              <thead className="bg-gray-200">
                <tr>
                  {node.columns.map((col, i) => (
                    <th key={i} className="border px-2 py-1 text-left">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {node.rows.map((row, ri) => (
                  <tr key={ri}>
                    {row.map((cell, ci) => (
                      <td key={ci} className="border px-2 py-1">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}

      {/* Bullet Group */}
      {node.type === "bullet_group" && (
        <ul className="list-disc ml-5 mb-2">
          {node.points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      )}

      {/* Custom Block */}
      {node.type === "custom_block" && (
        <div className="border border-blue-300 bg-blue-50 rounded p-3 mb-2 print:bg-white print:border-black">
          <h3 className="font-semibold mb-2">{node.title}</h3>
          <pre className="bg-white p-2 rounded overflow-auto">
            {JSON.stringify(node.fields, null, 2)}
          </pre>
          {node.links && (
            <div className="flex flex-wrap gap-2 mt-2">
              {node.links.map((l, i) => (
                <Chip key={i} label={l} clickable component="a" href={l} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Text Node */}
      {node.type === "text" && <p className="mb-2">{node.body}</p>}

      {/* Recursive Children */}
      {node.children?.map((child) => (
        <RenderNode key={child.node_id} node={child} level={level + 1} />
      ))}
    </div>
  );
}




// import { Box, Card, CardContent, Typography, Chip, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

// export default function RenderNode({ node, level = 0 }) {
//   const indent = `${level * 20}px`;

//   return (
//     <Box style={{ paddingLeft: indent, marginBottom: "12px" }}>
//       {/* SECTION / HEADING */}
//       {(node.type === "section" || node.type === "heading") && (
//         <Card className="bg-white shadow border border-gray-300 mb-4">
//           <CardContent>
//             <Typography
//               variant={node.type === "heading" ? (node.level === 1 ? "h4" : "h5") : "h6"}
//               className="font-bold mb-2"
//             >
//               {node.title}
//             </Typography>

//             {node.body && <Typography className="mb-2">{node.body}</Typography>}

//             {node.points && (
//               <ul className="list-disc ml-6 mb-2">
//                 {node.points.map((p, i) => (
//                   <li key={i}>{p}</li>
//                 ))}
//               </ul>
//             )}

//             {/* LINKS */}
//             {node.links && (
//               <Box className="flex flex-wrap gap-2 mt-2">
//                 {node.links.map((l, i) => (
//                   <Chip key={i} label={l} clickable component="a" href={l} />
//                 ))}
//               </Box>
//             )}

//             {/* TABLE */}
//             {node.type === "table" && node.columns && (
//               <Table className="mt-2 border">
//                 <TableHead>
//                   <TableRow>
//                     {node.columns.map((col, i) => (
//                       <TableCell key={i} className="font-bold border">{col}</TableCell>
//                     ))}
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {node.rows.map((row, ri) => (
//                     <TableRow key={ri}>
//                       {row.map((cell, ci) => (
//                         <TableCell key={ci} className="border">{cell}</TableCell>
//                       ))}
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             )}
//           </CardContent>
//         </Card>
//       )}

//       {/* BULLET GROUP */}
//       {node.type === "bullet_group" && (
//         <ul className="list-disc ml-6 mb-4">
//           {node.points.map((p, i) => (
//             <li key={i}>{p}</li>
//           ))}
//         </ul>
//       )}

//       {/* TEXT NODE */}
//       {node.type === "text" && <Typography className="mb-4">{node.body}</Typography>}

//       {/* CUSTOM BLOCK */}
//       {node.type === "custom_block" && (
//         <Card className="bg-blue-50 border border-blue-200 mb-4">
//           <CardContent>
//             <Typography variant="h6" className="font-bold mb-2">{node.title}</Typography>
//             <pre className="bg-white p-2 border rounded overflow-auto">{JSON.stringify(node.fields, null, 2)}</pre>
//             {node.links && (
//               <Box className="flex gap-2 flex-wrap mt-2">
//                 {node.links.map((l, i) => (
//                   <Chip key={i} label={l} clickable component="a" href={l} />
//                 ))}
//               </Box>
//             )}
//           </CardContent>
//         </Card>
//       )}

//       {/* Render Children */}
//       {node.children?.map((child) => (
//         <RenderNode key={child.node_id} node={child} level={level + 1} />
//       ))}
//     </Box>
//   );
// }
