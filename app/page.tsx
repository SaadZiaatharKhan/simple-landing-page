"use client"
import { useState,useEffect } from "react";
import server from "./server_component";
import Development_1 from '@/app/components/Development/Development_1'
import Development_2 from '@/app/components/Development/Development_2'
import Development_3 from '@/app/components/Development/Development_3'
import Development_4 from '@/app/components/Development/Development_4'
import Development_5 from '@/app/components/Development/Development_5'
import Business_1 from './components/Business/Business_1';
import Business_2 from './components/Business/Business_2';
import Business_3 from './components/Business/Business_3';
import Business_4 from './components/Business/Business_4';
import Business_5 from './components/Business/Business_5';
import Design_1 from './components/Design/Design_1';
import Design_2 from './components/Design/Design_2';
import Design_3 from './components/Design/Design_3';
import Design_4 from './components/Design/Design_4';
import Lifestyle_1 from './components/Lifestyle/Lifestyle_1';
import Lifestyle_2 from './components/Lifestyle/Lifestyle_2';
import Lifestyle_3 from './components/Lifestyle/Lifestyle_3';

(async () => {
  await server()
})();


export default function Home() {

  const[button_value,change_button_value]=useState("All")

  const renderComponents = () => {
    switch (button_value) {
      case "Development":
        return (
          <>
            <Development_1 />
            <Development_2 />
            <Development_3 />
            <Development_4 />
            <Development_5 />
          </>
        );
      case "Business":
        return (
          <>
            <Business_1 />
            <Business_2 />
            <Business_3 />
            <Business_4 />
            <Business_5 />
          </>
        );
      case "Design":
        return (
          <>
            <Design_1 />
            <Design_2 />
            <Design_3 />
            <Design_4 />
          </>
        );
      case "Lifestyle":
        return (
          <>
            <Lifestyle_1 />
            <Lifestyle_2 />
            <Lifestyle_3 />
          </>
        );
      default:
        return (
          <>
            <Development_1 />
            <Development_2 />
            <Development_3 />
            <Development_4 />
            <Development_5 />
            <Business_1 />
            <Business_2 />
            <Business_3 />
            <Business_4 />
            <Business_5 />
            <Design_1 />
            <Design_2 />
            <Design_3 />
            <Design_4 />
            <Lifestyle_1 />
            <Lifestyle_2 />
            <Lifestyle_3 />
          </>
        );
    }
  };


  return (
  <>
  <div className="bg-normal-bg">

    <header className="text-3xl font-bolt text-center text-white bg-header-bg py-4">Top Courses</header>
    <nav className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
      <button className="text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2transition-all duration-300 bg-opacity-60 border-white" onClick={()=>{change_button_value("All")}}>All</button>
      <button className="text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300 bg-opacity-40 border-transparent" onClick={()=>{change_button_value("Development")}}>Development</button>
      <button className="ext-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300 bg-opacity-40 border-transparent" onClick={()=>{change_button_value("Business")}}>Business</button>
      <button className="text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300 bg-opacity-40 border-transparent" onClick={()=>{change_button_value("Design")}}>Design</button>
      <button className="text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300 bg-opacity-40 border-transparent" onClick={()=>{change_button_value("Lifestyle")}}>Lifestyle</button>
    </nav>

    <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
      <div className="flex flex-wrap justify-center gap-4 mb-4">

      {renderComponents()}
      </div>
    </div>

  </div>
  </>  
  );
}
