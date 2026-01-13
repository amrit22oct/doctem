// export const data = [
//    {
//      "document_id": "3534534",
//      "title": "Document Main Title",
//      "description": "High-level description of the document",
//      "links": ["https://mainlink.com"],
//      "content": [
//        {
//          "node_id": "1",
//          "type": "heading",
//          "level": 1,
//          "title": "Type 1 Heading",
//          "position": 1,
//          "body": "Extra body text for Type 1",
//          "points": ["p1", "p2"],
//          "links": ["https://type1link.com"],
//          "children": [
//            {
//              "node_id": "1.1",
//              "type": "heading",
//              "level": 2,
//              "title": "Sub Heading A",
//              "description": "A deeper description",
//              "points": ["A1", "A2"],
//              "links": ["https://subA.com"],
//              "children": [
//                {
//                  "node_id": "1.1.1",
//                  "type": "section",
//                  "title": "Sub Sub Heading A1",
//                  "body": "Deep nested body",
//                  "links": ["https://deepA1.com"]
//                },
//                {
//                  "node_id": "1.1.2",
//                  "type": "bullet_group",
//                  "points": ["b1", "b2", "b3"]
//                }
//              ]
//            },
//            {
//              "node_id": "1.2",
//              "type": "custom_block",
//              "title": "Random Block with Different Format",
//              "fields": {
//                "customField": "Any data allowed"
//              },
//              "links": ["https://extra.com"]
//            }
//          ]
//        },
 
//        {
//          "node_id": "2",
//          "type": "heading",
//          "level": 1,
//          "title": "Type 2 Title",
//          "notes": "Type 2 has completely different fields",
//          "links": ["https://type2link.com"],
//          "children": [
//            {
//              "node_id": "2.1",
//              "type": "section",
//              "title": "Type 2 Section Title",
//              "summary": "Type 2 summary",
//              "points": ["t2p1", "t2p2"],
//              "children": [
//                {
//                  "node_id": "2.1.1",
//                  "type": "subsection",
//                  "title": "T2 Nested Level",
//                  "description": "Another unique structure",
//                  "links": ["https://nestedT2.com"],
//                  "children": [
//                    {
//                      "node_id": "2.1.1.1",
//                      "type": "text",
//                      "body": "Final deep nested text"
//                    }
//                  ]
//                }
//              ]
//            }
//          ]
//        },
 
//        /* ---------------------------------------------------
//           NEW PROPOSAL CONTENT (OPTION B — Structured)
//        -----------------------------------------------------*/
 
//        {
//          "node_id": "3",
//          "type": "heading",
//          "level": 1,
//          "title": "Security Assessment & Remediation Proposal",
//          "children": [
//            {
//              "node_id": "3.1",
//              "type": "section",
//              "title": "Executive Summary",
//              "children": [
//                {
//                  "node_id": "3.1.1",
//                  "type": "text",
//                  "body": "Tycho Technologies Pvt Ltd proposes a comprehensive security assessment and remediation service for Money Tree Realty's entire digital ecosystem. This includes security testing, vulnerability identification, and full remediation across all systems."
//                },
//                {
//                  "node_id": "3.1.2",
//                  "type": "bullet_group",
//                  "points": [
//                    "Engagement Type: Full-Service Security Assessment with Remediation"
//                  ]
//                }
//              ]
//            },
 
//            {
//              "node_id": "3.2",
//              "type": "section",
//              "title": "Project Overview",
//              "children": [
//                {
//                  "node_id": "3.2.1",
//                  "type": "text",
//                  "body": "Your digital infrastructure powers all operations, including HR, lead management, and user interactions. This engagement ensures complete transformation of your security posture."
//                },
//                {
//                  "node_id": "3.2.2",
//                  "type": "bullet_group",
//                  "points": [
//                    "Complete security assessment of all digital assets",
//                    "Full remediation of all vulnerabilities",
//                    "Implementation of security best practices",
//                    "Production-ready secure infrastructure",
//                    "Comprehensive documentation and knowledge transfer"
//                  ]
//                }
//              ]
//            },
 
//            {
//              "node_id": "3.3",
//              "type": "heading",
//              "level": 2,
//              "title": "Comprehensive Scope of Work",
//              "children": [
 
