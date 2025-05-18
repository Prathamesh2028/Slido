// pages/travel-plan.js
"use client"
import { useAppcontext } from "@/app";

const TravelPlan = () => {
    let{apires}=useAppcontext()
  
    return (
    <div>
      {apires}
    </div>
    );
  };
  
  export default TravelPlan;
  