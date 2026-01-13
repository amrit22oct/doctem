// apiData.js
import Image from "../../assets/Image.jpg";
export const reportData = [
  {
    title: "Today (10)",
    rows: [
      {
        preview: {
          src: Image,
          className: "w-[80%] h-full rounded-tl-2xl",
          maxHeight: 69,
        },
        inspectTime: {
          time: "06:30:05, 27 May 2024",
          status: "Verified",
          statusMode: "pass",
          partName: "Part A1",
          partNameMode: "neutral",
        },
        partNo: "DELL6700871",
        shift: "Morning",
        defectFeature: {
          defects: [
            { label: "Roughness", mode: "reject" },
            { label: "Crack", mode: "reject" },
          ],
          features: [
            { label: "Fillet", mode: "pass" },
            { label: "Chamfer", mode: "pass" },
          ],
        },
        status: { title: "Rejected", variant: "error" },
        inspstatus: { title: "pass", variant: "view" },
        action: [
          { title: "view", variant: "view" },
          { icon: "IoEllipsisVertical" },
        ],
        moreContent: {
          details: {
            summary: "Lincode Lab India",
            batchId: "DELL0087",
            barcode: "470045",
            serialNo: "DELL6700A",
            date: "27 May 2024",
            inspector: "John Doe",
          },
          chartData: {
            title: "Defect",
            labels: [
              "Pin Hole",
              "Chip",
              "Edge Crack",
              "Roughness",
              "Pin Hole",
              "Chip",
              "Edge Crack",
              "Roughness",
            ],
            values: [10, 25, 35, 20, 10, 25, 35, 20],
            colors: ["#B4C4EC", "#ea6d24", "#B4C4EC", "#B4C4EC"],
          },
        },
      },

      {
        preview: {
          src: Image,
          className: "w-[80%] h-full rounded-tl-2xl",
          maxHeight: 69,
        },
        inspectTime: {
          time: "08:12:43, 27 May 2024",
          status: "Verified",
          statusMode: "pass",
          partName: "Part B2",
          partNameMode: "neutral",
        },
        partNo: "DELL6700872",
        shift: "Evening",
        defectFeature: {
          defects: [{ label: "Chip", mode: "reject" }],
          features: [
            { label: "Fillet", mode: "pass" },
            { label: "Curve", mode: "pass" },
          ],
        },
        status: { title: "Rejected", variant: "error" },
        inspstatus: { title: "Rejected", variant: "error" },
        action: [
          { title: "view", variant: "view" },
          { icon: "IoEllipsisVertical" },
        ],
        moreContent: {
          details: {
            summary: "Lincode Lab India",
            batchId: "DELL0090",
            barcode: "470046",
            serialNo: "DELL6701B",
            date: "27 May 2024",
            inspector: "Emily Carter",
          },
          chartData: {
            title: "Defect",
            labels: ["Chip", "Roughness", "Crack", "Chip"],
            values: [12, 18, 9, 14],
            colors: ["#B4C4EC", "#ea6d24", "#B4C4EC", "#B4C4EC"],
          },
        },
      },

      {
        preview: {
          src: Image,
          className: "w-[80%] h-full rounded-tl-2xl",
          maxHeight: 69,
        },
        inspectTime: {
          time: "09:45:51, 27 May 2024",
          status: "Verified",
          statusMode: "pass",
          partName: "Part C3",
          partNameMode: "neutral",
        },
        partNo: "DELL6700873",
        shift: "Night",
        defectFeature: {
          defects: [{ label: "Edge Crack", mode: "reject" }],
          features: [
            { label: "Chamfer", mode: "pass" },
            { label: "Fillet", mode: "pass" },
          ],
        },
        status: { title: "Rejected", variant: "error" },
        inspstatus: { title: "pass", variant: "view" },
        action: [
          { title: "view", variant: "view" },
          { icon: "IoEllipsisVertical" },
        ],
        moreContent: {
          details: {
            summary: "Lincode Lab India",
            batchId: "DELL0091",
            barcode: "470047",
            serialNo: "DELL6702C",
            date: "27 May 2024",
            inspector: "Mark Wilson",
          },
          chartData: {
            title: "Defect",
            labels: ["Edge Crack", "Edge Crack", "Chip"],
            values: [15, 10, 8],
            colors: ["#B4C4EC", "#ea6d24", "#B4C4EC"],
          },
        },
      },

      {
        preview: {
          src: Image,
          className: "w-[80%] h-full rounded-tl-2xl",
          maxHeight: 69,
        },
        inspectTime: {
          time: "10:20:15, 27 May 2024",
          status: "Verified",
          statusMode: "pass",
          partName: "Part D4",
          partNameMode: "neutral",
        },
        partNo: "DELL6700874",
        shift: "Morning",
        defectFeature: {
          defects: [{ label: "Roughness", mode: "reject" }],
          features: [{ label: "Curve", mode: "pass" }],
        },
        status: { title: "Rejected", variant: "error" },
        inspstatus: { title: "Rejected", variant: "error" },
        action: [
          { title: "view", variant: "view" },
          { icon: "IoEllipsisVertical" },
        ],
        moreContent: {
          details: {
            summary: "Lincode Lab India",
            batchId: "DELL0092",
            barcode: "470048",
            serialNo: "DELL6703D",
            date: "27 May 2024",
            inspector: "Sarah Miller",
          },
          chartData: {
            title: "Defect",
            labels: ["Roughness", "Chip", "Roughness"],
            values: [22, 10, 15],
            colors: ["#B4C4EC", "#ea6d24", "#B4C4EC"],
          },
        },
      },
    ],
  },
  {
    title: "yesterday (10)",
    rows: [
      {
        preview: {
          src: Image,
          className: "w-[80%] h-full rounded-tl-2xl",
          maxHeight: 69,
        },
        inspectTime: {
          time: "11:55:33, 27 May 2024",
          status: "Verified",
          statusMode: "pass",
          partName: "Part E5",
          partNameMode: "neutral",
        },
        partNo: "DELL6700875",
        shift: "Evening",
        defectFeature: {
          defects: [
            { label: "Chip", mode: "reject" },
            { label: "Crack", mode: "reject" },
          ],
          features: [{ label: "Fillet", mode: "pass" }],
        },
        status: { title: "Rejected", variant: "error" },
        inspstatus: { title: "pass", variant: "view" },
        action: [
          { title: "view", variant: "view" },
          { icon: "IoEllipsisVertical" },
        ],
        moreContent: {
          details: {
            summary: "Lincode Lab India",
            batchId: "DELL0093",
            barcode: "470049",
            serialNo: "DELL6704E",
            date: "27 May 2024",
            inspector: "Olivia Brown",
          },
          chartData: {
            title: "Defect",
            labels: ["Chip", "Chip", "Crack", "Roughness"],
            values: [25, 18, 12, 14],
            colors: ["#B4C4EC", "#ea6d24", "#B4C4EC", "#B4C4EC"],
          },
        },
      },

      {
        preview: {
          src: Image,
          className: "w-[80%] h-full rounded-tl-2xl",
          maxHeight: 69,
        },
        inspectTime: {
          time: "12:34:29, 27 May 2024",
          status: "Verified",
          statusMode: "pass",
          partName: "Part F6",
          partNameMode: "neutral",
        },
        partNo: "DELL6700876",
        shift: "Night",
        defectFeature: {
          defects: [{ label: "Crack", mode: "reject" }],
          features: [{ label: "Chamfer", mode: "pass" }],
        },
        status: { title: "Rejected", variant: "error" },
        inspstatus: { title: "Rejected", variant: "error" },
        action: [
          { title: "view", variant: "view" },
          { icon: "IoEllipsisVertical" },
        ],
        moreContent: {
          details: {
            summary: "Lincode Lab India",
            batchId: "DELL0094",
            barcode: "470050",
            serialNo: "DELL6705F",
            date: "27 May 2024",
            inspector: "James Lee",
          },
          chartData: {
            title: "Defect",
            labels: ["Crack", "Crack", "Crack"],
            values: [30, 22, 19],
            colors: ["#B4C4EC", "#ea6d24", "#B4C4EC"],
          },
        },
      },

      {
        preview: {
          src: Image,
          className: "w-[80%] h-full rounded-tl-2xl",
          maxHeight: 69,
        },
        inspectTime: {
          time: "13:40:52, 27 May 2024",
          status: "Verified",
          statusMode: "pass",
          partName: "Part G7",
          partNameMode: "neutral",
        },
        partNo: "DELL6700877",
        shift: "Morning",
        defectFeature: {
          defects: [
            { label: "Roughness", mode: "reject" },
            { label: "Chip", mode: "reject" },
          ],
          features: [{ label: "Curve", mode: "pass" }],
        },
        status: { title: "Rejected", variant: "error" },
        inspstatus: { title: "pass", variant: "view" },
        action: [
          { title: "view", variant: "view" },
          { icon: "IoEllipsisVertical" },
        ],
        moreContent: {
          details: {
            summary: "Lincode Lab India",
            batchId: "DELL0095",
            barcode: "470051",
            serialNo: "DELL6706G",
            date: "27 May 2024",
            inspector: "Sophia Martinez",
          },
          chartData: {
            title: "Defect",
            labels: ["Roughness", "Chip", "Crack"],
            values: [16, 20, 14],
            colors: ["#B4C4EC", "#ea6d24", "#B4C4EC"],
          },
        },
      },

      {
        preview: {
          src: Image,
          className: "w-[80%] h-full rounded-tl-2xl",
          maxHeight: 69,
        },
        inspectTime: {
          time: "14:22:11, 27 May 2024",
          status: "Verified",
          statusMode: "pass",
          partName: "Part H8",
          partNameMode: "neutral",
        },
        partNo: "DELL6700878",
        shift: "Evening",
        defectFeature: {
          defects: [{ label: "Edge Crack", mode: "reject" }],
          features: [
            { label: "Fillet", mode: "pass" },
            { label: "Chamfer", mode: "pass" },
          ],
        },
        status: { title: "Rejected", variant: "error" },
        inspstatus: { title: "Rejected", variant: "error" },
        action: [
          { title: "view", variant: "view" },
          { icon: "IoEllipsisVertical" },
        ],
        moreContent: {
          details: {
            summary: "Lincode Lab India",
            batchId: "DELL0096",
            barcode: "470052",
            serialNo: "DELL6707H",
            date: "27 May 2024",
            inspector: "William Green",
          },
          chartData: {
            title: "Defect",
            labels: ["Edge Crack", "Chip", "Roughness"],
            values: [18, 12, 9],
            colors: ["#B4C4EC", "#ea6d24", "#B4C4EC"],
          },
        },
      },

      {
        preview: {
          src: Image,
          className: "w-[80%] h-full rounded-tl-2xl",
          maxHeight: 69,
        },
        inspectTime: {
          time: "15:45:09, 27 May 2024",
          status: "Verified",
          statusMode: "pass",
          partName: "Part I9",
          partNameMode: "neutral",
        },
        partNo: "DELL6700879",
        shift: "Night",
        defectFeature: {
          defects: [{ label: "Roughness", mode: "reject" }],
          features: [{ label: "Curve", mode: "pass" }],
        },
        status: { title: "Rejected", variant: "error" },
        inspstatus: { title: "pass", variant: "view" },
        action: [
          { title: "view", variant: "view" },
          { icon: "IoEllipsisVertical" },
        ],
        moreContent: {
          details: {
            summary: "Lincode Lab India",
            batchId: "DELL0097",
            barcode: "470053",
            serialNo: "DELL6708I",
            date: "27 May 2024",
            inspector: "Henry Adams",
          },
          chartData: {
            title: "Defect",
            labels: ["Roughness", "Crack"],
            values: [20, 11],
            colors: ["#B4C4EC", "#ea6d24"],
          },
        },
      },

      {
        preview: {
          src: Image,
          className: "w-[80%] h-full rounded-tl-2xl",
          maxHeight: 69,
        },
        inspectTime: {
          time: "16:20:55, 27 May 2024",
          status: "Verified",
          statusMode: "pass",
          partName: "Part J10",
          partNameMode: "neutral",
        },
        partNo: "DELL6700880",
        shift: "Morning",
        defectFeature: {
          defects: [{ label: "Crack", mode: "reject" }],
          features: [
            { label: "Fillet", mode: "pass" },
            { label: "Chamfer", mode: "pass" },
          ],
        },
        status: { title: "Rejected", variant: "error" },
        inspstatus: { title: "Rejected", variant: "error" },
        action: [
          { title: "view", variant: "view" },
          { icon: "IoEllipsisVertical" },
        ],
        moreContent: {
          details: {
            summary: "Lincode Lab India",
            batchId: "DELL0098",
            barcode: "470054",
            serialNo: "DELL6709J",
            date: "27 May 2024",
            inspector: "Ava Thompson",
          },
          chartData: {
            title: "Defect",
            labels: ["Crack", "Roughness", "Chip"],
            values: [17, 12, 10],
            colors: ["#B4C4EC", "#ea6d24", "#B4C4EC"],
          },
        },
      },
    ],
  },
];