//                {
//                  "node_id": "3.3.1",
//                  "type": "subsection",
//                  "title": "1. Source Code Security Review (White-Box Assessment)",
//                  "children": [
//                    {
//                      "node_id": "3.3.1.1",
//                      "type": "bullet_group",
//                      "points": [
//                        "Backend APIs (HR, Lead Management, User Management)",
//                        "Web Portal",
//                        "Android Application",
//                        "iOS Application"
//                      ]
//                    },
//                    {
//                      "node_id": "3.3.1.2",
//                      "type": "bullet_group",
//                      "points": [
//                        "Static and dynamic code analysis",
//                        "Dependency vulnerability scanning",
//                        "Secrets and configuration scanning",
//                        "Authentication/authorization logic review",
//                        "Input validation and output encoding",
//                        "SQL/NoSQL injection prevention",
//                        "Cryptography implementation review",
//                        "Business logic security",
//                        "Third-party integration security"
//                      ]
//                    }
//                  ]
//                },
 
//                {
//                  "node_id": "3.3.2",
//                  "type": "subsection",
//                  "title": "2. Backend API Security Testing",
//                  "children": [
//                    {
//                      "node_id": "3.3.2.1",
//                      "type": "bullet_group",
//                      "points": [
//                        "Complete API enumeration",
//                        "JWT and token security",
//                        "Input validation testing",
//                        "IDOR and business logic vulnerabilities",
//                        "Rate limiting and DoS protection",
//                        "Session management security",
//                        "CORS testing"
//                      ]
//                    }
//                  ]
//                },
 
//                {
//                  "node_id": "3.3.3",
//                  "type": "subsection",
//                  "title": "3. Web Portal Security Assessment",
//                  "children": [
//                    {
//                      "node_id": "3.3.3.1",
//                      "type": "bullet_group",
//                      "points": [
//                        "Authentication and authorization",
//                        "XSS prevention",
//                        "SQL injection testing",
//                        "Session timeout controls",
//                        "CSRF protection",
//                        "Security headers",
//                        "File upload/download security",
//                        "Information disclosure testing"
//                      ]
//                    }
//                  ]
//                },
 
//                {
//                  "node_id": "3.3.4",
//                  "type": "subsection",
//                  "title": "4. Mobile Application Security Testing",
//                  "children": [
//                    {
//                      "node_id": "3.3.4.1",
//                      "type": "bullet_group",
//                      "points": [
//                        "Runtime security testing",
//                        "Backend API validation",
//                        "Secure data storage",
//                        "Transport layer security",
//                        "Deep linking security",
//                        "WebView/WKWebView security",
//                        "Mobile-specific vulnerabilities"
//                      ]
//                    }
//                  ]
//                },
 
//                {
//                  "node_id": "3.3.5",
//                  "type": "subsection",
//                  "title": "5. Infrastructure Security Assessment",
//                  "children": [
//                    {
//                      "node_id": "3.3.5.1",
//                      "type": "bullet_group",
//                      "points": [
//                        "Web server configuration",
//                        "Database security",
//                        "Container/Kubernetes security",
//                        "Network and gateway protection",
//                        "Monitoring and logging"
//                      ]
//                    }
//                  ]
//                },
 
//                {
//                  "node_id": "3.3.6",
//                  "type": "subsection",
//                  "title": "6. Remediation Services",
//                  "children": [
//                    {
//                      "node_id": "3.3.6.1",
//                      "type": "bullet_group",
//                      "points": [
//                        "Code-level fixes across all platforms",
//                        "Infrastructure hardening",
//                        "Security headers and TLS",
//                        "Authentication and authorization fixes",
//                        "Rate limiting",
//                        "Monitoring and alerting setup",
//                        "Production deployment"
//                      ]
//                    }
//                  ]
//                }
//              ]
//            },
 
//            {
//              "node_id": "3.4",
//              "type": "section",
//              "title": "Project Deliverables",
//              "children": [
//                {
//                  "node_id": "3.4.1",
//                  "type": "bullet_group",
//                  "points": [
//                    "All vulnerabilities remediated",
//                    "Security patches deployed",
//                    "Configuration changes implemented",
//                    "Pre- and Post-remediation reports",
//                    "Residual risk assessment",
//                    "Security best practices guide",
//                    "Maintenance procedures"
//                  ]
//                }
//              ]
//            },
 
