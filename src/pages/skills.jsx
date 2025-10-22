import React from "react";
import { useState , useEffect } from "react";
import {  Server , Database ,Wrench , Code  } from "lucide-react";
const Skills = () => {
    const [cursorVisible, setCursorVisible] = useState(true);
    useEffect(() => {
        const cursorTimer = setInterval(() => {
          setCursorVisible(prev => !prev);
        }, 500);
        return () => clearInterval(cursorTimer);
      }, []);
      const metric = [
  { value: 'FRONTEND', color: 'from-gray-300 to-green-400', icon: Code },
  { value: 'BACKEND', color: 'from-gray-300 to-blue-400', icon: Server },
  { value: 'DATABASE', color: 'from-gray-300 to-emerald-400', icon: Database },
  { value: 'TOOLS & OTHERS', color: 'from-gray-300 to-emerald-400', icon: Wrench },
];
    return(
        <>
       <div className="min-h-screen bg-black text-green-400 font-mono flex flex-col  justify-center space-y-4">
        <div className="mx-4 md:mx-0">
  <div className="max-w-3xl mx-auto">
  <div className="text-green-500 text-sm mb-2">
    {'>_'} <span className="animate-pulse">█</span> cat /skills/inventory.log
  </div>

  <div className="text-4xl md:text-6xl font-bold text-white mb-4 ">
    TECH STACK
  </div>
  <p className="text-gray-300 text-lg max-w-3xl mb-8">
                Tools mastered through countless hours of debugging, building, and shipping 
                code. each skill represents problems solved and systems deployed. 
              </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-10">
  {metric.map((item, i) => (
    <button
      key={i}
      className="group w-full border border-green-400/30 bg-black px-6 py-4 rounded-lg 
                 hover:border-green-400 hover:bg-green-400/10 transition-all duration-300 
                 flex items-center justify-center gap-3 text-gray-400 hover:text-green-300 
                 font-mono font-semibold tracking-wide shadow-md hover:shadow-[0_0_15px_#22c55e40] hover:scale-110"
    >
      {item.icon && (
        <item.icon
          size={28}
          className="text-gray-400 group-hover:text-green-300 transition-colors duration-300 "
        />
      )}
      <span>{item.value}</span>
    </button>
  ))}
</div>
<div className="max-w-3xl mx-auto ">
<div className="  border border-green-400 bg-black p-8 hover:border-green-400 hover:bg-green-400/5 transition-all duration-300 group ">
<div className="flex gap-6 flex-col-1">

<div className="border border-green-400 bg-black p-2 w-10 h-10 hover:border-green-300 hover:bg-green-400/5 transition-all duration-300 group" />
                   
<div className="text-4xl md:text-3xl font-bold text-white mb-4 ">
    FRONTEND ARSENAL
  </div>
  </div>
  <div className="border border-green-800 bg-black px-1 hover:border-green-300 hover:bg-green-400/5 transition-all duration-300 group mt-10" />
</div>

</div>
</div>
</div>

        </>
    )
}
export default Skills