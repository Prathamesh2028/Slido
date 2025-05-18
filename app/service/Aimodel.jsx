import { GoogleGenerativeAI } from "@google/generative-ai";

  const apiKey = 'AIzaSyBhWamgq9q-JSIypJhr1uVBwr6X_jjtnKc'
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
export  const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Create a travel plan for a friends trip to Paris with a medium budget. Include a list of hotel options with name, address, price, description,imageurl and rating. Also, provide a 3-day itinerary with daily activities for morning, afternoon, and evening, including a mix of paid and free options, along with estimated costs. Ensure the plan suits friends trip and offers a balance of iconic landmarks, local culture, and leisure activities.Give output in json"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"tripty\": \"Parisian Friends Getaway\",\n  \"budget\": \"Medium\",\n  \"duration\": \"3 Days\",\n  \"travelers\": \"Friends\",\n  \"hotels\": [\n    {\n      \"name\": \"Hotel Saint-André des Arts\",\n      \"address\": \"38 Rue St André des Arts, 75006 Paris, France\",\n      \"price\": \"$$$ (approx. $150-$250/night)\",\n      \"description\": \"Charming hotel in the Latin Quarter, close to museums and attractions. Offers comfortable rooms and a central location.\",\n      \"imageUrl\": \"https://example.com/hotel1.jpg\",  //Replace with actual image URL\n      \"rating\": 4.5\n    },\n    {\n      \"name\": \"HotelF1 Paris Porte de Châtillon\",\n      \"address\": \"12 Rue du Docteur Calmette, 92320 Châtillon, France\",\n      \"price\": \"$$ (approx. $80-$120/night)\",\n      \"description\": \"Budget-friendly hotel outside the city center, good for those on a tighter budget. Requires using public transport to reach attractions.\",\n      \"imageUrl\": \"https://example.com/hotel2.jpg\", //Replace with actual image URL\n      \"rating\": 3.8\n    },\n    {\n      \"name\": \"Hotel du Petit Moulin\",\n      \"address\": \"1 Rue des Fontaines du Temple, 75003 Paris, France\",\n      \"price\": \"$$$$ (approx. $250+/night)\",\n      \"description\": \"Boutique hotel designed by Karl Lagerfeld, luxurious option in Le Marais district. Stylish and centrally located.\",\n      \"imageUrl\": \"https://example.com/hotel3.jpg\", //Replace with actual image URL\n      \"rating\": 4.8\n    }\n  ],\n  \"itinerary\": {\n    \"day1\": {\n      \"morning\": {\n        \"activity\": \"Visit the Eiffel Tower\",\n        \"type\": \"Paid\",\n        \"cost\": \"$30 (approx.)\",\n        \"description\": \"Pre-book tickets to avoid long queues. Enjoy breathtaking views of Paris.\"\n      },\n      \"afternoon\": {\n        \"activity\": \"Picnic lunch at Champ de Mars\",\n        \"type\": \"Free\",\n        \"cost\": \"$15 (approx. for food)\",\n        \"description\": \"Grab some bread, cheese, and wine from a local market and enjoy a relaxing picnic with Eiffel Tower views.\"\n      },\n      \"evening\": {\n        \"activity\": \"Seine River Cruise\",\n        \"type\": \"Paid\",\n        \"cost\": \"$35 (approx.)\",\n        \"description\": \"Enjoy a romantic evening cruise along the Seine, admiring the illuminated landmarks.\"\n      }\n    },\n    \"day2\": {\n      \"morning\": {\n        \"activity\": \"Louvre Museum\",\n        \"type\": \"Paid\",\n        \"cost\": \"$20 (approx.)\",\n        \"description\": \"Explore masterpieces like the Mona Lisa. Pre-book tickets to avoid long lines.\"\n      },\n      \"afternoon\": {\n        \"activity\": \"Wander through Tuileries Garden\",\n        \"type\": \"Free\",\n        \"cost\": \"$10 (approx. for a coffee)\",\n        \"description\": \"Relax and enjoy the beautiful gardens connecting the Louvre to Place de la Concorde.\"\n      },\n      \"evening\": {\n        \"activity\": \"Latin Quarter Exploration & Dinner\",\n        \"type\": \"Paid\",\n        \"cost\": \"$50 (approx. for dinner)\",\n        \"description\": \"Explore the charming streets of the Latin Quarter, browse bookstores, and enjoy dinner at a traditional French bistro.\"\n      }\n    },\n    \"day3\": {\n      \"morning\": {\n        \"activity\": \"Montmartre & Sacré-Cœur Basilica\",\n        \"type\": \"Free (Basilica is free)\",\n        \"cost\": \"$15 (approx. for coffee and pastry)\",\n        \"description\": \"Explore the artistic neighborhood of Montmartre, visit the Sacré-Cœur Basilica, and enjoy the panoramic views.\"\n      },\n      \"afternoon\": {\n        \"activity\": \"Shopping at Le Marais\",\n        \"type\": \"Free (or Paid, depending on purchases)\",\n        \"cost\": \"Variable\",\n        \"description\": \"Explore the trendy boutiques, vintage shops, and art galleries in Le Marais district.\"\n      },\n      \"evening\": {\n        \"activity\": \"Farewell Dinner & drinks in a local bar\",\n        \"type\": \"Paid\",\n        \"cost\": \"$60 (approx.)\",\n        \"description\": \"Enjoy a final Parisian dinner and drinks, celebrating your trip with friends.\"\n      }\n    }\n  },\n  \"notes\": \"Prices are estimates and can vary depending on the season and your choices.  Consider purchasing a Paris Pass for access to several attractions if you plan on visiting many paid sites. Public transportation is recommended for getting around the city.\"\n}\n```\n"},
          ],
        },
      ],
    });
  
