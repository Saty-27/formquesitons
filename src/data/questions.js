// inEdible — Website Discovery Questionnaire
// Prepared by MoreIdeaLabs

export const brandInfo = {
  clientBrand: "inEdible",
  agencyBrand: "MoreIdeaLabs",
  title: "inEdible — Website Discovery Questionnaire",
  subtitle: "Prepared by MoreIdeaLabs",
  instructions: [
    "There are 205 questions in 20 sections, followed by features we recommend and a checklist of materials to send. It usually takes 60–90 minutes, and you don't have to finish it in one sitting.",
    "Type your answer after each \"Answer:\". Short answers and bullet points are fine.",
    "If you don't know an answer yet, write \"Not sure\" or \"Let's discuss\". We'll cover it on our call.",
    "Where you see options, select the ones that apply or write your own.",
    "Text in italics gives examples or explains why we ask.",
    "Please do NOT write passwords, bank or card details here. We'll collect them securely.",
    "When finished, submit the form or send it back on email or WhatsApp. Share files, photos and videos through the upload section or a Google Drive folder."
  ]
};

export const coverFields = [
  { id: "client_name", label: "Filled by (name & role)", placeholder: "e.g. Jane Doe, Founder & CEO" },
  { id: "client_phone", label: "Phone / WhatsApp", placeholder: "e.g. +91 98765 43210" },
  { id: "client_email", label: "Email", placeholder: "e.g. hello@inedible.in" },
  { id: "client_date", label: "Date completed", placeholder: "e.g. 2026-09-25", type: "date" }
];