//  export const data = [
//   // {
//   //   document_id: "DOC001",
//   //   title: "Complete Test Document",
//   //   description: "This document contains all possible content types and combinations for testing purposes.",
//   //   links: ["https://mainlink.com", "https://secondarylink.com"],
//   //   content: [
//   //     // Top-level heading
//   //     {
//   //       node_id: "1",
//   //       type: "heading",
//   //       level: 1,
//   //       title: "Introduction",
//   //       description: "Top-level introduction description",
//   //       body: "This is a body text for introduction heading.",
//   //       points: ["Overview", "Goals", "Scope"],
//   //       links: ["https://introlink.com"],
//   //       children: [
//   //         // Section inside heading
//   //         {
//   //           node_id: "1.1",
//   //           type: "section",
//   //           title: "Background Information",
//   //           summary: "Summary of background",
//   //           description: "Detailed background description",
//   //           body: "Background body text goes here",
//   //           points: ["History", "Previous Work", "Constraints"],
//   //           links: ["https://background.com"],
//   //           children: [
//   //             // Bullet group
//   //             {
//   //               node_id: "1.1.1",
//   //               type: "bullet_group",
//   //               points: ["Point 1", "Point 2", "Point 3"]
//   //             },
//   //             // Custom block
//   //             {
//   //               node_id: "1.1.2",
//   //               type: "custom_block",
//   //               title: "Custom Block Example",
//   //               fields: {
//   //                 field1: "Data A",
//   //                 field2: 123,
//   //                 nestedField: { subfield: "Subvalue" }
//   //               },
//   //               links: ["https://customblock.com"]
//   //             },
//   //             // Text node
//   //             {
//   //               node_id: "1.1.3",
//   //               type: "text",
//   //               body: "Some text node content in the section."
//   //             }
//   //           ]
//   //         },

//   //         // Nested heading inside heading
//   //         {
//   //           node_id: "1.2",
//   //           type: "heading",
//   //           level: 2,
//   //           title: "Sub-Heading Level 2",
//   //           description: "Second level heading",
//   //           points: ["Subgoal 1", "Subgoal 2"],
//   //           children: [
//   //             {
//   //               node_id: "1.2.1",
//   //               type: "section",
//   //               title: "Nested Section under Level 2",
//   //               summary: "Summary of nested section",
//   //               body: "Body of nested section under heading level 2",
//   //               points: ["Nested Point 1", "Nested Point 2"],
//   //               children: [
//   //                 {
//   //                   node_id: "1.2.1.1",
//   //                   type: "bullet_group",
//   //                   points: ["Bullet A", "Bullet B", "Bullet C"]
//   //                 },
//   //                 {
//   //                   node_id: "1.2.1.2",
//   //                   type: "custom_block",
//   //                   title: "Deep Custom Block",
//   //                   fields: { key: "value", number: 42 },
//   //                   links: ["https://deepcustomblock.com"]
//   //                 },
//   //                 {
//   //                   node_id: "1.2.1.3",
//   //                   type: "text",
//   //                   body: "Deeply nested text node inside nested section"
//   //                 }
//   //               ]
//   //             }
//   //           ]
//   //         }
//   //       ]
//   //     },

//   //     // Another top-level heading
//   //     {
//   //       node_id: "2",
//   //       type: "heading",
//   //       level: 1,
//   //       title: "Technical Details",
//   //       body: "Technical details body text",
//   //       points: ["Architecture", "APIs", "Security"],
//   //       links: ["https://techlink.com"],
//   //       children: [
//   //         {
//   //           node_id: "2.1",
//   //           type: "section",
//   //           title: "System Architecture",
//   //           summary: "Architecture summary",
//   //           body: "Description of system architecture",
//   //           points: ["Frontend", "Backend", "Database"],
//   //           children: [
//   //             {
//   //               node_id: "2.1.1",
//   //               type: "bullet_group",
//   //               points: ["Bullet 1", "Bullet 2", "Bullet 3"]
//   //             },
//   //             {
//   //               node_id: "2.1.2",
//   //               type: "custom_block",
//   //               title: "Architecture Diagram",
//   //               fields: { diagramUrl: "https://diagram.com/diagram.png" },
//   //               links: ["https://diagram.com"]
//   //             },
//   //             {
//   //               node_id: "2.1.3",
//   //               type: "text",
//   //               body: "Additional notes about system architecture."
//   //             }
//   //           ]
//   //         },
//   //         {
//   //           node_id: "2.2",
//   //           type: "section",
//   //           title: "API Security",
//   //           body: "API security body text",
//   //           points: ["JWT Validation", "Rate Limiting", "IDOR Testing"],
//   //           children: [
//   //             {
//   //               node_id: "2.2.1",
//   //               type: "bullet_group",
//   //               points: ["Validation Point 1", "Validation Point 2"]
//   //             },
//   //             {
//   //               node_id: "2.2.2",
//   //               type: "custom_block",
//   //               title: "API Config Example",
//   //               fields: { endpoint: "/api/test", method: "GET", secure: true },
//   //               links: ["https://api-docs.com"]
//   //             },
//   //             {
//   //               node_id: "2.2.3",
//   //               type: "text",
//   //               body: "Notes about API security testing."
//   //             }
//   //           ]
//   //         }
//   //       ]
//   //     },