//            {
//              "node_id": "3.5",
//              "type": "section",
//              "title": "Commercial Details",
//              "children": [
//                {
//                  "node_id": "3.5.1",
//                  "type": "text",
//                  "body": "Total Project Cost: ₹28,00,000 + GST"
//                },
//                {
//                  "node_id": "3.5.2",
//                  "type": "text",
//                  "body": "Effort Breakdown and Rate Chart included."
//                }
//              ]
//            },
 
//            {
//              "node_id": "3.6",
//              "type": "section",
//              "title": "Included Services",
//              "children": [
//                {
//                  "node_id": "3.6.1",
//                  "type": "bullet_group",
//                  "points": [
//                    "Security assessment across platforms",
//                    "Source code review",
//                    "Infrastructure audit",
//                    "Complete remediation",
//                    "Production deployment",
//                    "30-day support"
//                  ]
//                }
//              ]
//            },
 
//            {
//              "node_id": "3.7",
//              "type": "section",
//              "title": "Payment Terms",
//              "children": [
//                {
//                  "node_id": "3.7.1",
//                  "type": "bullet_group",
//                  "points": [
//                    "30% on initiation",
//                    "40% on assessment completion",
//                    "30% on remediation completion"
//                  ]
//                }
//              ]
//            },
 
//            {
//              "node_id": "3.8",
//              "type": "section",
//              "title": "Success Criteria & Acceptance",
//              "children": [
//                {
//                  "node_id": "3.8.1",
//                  "type": "bullet_group",
//                  "points": [
//                    "All vulnerabilities resolved",
//                    "No unauthenticated access",
//                    "No sensitive data exposure",
//                    "Rate limiting enforced",
//                    "TLS 1.2+ implemented",
//                    "Security headers configured",
//                    "Authentication/authorization working",
//                    "Injection attacks prevented",
//                    "Infrastructure hardened",
//                    "All fixes deployed"
//                  ]
//                }
//              ]
//            },
 
//            {
//              "node_id": "3.9",
//              "type": "section",
//              "title": "Client Prerequisites",
//              "children": [
//                {
//                  "node_id": "3.9.1",
//                  "type": "bullet_group",
//                  "points": [
//                    "UAT environment access",
//                    "Test accounts",
//                    "VPN/IP whitelist",
//                    "APK and IPA files",
//                    "SSH access",
//                    "Swagger docs",
//                    "Docker/K8s config",
//                    "DB read-only credentials"
//                  ]
//                }
//              ]
//            },
 
//            {
//              "node_id": "3.10",
//              "type": "section",
//              "title": "Out of Scope",
//              "children": [
//                {
//                  "node_id": "3.10.1",
//                  "type": "bullet_group",
//                  "points": [
//                    "Physical assessments",
//                    "Production DoS testing",
//                    "Vendor assessments",
//                    "Compliance certification audits"
//                  ]
//                }
//              ]
//            },
 
//            {
//              "node_id": "3.11",
//              "type": "section",
//              "title": "Terms & Conditions",
//              "children": [
//                {
//                  "node_id": "3.11.1",
//                  "type": "bullet_group",
//                  "points": [
//                    "NDA for confidentiality",
//                    "30-day warranty",
//                    "30-day support",
//                    "All IP belongs to client"
//                  ]
//                }
//              ]
//            },
 
//            {
//              "node_id": "3.12",
//              "type": "section",
//              "title": "Next Steps",
//              "children": [
//                {
//                  "node_id": "3.12.1",
//                  "type": "bullet_group",
//                  "points": [
//                    "Contract finalization",
//                    "Kick-off meeting",
//                    "Access provisioning",
//                    "Project initiation",
//                    "Weekly Updates"
//                  ]
//                }
//              ]
//            },
 
//            {
//              "node_id": "3.13",
//              "type": "section",
//              "title": "Conclusion",
//              "children": [
//                {
//                  "node_id": "3.13.1",
//                  "type": "text",
//                  "body": "This engagement transforms the client's security posture by delivering not only an assessment, but complete remediation and secure deployment."
//                }
//              ]
//            }
//          ]
//        }
//      ]
//    }
//  ];
 





