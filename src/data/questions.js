export const questionnaire = [
  {
    id: "part-1",
    title: "PART 01 — CURRENT WEBSITE & NEW WEBSITE DIRECTION",
    questions: [
      { id: "q1", type: "textarea", text: "Q1. What are the 3 most important things you think the new website should communicate about Rappid Valves?" },
      { id: "q2", type: "textarea", text: "Q2. What important information about Rappid Valves is currently missing from the website?" },
      { id: "q3", type: "textarea", text: "Q3. What information currently available on the website should be removed, changed or updated?" },
      { id: "q4", type: "textarea", text: "Q4. When someone visits the new website for the first time, what should they understand within the first 10 seconds?" },
      { id: "q5", type: "textarea", text: "Q5. What should make the new website different from the current Rappid Valves website?" }
    ]
  },
  {
    id: "part-2",
    title: "PART 02 — PURPOSE OF THE NEW WEBSITE",
    questions: [
      { id: "q6", type: "textarea", text: "Q6. What should be the primary purpose of the new website? Please rank the objectives (Generate product enquiries, Generate RFQs / quotations, Attract new industrial customers, Attract marine / shipbuilding customers, Generate international / export enquiries, Present the company to investors, Strengthen the Rappid brand, Showcase engineering capabilities, Showcase manufacturing capabilities, Showcase products, Generate distributor / partner enquiries, Provide technical information to existing customers)." },
      { id: "q7", type: "text", text: "Q7. If you could select only one primary objective for the new website, what would it be?" },
      { id: "q8", type: "checkbox", text: "Q8. What action should a visitor ideally take after visiting the website?", options: ["Request a quotation", "Submit a technical enquiry", "Call the company", "WhatsApp / contact sales", "Download catalogue", "Download technical documents", "Find a suitable product", "Contact an engineer", "Become a distributor / partner", "Other"] }
    ]
  },
  {
    id: "part-3",
    title: "PART 03 — TARGET AUDIENCE",
    questions: [
      { id: "q9", type: "textarea", text: "Q9. Who are the most important audiences for the new website? Please rank them (Plant / Factory Engineers, Marine Engineers, Chief Engineers, Shipyards, Ship Owners, Procurement Teams, EPC Companies, OEMs, Project Managers, Consultants, International Buyers, Distributors, Government / Defence, Investors, Existing Customers, Other)." },
      { id: "q10", type: "text", text: "Q10. Who is the No. 1 audience the website should target?" },
      { id: "q11", type: "text", text: "Q11. Who is the No. 2 audience?" },
      { id: "q12", type: "text", text: "Q12. Who is the No. 3 audience?" }
    ]
  },
  {
    id: "part-4",
    title: "PART 04 — CUSTOMER JOURNEY",
    questions: [
      { id: "q13", type: "checkbox", text: "Q13. What should a customer be able to find quickly on the website?", options: ["Product information", "Product specifications", "Applications", "Technical drawings", "Datasheets", "Certifications", "Manufacturing capabilities", "Testing capabilities", "Case studies", "Catalogue", "Contact information", "Request quotation", "Other"] },
      { id: "q14", type: "textarea", text: "Q14. What information does a customer normally ask your sales/engineering team before purchasing a valve?" },
      { id: "q15", type: "textarea", text: "Q15. What are the most common questions customers ask about your products?" }
    ]
  },
  {
    id: "part-5",
    title: "PART 05 — PRODUCTS",
    questions: [
      { id: "q16", type: "textarea", text: "Q16. Please provide the complete current product portfolio that should be included on the new website." },
      { id: "q17", type: "textarea", text: "Q17. Which products are your most important products commercially?" },
      { id: "q18", type: "textarea", text: "Q18. Which products do you want to promote more aggressively through the new website?" },
      { id: "q19", type: "textarea", text: "Q19. Which products generate the highest revenue?" },
      { id: "q20", type: "textarea", text: "Q20. Which products have the highest growth potential?" },
      { id: "q21", type: "textarea", text: "Q21. Are there products currently shown on the website that should be removed?" },
      { id: "q22", type: "textarea", text: "Q22. Are there products Rappid manufactures that are currently missing from the website?" }
    ]
  },
  {
    id: "part-6",
    title: "PART 06 — PRODUCT INFORMATION",
    questions: [
      { id: "q_p6", type: "textarea", text: "For each major product, please provide: Product Name, Product Type, Application, Size Range, Pressure Rating, Temperature Range, Material, End Connection, Operation, Applicable Standards, Certifications/Approvals, Datasheet/GA Drawing/3D Model Availability." }
    ]
  },
  {
    id: "part-7",
    title: "PART 07 — INDUSTRIES",
    questions: [
      { id: "q23", type: "textarea", text: "Q23. Which industries are currently the most important to Rappid? (Please rank)" },
      { id: "q24", type: "textarea", text: "Q24. Which industries should the new website specifically target?" },
      { id: "q25", type: "textarea", text: "Q25. Are there industries currently shown on the website that should no longer be highlighted?" },
      { id: "q26", type: "textarea", text: "Q26. Are there industries Rappid currently serves that are missing from the current website?" },
      { id: "q27", type: "textarea", text: "Q27. Which industries do you expect to grow the most over the next 3–5 years?" }
    ]
  },
  {
    id: "part-8",
    title: "PART 08 — MARINE BUSINESS",
    questions: [
      { id: "q28", type: "radio", text: "Q28. How important is the Marine business to Rappid's future?", options: ["Core business", "Major growth area", "One of several major industries", "Secondary business", "Other"] },
      { id: "q29", type: "checkbox", text: "Q29. What type of marine customers does Rappid want to attract?", options: ["Shipyards", "Ship owners", "Ship management companies", "Marine consultants", "Marine EPC companies", "Offshore companies", "Naval / Defence", "Marine distributors", "Other"] },
      { id: "q30", type: "textarea", text: "Q30. Which marine valve products should receive the most visibility on the new website?" },
      { id: "q31", type: "textarea", text: "Q31. What makes Rappid's marine valve offering different or valuable to marine customers?" }
    ]
  },
  {
    id: "part-9",
    title: "PART 09 — ENGINEERING & CUSTOMIZATION",
    questions: [
      { id: "q32", type: "radio", text: "Q32. Does Rappid design and engineer its own valve solutions?", options: ["Yes", "No", "Both"] },
      { id: "q33", type: "radio", text: "Q33. Can Rappid manufacture valves according to customer drawings/specifications?", options: ["Yes", "No"] },
      { id: "q34", type: "radio", text: "Q34. Can Rappid develop a valve based on a customer's application requirement?", options: ["Yes", "No"] },
      { id: "q35", type: "textarea", text: "Q35. What types of custom engineering does Rappid provide?" },
      { id: "q36", type: "textarea", text: "Q36. What are the most common customization requirements from customers?" },
      { id: "q37", type: "textarea", text: "Q37. What engineering capabilities should be highlighted on the website?" },
      { id: "q38", type: "textarea", text: "Q38. Which engineering software/tools are currently used?" },
      { id: "q39", type: "text", text: "Q39. How large is the engineering / R&D team?" }
    ]
  },
  {
    id: "part-10",
    title: "PART 10 — FROM REQUIREMENT TO FINAL PRODUCT",
    questions: [
      { id: "q40", type: "textarea", text: "Q40. What is the actual process when a customer sends a new valve requirement? (Describe the stages)" },
      { id: "q41", type: "checkbox", text: "Q41. Which of these stages are performed in-house?", options: ["Requirement analysis", "Engineering design", "CAD design", "Simulation / analysis", "Material selection", "Prototype development", "Manufacturing", "CNC machining", "Assembly", "Inspection", "Testing", "Certification", "Painting / finishing", "Marking", "Packaging", "Dispatch"] },
      { id: "q42", type: "textarea", text: "Q42. Which stages are outsourced?" }
    ]
  },
  {
    id: "part-11",
    title: "PART 11 — MANUFACTURING & FACILITIES",
    questions: [
      { id: "q43", type: "textarea", text: "Q43. Please provide the latest manufacturing information: Factory Location, Area, Capacity, Employees, Machines, CNC Machines, Max Size, Max Pressure, Materials." },
      { id: "q44", type: "textarea", text: "Q44. What manufacturing capabilities should be prominently displayed on the new website?" },
      { id: "q45", type: "textarea", text: "Q45. What machines / equipment should be shown?" },
      { id: "q46", type: "textarea", text: "Q46. Are there any planned manufacturing expansions? (If yes, describe)" }
    ]
  },
  {
    id: "part-12",
    title: "PART 12 — QUALITY & TESTING",
    questions: [
      { id: "q47", type: "checkbox", text: "Q47. What testing facilities does Rappid currently have?", options: ["Hydrostatic Testing", "Pneumatic Testing", "Vacuum Testing", "Cycle Testing", "PMI", "Radiography / RT", "PT", "MPT", "Other"] },
      { id: "q48", type: "textarea", text: "Q48. Which testing is performed internally?" },
      { id: "q49", type: "textarea", text: "Q49. Which testing is performed through third-party agencies?" },
      { id: "q50", type: "textarea", text: "Q50. What quality-control processes should be highlighted on the website?" }
    ]
  },
  {
    id: "part-13",
    title: "PART 13 — CERTIFICATIONS & APPROVALS",
    questions: [
      { id: "q51", type: "textarea", text: "Q51. Please provide the complete list of currently valid certifications and approvals (Number, Scope, Products, Issuer)." },
      { id: "q52", type: "textarea", text: "Q52. Which certifications are commercially most important?" },
      { id: "q53", type: "textarea", text: "Q53. Which certifications should appear prominently on the homepage?" },
      { id: "q54", type: "textarea", text: "Q54. Are any certifications currently shown on the existing website outdated, expired or no longer applicable?" }
    ]
  },
  {
    id: "part-14",
    title: "PART 14 — VISUAL ASSETS & CONTENT",
    questions: [
      { id: "q55", type: "checkbox", text: "Q55. What existing visual assets do you have?", options: ["Factory photographs", "Product photographs", "Machine photographs", "Engineering photographs", "Employee photographs", "Testing photographs", "Assembly photographs", "Manufacturing photographs", "Product videos", "Factory videos", "Corporate videos", "Drone footage", "CAD models", "3D models", "Product drawings", "GA drawings", "Technical drawings", "Product datasheets", "Product catalogues", "Certificates", "Customer project photographs", "Project videos", "Other"] },
      { id: "q56", type: "textarea", text: "Q56. Which existing visual assets should definitely be reused?" },
      { id: "q57", type: "textarea", text: "Q57. What new visual content do you think is required for the new website?" }
    ]
  },
  {
    id: "part-15",
    title: "PART 15 — 3D / DIGITAL PRODUCT PRESENTATION",
    questions: [
      { id: "q58", type: "textarea", text: "Q58. Which products should have 3D models on the website?" },
      { id: "q59", type: "checkbox", text: "Q59. What should the 3D model demonstrate?", options: ["External product view", "Internal components", "Exploded view", "Cross-section", "Open / close operation", "Flow path", "Component-level view", "Actuator operation", "Installation", "Other"] },
      { id: "q60", type: "checkbox", text: "Q60. Do you already have 3D/CAD files that can be provided?", options: ["SolidWorks", "STEP", "IGES", "AutoCAD", "Other"] }
    ]
  },
  {
    id: "part-16",
    title: "PART 16 — SERVICES & AFTER-SALES",
    questions: [
      { id: "q61", type: "checkbox", text: "Q61. What services does Rappid provide after product delivery?", options: ["Spare Parts", "Replacement Valves", "Maintenance", "Repair", "Technical Support", "Installation Support", "Inspection", "Servicing", "Other"] },
      { id: "q62", type: "radio", text: "Q62. How important is the aftermarket/spares business to Rappid's future?", options: ["Very important", "Important", "Secondary", "Not a focus"] },
      { id: "q63", type: "textarea", text: "Q63. What should customers understand about Rappid's after-sales support?" }
    ]
  },
  {
    id: "part-17",
    title: "PART 17 — CLIENTS & PROJECTS",
    questions: [
      { id: "q64", type: "textarea", text: "Q64. Please provide the current list of clients whose logos can be publicly displayed." },
      { id: "q65", type: "textarea", text: "Q65. Which clients are strategically important to the business?" },
      { id: "q66", type: "radio", text: "Q66. Can Rappid publicly display customer logos?", options: ["Yes", "No", "Approval required"] },
      { id: "q67", type: "textarea", text: "Q67. Are there projects that can be presented as case studies? (If yes, provide details: Industry, Customer, Requirement, Challenge, Solution, Result)" }
    ]
  },
  {
    id: "part-18",
    title: "PART 18 — EXPORT & GLOBAL BUSINESS",
    questions: [
      { id: "q68", type: "textarea", text: "Q68. Which countries does Rappid currently export to?" },
      { id: "q69", type: "textarea", text: "Q69. Which countries are strategic target markets?" },
      { id: "q70", type: "text", text: "Q70. What percentage of business currently comes from exports? (%)" },
      { id: "q71", type: "radio", text: "Q71. Does Rappid have international distributors / partners?", options: ["Yes", "No"] },
      { id: "q72", type: "radio", text: "Q72. Should the new website actively generate international enquiries?", options: ["Yes", "No"] }
    ]
  },
  {
    id: "part-19",
    title: "PART 19 — BRAND POSITIONING",
    questions: [
      { id: "q73", type: "textarea", text: "Q73. Complete the following: Rappid Valves is a company that:" },
      { id: "q74", type: "textarea", text: "Q74. Customers choose Rappid because:" },
      { id: "q75", type: "textarea", text: "Q75. Rappid's biggest strength is:" },
      { id: "q76", type: "textarea", text: "Q76. Rappid's biggest competitive advantage is:" },
      { id: "q77", type: "textarea", text: "Q77. What do you want Rappid to be known for in the market?" },
      { id: "q78", type: "checkbox", text: "Q78. Where do you want the Rappid brand to be positioned?", options: ["Heavy Industrial", "Premium Engineering", "Advanced Technology", "Marine / Maritime", "Corporate", "Minimal", "Technical / CAD", "Manufacturing-focused", "Engineering-focused", "Technology-focused", "Global Industrial Brand", "Combination", "Other"] }
    ]
  },
  {
    id: "part-20",
    title: "PART 20 — COMPETITORS & MARKET POSITION",
    questions: [
      { id: "q79", type: "textarea", text: "Q79. Who are Rappid's main competitors?" },
      { id: "q80", type: "textarea", text: "Q80. What does Rappid do better than its competitors?" },
      { id: "q81", type: "textarea", text: "Q81. Please share competitor websites that you consider relevant for this project." }
    ]
  },
  {
    id: "part-21",
    title: "PART 21 — WEBSITE DESIGN DIRECTION",
    questions: [
      { id: "q82", type: "checkbox", text: "Q82. What visual style do you want the new website to have?", options: ["Heavy Industrial", "Premium Engineering", "Advanced Technology", "Marine / Maritime", "Corporate", "Minimal", "Technical / CAD", "Manufacturing-focused", "High-tech", "Premium", "International", "Clean & Professional", "Other"] },
      { id: "q83", type: "textarea", text: "Q83. Are there any websites whose design direction you particularly like?" },
      { id: "q84", type: "textarea", text: "Q84. What do you like about those websites?" },
      { id: "q85", type: "textarea", text: "Q85. What should the new Rappid website not look like?" }
    ]
  },
  {
    id: "part-22",
    title: "PART 22 — HOMEPAGE",
    questions: [
      { id: "q86", type: "textarea", text: "Q86. What are the 5 things that absolutely must appear on the homepage?" },
      { id: "q87", type: "textarea", text: "Q87. Which products must appear on the homepage?" },
      { id: "q88", type: "textarea", text: "Q88. Which industries must appear on the homepage?" },
      { id: "q89", type: "textarea", text: "Q89. Which certifications / approvals must appear on the homepage?" },
      { id: "q90", type: "textarea", text: "Q90. Which company achievements should appear on the homepage?" },
      { id: "q91", type: "textarea", text: "Q91. Which manufacturing / engineering capabilities should appear on the homepage?" },
      { id: "q92", type: "textarea", text: "Q92. Should the homepage include company growth / business information? (If yes, what information?)" }
    ]
  },
  {
    id: "part-23",
    title: "PART 23 — COMPANY & MANAGEMENT",
    questions: [
      { id: "q93", type: "checkbox", text: "Q93. What company information should be included?", options: ["Company history", "Vision", "Mission", "Values", "Leadership", "Manufacturing", "Engineering", "Quality", "Certifications", "Facilities", "Milestones", "Other"] },
      { id: "q94", type: "checkbox", text: "Q94. Who should be featured on the website?", options: ["Promoter", "Managing Director", "CEO", "Directors", "Engineering Leadership", "Plant Leadership", "Sales Leadership", "Management Team", "Employees / Team", "Yourself", "Other"] },
      { id: "q95", type: "textarea", text: "Q95. What message should the management communicate to customers?" },
      { id: "q96", type: "textarea", text: "Q96. What message should the management communicate to investors?" }
    ]
  },
  {
    id: "part-24",
    title: "PART 24 — COMPANY VISION & FUTURE",
    questions: [
      { id: "q97", type: "textarea", text: "Q97. What is Rappid's current vision?" },
      { id: "q98", type: "textarea", text: "Q98. What is Rappid's current mission?" },
      { id: "q99", type: "textarea", text: "Q99. What are the company's major goals for the next 3–5 years?" },
      { id: "q100", type: "textarea", text: "Q100. What are Rappid's biggest growth opportunities?" },
      { id: "q101", type: "checkbox", text: "Q101. What areas is Rappid planning to invest in?", options: ["Manufacturing capacity", "Machinery", "Engineering / R&D", "New products", "Marine business", "Export markets", "New geographic markets", "Automation", "Technology", "Aftermarket / Spares", "New facilities", "Human resources", "Other"] }
    ]
  },
  {
    id: "part-25",
    title: "PART 25 — INVESTOR INFORMATION",
    questions: [
      { id: "q102", type: "radio", text: "Q102. Is attracting investors / presenting Rappid to investors an important objective of the new website?", options: ["Yes", "No", "Secondary"] },
      { id: "q103", type: "checkbox", text: "Q103. What should an investor understand about Rappid after visiting the website?", options: ["Manufacturing scale", "Revenue", "Revenue growth", "EBITDA", "PAT", "Production capacity", "Capacity utilization", "Customer base", "Export business", "Product portfolio", "Industry diversification", "Marine opportunity", "Technology", "Certifications", "Management", "Future expansion", "Growth strategy", "Order book", "Other"] },
      { id: "q104", type: "checkbox", text: "Q104. Which financial/business metrics can be publicly displayed?", options: ["Revenue", "EBITDA", "PAT", "Revenue Growth", "Export %", "Domestic %", "Production Capacity", "Capacity Utilization", "Order Book", "Number of Customers", "Number of Countries", "Employee Count", "Manufacturing Area", "Product Categories", "Other"] },
      { id: "q105", type: "textarea", text: "Q105. What are the 3 most important things an investor should remember about Rappid?" },
      { id: "q106", type: "textarea", text: "Q106. What are the company's major long-term growth opportunities?" }
    ]
  },
  {
    id: "part-26",
    title: "PART 26 — WEBSITE PAGES",
    questions: [
      { id: "q107", type: "textarea", text: "Q107. Which pages should be included in the new website? (Home, About, Products, Industries, Marine, etc.)" },
      { id: "q108", type: "textarea", text: "Q108. Are there any other pages or sections that should be included?" }
    ]
  },
  {
    id: "part-27",
    title: "PART 27 — CONTENT & DOCUMENTS",
    questions: [
      { id: "q109", type: "checkbox", text: "Q109. What documents can Rappid provide for the new website?", options: ["Company Profile", "Product Catalogue", "Product Datasheets", "GA Drawings", "Technical Drawings", "Certifications", "Test Reports", "Approvals", "Annual Reports", "Financial Reports", "Corporate Documents", "Brochures", "Case Studies", "Other"] },
      { id: "q110", type: "textarea", text: "Q110. Who will provide and approve website content from Rappid? (Name, Designation, Email)" }
    ]
  },
  {
    id: "part-28",
    title: "PART 28 — FINAL PRIORITIES",
    questions: [
      { id: "q111", type: "textarea", text: "Q111. What are the top 5 priorities for the new website?" },
      { id: "q112", type: "textarea", text: "Q112. What are the top 5 things you want to change from the current website?" },
      { id: "q113", type: "textarea", text: "Q113. What is the single most important message the new website should communicate about Rappid Valves?" },
      { id: "q114", type: "textarea", text: "Q114. Is there anything important about Rappid Valves that we have not covered in this questionnaire?" }
    ]
  }
];