//   //     // Security Proposal Example
//   //     {
//   //       node_id: "3",
//   //       type: "heading",
//   //       level: 1,
//   //       title: "Security Assessment & Remediation Proposal",
//   //       children: [
//   //         {
//   //           node_id: "3.1",
//   //           type: "section",
//   //           title: "Executive Summary",
//   //           body: "Executive summary body text",
//   //           children: [
//   //             {
//   //               node_id: "3.1.1",
//   //               type: "bullet_group",
//   //               points: ["Full assessment", "Vulnerability remediation", "Deployment assistance"]
//   //             },
//   //             {
//   //               node_id: "3.1.2",
//   //               type: "text",
//   //               body: "Additional executive summary notes."
//   //             }
//   //           ]
//   //         },
//   //         {
//   //           node_id: "3.2",
//   //           type: "section",
//   //           title: "Scope of Work",
//   //           children: [
//   //             {
//   //               node_id: "3.2.1",
//   //               type: "section",
//   //               title: "Source Code Security Review",
//   //               points: ["Static Analysis", "Dynamic Analysis", "Dependency Scans"],
//   //               children: [
//   //                 {
//   //                   node_id: "3.2.1.1",
//   //                   type: "custom_block",
//   //                   title: "Code Review Example",
//   //                   fields: { reviewedModules: 12, issuesFound: 3 },
//   //                   links: ["https://codereview.com"]
//   //                 }
//   //               ]
//   //             },
//   //             {
//   //               node_id: "3.2.2",
//   //               type: "section",
//   //               title: "API Testing",
//   //               children: [
//   //                 {
//   //                   node_id: "3.2.2.1",
//   //                   type: "bullet_group",
//   //                   points: ["Endpoint Enumeration", "JWT Validation", "Rate Limiting Checks"]
//   //                 },
//   //                 {
//   //                   node_id: "3.2.2.2",
//   //                   type: "text",
//   //                   body: "API testing additional notes."
//   //                 }
//   //               ]
//   //             },
//   //             {
//   //               node_id: "3.2.3",
//   //               type: "section",
//   //               title: "Web & Mobile Testing",
//   //               children: [
//   //                 {
//   //                   node_id: "3.2.3.1",
//   //                   type: "bullet_group",
//   //                   points: ["XSS/CSRF testing", "Session timeout verification", "Mobile runtime analysis"]
//   //                 },
//   //                 {
//   //                   node_id: "3.2.3.2",
//   //                   type: "custom_block",
//   //                   title: "Mobile Test Config",
//   //                   fields: { platform: "iOS/Android", secure: true }
//   //                 },
//   //                 {
//   //                   node_id: "3.2.3.3",
//   //                   type: "text",
//   //                   body: "Notes about web and mobile testing."
//   //                 }
//   //               ]
//   //             }
//   //           ]
//   //         },
//   //         {
//   //           node_id: "3.3",
//   //           type: "section",
//   //           title: "Deliverables",
//   //           children: [
//   //             {
//   //               node_id: "3.3.1",
//   //               type: "bullet_group",
//   //               points: [
//   //                 "Full remediation applied",
//   //                 "Pre/post remediation reports",
//   //                 "Best practices documentation",
//   //                 "Secure deployment"
//   //               ]
//   //             }
//   //           ]
//   //         },
//   //         {
//   //           node_id: "3.4",
//   //           type: "section",
//   //           title: "Next Steps & Terms",
//   //           children: [
//   //             {
//   //               node_id: "3.4.1",
//   //               type: "bullet_group",
//   //               points: ["Contract signing", "Kick-off meeting", "Access provisioning", "Project start"]
//   //             },
//   //             {
//   //               node_id: "3.4.2",
//   //               type: "text",
//   //               body: "Terms, conditions, and warranties."
//   //             }
//   //           ]
//   //         }
//   //       ]
//   //     }
//   //   ]
//   // }

//   {
//     "document_id": "DOC001",
//     "title": "Ultimate Test Document",
//     "description": "Document containing all types of content, fully customizable.",
//     "author": "John Doe",
//     "version": "1.0",
//     "links": ["https://mainlink.com"],
//     "content": [
//       {
//         "node_id": "1",
//         "type": "heading",
//         "level": 1,
//         "title": "Introduction",
//         "body": "This is the introduction text.",
//         "description": "Top-level heading description",
//         "points": ["Goal 1", "Goal 2"],
//         "position": 1,
//         "style": { "font_size": "24pt", "color": "#1a1a1a" },
//         "page_break_before": true,
//         "children": [
//           {
//             "node_id": "1.1",
//             "type": "section",
//             "title": "Background",
//             "summary": "Summary of background",
//             "body": "Detailed background goes here.",
//             "points": ["History", "Scope", "Constraints"],
//             "position": 1,
//             "style": { "padding": "10px", "background_color": "#f7f7f7" },
//             "children": [
//               {
//                 "node_id": "1.1.1",
//                 "type": "bullet_group",
//                 "points": ["Point A", "Point B", "Point C"],
//                 "position": 1
//               },
//               {
//                 "node_id": "1.1.2",
//                 "type": "custom_block",
//                 "title": "Custom Data Block",
//                 "fields": {
//                   "exampleField": "Some value",
//                   "nestedData": { "subfield": "subvalue" }
//                 },
//                 "position": 2,
//                 "style": { "border": "1px solid #3b82f6", "background_color": "#eff6ff" }
//               }
//             ]
//           },
//           {
//             "node_id": "1.2",
//             "type": "image",
//             "src": "https://example.com/image.png",
//             "alt": "Example Image",
//             "position": 2,
//             "style": { "width": "50%", "align": "center" }
//           }
//         ]
//       },
//       {
//         "node_id": "2",
//         "type": "heading",
//         "level": 1,
//         "title": "Technical Details",
//         "position": 2,
//         "children": [
//           {
//             "node_id": "2.1",
//             "type": "section",
//             "title": "API Details",
//             "position": 1,
//             "children": [
//               {
//                 "node_id": "2.1.1",
//                 "type": "table",
//                 "columns": ["Endpoint", "Method", "Secure"],
//                 "rows": [
//                   ["/api/test", "GET", true],
//                   ["/api/user", "POST", true]
//                 ],
//                 "position": 1
//               },
//               {
//                 "node_id": "2.1.2",
//                 "type": "text",
//                 "body": "Additional notes on API security.",
//                 "position": 2
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   }

// {
//   document_id: "DOC_FULL_001",
//   title: "Ultimate Test Document with All Content Types",
//   description: "This document contains all possible node types, deeply nested structures, styling, positions, and metadata for testing purposes.",
//   author: "John Doe",
//   version: "2.0",
//   links: ["https://mainlink.com", "https://secondarylink.com", "https://tertiarylink.com"],
//   content: [
//     // ==================== Heading Level 1 ====================
//     {
//       node_id: "1",
//       type: "heading",
//       level: 1,
//       title: "Introduction",
//       body: "Introduction body text with overview and context for the document.",
//       description: "This is a top-level introduction with styling and position.",
//       points: ["Goal 1", "Goal 2", "Scope", "Key Highlights"],
//       links: ["https://intro.example.com"],
//       position: 1,
//       style: { font_size: "28pt", font_weight: "bold", color: "#111111", margin_bottom: "20px" },
//       page_break_before: true,
//       children: [
//         {
//           node_id: "1.1",
//           type: "section",
//           title: "Background Information",
//           summary: "Summary of the background context",
//           body: "Detailed explanation of history, previous work, and constraints.",
//           points: ["History", "Previous Work", "Constraints", "Stakeholders"],
//           links: ["https://background.example.com"],
//           position: 1,
//           style: { background_color: "#f7f7f7", padding: "10px", border_radius: "8px" },
//           children: [
//             {
//               node_id: "1.1.1",
//               type: "bullet_group",
//               points: ["Point A", "Point B", "Point C", "Point D"],
//               position: 1
//             },
//             {
//               node_id: "1.1.2",
//               type: "custom_block",
//               title: "Custom Data Block",
//               fields: { field1: "Value A", field2: 123, nested: { sub1: "subvalue", sub2: [1, 2, 3] } },
//               links: ["https://customblock.example.com"],
//               position: 2,
//               style: { background_color: "#eef6ff", border: "1px solid #3b82f6", padding: "8px" }
//             },
//             {
//               node_id: "1.1.3",
//               type: "text",
//               body: "Some additional text inside the background section.",
//               position: 3,
//               style: { font_size: "12pt", line_height: "1.6", color: "#333" }
//             },
//             {
//               node_id: "1.1.4",
//               type: "image",
//               src: "https://example.com/image1.png",
//               alt: "Example Image 1",
//               position: 4,
//               style: { width: "60%", align: "center", margin_top: "10px", margin_bottom: "10px" }
//             }
//           ]
//         },
//         {
//           node_id: "1.2",
//           type: "heading",
//           level: 2,
//           title: "Sub-Introduction",
//           description: "Second-level heading description",
//           points: ["Subgoal 1", "Subgoal 2", "Subgoal 3"],
//           position: 2,
//           style: { font_size: "22pt", color: "#222" },
//           children: [
//             {
//               node_id: "1.2.1",
//               type: "section",
//               title: "Nested Section 1",
//               summary: "Nested section summary",
//               body: "This is the body of the nested section 1.",
//               points: ["Nested Point 1", "Nested Point 2", "Nested Point 3"],
//               position: 1,
//               children: [
//                 {
//                   node_id: "1.2.1.1",
//                   type: "bullet_group",
//                   points: ["Nested Bullet 1", "Nested Bullet 2", "Nested Bullet 3", "Nested Bullet 4"],
//                   position: 1
//                 },
//                 {
//                   node_id: "1.2.1.2",
//                   type: "custom_block",
//                   title: "Nested Custom Block",
//                   fields: { nestedField1: "Nested Value", nestedField2: 999, nestedArray: [1, 2, 3] },
//                   position: 2
//                 },
//                 {
//                   node_id: "1.2.1.3",
//                   type: "text",
//                   body: "Nested text node inside section.",
//                   position: 3
//                 },
//                 {
//                   node_id: "1.2.1.4",
//                   type: "code",
//                   language: "javascript",
//                   code: "const x = 10;\nconsole.log(x);",
//                   position: 4
//                 },
//                 {
//                   node_id: "1.2.1.5",
//                   type: "quote",
//                   text: "This is a sample quote.",
//                   author: "Albert Einstein",
//                   position: 5
//                 }
//               ]
//             },
//             {
//               node_id: "1.2.2",
//               type: "image",
//               src: "https://example.com/subimage.png",
//               alt: "Sub Image",
//               position: 2
//             }
//           ]
//         }
//       ]
//     },