export const data = [
   {
     "document_id": "3534534",
     "title": "Document Main Title",
     "description": "High-level description of the document",
     "links": ["https://mainlink.com"],
     "content": [
       {
         "node_id": "1",
         "type": "heading",
         "level": 1,
         "title": "Type 1 Heading",
         "position": 1,
         "body": "Extra body text for Type jlsbfjhdbfjhbjhdfbfjdbjhfbdjhfvbjldfbvljhdbfuhdrbufbdslfjbvljdbuybdejv dfovldf jlv duhfbfuebbljdbfubjd fvboudgfuderblj dljbviudebludbipudgfudebvdhvuguyddkjnvidfjlvbdifnv;dbyudblvbdovldhlgvudhldbyubvldfhvgdsf vjdsvyuds hlbvdsbvhboudsfvhdsyugv vjhdblfvbdfulbfuydfudbufbvudbu 1",
         // "points": ["p1", "p2"],
         // "links": ["https://type1link.com"],
         "children": [
           {
             "node_id": "1.1",
             "type": "heading",
             "level": 2,
             "title": "Sub Heading A jhsbfjhsbhbsyubvu vfufuduiiubv",
             "description": "A deeper dbfjhbjhdfbfjdbjhfbdjhfvbjldfbvljhdbfuhdrbufbdslfjbvljdbuybdejv dfovldf jlv duhfbfuebbljdbfubjd fvboudgfuderblj dljbviudebludbipudgfudebvdhvuguyddkjnvidfjlvbdifnv;dbyudblvbdovldhlgvudhldbyubvldfhvgdsf vjdsvyuds hlbvdsbvhboudsfvhdsyugv vjhdblfvbdfulbfuydfudbufb description",
            //  "points": ["A1", "A2"],
            //  "links": ["https://subA.com"],
             "children": [
               {
                  "node_id": "1.1.1",
                  "type": "section",
                  "title": "Sub Sub Heading A1",
                  //   "points": ["A1jhsbsjbjsbsbubsdbvjsdbvjhs", "A2jhsdbfjhs hjsbhjb hjv jhb","A1jhsbsjbjsbsbubsdbvjsdbvjhs","A1jhsbsjbjsbsbubsdbvjsdbvjhs"],
              
                  // "body": "Deep nested dbfjhbjhdfbfjdbjhfbdjhfvbjldfbvljhdbfuhdrbufbdslfjbvljdbuybdejv dfovldf jlv duhfbfuebbljdbfubjd fvboudgfuderblj dljbviudebludbipudgfudebvdhvuguyddkjnvidfjlvbdifnv;dbyudblvbdovldhlgvudhldbyubvldfhvgdsf vjdsvyuds hlbvdsbvhboudsfvhdsyugv vjhdblfvbdfulbfuydfudbufb body",
                  // "links": ["https://deepA1.com"]
                },
               {
                 "node_id": "1.1.1",
                 "type": "section",
                 "title": "Sub Sub Heading A1",
                   "points": ["A1jhsbsjbjsbsbubsdbvjsdbvjhs", "A2jhsdbfjhs hjsbhjb hjv jhb","A1jhsbsjbjsbsbubsdbvjsdbvjhs","A1jhsbsjbjsbsbubsdbvjsdbvjhs"],
             
                 "body": "Deep nested dbfjhbjhdfbfjdbjhfbdjhfvbjldfbvljhdbfuhdrbufbdslfjbvljdbuybdejv dfovldf jlv duhfbfuebbljdbfubjd fvboudgfuderblj dljbviudebludbipudgfudebvdhvuguyddkjnvidfjlvbdifnv;dbyudblvbdovldhlgvudhldbyubvldfhvgdsf vjdsvyuds hlbvdsbvhboudsfvhdsyugv vjhdblfvbdfulbfuydfudbufb body",
                 "links": ["https://deepA1.com"]
               },
               // {
               //   "node_id": "1.1.2",
               //   "type": "bullet_group",
               //   "points": ["b1", "b2", "b3"]
               // }
             ]
           },
           {
            "node_id": "1.1",
            "type": "heading",
            "level": 2,
            "title": "Sub Heading A jhsbfjhsbhbsyubvu vfufuduiiubv",
            "description": "A deeper dbfjhbjhdfbfjdbjhfbdjhfvbjldfbvljhdbfuhdrbufbdslfjbvljdbuybdejv dfovldf jlv duhfbfuebbljdbfubjd fvboudgfuderblj dljbviudebludbipudgfudebvdhvuguyddkjnvidfjlvbdifnv;dbyudblvbdovldhlgvudhldbyubvldfhvgdsf vjdsvyuds hlbvdsbvhboudsfvhdsyugv vjhdblfvbdfulbfuydfudbufb description",
           //  "points": ["A1", "A2"],
           //  "links": ["https://subA.com"],
            "children": [
              {
                 "node_id": "1.1.1",
                 "type": "section",
                 "title": "Sub Sub Heading A1",
                 //   "points": ["A1jhsbsjbjsbsbubsdbvjsdbvjhs", "A2jhsdbfjhs hjsbhjb hjv jhb","A1jhsbsjbjsbsbubsdbvjsdbvjhs","A1jhsbsjbjsbsbubsdbvjsdbvjhs"],
             
                 // "body": "Deep nested dbfjhbjhdfbfjdbjhfbdjhfvbjldfbvljhdbfuhdrbufbdslfjbvljdbuybdejv dfovldf jlv duhfbfuebbljdbfubjd fvboudgfuderblj dljbviudebludbipudgfudebvdhvuguyddkjnvidfjlvbdifnv;dbyudblvbdovldhlgvudhldbyubvldfhvgdsf vjdsvyuds hlbvdsbvhboudsfvhdsyugv vjhdblfvbdfulbfuydfudbufb body",
                 // "links": ["https://deepA1.com"]
               },
              {
                "node_id": "1.1.1",
                "type": "section",
                "title": "Sub Sub Heading A1",
                  "points": ["A1jhsbsjbjsbsbubsdbvjsdbvjhs", "A2jhsdbfjhs hjsbhjb hjv jhb","A1jhsbsjbjsbsbubsdbvjsdbvjhs","A1jhsbsjbjsbsbubsdbvjsdbvjhs"],
            
                "body": "Deep nested dbfjhbjhdfbfjdbjhfbdjhfvbjldfbvljhdbfuhdrbufbdslfjbvljdbuybdejv dfovldf jlv duhfbfuebbljdbfubjd fvboudgfuderblj dljbviudebludbipudgfudebvdhvuguyddkjnvidfjlvbdifnv;dbyudblvbdovldhlgvudhldbyubvldfhvgdsf vjdsvyuds hlbvdsbvhboudsfvhdsyugv vjhdblfvbdfulbfuydfudbufb body",
                "links": ["https://deepA1.com"]
              },
              // {
              //   "node_id": "1.1.2",
              //   "type": "bullet_group",
              //   "points": ["b1", "b2", "b3"]
              // }
            ]
          },
         //   {
         //     "node_id": "1.2",
         //     "type": "custom_block",
         //     "title": "noteblock",
         //     "fields": {
         //       "customField": "Any data allowed"
         //     },
         //     "links": ["https://extra.com"]
         //   }
         ]
       },
 
       {
         "node_id": "2",
         "type": "heading",
         "level": 1,
         "title": "Type 2 Title",
         "notes": "Type 2 has completely different fields",
         "links": ["https://type2link.com"],
         "children": [
           {
             "node_id": "2.1",
             "type": "section",
             "title": "Type 2 Section Title",
             "summary": "Type 2 summary",
             "points": ["t2p1", "t2p2"],
             "children": [
               {
                 "node_id": "2.1.1",
                 "type": "section",
                 "title": "T2 Nested Level",
                 "description": "Another unique structure",
                 "links": ["https://nestedT2.com"],
                 "children": [
                   {
                     "node_id": "2.1.1.1",
                     "type": "text",
                     "body": "Final deep nested text"
                   }
                 ]
               }
             ]
           }
         ]
       },
 
       /* ---------------------------------------------------
           PROPOSAL CONTENT (CLEANED FOR UI COMPATIBILITY)
       ----------------------------------------------------- */
 
       {
         "node_id": "3",
         "type": "heading",
         "level": 1,
         "title": "Security Assessment & Remediation Proposal",
         "children": [
           {
             "node_id": "3.1",
             "type": "section",
             "title": "Executive Summary",
             "children": [
               {
                 "node_id": "3.1.1",
                 "type": "text",
                 "body": "Tycho Technologies Pvt Ltd proposes a comprehensive security assessment and remediation service for Money Tree Realty’s digital ecosystem."
               },
               {
                 "node_id": "3.1.2",
                 "type": "bullet_group",
                 "points": [
                   "Engagement Type: Full-Service Security Assessment with Remediation"
                 ]
               }
             ]
           },
 
           {
             "node_id": "3.2",
             "type": "section",
             "title": "Project Overview",
             "children": [
               {
                 "node_id": "3.2.1",
                 "type": "text",
                 "body": "Your digital infrastructure powers all core operations. This engagement ensures complete transformation of your security posture."
               },
               {
                 "node_id": "3.2.2",
                 "type": "bullet_group",
                 "points": [
                   "Complete security assessment of all digital assets",
                   "Full remediation of all vulnerabilities",
                   "Implementation of security best practices",
                   "Production-ready secure infrastructure",
                   "Comprehensive documentation & knowledge transfer"
                 ]
               }
             ]
           },
 
           {
             "node_id": "3.3",
             "type": "heading",
             "level": 2,
             "title": "Comprehensive Scope of Work",
             "children": [
 
               {
                 "node_id": "3.3.1",
                 "type": "section",
                 "title": "1. Source Code Security Review (White-Box Assessment)",
                 "children": [
                   {
                     "node_id": "3.3.1.1",
                     "type": "bullet_group",
                     "points": [
                       "Backend APIs (HR, Lead Management, User Management)",
                       "Web Portal",
                       "Android Application",
                       "iOS Application"
                     ]
                   },
                   {
                     "node_id": "3.3.1.2",
                     "type": "bullet_group",
                     "points": [
                       "Static & dynamic code analysis",
                       "Dependency vulnerability scanning",
                       "Secrets scanning",
                       "Authentication/authorization review",
                       "SQL/NoSQL injection analysis",
                       "Cryptography review",
                       "Business logic security testing"
                     ]
                   }
                 ]
               },
 
               {
                 "node_id": "3.3.2",
                 "type": "section",
                 "title": "2. Backend API Security Testing",
                 "children": [
                   {
                     "node_id": "3.3.2.1",
                     "type": "bullet_group",
                     "points": [
                       "API enumeration",
                       "JWT & token security",
                       "IDOR detection",
                       "Rate limiting validation",
                       "Session management",
                       "CORS validation"
                     ]
                   }
                 ]
               },
 
               {
                 "node_id": "3.3.3",
                 "type": "section",
                 "title": "3. Web Portal Security Assessment",
                 "children": [
                   {
                     "node_id": "3.3.3.1",
                     "type": "bullet_group",
                     "points": [
                       "Authentication & authorization",
                       "XSS prevention",
                       "SQL injection testing",
                       "Session timeout controls",
                       "CSRF protection",
                       "Security headers",
                       "File upload/download security"
                     ]
                   }
                 ]
               },
 
               {
                 "node_id": "3.3.4",
                 "type": "section",
                 "title": "4. Mobile Application Security Testing",
                 "children": [
                   {
                     "node_id": "3.3.4.1",
                     "type": "bullet_group",
                     "points": [
                       "Runtime analysis",
                       "Secure data storage",
                       "Transport layer security",
                       "WebView/WKWebView security",
                       "Deep linking testing"
                     ]
                   }
                 ]
               },
 
               {
                 "node_id": "3.3.5",
                 "type": "section",
                 "title": "5. Infrastructure Security Assessment",
                 "children": [
                   {
                     "node_id": "3.3.5.1",
                     "type": "bullet_group",
                     "points": [
                       "Server configuration review",
                       "Database security",
                       "Container/Kubernetes review",
                       "Network security controls",
                       "Monitoring and logging"
                     ]
                   }
                 ]
               },
 
               {
                 "node_id": "3.3.6",
                 "type": "section",
                 "title": "6. Remediation Services",
                 "children": [
                   {
                     "node_id": "3.3.6.1",
                     "type": "bullet_group",
                     "points": [
                       "Code-level fixes",
                       "Infrastructure hardening",
                       "TLS & security headers",
                       "Rate limiting",
                       "Monitoring setup",
                       "Deployment assistance"
                     ]
                   }
                 ]
               }
             ]
           },
 
           {
             "node_id": "3.4",
             "type": "section",
             "title": "Project Deliverables",
             "children": [
               {
                 "node_id": "3.4.1",
                 "type": "bullet_group",
                 "points": [
                   "All vulnerabilities remediated",
                   "Security patches deployed",
                   "Configuration changes applied",
                   "Pre & post remediation reports",
                   "Residual risk assessment",
                   "Security best practices guide"
                 ]
               }
             ]
           },
 
           {
             "node_id": "3.5",
             "type": "section",
             "title": "Commercial Details",
             "children": [
               {
                 "node_id": "3.5.1",
                 "type": "text",
                 "body": "Total Project Cost: ₹28,00,000 + GST"
               },
               {
                 "node_id": "3.5.2",
                 "type": "text",
                 "body": "Effort breakdown and rate chart included."
               }
             ]
           },
 
           {
             "node_id": "3.6",
             "type": "section",
             "title": "Included Services",
             "children": [
               {
                 "node_id": "3.6.1",
                 "type": "bullet_group",
                 "points": [
                   "Security assessment",
                   "Source code review",
                   "Infrastructure audit",
                   "Remediation",
                   "Deployment assistance",
                   "30-day support"
                 ]
               }
             ]
           },
 
           {
             "node_id": "3.7",
             "type": "section",
             "title": "Payment Terms",
             "children": [
               {
                 "node_id": "3.7.1",
                 "type": "bullet_group",
                 "points": [
                   "30% on initiation",
                   "40% post-assessment",
                   "30% post-remediation"
                 ]
               }
             ]
           },
 
           {
             "node_id": "3.8",
             "type": "section",
             "title": "Success Criteria",
             "children": [
               {
                 "node_id": "3.8.1",
                 "type": "bullet_group",
                 "points": [
                   "All vulnerabilities resolved",
                   "No unauthorized access",
                   "Rate limiting enforced",
                   "TLS 1.2+ enabled",
                   "Secure authentication",
                   "Infrastructure hardened"
                 ]
               }
             ]
           },
 
           {
             "node_id": "3.9",
             "type": "section",
             "title": "Client Prerequisites",
             "children": [
               {
                 "node_id": "3.9.1",
                 "type": "bullet_group",
                 "points": [
                   "UAT access",
                   "Test accounts",
                   "VPN/IP whitelisting",
                   "APK/IPA files",
                   "SSH access",
                   "Swagger docs",
                   "DB credentials"
                 ]
               }
             ]
           },
 
           {
             "node_id": "3.10",
             "type": "section",
             "title": "Out of Scope",
             "children": [
               {
                 "node_id": "3.10.1",
                 "type": "bullet_group",
                 "points": [
                   "Physical testing",
                   "Production DoS testing",
                   "Compliance certifications"
                 ]
               }
             ]
           },
 
           {
             "node_id": "3.11",
             "type": "section",
             "title": "Terms & Conditions",
             "children": [
               {
                 "node_id": "3.11.1",
                 "type": "bullet_group",
                 "points": [
                   "NDA adherence",
                   "30-day warranty",
                   "30-day support",
                   "All IP remains with client"
                 ]
               }
             ]
           },
 
           {
             "node_id": "3.12",
             "type": "section",
             "title": "Next Steps",
             "children": [
               {
                 "node_id": "3.12.1",
                 "type": "bullet_group",
                 "points": [
                   "Contract finalization",
                   "Kick-off meeting",
                   "Access provisioning",
                   "Project initiation"
                 ]
               }
             ]
           },
 
           {
             "node_id": "3.13",
             "type": "section",
             "title": "Conclusion",
             "children": [
               {
                 "node_id": "3.13.1",
                 "type": "text",
                 "body": "This engagement delivers a fully remediated, secure, and production-ready environment."
               }
             ]
           }
         ]
       }
     ]
   }
 ];
 