export const questionnaire = [
  {
    "id": "part-1-a",
    "letter": "A",
    "title": "Section A — Business & Brand Basics",
    "description": "Helps us understand who inEdible is as a business, so the website reflects it accurately.",
    "questions": [
      {
        "id": "q1",
        "num": 1,
        "section": "A",
        "text": "Q1. What is the exact brand name as it should appear on the website?",
        "rawText": "What is the exact brand name as it should appear on the website?",
        "hint": "e.g. inEdible, InEdible, inedible — including capital letters and any tagline like \"Handmade For You\".",
        "type": "textarea",
        "options": null
      },
      {
        "id": "q2",
        "num": 2,
        "section": "A",
        "text": "Q2. What is the registered business / legal entity name and business type?",
        "rawText": "What is the registered business / legal entity name and business type?",
        "hint": "Proprietorship / Partnership / LLP / Pvt Ltd. This appears in the footer, invoices and policies.",
        "type": "textarea",
        "options": null
      },
      {
        "id": "q3",
        "num": 3,
        "section": "A",
        "text": "Q3. Please share your GSTIN and registered business address for invoices and the footer.",
        "rawText": "Please share your GSTIN and registered business address for invoices and the footer.",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q4",
        "num": 4,
        "section": "A",
        "text": "Q4. In which year was inEdible started, and where is it based (city/state)?",
        "rawText": "In which year was inEdible started, and where is it based (city/state)?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q5",
        "num": 5,
        "section": "A",
        "text": "Q5. Describe inEdible in one sentence, as you would to a new customer.",
        "rawText": "Describe inEdible in one sentence, as you would to a new customer.",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q6",
        "num": 6,
        "section": "A",
        "text": "Q6. What are the top 3 things that make inEdible different from other handmade soap and skincare brands?",
        "rawText": "What are the top 3 things that make inEdible different from other handmade soap and skincare brands?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q7",
        "num": 7,
        "section": "A",
        "text": "Q7. Where do you currently sell?",
        "rawText": "Where do you currently sell?",
        "hint": null,
        "type": "checkbox",
        "options": [
          "Instagram",
          "WhatsApp",
          "Amazon",
          "Nykaa",
          "Flipkart",
          "Exhibitions/pop-ups",
          "Retail stores",
          "Existing website",
          "Other"
        ]
      },
      {
        "id": "q8",
        "num": 8,
        "section": "A",
        "text": "Q8. Roughly how many orders do you receive per month today, and how many do you aim for after launch?",
        "rawText": "Roughly how many orders do you receive per month today, and how many do you aim for after launch?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q9",
        "num": 9,
        "section": "A",
        "text": "Q9. What is the #1 goal of this website?",
        "rawText": "What is the #1 goal of this website?",
        "hint": null,
        "type": "checkbox",
        "options": [
          "Direct online sales",
          "Brand credibility",
          "Wholesale/bulk leads",
          "Gifting orders",
          "Build community",
          "Other"
        ]
      },
      {
        "id": "q10",
        "num": 10,
        "section": "A",
        "text": "Q10. What are your secondary goals for the website (rank in order of importance)?",
        "rawText": "What are your secondary goals for the website (rank in order of importance)?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q11",
        "num": 11,
        "section": "A",
        "text": "Q11. How will you measure success 6 months after launch?",
        "rawText": "How will you measure success 6 months after launch?",
        "hint": "e.g. monthly revenue, number of orders, repeat customers, Instagram-to-website conversions.",
        "type": "textarea",
        "options": null
      },
      {
        "id": "q12",
        "num": 12,
        "section": "A",
        "text": "Q12. Who in your team will be the main point of contact and final approver for this project?",
        "rawText": "Who in your team will be the main point of contact and final approver for this project?",
        "hint": "Name, role, phone/WhatsApp, email.",
        "type": "textarea",
        "options": null
      }
    ]
  },
  {
    "id": "part-1-b",
    "letter": "B",
    "title": "Section B — Founder & Brand Story",
    "description": "Handmade brands sell through their story. This powers the Our Story page and the \"More than just soap\" section.",
    "questions": [
      {
        "id": "q13",
        "num": 13,
        "section": "B",
        "text": "Q13. Who is the founder (or founders)? Please share a short bio and a photo we may use.",
        "rawText": "Who is the founder (or founders)? Please share a short bio and a photo we may use.",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q14",
        "num": 14,
        "section": "B",
        "text": "Q14. Why did you start inEdible? What moment or problem inspired it?",
        "rawText": "Why did you start inEdible? What moment or problem inspired it?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q15",
        "num": 15,
        "section": "B",
        "text": "Q15. Why the name \"inEdible\"? Is there a story or meaning behind it?",
        "rawText": "Why the name \"inEdible\"? Is there a story or meaning behind it?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q16",
        "num": 16,
        "section": "B",
        "text": "Q16. How is each product made? Describe your handmade process step by step.",
        "rawText": "How is each product made? Describe your handmade process step by step.",
        "hint": "This can become a \"How it's made\" section or video.",
        "type": "textarea",
        "options": null
      },
      {
        "id": "q17",
        "num": 17,
        "section": "B",
        "text": "Q17. Where are the products made (home studio, workshop, small factory)? Can we show it in photos or videos?",
        "rawText": "Where are the products made (home studio, workshop, small factory)? Can we show it in photos or videos?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q18",
        "num": 18,
        "section": "B",
        "text": "Q18. What values does the brand stand for?",
        "rawText": "What values does the brand stand for?",
        "hint": null,
        "type": "checkbox",
        "options": [
          "Handmade",
          "Cruelty-free",
          "Vegan",
          "Sustainable",
          "Women-led",
          "Local sourcing",
          "Plastic-free",
          "Other"
        ]
      },
      {
        "id": "q19",
        "num": 19,
        "section": "B",
        "text": "Q19. Do you have any milestones, awards, press mentions or famous customers we can highlight?",
        "rawText": "Do you have any milestones, awards, press mentions or famous customers we can highlight?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q20",
        "num": 20,
        "section": "B",
        "text": "Q20. What is the long-term vision for inEdible in the next 3–5 years?",
        "rawText": "What is the long-term vision for inEdible in the next 3–5 years?",
        "hint": null,
        "type": "textarea",
        "options": null
      }
    ]
  },
  {
    "id": "part-1-c",
    "letter": "C",
    "title": "Section C — Target Customers",
    "description": "Design, tone and features depend on exactly who is buying.",
    "questions": [
      {
        "id": "q21",
        "num": 21,
        "section": "C",
        "text": "Q21. Who is your ideal customer? Describe age, gender, city type and lifestyle.",
        "rawText": "Who is your ideal customer? Describe age, gender, city type and lifestyle.",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q22",
        "num": 22,
        "section": "C",
        "text": "Q22. Who buys most today: people buying for themselves or buying as gifts?",
        "rawText": "Who buys most today: people buying for themselves or buying as gifts?",
        "hint": "Approximate % split if known.",
        "type": "textarea",
        "options": null
      },
      {
        "id": "q23",
        "num": 23,
        "section": "C",
        "text": "Q23. Which cities or regions bring the most orders?",
        "rawText": "Which cities or regions bring the most orders?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q24",
        "num": 24,
        "section": "C",
        "text": "Q24. Do you want to sell outside India now or in future? If yes, which countries?",
        "rawText": "Do you want to sell outside India now or in future? If yes, which countries?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q25",
        "num": 25,
        "section": "C",
        "text": "Q25. What skin concerns or needs do your customers usually have?",
        "rawText": "What skin concerns or needs do your customers usually have?",
        "hint": "e.g. dry skin, sensitive skin, tan, dullness, fragrance lovers.",
        "type": "textarea",
        "options": null
      },
      {
        "id": "q26",
        "num": 26,
        "section": "C",
        "text": "Q26. What do customers most often ask you before buying (on DM/WhatsApp)?",
        "rawText": "What do customers most often ask you before buying (on DM/WhatsApp)?",
        "hint": "These become FAQs and product-page content.",
        "type": "textarea",
        "options": null
      },
      {
        "id": "q27",
        "num": 27,
        "section": "C",
        "text": "Q27. What are the top reasons customers love your products (from reviews or messages)?",
        "rawText": "What are the top reasons customers love your products (from reviews or messages)?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q28",
        "num": 28,
        "section": "C",
        "text": "Q28. What complaints or doubts have customers raised in the past?",
        "rawText": "What complaints or doubts have customers raised in the past?",
        "hint": "e.g. price, shelf life, delivery time, melting in summer.",
        "type": "textarea",
        "options": null
      },
      {
        "id": "q29",
        "num": 29,
        "section": "C",
        "text": "Q29. Is your customer mostly on mobile? Which apps do they use most?",
        "rawText": "Is your customer mostly on mobile? Which apps do they use most?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q30",
        "num": 30,
        "section": "C",
        "text": "Q30. Do you also serve businesses (corporate gifting, weddings, hotels, salons, resellers)?",
        "rawText": "Do you also serve businesses (corporate gifting, weddings, hotels, salons, resellers)?",
        "hint": null,
        "type": "textarea",
        "options": null
      }
    ]
  },
  {
    "id": "part-1-d",
    "letter": "D",
    "title": "Section D — Brand Identity & Visual Design",
    "description": "Tells our designers what the site should look and feel like. The demo design is attached for reference.",
    "questions": [
      {
        "id": "q31",
        "num": 31,
        "section": "D",
        "text": "Q31. Do you have a final logo? Please share it in vector format (AI, SVG, EPS or PDF) plus PNG.",
        "rawText": "Do you have a final logo? Please share it in vector format (AI, SVG, EPS or PDF) plus PNG.",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q32",
        "num": 32,
        "section": "D",
        "text": "Q32. Do you have brand guidelines (colours, fonts, logo rules)? If yes, please share.",
        "rawText": "Do you have brand guidelines (colours, fonts, logo rules)? If yes, please share.",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q33",
        "num": 33,
        "section": "D",
        "text": "Q33. What are your brand colours (HEX codes if known)? Are you happy with the pink/plum palette in the demo?",
        "rawText": "What are your brand colours (HEX codes if known)? Are you happy with the pink/plum palette in the demo?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q34",
        "num": 34,
        "section": "D",
        "text": "Q34. Do you have preferred fonts? Do you like the script \"Dessert\" style heading in the demo?",
        "rawText": "Do you have preferred fonts? Do you like the script \"Dessert\" style heading in the demo?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q35",
        "num": 35,
        "section": "D",
        "text": "Q35. Choose 3–5 words that describe how the website should feel.",
        "rawText": "Choose 3–5 words that describe how the website should feel.",
        "hint": null,
        "type": "checkbox",
        "options": [
          "Luxurious",
          "Playful",
          "Dreamy",
          "Minimal",
          "Girly",
          "Premium",
          "Natural",
          "Fun",
          "Elegant",
          "Other"
        ]
      },
      {
        "id": "q36",
        "num": 36,
        "section": "D",
        "text": "Q36. What do you LIKE in the demo design we shared? Please be specific (section names).",
        "rawText": "What do you LIKE in the demo design we shared? Please be specific (section names).",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q37",
        "num": 37,
        "section": "D",
        "text": "Q37. What do you NOT like or want changed in the demo design?",
        "rawText": "What do you NOT like or want changed in the demo design?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q38",
        "num": 38,
        "section": "D",
        "text": "Q38. Share 3 websites you love (any industry) and what you like about each.",
        "rawText": "Share 3 websites you love (any industry) and what you like about each.",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q39",
        "num": 39,
        "section": "D",
        "text": "Q39. Share 2–3 competitor websites and what you like or dislike about them.",
        "rawText": "Share 2–3 competitor websites and what you like or dislike about them.",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q40",
        "num": 40,
        "section": "D",
        "text": "Q40. Should the \"skincare that feels like dessert\" theme continue across the site (dessert names, whipped textures, sweet copy)?",
        "rawText": "Should the \"skincare that feels like dessert\" theme continue across the site (dessert names, whipped textures, sweet copy)?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q41",
        "num": 41,
        "section": "D",
        "text": "Q41. Do you want light mode only, or also a dark/night mode?",
        "rawText": "Do you want light mode only, or also a dark/night mode?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q42",
        "num": 42,
        "section": "D",
        "text": "Q42. Any colours, styles, images or words that must NEVER be used?",
        "rawText": "Any colours, styles, images or words that must NEVER be used?",
        "hint": null,
        "type": "textarea",
        "options": null
      }
    ]
  },
  {
    "id": "part-1-e",
    "letter": "E",
    "title": "Section E — Products & Catalogue",
    "description": "Defines how the shop, categories and filters are built.",
    "questions": [
      {
        "id": "q43",
        "num": 43,
        "section": "E",
        "text": "Q43. Please list all product categories. The demo shows Body Soaps, Body Butters, Body Scrubs, Shower Gels, Lip Care, Gift Sets, Fragrance, Accessories. Add, remove or rename as needed.",
        "rawText": "Please list all product categories. The demo shows Body Soaps, Body Butters, Body Scrubs, Shower Gels, Lip Care, Gift Sets, Fragrance, Accessories. Add, remove or rename as needed.",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q44",
        "num": 44,
        "section": "E",
        "text": "Q44. How many products (SKUs) will be live at launch? How many do you expect in 1 year?",
        "rawText": "How many products (SKUs) will be live at launch? How many do you expect in 1 year?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q45",
        "num": 45,
        "section": "E",
        "text": "Q45. Please share the full product list in an Excel sheet (name, category, price, size, variants, stock).",
        "rawText": "Please share the full product list in an Excel sheet (name, category, price, size, variants, stock).",
        "hint": "We can send you a ready template.",
        "type": "textarea",
        "options": null
      },
      {
        "id": "q46",
        "num": 46,
        "section": "E",
        "text": "Q46. Do products have variants? Which ones?",
        "rawText": "Do products have variants? Which ones?",
        "hint": null,
        "type": "checkbox",
        "options": [
          "Size (e.g. 100g/200g)",
          "Fragrance",
          "Colour",
          "Pack of 1/2/3",
          "Other"
        ]
      },
      {
        "id": "q47",
        "num": 47,
        "section": "E",
        "text": "Q47. Which products are your bestsellers and should be featured first?",
        "rawText": "Which products are your bestsellers and should be featured first?",
        "hint": "Demo shows Marshmallow, Berry nice, Peach please, Bubble Yum!, Gone bananas.",
        "type": "textarea",
        "options": null
      },
      {
        "id": "q48",
        "num": 48,
        "section": "E",
        "text": "Q48. Do you have collections or ranges (e.g. Fruit Collection, Festive Edition, Summer Range)?",
        "rawText": "Do you have collections or ranges (e.g. Fruit Collection, Festive Edition, Summer Range)?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q49",
        "num": 49,
        "section": "E",
        "text": "Q49. Do you launch limited-edition or seasonal products? How often?",
        "rawText": "Do you launch limited-edition or seasonal products? How often?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q50",
        "num": 50,
        "section": "E",
        "text": "Q50. Do you sell ready-made gift sets or combos? Should customers be able to build their own gift box?",
        "rawText": "Do you sell ready-made gift sets or combos? Should customers be able to build their own gift box?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q51",
        "num": 51,
        "section": "E",
        "text": "Q51. Do you offer customised or personalised products (names on labels, custom scents, wedding favours)?",
        "rawText": "Do you offer customised or personalised products (names on labels, custom scents, wedding favours)?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q52",
        "num": 52,
        "section": "E",
        "text": "Q52. Which filters should customers use to shop?",
        "rawText": "Which filters should customers use to shop?",
        "hint": null,
        "type": "checkbox",
        "options": [
          "Skin type",
          "Scent family (fruity, floral, sweet)",
          "Concern",
          "Price",
          "Category",
          "Vegan",
          "Bestseller",
          "New",
          "Other"
        ]
      },
      {
        "id": "q53",
        "num": 53,
        "section": "E",
        "text": "Q53. Do you have sample, mini or trial sizes?",
        "rawText": "Do you have sample, mini or trial sizes?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q54",
        "num": 54,
        "section": "E",
        "text": "Q54. How do you manage stock today (Excel, app, manual)? How often does it change?",
        "rawText": "How do you manage stock today (Excel, app, manual)? How often does it change?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q55",
        "num": 55,
        "section": "E",
        "text": "Q55. Should out-of-stock products be hidden, shown as \"Sold out\", or allow \"Notify me\"?",
        "rawText": "Should out-of-stock products be hidden, shown as \"Sold out\", or allow \"Notify me\"?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q56",
        "num": 56,
        "section": "E",
        "text": "Q56. Do you allow pre-orders or made-to-order items? What is the making time?",
        "rawText": "Do you allow pre-orders or made-to-order items? What is the making time?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q57",
        "num": 57,
        "section": "E",
        "text": "Q57. Do you plan to add new product categories in the next 12 months?",
        "rawText": "Do you plan to add new product categories in the next 12 months?",
        "hint": null,
        "type": "textarea",
        "options": null
      }
    ]
  },
  {
    "id": "part-1-f",
    "letter": "F",
    "title": "Section F — Product Page Content",
    "description": "The product page is where people decide to buy. We need the right details for every product.",
    "questions": [
      {
        "id": "q58",
        "num": 58,
        "section": "F",
        "text": "Q58. For each product, can you provide: name, short description, long description, size/weight and price?",
        "rawText": "For each product, can you provide: name, short description, long description, size/weight and price?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q59",
        "num": 59,
        "section": "F",
        "text": "Q59. Can you provide the full ingredient list (INCI names) for every product?",
        "rawText": "Can you provide the full ingredient list (INCI names) for every product?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q60",
        "num": 60,
        "section": "F",
        "text": "Q60. What are the key benefits of each product (3–5 points)?",
        "rawText": "What are the key benefits of each product (3–5 points)?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q61",
        "num": 61,
        "section": "F",
        "text": "Q61. What is the fragrance/scent profile of each product (top, heart and base notes, or a simple description)?",
        "rawText": "What is the fragrance/scent profile of each product (top, heart and base notes, or a simple description)?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q62",
        "num": 62,
        "section": "F",
        "text": "Q62. Which skin types is each product suitable for? Any skin types it is NOT for?",
        "rawText": "Which skin types is each product suitable for? Any skin types it is NOT for?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q63",
        "num": 63,
        "section": "F",
        "text": "Q63. How should each product be used? Please share usage steps.",
        "rawText": "How should each product be used? Please share usage steps.",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q64",
        "num": 64,
        "section": "F",
        "text": "Q64. What is the shelf life, and the best storage advice (e.g. keep away from water, heat)?",
        "rawText": "What is the shelf life, and the best storage advice (e.g. keep away from water, heat)?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q65",
        "num": 65,
        "section": "F",
        "text": "Q65. Do you want \"Made on / Batch date\" or freshness information shown on product pages?",
        "rawText": "Do you want \"Made on / Batch date\" or freshness information shown on product pages?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q66",
        "num": 66,
        "section": "F",
        "text": "Q66. Do you have product photos? How many per product (front, texture, in-use, lifestyle)?",
        "rawText": "Do you have product photos? How many per product (front, texture, in-use, lifestyle)?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q67",
        "num": 67,
        "section": "F",
        "text": "Q67. Do you have short product videos (texture swirl, lather, application) for product pages?",
        "rawText": "Do you have short product videos (texture swirl, lather, application) for product pages?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q68",
        "num": 68,
        "section": "F",
        "text": "Q68. Should product pages show \"Pairs well with\" / \"Complete the routine\" suggestions?",
        "rawText": "Should product pages show \"Pairs well with\" / \"Complete the routine\" suggestions?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q69",
        "num": 69,
        "section": "F",
        "text": "Q69. Any product-specific warnings or patch-test advice that must be displayed?",
        "rawText": "Any product-specific warnings or patch-test advice that must be displayed?",
        "hint": null,
        "type": "textarea",
        "options": null
      }
    ]
  },
  {
    "id": "part-1-g",
    "letter": "G",
    "title": "Section G — Ingredients, Claims & Compliance",
    "description": "Cosmetic websites must be accurate about claims. This protects the brand legally and builds trust.",
    "questions": [
      {
        "id": "q70",
        "num": 70,
        "section": "G",
        "text": "Q70. Which hero ingredients should be featured? The demo shows Shea Butter, Coconut Oil, Almond Oil, Aloe Vera and Honey. Confirm, add or remove.",
        "rawText": "Which hero ingredients should be featured? The demo shows Shea Butter, Coconut Oil, Almond Oil, Aloe Vera and Honey. Confirm, add or remove.",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q71",
        "num": 71,
        "section": "G",
        "text": "Q71. For each hero ingredient, what benefit should we mention?",
        "rawText": "For each hero ingredient, what benefit should we mention?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q72",
        "num": 72,
        "section": "G",
        "text": "Q72. Are all products truly vegan? Note: the demo lists Honey as an ingredient and also shows a \"Vegan Friendly\" badge. Please confirm which claim is correct.",
        "rawText": "Are all products truly vegan? Note: the demo lists Honey as an ingredient and also shows a \"Vegan Friendly\" badge. Please confirm which claim is correct.",
        "hint": "Honey is not vegan, so we need to adjust one of them.",
        "type": "textarea",
        "options": null
      },
      {
        "id": "q73",
        "num": 73,
        "section": "G",
        "text": "Q73. Can you confirm each badge used in the demo is accurate: Handmade, Cruelty Free, Paraben Free, Vegan Friendly?",
        "rawText": "Can you confirm each badge used in the demo is accurate: Handmade, Cruelty Free, Paraben Free, Vegan Friendly?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q74",
        "num": 74,
        "section": "G",
        "text": "Q74. Do you hold any certifications (e.g. cruelty-free certification, organic, ISO, GMP)? Please share copies.",
        "rawText": "Do you hold any certifications (e.g. cruelty-free certification, organic, ISO, GMP)? Please share copies.",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q75",
        "num": 75,
        "section": "G",
        "text": "Q75. Do you have a cosmetics manufacturing licence under India's Drugs & Cosmetics rules? Please share the licence number if it should appear on packaging/site.",
        "rawText": "Do you have a cosmetics manufacturing licence under India's Drugs & Cosmetics rules? Please share the licence number if it should appear on packaging/site.",
        "hint": "Please confirm requirements with your compliance advisor.",
        "type": "textarea",
        "options": null
      },
      {
        "id": "q76",
        "num": 76,
        "section": "G",
        "text": "Q76. Are products lab or dermatologically tested? Can we say \"dermatologist tested\"?",
        "rawText": "Are products lab or dermatologically tested? Can we say \"dermatologist tested\"?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q77",
        "num": 77,
        "section": "G",
        "text": "Q77. Which products contain SLS, sulphates, parabens, synthetic fragrance, colours or preservatives?",
        "rawText": "Which products contain SLS, sulphates, parabens, synthetic fragrance, colours or preservatives?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q78",
        "num": 78,
        "section": "G",
        "text": "Q78. Do any products contain common allergens (nuts such as almond, essential oils, etc.)?",
        "rawText": "Do any products contain common allergens (nuts such as almond, essential oils, etc.)?",
        "hint": "Needed for safety notes on product pages.",
        "type": "textarea",
        "options": null
      },
      {
        "id": "q79",
        "num": 79,
        "section": "G",
        "text": "Q79. Are any skin results claimed (brightening, tan removal, etc.)? Do you have proof or test data to support them?",
        "rawText": "Are any skin results claimed (brightening, tan removal, etc.)? Do you have proof or test data to support them?",
        "hint": "Unsupported claims can create legal risk.",
        "type": "textarea",
        "options": null
      },
      {
        "id": "q80",
        "num": 80,
        "section": "G",
        "text": "Q80. Should we build an \"Ingredient Glossary\" page explaining each ingredient in simple language?",
        "rawText": "Should we build an \"Ingredient Glossary\" page explaining each ingredient in simple language?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q81",
        "num": 81,
        "section": "G",
        "text": "Q81. Any sustainability details to share (packaging material, refills, recyclable jars, plastic-free shipping)?",
        "rawText": "Any sustainability details to share (packaging material, refills, recyclable jars, plastic-free shipping)?",
        "hint": null,
        "type": "textarea",
        "options": null
      }
    ]
  },
  {
    "id": "part-1-h",
    "letter": "H",
    "title": "Section H — Homepage — Section by Section",
    "description": "Confirms each section of the demo homepage and what should go in it.",
    "questions": [
      {
        "id": "q82",
        "num": 82,
        "section": "H",
        "text": "Q82. Announcement bar: which messages should rotate?",
        "rawText": "Announcement bar: which messages should rotate?",
        "hint": "Demo: \"Complimentary delivery\", \"Free express shipping on orders above ₹999\".",
        "type": "textarea",
        "options": null
      },
      {
        "id": "q83",
        "num": 83,
        "section": "H",
        "text": "Q83. Hero banner: keep \"Skincare that feels like Dessert\" as the main headline, or change it?",
        "rawText": "Hero banner: keep \"Skincare that feels like Dessert\" as the main headline, or change it?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q84",
        "num": 84,
        "section": "H",
        "text": "Q84. Hero banner: should it be one image, a slider of offers, or a video? Do you have the hero image/video?",
        "rawText": "Hero banner: should it be one image, a slider of offers, or a video? Do you have the hero image/video?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q85",
        "num": 85,
        "section": "H",
        "text": "Q85. Hero trust icons: keep Handmade / Cruelty Free / Paraben Free / Vegan Friendly, or change them?",
        "rawText": "Hero trust icons: keep Handmade / Cruelty Free / Paraben Free / Vegan Friendly, or change them?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q86",
        "num": 86,
        "section": "H",
        "text": "Q86. \"Shop by Category\": confirm the categories, images and order shown.",
        "rawText": "\"Shop by Category\": confirm the categories, images and order shown.",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q87",
        "num": 87,
        "section": "H",
        "text": "Q87. \"Watch & Wishlist\" (shoppable videos): do you want this section? Who will supply videos?",
        "rawText": "\"Watch & Wishlist\" (shoppable videos): do you want this section? Who will supply videos?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q88",
        "num": 88,
        "section": "H",
        "text": "Q88. \"Our Bestsellers\": should this be chosen manually or automatically from sales data?",
        "rawText": "\"Our Bestsellers\": should this be chosen manually or automatically from sales data?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q89",
        "num": 89,
        "section": "H",
        "text": "Q89. \"Our Story — More than just soap\": do you have a behind-the-scenes video? How long is it?",
        "rawText": "\"Our Story — More than just soap\": do you have a behind-the-scenes video? How long is it?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q90",
        "num": 90,
        "section": "H",
        "text": "Q90. \"Why You'll Love inEdible\": confirm the points (demo: Small Batches, Natural Ingredients, Irresistible Scents) or give new ones.",
        "rawText": "\"Why You'll Love inEdible\": confirm the points (demo: Small Batches, Natural Ingredients, Irresistible Scents) or give new ones.",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q91",
        "num": 91,
        "section": "H",
        "text": "Q91. \"Nature's goodness in every lather\" ingredients section: keep it on the homepage?",
        "rawText": "\"Nature's goodness in every lather\" ingredients section: keep it on the homepage?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q92",
        "num": 92,
        "section": "H",
        "text": "Q92. Should we add a customer reviews / testimonials section on the homepage?",
        "rawText": "Should we add a customer reviews / testimonials section on the homepage?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q93",
        "num": 93,
        "section": "H",
        "text": "Q93. Should we add an Instagram feed section?",
        "rawText": "Should we add an Instagram feed section?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q94",
        "num": 94,
        "section": "H",
        "text": "Q94. Should we add a \"New Arrivals\" or \"Limited Edition\" section?",
        "rawText": "Should we add a \"New Arrivals\" or \"Limited Edition\" section?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q95",
        "num": 95,
        "section": "H",
        "text": "Q95. Should we add a Gifting section (occasions: birthday, Diwali, wedding, corporate)?",
        "rawText": "Should we add a Gifting section (occasions: birthday, Diwali, wedding, corporate)?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q96",
        "num": 96,
        "section": "H",
        "text": "Q96. Should we add a newsletter / WhatsApp signup with a first-order discount?",
        "rawText": "Should we add a newsletter / WhatsApp signup with a first-order discount?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q97",
        "num": 97,
        "section": "H",
        "text": "Q97. What should the footer include beyond the demo (e.g. address, GSTIN, licence no., payment icons, app links)?",
        "rawText": "What should the footer include beyond the demo (e.g. address, GSTIN, licence no., payment icons, app links)?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q98",
        "num": 98,
        "section": "H",
        "text": "Q98. Is there any section in the demo you want removed completely?",
        "rawText": "Is there any section in the demo you want removed completely?",
        "hint": null,
        "type": "textarea",
        "options": null
      }
    ]
  },
  {
    "id": "part-1-i",
    "letter": "I",
    "title": "Section I — Videos, Influencers & User Content",
    "description": "The \"Watch & Wishlist\" section is built on real creator and customer videos.",
    "questions": [
      {
        "id": "q99",
        "num": 99,
        "section": "I",
        "text": "Q99. Do you work with influencers or creators? Can we use their videos on the website (with permission)?",
        "rawText": "Do you work with influencers or creators? Can we use their videos on the website (with permission)?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q100",
        "num": 100,
        "section": "I",
        "text": "Q100. Do you have written permission from creators to repost their content on your website?",
        "rawText": "Do you have written permission from creators to repost their content on your website?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q101",
        "num": 101,
        "section": "I",
        "text": "Q101. How many videos can you provide at launch, and how often will you add new ones?",
        "rawText": "How many videos can you provide at launch, and how often will you add new ones?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q102",
        "num": 102,
        "section": "I",
        "text": "Q102. Should each video link to the exact product shown, with an \"Add to Cart\" button (as in the demo)?",
        "rawText": "Should each video link to the exact product shown, with an \"Add to Cart\" button (as in the demo)?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q103",
        "num": 103,
        "section": "I",
        "text": "Q103. Should videos autoplay muted, or only play on tap?",
        "rawText": "Should videos autoplay muted, or only play on tap?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q104",
        "num": 104,
        "section": "I",
        "text": "Q104. Should customers be able to upload their own photos/videos with reviews?",
        "rawText": "Should customers be able to upload their own photos/videos with reviews?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q105",
        "num": 105,
        "section": "I",
        "text": "Q105. Should view counts (e.g. 12.4k) be shown on videos? These must be real numbers.",
        "rawText": "Should view counts (e.g. 12.4k) be shown on videos? These must be real numbers.",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q106",
        "num": 106,
        "section": "I",
        "text": "Q106. Do you want a dedicated \"Shop the Reels\" page with all videos?",
        "rawText": "Do you want a dedicated \"Shop the Reels\" page with all videos?",
        "hint": null,
        "type": "textarea",
        "options": null
      }
    ]
  },
  {
    "id": "part-1-j",
    "letter": "J",
    "title": "Section J — Pricing, Offers & Promotions",
    "description": "Defines discount logic, coupons and offer banners.",
    "questions": [
      {
        "id": "q107",
        "num": 107,
        "section": "J",
        "text": "Q107. What is your price range (lowest and highest product)? Are prices inclusive of GST?",
        "rawText": "What is your price range (lowest and highest product)? Are prices inclusive of GST?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q108",
        "num": 108,
        "section": "J",
        "text": "Q108. What is your free-shipping threshold? The demo shows ₹999. Please confirm.",
        "rawText": "What is your free-shipping threshold? The demo shows ₹999. Please confirm.",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q109",
        "num": 109,
        "section": "J",
        "text": "Q109. What types of offers do you run?",
        "rawText": "What types of offers do you run?",
        "hint": null,
        "type": "checkbox",
        "options": [
          "% off",
          "Flat ₹ off",
          "Buy 2 Get 1",
          "Combo price",
          "Free gift above ₹X",
          "First-order discount",
          "Festival sales",
          "Other"
        ]
      },
      {
        "id": "q110",
        "num": 110,
        "section": "J",
        "text": "Q110. Do you need coupon codes? Who will create them (you or us)?",
        "rawText": "Do you need coupon codes? Who will create them (you or us)?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q111",
        "num": 111,
        "section": "J",
        "text": "Q111. Should a free gift / free sample be added automatically above a certain cart value?",
        "rawText": "Should a free gift / free sample be added automatically above a certain cart value?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q112",
        "num": 112,
        "section": "J",
        "text": "Q112. Do you want a \"Spend ₹X more for free shipping\" progress bar in the cart?",
        "rawText": "Do you want a \"Spend ₹X more for free shipping\" progress bar in the cart?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q113",
        "num": 113,
        "section": "J",
        "text": "Q113. Which festivals or sale seasons matter most for you (Diwali, Raksha Bandhan, Valentine's, Christmas, etc.)?",
        "rawText": "Which festivals or sale seasons matter most for you (Diwali, Raksha Bandhan, Valentine's, Christmas, etc.)?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q114",
        "num": 114,
        "section": "J",
        "text": "Q114. Should sale prices show the original price crossed out (MRP vs selling price)?",
        "rawText": "Should sale prices show the original price crossed out (MRP vs selling price)?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q115",
        "num": 115,
        "section": "J",
        "text": "Q115. Do you want bulk / wholesale pricing for resellers or corporate orders?",
        "rawText": "Do you want bulk / wholesale pricing for resellers or corporate orders?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q116",
        "num": 116,
        "section": "J",
        "text": "Q116. Do you want gift cards or e-gift vouchers?",
        "rawText": "Do you want gift cards or e-gift vouchers?",
        "hint": null,
        "type": "textarea",
        "options": null
      }
    ]
  },
  {
    "id": "part-1-k",
    "letter": "K",
    "title": "Section K — Checkout, Payments & Orders",
    "description": "A smooth checkout is the difference between a visitor and a sale.",
    "questions": [
      {
        "id": "q117",
        "num": 117,
        "section": "K",
        "text": "Q117. Which payment gateway do you use or prefer?",
        "rawText": "Which payment gateway do you use or prefer?",
        "hint": null,
        "type": "checkbox",
        "options": [
          "Razorpay",
          "PhonePe",
          "Cashfree",
          "PayU",
          "Stripe (international)",
          "Not decided",
          "Other"
        ]
      },
      {
        "id": "q118",
        "num": 118,
        "section": "K",
        "text": "Q118. Which payment methods should be available?",
        "rawText": "Which payment methods should be available?",
        "hint": null,
        "type": "checkbox",
        "options": [
          "UPI",
          "Cards",
          "Net banking",
          "Wallets",
          "Pay Later/EMI",
          "Cash on Delivery",
          "Other"
        ]
      },
      {
        "id": "q119",
        "num": 119,
        "section": "K",
        "text": "Q119. Do you offer Cash on Delivery? Any COD charge or minimum/maximum order value for COD?",
        "rawText": "Do you offer Cash on Delivery? Any COD charge or minimum/maximum order value for COD?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q120",
        "num": 120,
        "section": "K",
        "text": "Q120. Should customers be able to check out as guests (without creating an account)?",
        "rawText": "Should customers be able to check out as guests (without creating an account)?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q121",
        "num": 121,
        "section": "K",
        "text": "Q121. Should checkout use phone number + OTP login?",
        "rawText": "Should checkout use phone number + OTP login?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q122",
        "num": 122,
        "section": "K",
        "text": "Q122. Do you want gift wrapping and a personalised gift message option at checkout? Any extra charge?",
        "rawText": "Do you want gift wrapping and a personalised gift message option at checkout? Any extra charge?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q123",
        "num": 123,
        "section": "K",
        "text": "Q123. Should customers be able to send an order directly to a different gift address?",
        "rawText": "Should customers be able to send an order directly to a different gift address?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q124",
        "num": 124,
        "section": "K",
        "text": "Q124. Is there a minimum order value?",
        "rawText": "Is there a minimum order value?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q125",
        "num": 125,
        "section": "K",
        "text": "Q125. What should the GST invoice include? Should customers be able to add their own GSTIN for business purchases?",
        "rawText": "What should the GST invoice include? Should customers be able to add their own GSTIN for business purchases?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q126",
        "num": 126,
        "section": "K",
        "text": "Q126. Who will process orders daily, and how should new orders be notified to you (email, WhatsApp, app)?",
        "rawText": "Who will process orders daily, and how should new orders be notified to you (email, WhatsApp, app)?",
        "hint": null,
        "type": "textarea",
        "options": null
      }
    ]
  },
  {
    "id": "part-1-l",
    "letter": "L",
    "title": "Section L — Shipping, Delivery & Returns",
    "description": "Soaps and butters are delicate. Delivery rules must be clear for customers.",
    "questions": [
      {
        "id": "q127",
        "num": 127,
        "section": "L",
        "text": "Q127. Which courier or shipping platform do you use?",
        "rawText": "Which courier or shipping platform do you use?",
        "hint": null,
        "type": "checkbox",
        "options": [
          "Shiprocket",
          "Delhivery",
          "Blue Dart",
          "India Post",
          "Local courier",
          "Not decided",
          "Other"
        ]
      },
      {
        "id": "q128",
        "num": 128,
        "section": "L",
        "text": "Q128. Do you ship pan-India? Any pin codes or regions you cannot serve?",
        "rawText": "Do you ship pan-India? Any pin codes or regions you cannot serve?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q129",
        "num": 129,
        "section": "L",
        "text": "Q129. What are the standard shipping charges below the free-shipping amount?",
        "rawText": "What are the standard shipping charges below the free-shipping amount?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q130",
        "num": 130,
        "section": "L",
        "text": "Q130. What is the average dispatch time and delivery time?",
        "rawText": "What is the average dispatch time and delivery time?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q131",
        "num": 131,
        "section": "L",
        "text": "Q131. Do you offer express or same-day delivery in any city?",
        "rawText": "Do you offer express or same-day delivery in any city?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q132",
        "num": 132,
        "section": "L",
        "text": "Q132. Should customers see a delivery date estimate by entering their pin code on the product page?",
        "rawText": "Should customers see a delivery date estimate by entering their pin code on the product page?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q133",
        "num": 133,
        "section": "L",
        "text": "Q133. How do you protect products in summer heat during shipping (packaging)? Should we mention it?",
        "rawText": "How do you protect products in summer heat during shipping (packaging)? Should we mention it?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q134",
        "num": 134,
        "section": "L",
        "text": "Q134. What is your return / replacement policy (damaged, leaked, wrong item)?",
        "rawText": "What is your return / replacement policy (damaged, leaked, wrong item)?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q135",
        "num": 135,
        "section": "L",
        "text": "Q135. How should customers raise a return or damage claim (photo upload, WhatsApp, email)?",
        "rawText": "How should customers raise a return or damage claim (photo upload, WhatsApp, email)?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q136",
        "num": 136,
        "section": "L",
        "text": "Q136. Should order tracking happen on the website, by WhatsApp/SMS, or both?",
        "rawText": "Should order tracking happen on the website, by WhatsApp/SMS, or both?",
        "hint": null,
        "type": "textarea",
        "options": null
      }
    ]
  },
  {
    "id": "part-1-m",
    "letter": "M",
    "title": "Section M — Customer Accounts, Reviews & Loyalty",
    "description": "Repeat customers are the most profitable. These features keep them coming back.",
    "questions": [
      {
        "id": "q137",
        "num": 137,
        "section": "M",
        "text": "Q137. Should customers be able to create accounts (order history, saved addresses, wishlist)?",
        "rawText": "Should customers be able to create accounts (order history, saved addresses, wishlist)?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q138",
        "num": 138,
        "section": "M",
        "text": "Q138. Do you have existing customer reviews we can import (from Instagram, Google, Amazon, etc.)?",
        "rawText": "Do you have existing customer reviews we can import (from Instagram, Google, Amazon, etc.)?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q139",
        "num": 139,
        "section": "M",
        "text": "Q139. Should reviews show star ratings, photos and \"verified buyer\" badges?",
        "rawText": "Should reviews show star ratings, photos and \"verified buyer\" badges?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q140",
        "num": 140,
        "section": "M",
        "text": "Q140. Should reviews be approved by you before appearing on the site?",
        "rawText": "Should reviews be approved by you before appearing on the site?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q141",
        "num": 141,
        "section": "M",
        "text": "Q141. Do you want a loyalty / reward points programme? How should points be earned and used?",
        "rawText": "Do you want a loyalty / reward points programme? How should points be earned and used?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q142",
        "num": 142,
        "section": "M",
        "text": "Q142. Do you want a referral programme (\"Give ₹100, get ₹100\")?",
        "rawText": "Do you want a referral programme (\"Give ₹100, get ₹100\")?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q143",
        "num": 143,
        "section": "M",
        "text": "Q143. Do you want a subscription or \"auto-refill every 30/60 days\" option for favourite products?",
        "rawText": "Do you want a subscription or \"auto-refill every 30/60 days\" option for favourite products?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q144",
        "num": 144,
        "section": "M",
        "text": "Q144. Should the wishlist work without login and sync after login?",
        "rawText": "Should the wishlist work without login and sync after login?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q145",
        "num": 145,
        "section": "M",
        "text": "Q145. Do you want birthday rewards or anniversary offers for customers?",
        "rawText": "Do you want birthday rewards or anniversary offers for customers?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q146",
        "num": 146,
        "section": "M",
        "text": "Q146. Do you have an existing customer list (emails/phone numbers) to import, with their consent?",
        "rawText": "Do you have an existing customer list (emails/phone numbers) to import, with their consent?",
        "hint": null,
        "type": "textarea",
        "options": null
      }
    ]
  },
  {
    "id": "part-1-n",
    "letter": "N",
    "title": "Section N — \"Sweetie\" AI Assistant & Customer Support",
    "description": "The demo includes \"Sweetie\", a chat assistant that helps customers find their scent. We need to define what she does.",
    "questions": [
      {
        "id": "q147",
        "num": 147,
        "section": "N",
        "text": "Q147. Do you want the \"Sweetie\" skincare stylist chat assistant on the website?",
        "rawText": "Do you want the \"Sweetie\" skincare stylist chat assistant on the website?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q148",
        "num": 148,
        "section": "N",
        "text": "Q148. What should Sweetie help with?",
        "rawText": "What should Sweetie help with?",
        "hint": null,
        "type": "checkbox",
        "options": [
          "Recommend a scent",
          "Suggest products by skin type",
          "Answer FAQs",
          "Order tracking",
          "Gift ideas",
          "Other"
        ]
      },
      {
        "id": "q149",
        "num": 149,
        "section": "N",
        "text": "Q149. What personality and tone should Sweetie have (sweet, playful, professional)? Should she use emojis?",
        "rawText": "What personality and tone should Sweetie have (sweet, playful, professional)? Should she use emojis?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q150",
        "num": 150,
        "section": "N",
        "text": "Q150. Which topics must Sweetie NEVER answer (e.g. medical advice, skin conditions)? She should point to a human instead.",
        "rawText": "Which topics must Sweetie NEVER answer (e.g. medical advice, skin conditions)? She should point to a human instead.",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q151",
        "num": 151,
        "section": "N",
        "text": "Q151. When Sweetie can't help, where should customers go: WhatsApp, phone or email?",
        "rawText": "When Sweetie can't help, where should customers go: WhatsApp, phone or email?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q152",
        "num": 152,
        "section": "N",
        "text": "Q152. What are your customer support hours and contact details (WhatsApp, phone, email)?",
        "rawText": "What are your customer support hours and contact details (WhatsApp, phone, email)?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q153",
        "num": 153,
        "section": "N",
        "text": "Q153. Would you like a short \"Find Your Scent\" quiz as well as, or instead of, a chat?",
        "rawText": "Would you like a short \"Find Your Scent\" quiz as well as, or instead of, a chat?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q154",
        "num": 154,
        "section": "N",
        "text": "Q154. Please share your top 15–20 frequently asked questions with answers.",
        "rawText": "Please share your top 15–20 frequently asked questions with answers.",
        "hint": null,
        "type": "textarea",
        "options": null
      }
    ]
  },
  {
    "id": "part-1-o",
    "letter": "O",
    "title": "Section O — Marketing, SEO & Social Media",
    "description": "A beautiful site needs visitors. This helps us set up tracking and search visibility from day one.",
    "questions": [
      {
        "id": "q155",
        "num": 155,
        "section": "O",
        "text": "Q155. Please share all your social media links (Instagram, Facebook, YouTube, Pinterest, WhatsApp channel, etc.).",
        "rawText": "Please share all your social media links (Instagram, Facebook, YouTube, Pinterest, WhatsApp channel, etc.).",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q156",
        "num": 156,
        "section": "O",
        "text": "Q156. How many Instagram followers do you have, and where do most of your current orders come from?",
        "rawText": "How many Instagram followers do you have, and where do most of your current orders come from?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q157",
        "num": 157,
        "section": "O",
        "text": "Q157. Do you run paid ads (Meta, Google)? Who manages them?",
        "rawText": "Do you run paid ads (Meta, Google)? Who manages them?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q158",
        "num": 158,
        "section": "O",
        "text": "Q158. Do you need Meta Pixel, Google Analytics 4, Google Tag Manager and Google Ads conversion tracking installed?",
        "rawText": "Do you need Meta Pixel, Google Analytics 4, Google Tag Manager and Google Ads conversion tracking installed?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q159",
        "num": 159,
        "section": "O",
        "text": "Q159. What keywords should people find you with on Google?",
        "rawText": "What keywords should people find you with on Google?",
        "hint": "e.g. \"whipped body soap India\", \"handmade soap gift set\".",
        "type": "textarea",
        "options": null
      },
      {
        "id": "q160",
        "num": 160,
        "section": "O",
        "text": "Q160. Do you have a Google Business Profile? Should we link it?",
        "rawText": "Do you have a Google Business Profile? Should we link it?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q161",
        "num": 161,
        "section": "O",
        "text": "Q161. Do you send emails or WhatsApp broadcasts to customers? Which tool do you use or prefer?",
        "rawText": "Do you send emails or WhatsApp broadcasts to customers? Which tool do you use or prefer?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q162",
        "num": 162,
        "section": "O",
        "text": "Q162. Do you want abandoned-cart reminders by email / WhatsApp?",
        "rawText": "Do you want abandoned-cart reminders by email / WhatsApp?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q163",
        "num": 163,
        "section": "O",
        "text": "Q163. Should we set up Instagram & Facebook Shop product catalogue sync?",
        "rawText": "Should we set up Instagram & Facebook Shop product catalogue sync?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q164",
        "num": 164,
        "section": "O",
        "text": "Q164. Do you want \"Back in stock\" and \"Price drop\" alerts?",
        "rawText": "Do you want \"Back in stock\" and \"Price drop\" alerts?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q165",
        "num": 165,
        "section": "O",
        "text": "Q165. Do you plan to sell on Amazon/Nykaa as well? Should the website link to them or stay separate?",
        "rawText": "Do you plan to sell on Amazon/Nykaa as well? Should the website link to them or stay separate?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q166",
        "num": 166,
        "section": "O",
        "text": "Q166. Do you want a pop-up for first-time visitors? What offer should it show?",
        "rawText": "Do you want a pop-up for first-time visitors? What offer should it show?",
        "hint": null,
        "type": "textarea",
        "options": null
      }
    ]
  },
  {
    "id": "part-1-p",
    "letter": "P",
    "title": "Section P — Content: Copy, Photos, Videos & Blog",
    "description": "Content is usually the biggest cause of website delays. Let's plan it now.",
    "questions": [
      {
        "id": "q167",
        "num": 167,
        "section": "P",
        "text": "Q167. Who will write the website text (product descriptions, About, FAQs)?",
        "rawText": "Who will write the website text (product descriptions, About, FAQs)?",
        "hint": null,
        "type": "checkbox",
        "options": [
          "You will provide",
          "MoreIdeaLabs to write",
          "Mix of both",
          "Other"
        ]
      },
      {
        "id": "q168",
        "num": 168,
        "section": "P",
        "text": "Q168. Do you have professional product photos? If not, do you need a product photoshoot?",
        "rawText": "Do you have professional product photos? If not, do you need a product photoshoot?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q169",
        "num": 169,
        "section": "P",
        "text": "Q169. Do you have lifestyle photos (models, hands, bathroom setting, gifting)?",
        "rawText": "Do you have lifestyle photos (models, hands, bathroom setting, gifting)?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q170",
        "num": 170,
        "section": "P",
        "text": "Q170. Are you comfortable using AI-generated or stock images for banners until real photos are ready?",
        "rawText": "Are you comfortable using AI-generated or stock images for banners until real photos are ready?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q171",
        "num": 171,
        "section": "P",
        "text": "Q171. Do you want a blog? Which topics (skincare tips, gifting guides, ingredient stories)?",
        "rawText": "Do you want a blog? Which topics (skincare tips, gifting guides, ingredient stories)?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q172",
        "num": 172,
        "section": "P",
        "text": "Q172. How often can you publish new blog posts or content?",
        "rawText": "How often can you publish new blog posts or content?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q173",
        "num": 173,
        "section": "P",
        "text": "Q173. Should the website be in English only, or also Hindi or other languages?",
        "rawText": "Should the website be in English only, or also Hindi or other languages?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q174",
        "num": 174,
        "section": "P",
        "text": "Q174. What tone of voice should the text use?",
        "rawText": "What tone of voice should the text use?",
        "hint": null,
        "type": "checkbox",
        "options": [
          "Sweet & playful",
          "Warm & caring",
          "Premium & elegant",
          "Simple & direct",
          "Other"
        ]
      }
    ]
  },
  {
    "id": "part-1-q",
    "letter": "Q",
    "title": "Section Q — Technical Setup, Domain & Integrations",
    "description": "Covers hosting, access and the tools the site must connect with.",
    "questions": [
      {
        "id": "q175",
        "num": 175,
        "section": "Q",
        "text": "Q175. Do you already own a domain name? Which one, and where is it registered (GoDaddy, Hostinger, etc.)?",
        "rawText": "Do you already own a domain name? Which one, and where is it registered (GoDaddy, Hostinger, etc.)?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q176",
        "num": 176,
        "section": "Q",
        "text": "Q176. Do you have an existing website? Should we move content, products, customers or orders from it?",
        "rawText": "Do you have an existing website? Should we move content, products, customers or orders from it?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q177",
        "num": 177,
        "section": "Q",
        "text": "Q177. Do you need professional email addresses (e.g. hello@inedible.in)?",
        "rawText": "Do you need professional email addresses (e.g. hello@inedible.in)?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q178",
        "num": 178,
        "section": "Q",
        "text": "Q178. Do you have a preferred platform (custom-built, Shopify, WooCommerce), or should we recommend one?",
        "rawText": "Do you have a preferred platform (custom-built, Shopify, WooCommerce), or should we recommend one?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q179",
        "num": 179,
        "section": "Q",
        "text": "Q179. Who will update products, prices and banners after launch, you or us?",
        "rawText": "Who will update products, prices and banners after launch, you or us?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q180",
        "num": 180,
        "section": "Q",
        "text": "Q180. How many team members need admin access, and with what permissions (orders only, products, full access)?",
        "rawText": "How many team members need admin access, and with what permissions (orders only, products, full access)?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q181",
        "num": 181,
        "section": "Q",
        "text": "Q181. Do you use any accounting / inventory software (Tally, Zoho, Vyapar) that should connect to the site?",
        "rawText": "Do you use any accounting / inventory software (Tally, Zoho, Vyapar) that should connect to the site?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q182",
        "num": 182,
        "section": "Q",
        "text": "Q182. Do you need WhatsApp Business API for order updates?",
        "rawText": "Do you need WhatsApp Business API for order updates?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q183",
        "num": 183,
        "section": "Q",
        "text": "Q183. Should SMS/WhatsApp OTP be used for login?",
        "rawText": "Should SMS/WhatsApp OTP be used for login?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q184",
        "num": 184,
        "section": "Q",
        "text": "Q184. Do you need a mobile app later, or is a mobile-friendly website enough for now?",
        "rawText": "Do you need a mobile app later, or is a mobile-friendly website enough for now?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q185",
        "num": 185,
        "section": "Q",
        "text": "Q185. Do you require a monthly maintenance, backup and security plan after launch?",
        "rawText": "Do you require a monthly maintenance, backup and security plan after launch?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q186",
        "num": 186,
        "section": "Q",
        "text": "Q186. Any accessibility needs (large text, screen reader support) we should prioritise?",
        "rawText": "Any accessibility needs (large text, screen reader support) we should prioritise?",
        "hint": null,
        "type": "textarea",
        "options": null
      }
    ]
  },
  {
    "id": "part-1-r",
    "letter": "R",
    "title": "Section R — Legal Pages & Policies",
    "description": "Payment gateways and customers require these pages before the site can go live.",
    "questions": [
      {
        "id": "q187",
        "num": 187,
        "section": "R",
        "text": "Q187. Do you already have Terms & Conditions, Privacy Policy, Shipping Policy and Refund/Return Policy? Please share.",
        "rawText": "Do you already have Terms & Conditions, Privacy Policy, Shipping Policy and Refund/Return Policy? Please share.",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q188",
        "num": 188,
        "section": "R",
        "text": "Q188. If not, should we prepare drafts for your legal review?",
        "rawText": "If not, should we prepare drafts for your legal review?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q189",
        "num": 189,
        "section": "R",
        "text": "Q189. What cancellation rules apply (before dispatch / after dispatch)?",
        "rawText": "What cancellation rules apply (before dispatch / after dispatch)?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q190",
        "num": 190,
        "section": "R",
        "text": "Q190. What contact details must appear for grievances (name, email, address)?",
        "rawText": "What contact details must appear for grievances (name, email, address)?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q191",
        "num": 191,
        "section": "R",
        "text": "Q191. Do you want a cookie consent banner?",
        "rawText": "Do you want a cookie consent banner?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q192",
        "num": 192,
        "section": "R",
        "text": "Q192. Are you comfortable with the product disclaimer \"Patch test before use. For external use only.\"? Any other disclaimers?",
        "rawText": "Are you comfortable with the product disclaimer \"Patch test before use. For external use only.\"? Any other disclaimers?",
        "hint": null,
        "type": "textarea",
        "options": null
      }
    ]
  },
  {
    "id": "part-1-s",
    "letter": "S",
    "title": "Section S — Timeline, Budget & Approvals",
    "description": "Helps us plan the project realistically.",
    "questions": [
      {
        "id": "q193",
        "num": 193,
        "section": "S",
        "text": "Q193. What is your ideal launch date? Is there a hard deadline (festival, exhibition, campaign)?",
        "rawText": "What is your ideal launch date? Is there a hard deadline (festival, exhibition, campaign)?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q194",
        "num": 194,
        "section": "S",
        "text": "Q194. What is your approved budget range for design and development?",
        "rawText": "What is your approved budget range for design and development?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q195",
        "num": 195,
        "section": "S",
        "text": "Q195. Is there separate budget for photography, video, content writing or ads?",
        "rawText": "Is there separate budget for photography, video, content writing or ads?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q196",
        "num": 196,
        "section": "S",
        "text": "Q196. How many rounds of design revisions do you expect?",
        "rawText": "How many rounds of design revisions do you expect?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q197",
        "num": 197,
        "section": "S",
        "text": "Q197. How quickly can you give feedback on designs (within 24h / 48h / a week)?",
        "rawText": "How quickly can you give feedback on designs (within 24h / 48h / a week)?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q198",
        "num": 198,
        "section": "S",
        "text": "Q198. Would you like to launch in phases (Phase 1: shop + checkout; Phase 2: loyalty, quiz, subscriptions)?",
        "rawText": "Would you like to launch in phases (Phase 1: shop + checkout; Phase 2: loyalty, quiz, subscriptions)?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q199",
        "num": 199,
        "section": "S",
        "text": "Q199. Who else must approve the design before we proceed?",
        "rawText": "Who else must approve the design before we proceed?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q200",
        "num": 200,
        "section": "S",
        "text": "Q200. What is your preferred communication method and meeting frequency?",
        "rawText": "What is your preferred communication method and meeting frequency?",
        "hint": null,
        "type": "checkbox",
        "options": [
          "WhatsApp",
          "Email",
          "Weekly call",
          "Google Meet",
          "Other"
        ]
      }
    ]
  },
  {
    "id": "part-1-t",
    "letter": "T",
    "title": "Section T — Future Plans",
    "description": "So we build a site that can grow with you instead of needing a rebuild.",
    "questions": [
      {
        "id": "q201",
        "num": 201,
        "section": "T",
        "text": "Q201. Do you plan to open physical stores, kiosks or pop-ups? Should the website show them?",
        "rawText": "Do you plan to open physical stores, kiosks or pop-ups? Should the website show them?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q202",
        "num": 202,
        "section": "T",
        "text": "Q202. Do you plan to sell wholesale or through resellers/franchise? Do you need a reseller login?",
        "rawText": "Do you plan to sell wholesale or through resellers/franchise? Do you need a reseller login?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q203",
        "num": 203,
        "section": "T",
        "text": "Q203. Do you plan workshops or DIY soap-making classes that people can book online?",
        "rawText": "Do you plan workshops or DIY soap-making classes that people can book online?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q204",
        "num": 204,
        "section": "T",
        "text": "Q204. Do you plan to launch new product lines (candles, face care, hair care, men's range)?",
        "rawText": "Do you plan to launch new product lines (candles, face care, hair care, men's range)?",
        "hint": null,
        "type": "textarea",
        "options": null
      },
      {
        "id": "q205",
        "num": 205,
        "section": "T",
        "text": "Q205. Anything else you want on the website that we haven't asked about?",
        "rawText": "Anything else you want on the website that we haven't asked about?",
        "hint": null,
        "type": "textarea",
        "options": null
      }
    ]
  }
];