//     // ==================== Heading Level 1 ====================
//     {
//       node_id: "2",
//       type: "heading",
//       level: 1,
//       title: "Technical Details",
//       body: "Technical details with multiple sections and content types.",
//       points: ["Architecture", "APIs", "Security", "Infrastructure"],
//       links: ["https://tech.example.com"],
//       position: 2,
//       children: [
//         {
//           node_id: "2.1",
//           type: "section",
//           title: "System Architecture",
//           summary: "Summary of system architecture",
//           body: "Description of system architecture with diagrams.",
//           points: ["Frontend", "Backend", "Database", "DevOps"],
//           position: 1,
//           children: [
//             {
//               node_id: "2.1.1",
//               type: "table",
//               columns: ["Component", "Type", "Version"],
//               rows: [
//                 ["Frontend", "React", "18.2.0"],
//                 ["Backend", "Node.js", "20.1.0"],
//                 ["Database", "PostgreSQL", "15.2"],
//                 ["Cache", "Redis", "7.0"]
//               ],
//               position: 1
//             },
//             {
//               node_id: "2.1.2",
//               type: "custom_block",
//               title: "Architecture Diagram",
//               fields: { diagramUrl: "https://diagram.example.com/arch.png", notes: "Diagram for architecture" },
//               position: 2
//             },
//             {
//               node_id: "2.1.3",
//               type: "text",
//               body: "Additional notes on system architecture with details about services, microservices, and integrations.",
//               position: 3
//             }
//           ]
//         },
//         {
//           node_id: "2.2",
//           type: "section",
//           title: "API Security",
//           body: "Detailed API security assessment.",
//           points: ["JWT Validation", "Rate Limiting", "IDOR Testing", "Input Validation", "CORS Policies"],
//           position: 2,
//           children: [
//             {
//               node_id: "2.2.1",
//               type: "bullet_group",
//               points: ["Validation 1", "Validation 2", "Validation 3"],
//               position: 1
//             },
//             {
//               node_id: "2.2.2",
//               type: "code",
//               language: "python",
//               code: "import requests\nresponse = requests.get('https://api.example.com')\nprint(response.status_code)",
//               position: 2
//             },
//             {
//               node_id: "2.2.3",
//               type: "custom_block",
//               title: "API Configuration",
//               fields: { endpoint: "/api/test", method: "GET", secure: true, retries: 3 },
//               position: 3
//             },
//             {
//               node_id: "2.2.4",
//               type: "text",
//               body: "Notes about API security and testing strategies.",
//               position: 4
//             }
//           ]
//         }
//       ]
//     },

//     // ==================== Heading Level 1 ====================
//     {
//       node_id: "3",
//       type: "heading",
//       level: 1,
//       title: "Security Assessment & Remediation Proposal",
//       body: "Comprehensive security proposal with deliverables, next steps, and terms.",
//       position: 3,
//       children: [
//         {
//           node_id: "3.1",
//           type: "section",
//           title: "Executive Summary",
//           body: "Executive summary body with key points.",
//           position: 1,
//           children: [
//             {
//               node_id: "3.1.1",
//               type: "bullet_group",
//               points: ["Full assessment", "Vulnerability remediation", "Deployment assistance", "Monitoring setup"],
//               position: 1
//             },
//             {
//               node_id: "3.1.2",
//               type: "text",
//               body: "Additional executive summary notes and context.",
//               position: 2
//             }
//           ]
//         },
//         {
//           node_id: "3.2",
//           type: "section",
//           title: "Scope of Work",
//           position: 2,
//           children: [
//             {
//               node_id: "3.2.1",
//               type: "section",
//               title: "Source Code Review",
//               points: ["Static Analysis", "Dynamic Analysis", "Dependency Scans", "Secret Checks"],
//               position: 1,
//               children: [
//                 {
//                   node_id: "3.2.1.1",
//                   type: "custom_block",
//                   title: "Code Review Summary",
//                   fields: { modulesReviewed: 12, issuesFound: 5, critical: 2, high: 3 },
//                   position: 1
//                 }
//               ]
//             },
//             {
//               node_id: "3.2.2",
//               type: "section",
//               title: "API Testing",
//               position: 2,
//               children: [
//                 {
//                   node_id: "3.2.2.1",
//                   type: "bullet_group",
//                   points: ["Endpoint enumeration", "JWT validation", "Rate limiting", "IDOR testing"],
//                   position: 1
//                 },
//                 {
//                   node_id: "3.2.2.2",
//                   type: "text",
//                   body: "Notes for API testing and verification.",
//                   position: 2
//                 }
//               ]
//             },
//             {
//               node_id: "3.2.3",
//               type: "section",
//               title: "Web & Mobile Testing",
//               position: 3,
//               children: [
//                 {
//                   node_id: "3.2.3.1",
//                   type: "bullet_group",
//                   points: ["XSS/CSRF testing", "Session timeout verification", "Mobile runtime analysis", "Data storage validation"],
//                   position: 1
//                 },
//                 {
//                   node_id: "3.2.3.2",
//                   type: "custom_block",
//                   title: "Mobile Test Config",
//                   fields: { platform: "iOS/Android", secure: true, notes: "Deep mobile security testing" },
//                   position: 2
//                 },
//                 {
//                   node_id: "3.2.3.3",
//                   type: "text",
//                   body: "Web and mobile testing notes and results.",
//                   position: 3
//                 }
//               ]
//             }
//           ]
//         }
//       ]
//     }
//   ]
// }

// ];

// export const data = [

//   {

//     // "document_id": "DOC001",

//         "author": "Anshumaan Singh",
//         "version": "1.0",
//         "links": ["Anshumaan.singh@tychotechnologies.in"],
//     "document_id": "DOC001",
//     "title": "Security Assessment & Remediation Proposal",
//     // "client": "Money Tree Realty",

//     "description": "Comprehensive security assessment and remediation proposal for Money Tree Realty's digital infrastructure.",
//     "sections": [
//       {
//         "node_id": "1",
//         "type": "section",
//         "title": "Executive Summary",
//         "body": "Tycho Technologies Pvt Ltd proposes a comprehensive security assessment and remediation service for Money Tree Realty's entire digital ecosystem. This engagement encompasses thorough security testing, vulnerability identification, and most importantly, complete implementation of all security fixes across your infrastructure.",
//         "points": ["Full-Service Security Assessment with Remediation"]
//       },
//       {
//         "node_id": "1",
//         "type": "section",
//         "title": "Engagement Type: Full-Service Security Assessment with Remediation",
//         // "body": "Tycho Technologies Pvt Ltd proposes a comprehensive security assessment and remediation service for Money Tree Realty's entire digital ecosystem. This engagement encompasses thorough security testing, vulnerability identification, and most importantly, complete implementation of all security fixes across your infrastructure.",
//         // "points": ["Full-Service Security Assessment with Remediation"]
//       },
//       {
//         "node_id": "2",
//         "type": "section",
//         "title": "Project Overview",
//         "body": "Your digital infrastructure is the backbone of Money Tree Realty's operations. From managing critical HR data to processing leads and facilitating user interactions across web and mobile platforms, every component requires robust security. We provide not just assessment, but complete transformation of your security posture.",
//         "points": [
//           "Complete security assessment of all digital assets",
//           "Full remediation of all identified vulnerabilities",
//           "Implementation of security best practices",
//           "Production-ready secure infrastructure",
//           "Comprehensive documentation and knowledge transfer"
//         ]
//       },
//       {
//         "node_id": "3",
//         "type": "section",
//         "title": "Comprehensive Scope of Work",
//         "children": [
//           {
//             "node_id": "3.1",
//             "type": "section",
//             "title": "1. Source Code Security Review (White-Box Assessment)",
//             // "points": ["Backend APIs (HR, Lead Management, User Management)", "Web Portal", "Android Application", "iOS Application"],
//             "children": [

