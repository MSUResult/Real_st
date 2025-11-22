import SerachBar from "@/src/component/searchbar";
import React from "react";

export function generateMetadata() {
  return {
    title: "Property Listing Site in Saharanpur",
    description: "Here you can list the property of Saharanpur for rent and sale.",
  };
}

const Properties = () => {
  return (
    <main className="h-screen w-full flex flex-col items-center relative">
      
      {/* Blue Box */}
      <section className="bg-blue-500 rounded-[25px] h-[80%] w-full"></section>

      {/* Search Bar overlapping */}
      <div className="-translate-y-8">
        <SerachBar />
      </div>
      

    </main>
  );
};

export default Properties;