export const recommendations = [
  {
    "id": "rec1",
    "num": 1,
    "title": "\"Find Your Scent\" quiz",
    "description": "3–5 fun questions (mood, favourite dessert, skin type) that end with a personalised product pick. Great for first-time visitors and Instagram traffic."
  },
  {
    "id": "rec2",
    "num": 2,
    "title": "Build-Your-Own Gift Box",
    "description": "Customers choose 3–5 products, a box design and a gift note. Increases order value and suits gifting season."
  },
  {
    "id": "rec3",
    "num": 3,
    "title": "Shoppable video reels",
    "description": "\"Watch & Wishlist\" videos linked to products with instant Add to Cart, as shown in the demo."
  },
  {
    "id": "rec4",
    "num": 4,
    "title": "Free-shipping progress bar",
    "description": "\"Add ₹180 more for FREE express shipping\" inside the cart. Proven to increase order value."
  },
  {
    "id": "rec5",
    "num": 5,
    "title": "Free gift / sample at checkout",
    "description": "Auto-adds a mini soap above a chosen cart value, so customers try new scents."
  },
  {
    "id": "rec6",
    "num": 6,
    "title": "Pin-code delivery estimate",
    "description": "The customer enters their pin code on the product page and sees \"Delivered by Thursday\"."
  },
  {
    "id": "rec7",
    "num": 7,
    "title": "WhatsApp order updates",
    "description": "Order confirmation, dispatch and delivery updates on WhatsApp, not only email."
  },
  {
    "id": "rec8",
    "num": 8,
    "title": "COD confirmation on WhatsApp",
    "description": "Auto-confirms Cash on Delivery orders by WhatsApp to reduce fake orders and returns."
  },
  {
    "id": "rec9",
    "num": 9,
    "title": "Abandoned-cart reminders",
    "description": "Gentle WhatsApp/email nudges with the product image when a cart is left behind."
  },
  {
    "id": "rec10",
    "num": 10,
    "title": "Reviews with photos",
    "description": "Star ratings, photo/video reviews and \"verified buyer\" badges on every product."
  },
  {
    "id": "rec11",
    "num": 11,
    "title": "Loyalty points (\"Sweet Points\")",
    "description": "Earn points on every order, review and birthday; redeem as a discount."
  },
  {
    "id": "rec12",
    "num": 12,
    "title": "Refer-a-friend rewards",
    "description": "Both friends get a discount, so every happy customer becomes a promoter."
  },
  {
    "id": "rec13",
    "num": 13,
    "title": "Subscribe & save / auto-refill",
    "description": "Customers get favourite soaps every 30/60 days at a small discount. Gives predictable monthly revenue."
  },
  {
    "id": "rec14",
    "num": 14,
    "title": "Back-in-stock & price-drop alerts",
    "description": "Customers can tap \"Notify me\" on sold-out or limited-edition products."
  },
  {
    "id": "rec15",
    "num": 15,
    "title": "Freshness / batch date display",
    "description": "Shows \"Freshly made on …\" on handmade products. Builds trust and suits the handmade story."
  },
  {
    "id": "rec16",
    "num": 16,
    "title": "Ingredient glossary",
    "description": "A simple page explaining every ingredient in plain language. Good for SEO and trust."
  },
  {
    "id": "rec17",
    "num": 17,
    "title": "Corporate & wedding gifting enquiry",
    "description": "A dedicated page and form for bulk orders, custom labels and wedding favours."
  },
  {
    "id": "rec18",
    "num": 18,
    "title": "Gift wrap & message",
    "description": "Paid or free gift wrapping plus a handwritten-style note option at checkout."
  },
  {
    "id": "rec19",
    "num": 19,
    "title": "\"Sweetie\" AI skincare stylist",
    "description": "Chat assistant for scent and product recommendations, FAQs and order tracking, handing over to WhatsApp when needed."
  },
  {
    "id": "rec20",
    "num": 20,
    "title": "Instagram & Facebook Shop sync",
    "description": "Products automatically synced to Instagram and Facebook shops."
  },
  {
    "id": "rec21",
    "num": 21,
    "title": "Festive theme switcher",
    "description": "A quick seasonal look for Diwali, Valentine's, Christmas and so on, without redesigning the site."
  },
  {
    "id": "rec22",
    "num": 22,
    "title": "Recently viewed & \"Complete the routine\"",
    "description": "Smart product suggestions that increase items per order."
  },
  {
    "id": "rec23",
    "num": 23,
    "title": "Blog & gifting guides",
    "description": "Articles like \"10 Diwali gifts under ₹999\" to bring free traffic from Google."
  },
  {
    "id": "rec24",
    "num": 24,
    "title": "Speed & SEO setup",
    "description": "Fast-loading images, meta titles, product schema and Google Search Console setup at launch."
  }
];