//               {
//                 "node_id": "3.1.1",
//                 // "type": "bullet_group",
//                 "type": "section",
//                 "title": " Target application:",
//                 "points": ["Backend APIs (HR, Lead Management, User Management)", "Web Portal", "Android Application", "iOS Application"],
//               },
//               {
//                 "node_id": "3.1.2",
//                 // "type": "bullet_group",
//                 "type": "section",
//                 "title": " Coverage Includes:",
//                 "points": [
//                   "Static and dynamic code analysis",
//                   "Dependency vulnerability scanning",
//                   "Secrets and configuration scanning",
//                   "Authentication and authorization logic review",
//                   "Input validation and output encoding verification",
//                   "SQL/NoSQL injection prevention",
//                   "Cryptography implementation review",
//                   "Business logic security",
//                   "Third-party integration security"
//                 ],
//                 "children":[ {
//                   "node_id": "3.1.2.1",
//                   // "type": "bullet_group",
//                   "type": "section",
//                   "title": " Target application:",
//                   "points": ["Backend APIs (HR, Lead Management, User Management)", "Web Portal", "Android Application", "iOS Application"],
//                 },]
//               }
//             ]
//           },
//           {
//             "node_id": "3.2",
//             "type": "section",
//             "title": "2. Backend API Security Testing",
//             // "points": [
//             //   "https://backenduat.moneytreerealty.com/hr/swagger-ui/index.html",
//             //   "https://backenduat.moneytreerealty.com/lead/swagger-ui/index.html",
//             //   "https://backenduat.moneytreerealty.com/user/management/swagger-ui/index.html"
//             // ],
//             "children": [
//               {
//                 "node_id": "3.2.1",
//                 "type": "section",
//                 "title": " Backend API Security Testing",
//                 "points": [
//                   "Complete API endpoint enumeration and testing",
//                   "JWT and token validation security",
//                   "Input validation and injection testing (SQL, NoSQL, Command, Header)",
//                   "Business logic and IDOR vulnerabilities",
//                   "Rate limiting and DoS protection",
//                   "Session management security",
//                   "CORS and external integration testing"
//                 ]
//               }
//             ]
//           },
//           {
//             "node_id": "3.3",
//             "type": "section",
//             "title": "3. Web Portal Security Assessment",
//             "points": [
//               "Authentication and authorization mechanisms",
//               "Cross-site scripting (XSS) prevention",
//               "SQL injection vulnerabilities",
//               "Session management and timeout controls",
//               "CSRF protection implementation",
//               "Security headers configuration",
//               "File upload/download security",
//               "Information disclosure prevention"
//             ]
//           },
//           {
//             "node_id": "3.4",
//             "type": "section",
//             "title": "4. Mobile Application Security Testing",
//             "points": [
//               "Dynamic runtime security testing",
//               "Backend API security validation",
//               "Secure data storage verification",
//               "Transport layer security",
//               "Deep linking and IPC security",
//               "WebView/WKWebView security",
//               "Mobile-specific vulnerability assessment"
//             ]
//           },
//           {
//             "node_id": "3.5",
//             "type": "section",
//             "title": "5. Infrastructure Security Assessment",
//             "points": [
//               "Web server/Reverse proxy configuration",
//               "Database security and access controls",
//               "Container/Kubernetes security",
//               "Network and gateway protection",
//               "Monitoring and logging systems"
//             ]
//           },
//           {
//             "node_id": "3.6",
//             "type": "section",
//             "title": "6. Remediation Services",
//             "points": [
//               "All code-level security fixes across all platforms",
//               "Infrastructure hardening and configuration changes",
//               "Security headers and transport security",
//               "Authentication and authorization improvements",
//               "Rate limiting and DoS protection",
//               "Monitoring and alerting setup",
//               "Production deployment of all fixes"
//             ]
//           }
//         ]
//       },
//       {
//         "node_id": "4",
//         "type": "section",
//         "title": "Project Deliverables",
//         "children": [
//           {
//             "node_id": "4.1",
//             "type": "bullet_group",
//             "points": [
//               "All vulnerabilities remediated in code",
//               "Security patches deployed",
//               "Configuration changes implemented",
//               "Pre-remediation test results",
//               "Post-remediation verification",
//               "Residual risk assessment",
//               "Security best practices guide",
//               "Maintenance procedures"
//             ]
//           }
//         ]
//       },
//       {
//         "node_id": "5",
//         "type": "section",
//         "title": "Commercial Details",
//         "children": [
//           {
//             "node_id": "5.1",
//             "type": "text",
//             "body": "Total Project Cost: ₹28,00,000 + GST"
//           },
//           {
//             "node_id": "5.2",
//             "type": "table",
//             "columns": ["Role / Resource", "Experience (Years)", "Man-Month (MM)", "Rate (₹ L/MM)", "Cost (₹ Lakh)"],
//             "rows": [
//               ["QA Engineer", 3.5, 2.5, 1.5, 3.75],
//               ["React Native Engineer", 6, 1.5, 2, 3],
//               ["React Web Engineer (Frontend)", 6, 1.5, 2, 3],
//               ["Backend Engineer (Node/Laravel)", 7, 2, 2.25, 4.5],
//               ["DevOps & Infra Engineer", 8, 2, 2.5, 5],
//               ["Senior Code Reviewer / Security Architect", 7, 1.5, 1.85, 2.76],
//               ["Penetration & Security Tester", "4+", 2.5, 1.9, 4.75],
//               ["Project Manager (PM)", 5.5, 1, 1.2, 1.2]
//             ]
//           },
//           {
//             "node_id": "5.3",
//             "type": "bullet_group",
//             "title": "Included Services",
//             "points": [
//               "Complete security assessment across all platforms",
//               "Full source code review (white-box testing)",
//               "Infrastructure security audit",
//               "Complete vulnerability remediation",
//               "Production deployment of fixes",
//               "30-day post-deployment support"
//             ]
//           },
//           {
//             "node_id": "5.4",
//             "type": "bullet_group",
//             "title": "Payment Terms",
//             "points": [
//               "30% on project initiation: ₹8,40,000 + GST",
//               "40% on assessment completion: ₹11,20,000 + GST",
//               "30% on remediation completion: ₹8,40,000 + GST"
//             ]
//           }
//         ]
//       },
//       {
//         "node_id": "6",
//         "type": "section",
//         "title": "Ongoing Engagement",
//         "children": [
//           {
//             "node_id": "6.1",
//             "type": "table",
//             "columns": ["S.No", "Support", "Frequency", "Cost (Lacs)"],
//             "rows": [
//               [1, "Security Analysis", "Quarterly", 3],
//               [2, "Code Review & Fixes", "Quarterly", 4],
//               [3, "Dev-Ops", "Monthly", 2.5]
//             ],
//             "note": "Any additional effort (CR) to be evaluated at ₹1350 + GST per hour"
//           }
//         ]
//       },
//       {
//         "node_id": "7",
//         "type": "section",
//         "title": "Success Criteria & Acceptance",
//         "points": [
//           "All high and medium vulnerabilities are resolved and verified",
//           "No unauthenticated access exists to protected endpoints",
//           "Sensitive data (PII, credentials) is not exposed anywhere",
//           "Rate limiting is enforced on all critical endpoints",
//           "TLS 1.2+ with strong ciphers and valid certificates deployed",
//           "All security headers properly configured",
//           "Authentication and authorization controls fully functional",
//           "Input validation prevents all injection attacks",
//           "Infrastructure fully hardened per security standard",
//           "All code changes merged to main branch",
//           "All fixes deployed to production"
//         ]
//       },
//       {
//         "node_id": "8",
//         "type": "section",
//         "title": "Client Prerequisites",
//         "points": [
//           "Staging/UAT environment URLs (accessible from our IPs)",
//           "Test accounts with multiple roles (admin, standard, restricted)",
//           "Network access (IP whitelist or VPN credentials)",
//           "APK (Android) and IPA (iOS) files",
//           "SSH/console access to infrastructure",
//           "API documentation and Swagger specifications",
//           "Docker/Kubernetes configuration files",
//           "Database read-only credentials"
//         ]
//       },
//       {
//         "node_id": "9",
//         "type": "section",
//         "title": "Out of Scope",
//         "points": [
//           "Physical security assessments",
//           "Production DoS testing",
//           "Third-party vendor assessments",
//           "Compliance certification audits (PCI-DSS, HIPAA, SOC 2)",
//           "Note: While we don't provide certification, our implementation will improve compliance readiness"
//         ]
//       },
//       {
//         "node_id": "10",
//         "type": "section",
//         "title": "Terms & Conditions",
//         "points": [
//           "Confidentiality: Complete NDA coverage for all findings, source code, and business information",
//           "Warranty: 30-day warranty on all implemented security fixes",
//           "Support: 30 days of post-deployment support included",
//           "Intellectual Property: All remediation code and documentation becomes the property of Money Tree Realty"
//         ]
//       },
//       {
//         "node_id": "11",
//         "type": "section",
//         "title": "Next Steps",
//         "points": [
//           "Contract Finalization: Review and sign the agreement",
//           "Kick-off Meeting: Align on priorities and communication protocols",
//           "Environment Access: Provision necessary credentials and access",
//           "Project Initiation: Begin with highest-risk components",
//           "Regular Updates: Weekly progress reports and bi-weekly stakeholder meetings"
//         ]
//       },
//       {
//         "node_id": "12",
//         "type": "section",
//         "title": "Conclusion",
//         "body": "This comprehensive security engagement represents a complete transformation of Money Tree Realty's security posture. For ₹28,00,000 + GST, you receive not just an assessment report highlighting problems, but a fully secured, production-ready infrastructure with all vulnerabilities remediated. We take complete ownership of your security transformation – from the first line of code reviewed to the last security configuration deployed in production."
//       }
//     ]
//   }
// ];

// export const data = []

