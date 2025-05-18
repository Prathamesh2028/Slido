"use client";
import { useAppcontext } from '@/app';
import { chatSession } from '@/app/service/Aimodel';
import router from 'next/navigation';
import { useEffect, useState } from 'react';

const TravelForm = () => {
  // State variables for each field in the form
  const [destination, setDestination] = useState('');
  const [days, setDays] = useState('');
  const [budget, setBudget] = useState('');
  const [tripType, setTripType] = useState('');
  const { hugh, setHugh } = useAppcontext();

  // State to store the AI response (JSON data)
  const [aiResponse, setAiResponse] = useState(null); // Store the response
let {apires}=useAppcontext()
  // Handler to handle form submission
  const hvh = () => {
    router.push('./show');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all the required fields are filled
    if (!destination || !days || !budget || !tripType) {
      alert('Please fill in all fields');
      return;
    }

    // Collecting user input in an object
    const userInput = {
      destination,
      days,
      budget,
      tripType,
    };

    const AI_PROMPT = `Create a travel plan for a ${userInput.tripType} trip to ${userInput.destination} with a ${userInput.budget} budget. Include a list of hotel options with name, address, price, description, imageurl and rating. Also, provide a ${userInput.days}-day itinerary with daily activities for morning, afternoon, and evening, including a mix of paid and free options, along with estimated costs. Ensure the plan suits ${userInput.tripType} trip and offers a balance of iconic landmarks, local culture, and leisure activities. Give output in json`;

    // Send the prompt to the AI model and get the response
    const result = await chatSession.sendMessage(AI_PROMPT);
    console.log(AI_PROMPT);
    apires = result?.response?.text();
    console.log(apires);

    // Set the response in the state
    
  };

  return (
    <div className=" bg-gray-50 flex justify-center items-center">
      <div className="w-[800px]  p-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Travel Planning Form</h1>
        <form onSubmit={handleSubmit}>
          {/* 1. Destination Choice */}
          <div className="mb-9">
            <label htmlFor="destination" className="block text-gray-600 mb-2">Destination Choice:</label>
            <select
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select a city</option>
              <option value="Paris">Paris</option>
              <option value="New York">New York</option>
              <option value="Tokyo">Tokyo</option>
              <option value="London">London</option>
            </select>
          </div>

          {/* 2. How Many Days */}
          <div className="mb-9">
            <label htmlFor="days" className="block text-gray-600 mb-2">How many days are you planning?</label>
            <input
              type="number"
              id="days"
              value={days}
              onChange={(e) => setDays(e.target.value)}
              required
              min="1"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* 3. What is your Budget */}
          <div className="mb-14 h-40">
            <label className="block text-gray-600 mb-2">What is your Budget?</label>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setBudget('low')}
                className={`w-full h-40 p-4 rounded-lg shadow-md text-center text-lg font-semibold transition-all duration-300 ${budget === 'low' ? 'bg-green-200' : 'bg-white hover:bg-green-100'}`}
              >
                Low
              </button>
              <button
                type="button"
                onClick={() => setBudget('medium')}
                className={`w-full p-4 rounded-lg shadow-md text-center text-lg font-semibold transition-all duration-300 ${budget === 'medium' ? 'bg-#FFF700-200' : 'bg-white hover:bg-#FFF700-100'}`}
              >
                Medium
              </button>
              <button
                type="button"
                onClick={() => setBudget('high')}
                className={`w-full p-4 rounded-lg shadow-md text-center text-lg font-semibold transition-all duration-300 ${budget === 'high' ? 'bg-red-200' : 'bg-white hover:bg-red-100'}`}
              >
                High
              </button>
            </div>
          </div>

          {/* 4. Who are you planning for this trip */}
          <div className="mb-6 h-40">
            <label className="block text-gray-600 mb-2">Who are you planning for this trip?</label>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setTripType('single')}
                className={`w-full p-4 h-40 rounded-lg shadow-md text-center text-lg font-semibold transition-all duration-300 ${tripType === 'single' ? 'bg-blue-200' : 'bg-white hover:bg-blue-100'}`}
              >
                Single
              </button>
              <button
                type="button"
                onClick={() => setTripType('family')}
                className={`w-full p-4 rounded-lg shadow-md text-center text-lg font-semibold transition-all duration-300 ${tripType === 'family' ? 'bg-teal-200' : 'bg-white hover:bg-teal-100'}`}
              >
                Family
              </button>
              <button
                type="button"
                onClick={() => setTripType('couple')}
                className={`w-full p-4 rounded-lg shadow-md text-center text-lg font-semibold transition-all duration-300 ${tripType === 'couple' ? 'bg-pink-200' : 'bg-white hover:bg-pink-100'}`}
              >
                Couple
              </button>
              <button
                type="button"
                onClick={() => setTripType('friends')}
                className={`w-full p-4 rounded-lg shadow-md text-center text-lg font-semibold transition-all duration-300 ${tripType === 'friends' ? 'bg-purple-200' : 'bg-white hover:bg-purple-100'}`}
              >
                Friends
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-72 py-3 mt-6 bg-#FFF700-600 text-white rounded-lg font-semibold text-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
          >
            Generate
          </button>
          <button
            onClick={hvh}
            className="w-72 py-3 mt-6 bg-#FFF700-600 text-white rounded-lg font-semibold text-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
          >
            SEE option
          </button>
        </form>

        {/* Optionally display the response below the form */}
        {aiResponse && (
          <div className="mt-8 p-4 border rounded-lg bg-gray-100">
            <h2 className="text-xl font-semibold">AI Response:</h2>
            <pre className="text-sm text-gray-700">{JSON.stringify(aiResponse, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default TravelForm;