export const materialsChecklist = [
  {
    "id": "mat1",
    "num": 1,
    "text": "Logo files (vector AI/SVG/EPS/PDF + PNG, light and dark versions)"
  },
  {
    "id": "mat2",
    "num": 2,
    "text": "Brand guidelines: colours (HEX), fonts, any existing brand book"
  },
  {
    "id": "mat3",
    "num": 3,
    "text": "Complete product list in Excel (name, category, price, MRP, size, variants, stock, SKU)"
  },
  {
    "id": "mat4",
    "num": 4,
    "text": "Product photos: front, texture close-up, in-use, lifestyle (high resolution)"
  },
  {
    "id": "mat5",
    "num": 5,
    "text": "Product videos and creator/customer reels (with permission to use)"
  },
  {
    "id": "mat6",
    "num": 6,
    "text": "Full ingredient lists (INCI) and key benefits for every product"
  },
  {
    "id": "mat7",
    "num": 7,
    "text": "Certificates and licences (cruelty-free, manufacturing licence, test reports)"
  },
  {
    "id": "mat8",
    "num": 8,
    "text": "Founder photo, bio and brand story"
  },
  {
    "id": "mat9",
    "num": 9,
    "text": "Behind-the-scenes photos/video of the making process"
  },
  {
    "id": "mat10",
    "num": 10,
    "text": "Existing customer reviews and testimonials (screenshots are fine)"
  },
  {
    "id": "mat11",
    "num": 11,
    "text": "Policies: Terms, Privacy, Shipping, Returns/Refunds (if available)"
  },
  {
    "id": "mat12",
    "num": 12,
    "text": "Business details: legal name, GSTIN, registered address, support contact"
  },
  {
    "id": "mat13",
    "num": 13,
    "text": "Social media links and handles"
  },
  {
    "id": "mat14",
    "num": 14,
    "text": "Domain, hosting and existing website login details (share securely, not in this document)"
  },
  {
    "id": "mat15",
    "num": 15,
    "text": "Payment gateway and courier account details (share securely, not in this document)"
  },
  {
    "id": "mat16",
    "num": 16,
    "text": "Top 15–20 FAQs with answers"
  }
];

export const totalPart1Questions = 205;