// main
// export const data = [{
//   "title": "Main Article",
//   "company": "TechCorp",
//   "author": "John Doe",
//   "authorEmail": "john@techcorp.com",
//   "content": "This is the main article content.",
//   "contentType": "section",
//   "points": ["Introduction", "Overview"],
//   "links": ["https://example.com/main"],
//   "position": "0",
//   "children": [
//     {
//       "title": "Section 1: Technology Trends",
//       "company": "TechCorp",
//       "author": "John Doe",
//       "authorEmail": "john@techcorp.com",
//       "content": "This section discusses emerging jhsbfjbsbfjlbbjfasblbdlbfbfblbdbasbbasbljbdfjlbljdbljdbfjlhasbfldbljd vdlbudahbfjd vljebfuberjlf d vpuegrpfbel  puefeun fn voue ep euobfue dn vudygyef vdouygvode tech trends.",
//       "contentType": "section",
//       "points": ["AI", "Blockchain","jhdbvbdfbvuhdbvudbuhbpudbvu"],
//       // "links": ["https://example.com/tech-trends"],
//       "position": "0.1",
//       "children": [
//         {
//           "title": "AI Trends",
//           "company": "TechCorp",
//           "author": "Jane Smith",
//           "authorEmail": "jane@techcorp.com",
//           "content": "Discussing latest AI applications.",
//           "contentType": "section",
//           "points": ["Machine Learning", "NLP"],
//           "links": ["https://example.com/ai"],
//           "position": "0.1.1",
//           "children": [
//             {
//               "title": "ML Algorithms",
//               "company": "TechCorp",
//               "author": "Jane Smith",
//               "authorEmail": "jane@techcorp.com",
//               "content": "Overview of ML  jhdbvjhdbv j jsbubdv jlhvbsadvusalgorithms.",
//               "contentType": "section",
//               // "points": ["Supervised Learning", "Unsupervised Learning"],
//               // "links": ["https://example.com/ml-algorithms"],
//               "position": "0.1.1.1",
//               "children": []
//             },
//             {
//               "title": "NLP Applications jhsbvdfnm uosdv suhbvusdbv",
//               "company": "TechCorp",
//               "author": "Jane Smith",
//               "authorEmail": "jane@techcorp.com",
//               // "content": "Overview of NLP applications.",
//               "contentType": "section",
//               // "points": ["Chatbots", "Sentiment Analysis"],
//               // "links": ["https://example.com/nlp"],
//               "position": "0.1.1.2",
//               "children": []
//             }
//           ]
//         },
//         {
//           "title": "Blockchain Trends",
//           "company": "TechCorp",
//           "author": "John Doe",
//           "authorEmail": "john@techcorp.com",
//           "content": "Blockchain applications in finance and supply chain.",
//           "contentType": "section",
//           "points": ["DeFi", "Smart Contracts"],
//           "links": ["https://example.com/blockchain"],
//           "position": "0.1.2",
//           "children": [
//             {
//               "title": "DeFi Applications",
//               "company": "TechCorp",
//               "author": "John Doe",
//               "authorEmail": "john@techcorp.com",
//               "content": "Decentralized finance applications.",
//               "contentType": "section",
//               "points": ["Lending", "Staking"],
//               "links": ["https://example.com/defi"],
//               "position": "0.1.2.1",
//               "children": []
//             },
//             {
//               "title": "Smart Contracts",
//               "company": "TechCorp",
//               "author": "John Doe",
//               "authorEmail": "john@techcorp.com",
//               "content": "Smart contracts use cases.",
//               "contentType": "section",
//               "points": ["Automation", "Security"],
//               "links": ["https://example.com/smart-contracts"],
//               "position": "0.1.2.2",
//               "children": []
//             }
//           ]
//         }
//       ]
//     },
//     {
//       "title": "Section 2: Industry Insights",
//       "company": "TechCorp",
//       "author": "John Doe",
//       "authorEmail": "john@techcorp.com",
//       "content": "Analysis of industry trends and insights.",
//       "contentType": "section",
//       "points": ["Market Analysis", "Case Studies"],
//       "links": ["https://example.com/industry-insights"],
//       "position": "0.2",
//       "children": [
//         {
//           "title": "Market Analysis",
//           "company": "TechCorp",
//           "author": "Jane Smith",
//           "authorEmail": "jane@techcorp.com",
//           "content": "Detailed market analysis.",
//           "contentType": "section",
//           "points": ["Tech Market", "Startup Growth"],
//           "links": ["https://example.com/market-analysis"],
//           "position": "0.2.1",
//           "children": [
//             {
//               "title": "Tech Market Overview",
//               "company": "TechCorp",
//               "author": "Jane Smith",
//               "authorEmail": "jane@techcorp.com",
//               "content": "Overview of tech markets globally.",
//               "contentType": "section",
//               "points": ["USA", "Europe"],
//               "links": ["https://example.com/tech-market"],
//               "position": "0.2.1.1",
//               "children": []
//             },
//             {
//               "title": "Startup Growth Trends",
//               "company": "TechCorp",
//               "author": "Jane Smith",
//               "authorEmail": "jane@techcorp.com",
//               "content": "Growth trends of tech startups.",
//               "contentType": "section",
//               "points": ["Funding", "Innovation"],
//               "links": ["https://example.com/startups"],
//               "position": "0.2.1.2",
//               "children": []
//             }
//           ]
//         },
//         {
//           "title": "Case Studies",
//           "company": "TechCorp",
//           "author": "John Doe",
//           "authorEmail": "john@techcorp.com",
//           "content": "Real-world case studies.",
//           "contentType": "section",
//           "points": ["Success Stories", "Lessons Learned"],
//           "links": ["https://example.com/case-studies"],
//           "position": "0.2.2",
//           "children": [
//             {
//               "title": "Success Stories",
//               "company": "TechCorp",
//               "author": "John Doe",
//               "authorEmail": "john@techcorp.com",
//               "content": "Stories of successful implementations.",
//               "contentType": "section",
//               "points": ["Company A", "Company B"],
//               "links": ["https://example.com/success"],
//               "position": "0.2.2.1",
//               "children": []
//             },
//             {
//               "title": "Lessons Learned",
//               "company": "TechCorp",
//               "author": "John Doe",
//               "authorEmail": "john@techcorp.com",
//               "content": "Lessons from challenges faced.",
//               "contentType": "section",
//               "points": ["Mistakes", "Best Practices"],
//               "links": ["https://example.com/lessons"],
//               "position": "0.2.2.2",
//               "children": []
//             }
//           ]
//         }
//       ]
//     }
//   ]
// }

// ]

// export const data = [
//   {
//     "title": "Security Assessment & Remediation Proposal",
//     "company": "Money Tree Realty Digital Infrastructure",
//     "author": "Anshumaan Singh",
//     "authorEmail": "Anshumaan.singh@tychotechnologies.in",
//     "content": "Executive Summary: Tycho Technologies Pvt Ltd proposes a comprehensive security assessment and remediation service for Money Tree Realty's entire digital ecosystem, including security testing, vulnerability identification, and implementation of all security fixes.",
//     "contentType": "section",
//     "points": ["Full-Service Security Assessment with Remediation", "Complete Security Transformation"],
//     "links": [],
//     "position": "0",
//     "children": [
//       {
//         "title": "Project Overview",
//         "company": "Money Tree Realty Digital Infrastructure",
//         "author": "Anshumaan Singh",
//         "authorEmail": "Anshumaan.singh@tychotechnologies.in",
//         "content": "Overview of Money Tree Realty's digital infrastructure and the need for robust security measures.",
//         "contentType": "section",
//         "points": ["Critical Digital Assets", "Robust Security Posture", "Assessment & Transformation"],
//         "links": [],
//         "position": "0.1",
//         "children": [
//           {
//             "title": "Scope of Work",
//             "company": "Money Tree Realty Digital Infrastructure",
//             "author": "Anshumaan Singh",
//             "authorEmail": "Anshumaan.singh@tychotechnologies.in",
//             "content": "Comprehensive security assessment and remediation across code, APIs, web, mobile, and infrastructure.",
//             "contentType": "section",
//             "points": ["Source Code Security Review", "Backend API Testing", "Web Portal Security", "Mobile Security Testing", "Infrastructure Assessment", "Remediation Services"],
//             "links": [],
//             "position": "0.1.1",
//             "children": [
//               {
//                 "title": "Source Code Security Review",
//                 "company": "Money Tree Realty Digital Infrastructure",
//                 "author": "Anshumaan Singh",
//                 "authorEmail": "Anshumaan.singh@tychotechnologies.in",
//                 "content": "White-box assessment of all backend APIs, web portal, Android and iOS applications.",
//                 "contentType": "section",
//                 "points": ["Static & Dynamic Code Analysis", "Dependency Vulnerabilities", "Secrets & Config Scanning", "Auth & Input Validation", "SQL/NoSQL Injection Prevention", "Cryptography Review", "Business Logic & Third-party Security"],
//                 "links": [],
//                 "position": "0.1.1.1",
//                 "children": []
//               },
//               {
//                 "title": "Backend API Security Testing",
//                 "company": "Money Tree Realty Digital Infrastructure",
//                 "author": "Anshumaan Singh",
//                 "authorEmail": "Anshumaan.singh@tychotechnologies.in",
//                 "content": "Comprehensive security testing of all backend APIs with focus on authentication, authorization, input validation, business logic, rate limiting, and session security.",
//                 "contentType": "section",
//                 "points": ["API Endpoint Testing", "JWT & Token Validation", "Injection & Input Testing", "Business Logic & IDOR", "Rate Limiting & DoS", "Session Management", "CORS & Integration Testing"],
//                 "links": [
//                   "https://backenduat.moneytreerealty.com/hr/swagger-ui/index.html",
//                   "https://backenduat.moneytreerealty.com/lead/swagger-ui/index.html",
//                   "https://backenduat.moneytreerealty.com/user/management/swagger-ui/index.html"
//                 ],
//                 "position": "0.1.1.2",
//                 "children": []
//               },
//               {
//                 "title": "Web Portal Security Assessment",
//                 "company": "Money Tree Realty Digital Infrastructure",
//                 "author": "Anshumaan Singh",
//                 "authorEmail": "Anshumaan.singh@tychotechnologies.in",
//                 "content": "Security assessment covering authentication, XSS, SQL injection, session management, CSRF, headers, file handling, and information disclosure prevention.",
//                 "contentType": "section",
//                 "points": ["Auth & Authorization", "XSS Prevention", "SQL Injection Checks", "Session & Timeout Controls", "CSRF Protection", "Security Headers", "File Upload/Download Security", "Info Disclosure Prevention"],
//                 "links": [],
//                 "position": "0.1.1.3",
//                 "children": []
//               },
//               {
//                 "title": "Mobile Application Security Testing",
//                 "company": "Money Tree Realty Digital Infrastructure",
//                 "author": "Anshumaan Singh",
//                 "authorEmail": "Anshumaan.singh@tychotechnologies.in",
//                 "content": "Dynamic runtime testing and validation of Android & iOS applications, focusing on secure data storage, transport security, WebView security, and mobile-specific vulnerabilities.",
//                 "contentType": "section",
//                 "points": ["Dynamic Runtime Testing", "API Security Validation", "Secure Data Storage", "Transport Layer Security", "Deep Linking & IPC Security", "WebView/WKWebView Security", "Mobile Vulnerability Assessment"],
//                 "links": [],
//                 "position": "0.1.1.4",
//                 "children": []
//               },
//               {
//                 "title": "Infrastructure Security Assessment",
//                 "company": "Money Tree Realty Digital Infrastructure",
//                 "author": "Anshumaan Singh",
//                 "authorEmail": "Anshumaan.singh@tychotechnologies.in",
//                 "content": "Security assessment of web servers, databases, containers, networks, monitoring, and logging systems.",
//                 "contentType": "section",
//                 "points": ["Web/Reverse Proxy", "Database Security", "Container/Kubernetes", "Network Protection", "Monitoring & Logging"],
//                 "links": [],
//                 "position": "0.1.1.5",
//                 "children": []
//               },
//               {
//                 "title": "Remediation Services",
//                 "company": "Money Tree Realty Digital Infrastructure",
//                 "author": "Anshumaan Singh",
//                 "authorEmail": "Anshumaan.singh@tychotechnologies.in",
//                 "content": "Implementation of all code-level security fixes, infrastructure hardening, configuration improvements, rate limiting, monitoring, and production deployment.",
//                 "contentType": "section",
//                 "points": ["Code Fixes", "Infrastructure Hardening", "Security Headers & TLS", "Auth Improvements", "Rate Limiting & DoS Protection", "Monitoring & Alerts", "Production Deployment"],
//                 "links": [],
//                 "position": "0.1.1.6",
//                 "children": []
//               }
//             ]
//           },
//           {
//             "title": "Project Deliverables",
//             "company": "Money Tree Realty Digital Infrastructure",
//             "author": "Anshumaan Singh",
//             "authorEmail": "Anshumaan.singh@tychotechnologies.in",
//             "content": "Includes implementation fixes, verification reports, and documentation packages.",
//             "contentType": "section",
//             "points": ["Implementation Fixes", "Verification Reports", "Documentation Package"],
//             "links": [],
//             "position": "0.1.2",
//             "children": []
//           },
//           {
//             "title": "Commercial Details",
//             "company": "Money Tree Realty Digital Infrastructure",
//             "author": "Anshumaan Singh",
//             "authorEmail": "Anshumaan.singh@tychotechnologies.in",
//             "content": "Total project cost, effort breakup, included services, and payment terms.",
//             "contentType": "section",
//             "points": ["Total Cost ₹28,00,000 + GST", "Effort Breakup by Role", "Included Services", "Payment Terms"],
//             "links": [],
//             "position": "0.1.3",
//             "children": []
//           },
//           {
//             "title": "Ongoing Engagement",
//             "company": "Money Tree Realty Digital Infrastructure",
//             "author": "Anshumaan Singh",
//             "authorEmail": "Anshumaan.singh@tychotechnologies.in",
//             "content": "Security analysis, code review, DevOps support and additional CR efforts.",
//             "contentType": "section",
//             "points": ["Quarterly Security Analysis", "Quarterly Code Review & Fixes", "Monthly DevOps Support", "Additional Efforts Rate ₹1350 + GST/hour"],
//             "links": [],
//             "position": "0.1.4",
//             "children": []
//           },
//           {
//             "title": "Success Criteria & Acceptance",
//             "company": "Money Tree Realty Digital Infrastructure",
//             "author": "Anshumaan Singh",
//             "authorEmail": "Anshumaan.singh@tychotechnologies.in",
//             "content": "Defines the conditions for project success and completion.",
//             "contentType": "section",
//             "points": ["All vulnerabilities resolved", "No unauthorized access", "Data protection", "Rate limiting enforced", "TLS 1.2+ deployed", "Security headers configured", "Auth & input validation verified", "Infrastructure hardened", "Code merged and deployed"],
//             "links": [],
//             "position": "0.1.5",
//             "children": []
//           },
//           {
//             "title": "Client Prerequisites",
//             "company": "Money Tree Realty Digital Infrastructure",
//             "author": "Anshumaan Singh",
//             "authorEmail": "Anshumaan.singh@tychotechnologies.in",
//             "content": "Requirements from Money Tree Realty to facilitate assessment and remediation.",
//             "contentType": "section",
//             "points": ["Environment URLs", "Test Accounts", "Network Access", "APK/IPA Files", "Infrastructure Access", "API Docs", "Docker/K8 Config", "Database Credentials"],
//             "links": [],
//             "position": "0.1.6",
//             "children": []
//           },
//           {
//             "title": "Out of Scope",
//             "company": "Money Tree Realty Digital Infrastructure",
//             "author": "Anshumaan Singh",
//             "authorEmail": "Anshumaan.singh@tychotechnologies.in",
//             "content": "Items not covered in this engagement.",
//             "contentType": "section",
//             "points": ["Physical Security", "Production DoS Testing", "Third-Party Vendor Assessments", "Compliance Certification Audits"],
//             "links": [],
//             "position": "0.1.7",
//             "children": []
//           },
//           {
//             "title": "Terms & Conditions",
//             "company": "Money Tree Realty Digital Infrastructure",
//             "author": "Anshumaan Singh",
//             "authorEmail": "Anshumaan.singh@tychotechnologies.in",
//             "content": "Confidentiality, warranty, support, and intellectual property details.",
//             "contentType": "section",
//             "points": ["NDA Coverage", "30-day Warranty", "Post-Deployment Support", "IP Ownership"],
//             "links": [],
//             "position": "0.1.8",
//             "children": []
//           },
//           {
//             "title": "Next Steps",
//             "company": "Money Tree Realty Digital Infrastructure",
//             "author": "Anshumaan Singh",
//             "authorEmail": "Anshumaan.singh@tychotechnologies.in",
//             "content": "Key steps to initiate the project and align priorities.",
//             "contentType": "section",
//             "points": ["Contract Finalization", "Kick-off Meeting", "Environment Access", "Project Initiation", "Regular Updates"],
//             "links": [],
//             "position": "0.1.9",
//             "children": []
//           },
//           {
//             "title": "Conclusion",
//             "company": "Money Tree Realty Digital Infrastructure",
//             "author": "Anshumaan Singh",
//             "authorEmail": "Anshumaan.singh@tychotechnologies.in",
//             "content": "Full transformation of security posture for ₹28,00,000 + GST, including all remediation and production deployment.",
//             "contentType": "section",
//             "points": ["Full Assessment & Remediation", "Production-Ready Infrastructure", "Vulnerability-Free Environment", "Ownership of Security Transformation"],
//             "links": [],
//             "position": "0.1.10",
//             "children": []
//           }
//         ]
//       }
//     ]
//   }
// ];

export const data = [
  {
    title: "Security Assessment & Remediation Proposal",
    company: "Money Tree Realty Digital Infrastructure",
    author: "Anshumaan Singh",
    authorEmail: "Anshumaan.singh@tychotechnologies.in",
    content:
      "Executive Summary: Tycho Technologies Pvt Ltd proposes a comprehensive security assessment and remediation service for Money Tree Realty's entire digital ecosystem, including thorough security testing, vulnerability identification, and complete implementation of all security fixes.",
    contentType: "section",
    points: ["Full-Service Security Assessment with Remediation"],
    links: [],
    position: "0",
    children: [
      {
        title: "Project Overview",
        company: "Money Tree Realty Digital Infrastructure",
        author: "Anshumaan Singh",
        authorEmail: "Anshumaan.singh@tychotechnologies.in",
        content:
          "Your digital infrastructure is the backbone of Money Tree Realty's operations. Every component requires robust security. This engagement includes full transformation of security posture.",
        contentType: "section",
        points: [
          "Critical HR, Lead, User Management systems",
          "Assessment & Security Transformation",
        ],
        links: [],
        position: "0.1",
        children: [
          {
            title: "What We Deliver",
            company: "Money Tree Realty Digital Infrastructure",
            author: "Anshumaan Singh",
            authorEmail: "Anshumaan.singh@tychotechnologies.in",
            content: "",
            contentType: "section",
            points: [
              "Complete security assessment of all digital assets",
              "Full remediation of ALL identified vulnerabilities",
              "Implementation of security best practices",
              "Production-ready secure infrastructure",
              "Comprehensive documentation and knowledge transfer",
            ],
            links: [],
            position: "0.1.1",
            children: [],
          },
          {
            title: "Comprehensive Scope of Work",
            company: "Money Tree Realty Digital Infrastructure",
            author: "Anshumaan Singh",
            authorEmail: "Anshumaan.singh@tychotechnologies.in",
            content: "",
            contentType: "section",
            points: [],
            links: [],
            position: "0.1.2",
            children: [
              {
                title: "1. Source Code Security Review (White-Box Assessment)",
                company: "Money Tree Realty Digital Infrastructure",
                author: "Anshumaan Singh",
                authorEmail: "Anshumaan.singh@tychotechnologies.in",
                content: "",
                contentType: "section",
                points: [],
                links: [],
                position: "0.1.2.1",
                children: [
                  {
                    title: "Target Applications: ",
                    company: "Money Tree Realty Digital Infrastructure",
                    author: "Anshumaan Singh",
                    authorEmail: "Anshumaan.singh@tychotechnologies.in",
                    content: "",
                    contentType: "section",
                    points: [
                      "Backend APIs (HR, Lead Management, User Management)",
                      "Web Portal",
                      "Android Application",
                      "iOS Application",
                    ],
                    links: [],
                    position: "0.1.2.1",
                    children: [],
                  },
                  {
                    title: "Coverage Includes: ",
                    company: "Money Tree Realty Digital Infrastructure",
                    author: "Anshumaan Singh",
                    authorEmail: "Anshumaan.singh@tychotechnologies.in",
                    content: "",
                    contentType: "section",
                    points: [
                      "Static and dynamic code analysis",
                      "Dependency vulnerability scanning",
                      "Secrets and configuration scanning",
                      "Authentication and authorization logic review",
                      "Input validation and output encoding verification",
                      "SQL/NoSQL injection prevention",
                      "Cryptography implementation review",
                      "Business logic security",
                      "Third-party integration security",
                    ],
                    links: [],
                    position: "0.1.2.1",
                    children: [],
                  },
                ],
              },
              {
                title: "2. Backend API Security Testing",
                company: "Money Tree Realty Digital Infrastructure",
                author: "Anshumaan Singh",
                authorEmail: "Anshumaan.singh@tychotechnologies.in",
                content: "Security testing of all backend APIs.",
                contentType: "section",
                points: [
                  "Complete API endpoint enumeration and testing",
                  "JWT and token validation security",
                  "Input validation and injection testing (SQL, NoSQL, Command, Header)",
                  "Business logic and IDOR vulnerabilities",
                  "Rate limiting and DoS protection",
                  "Session management security",
                  "CORS and external integration testing",
                ],
                links: [
                  "https://backenduat.moneytreerealty.com/hr/swagger-ui/index.html",
                  "https://backenduat.moneytreerealty.com/lead/swagger-ui/index.html",
                  "https://backenduat.moneytreerealty.com/user/management/swagger-ui/index.html",
                ],
                position: "0.1.2.2",
                children: [],
              },
              {
                title: "3. Web Portal Security Assessment",
                company: "Money Tree Realty Digital Infrastructure",
                author: "Anshumaan Singh",
                authorEmail: "Anshumaan.singh@tychotechnologies.in",
                content:
                  "Testing of authentication, XSS, SQL injection, session, CSRF, headers, file handling, and info disclosure.",
                contentType: "section",
                points: [
                  "Authentication and authorization mechanisms",
                  "Cross-site scripting (XSS) prevention",
                  "SQL injection vulnerabilities",
                  "Session management and timeout controls",
                  "CSRF protection implementation",
                  "Security headers configuration",
                  "File upload/download security",
                  "Information disclosure prevention",
                ],
                links: [],
                position: "0.1.2.3",
                children: [],
              },
              {
                title: "4. Mobile Application Security Testing",
                company: "Money Tree Realty Digital Infrastructure",
                author: "Anshumaan Singh",
                authorEmail: "Anshumaan.singh@tychotechnologies.in",
                content:
                  "Android & iOS dynamic runtime testing and API security validation.",
                contentType: "section",
                points: [
                  "Dynamic runtime security testing",
                  "Backend API security validation",
                  "Secure data storage verification",
                  "Transport layer security",
                  "Deep linking and IPC security",
                  "WebView/WKWebView security",
                  "Mobile-specific vulnerability assessment",
                ],
                links: [],
                position: "0.1.2.4",
                children: [],
              },
              {
                title: "5. Infrastructure Security Assessment",
                company: "Money Tree Realty Digital Infrastructure",
                author: "Anshumaan Singh",
                authorEmail: "Anshumaan.singh@tychotechnologies.in",
                content:
                  "Assessment of servers, databases, containers, network, monitoring, and logging systems.",
                contentType: "section",
                points: [
                  "Web server/Reverse proxy configuration",
                  "Database security and access controls",
                  "Container/Kubernetes security",
                  "Network and gateway protection",
                  "Monitoring and logging systems",
                ],
                links: [],
                position: "0.1.2.5",
                children: [],
              },
              {
                title: "6. Remediation Services",
                company: "Money Tree Realty Digital Infrastructure",
                author: "Anshumaan Singh",
                authorEmail: "Anshumaan.singh@tychotechnologies.in",
                content:
                  "Full remediation including code fixes, infrastructure hardening, monitoring, and production deployment.",
                contentType: "section",
                points: [
                  "All code-level security fixes across all platforms",
                  "Infrastructure hardening and configuration changes",
                  "Security headers and transport security",
                  "Authentication and authorization improvements",
                  "Rate limiting and DoS protection",
                  "Monitoring and alerting setup",
                  "Production deployment of all fixes",
                ],
                links: [],
                position: "0.1.2.6",
                children: [],
              },
            ],
          },
          {
            title: "Project Deliverables",
            company: "Money Tree Realty Digital Infrastructure",
            author: "Anshumaan Singh",
            authorEmail: "Anshumaan.singh@tychotechnologies.in",
            content: "",
            contentType: "section",
            points: [
              "Implementation Fixes: All vulnerabilities remediated in code, Security patches deployed, Configuration changes implemented",
              "Verification Reports: Pre-remediation test results, Post-remediation verification, Residual risk assessment",
              "Documentation Package: Security best practices guide, Maintenance procedures",
            ],
            links: [],
            position: "0.1.3",
            children: [],
          },
          {
            title: "Commercial Details",
            company: "Money Tree Realty Digital Infrastructure",
            author: "Anshumaan Singh",
            authorEmail: "Anshumaan.singh@tychotechnologies.in",
            content:
              "Project cost, effort breakdown, included services, and payment terms.",
            contentType: "section",
            points: [
              "Total Project Cost: ₹28,00,000 + GST",
              "Effort Breakup by Role/Resource",
              "Included Services: Full security assessment, source code review, infrastructure audit, vulnerability remediation, production deployment, 30-day support",
              "Payment Terms: 30% initiation, 40% assessment completion, 30% remediation completion",
            ],
            links: [],
            position: "0.1.4",
            children: [],
          },
          {
            title: "Ongoing Engagement",
            company: "Money Tree Realty Digital Infrastructure",
            author: "Anshumaan Singh",
            authorEmail: "Anshumaan.singh@tychotechnologies.in",
            content:
              "Support schedules and rates for ongoing security analysis, code review, and DevOps.",
            contentType: "section",
            points: [
              "Security Analysis: Quarterly, Cost 3 Lacs",
              "Code Review & Fixes: Quarterly, Cost 4 Lacs",
              "Dev-Ops: Monthly, Cost 2.5 Lacs",
              "Additional effort rate: ₹1350 + GST per hour",
            ],
            links: [],
            position: "0.1.5",
            children: [],
          },
          {
            title: "Success Criteria & Acceptance",
            company: "Money Tree Realty Digital Infrastructure",
            author: "Anshumaan Singh",
            authorEmail: "Anshumaan.singh@tychotechnologies.in",
            content: "Conditions for project success and completion.",
            contentType: "section",
            points: [
              "All high and medium vulnerabilities resolved and verified",
              "No unauthenticated access to protected endpoints",
              "Sensitive data (PII, credentials) not exposed",
              "Rate limiting enforced on all critical endpoints",
              "TLS 1.2+ with strong ciphers deployed",
              "All security headers configured",
              "Authentication and authorization controls functional",
              "Input validation prevents injections",
              "Infrastructure fully hardened",
              "All code changes merged to main branch",
              "All fixes deployed to production",
            ],
            links: [],
            position: "0.1.6",
            children: [],
          },
          {
            title: "Client Prerequisites",
            company: "Money Tree Realty Digital Infrastructure",
            author: "Anshumaan Singh",
            authorEmail: "Anshumaan.singh@tychotechnologies.in",
            content: "",
            contentType: "section",
            points: [
              "Staging/UAT environment URLs",
              "Test accounts (admin, standard, restricted)",
              "Network access (IP whitelist/VPN)",
              "APK and IPA files",
              "SSH/console access",
              "API documentation and Swagger specs",
              "Docker/Kubernetes config files",
              "Database read-only credentials",
            ],
            links: [],
            position: "0.1.7",
            children: [],
          },
          {
            title: "Out of Scope",
            company: "Money Tree Realty Digital Infrastructure",
            author: "Anshumaan Singh",
            authorEmail: "Anshumaan.singh@tychotechnologies.in",
            content: "",
            contentType: "section",
            points: [
              "Physical security assessments",
              "Production DoS testing",
              "Third-party vendor assessments",
              "Compliance certification audits (PCI-DSS, HIPAA, SOC 2)",
            ],
            links: [],
            position: "0.1.8",
            children: [],
          },
          {
            title: "Terms & Conditions",
            company: "Money Tree Realty Digital Infrastructure",
            author: "Anshumaan Singh",
            authorEmail: "Anshumaan.singh@tychotechnologies.in",
            content:
              "Confidentiality, warranty, support, and intellectual property details.",
            contentType: "section",
            points: [
              "Complete NDA coverage",
              "30-day warranty on security fixes",
              "30 days post-deployment support",
              "All remediation code and documentation become client property",
            ],
            links: [],
            position: "0.1.9",
            children: [],
          },
          {
            title: "Next Steps",
            company: "Money Tree Realty Digital Infrastructure",
            author: "Anshumaan Singh",
            authorEmail: "Anshumaan.singh@tychotechnologies.in",
            content: "Steps to start the project and ensure smooth execution.",
            contentType: "section",
            points: [
              "Contract Finalization: Review and sign agreement",
              "Kick-off Meeting: Align on priorities and protocols",
              "Environment Access: Provision credentials",
              "Project Initiation: Start with high-risk components",
              "Regular Updates: Weekly progress reports and bi-weekly meetings",
            ],
            links: [],
            position: "0.1.10",
            children: [],
          },
          {
            title: "Conclusion",
            company: "Money Tree Realty Digital Infrastructure",
            author: "Anshumaan Singh",
            authorEmail: "Anshumaan.singh@tychotechnologies.in",
            content:
              "This engagement provides a fully secured, production-ready infrastructure with all vulnerabilities remediated for ₹28,00,000 + GST.",
            contentType: "section",
            points: [
              "Full Assessment & Remediation",
              "Production-Ready Infrastructure",
              "Vulnerability-Free Environment",
              "Ownership of Security Transformation",
            ],
            links: [],
            position: "0.1.11",
            children: [],
          },
        ],
      },
    ],
  },
];
