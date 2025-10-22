import React from "react";
import { useState , useEffect } from "react";
import {  Server , Database ,Wrench , Code , Square } from "lucide-react";
import { label } from "framer-motion/client";
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
const test = [
  { name: 'React.js', experience: '2+ years', level: 85 },
  { name: 'JavaScript', experience: '4+ years', level: 90 },
  { name: 'TypeScript', experience: '1+ year', level: 75 },
  { name: 'TailWindCSS', experience: '2+ years', level: 95 },
];
const test2 = [
{value: 'Node js' , experience: '1+ years' , level: 80 },
  {value: 'Express js' ,experience: '2+ years' , level: 90  },
  {value: 'Mongodb' , experience: '1+ years' , level: 80 },
  {value: 'Php' , experience: '6 months' , level: 60 },
]
  
  const label = [
    {value:'BEGINNER'},
    {value:'INTERMEDIATE'},
    {value:'EXPERT'},
  ]
  const end = [
    {value:'24+' , label : 'technologies'},
    {value:'5+' , label : 'Years Coding'},
    {value:'∞' , label: 'Learning Mode'},
    {value:'100%' , label: 'Commitment'}
  ]
    return(
        <>
       <div id="skills" className="min-h-screen bg-black text-green-400 font-mono flex flex-col  justify-center space-y-4">
        <div className="mx-4 md:mx-0">
  <div className="max-w-3xl mx-auto">
  <div className="text-green-500 text-sm mb-2 mt-40">
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
<div className="  border border-green-400 bg-green-400/5  p-8 hover:border-green-400 hover:bg-green-400/5 transition-all duration-300 group ">
<div className="flex gap-6 flex-col-1">

<div className="border border-green-400 bg-black p-2 w-10 h-10 hover:border-green-300 hover:bg-green-400/5 transition-all duration-300 group" />
                   
<div className="text-4xl md:text-3xl font-bold text-white mb-4 ">
    FRONTEND ARSENAL
  </div>
  </div>
  <div className="border border-green-800 bg-black px-1 hover:border-green-300 hover:bg-green-400/5 transition-all duration-300 group mt-10" />
  <div className="grid grid-cols- md:grid-cols-1 gap-6 max-w-3xl mx-auto mb-10">
    <div className="mt-10">
{test.map((skill) => (
          <div key={skill.name} className="mb-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-white">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <strong>{skill.name}</strong>
              </div>
              <div className="text-green-400 text-sm font-semibold">
                {skill.experience} <span className="ml-2">{skill.level}%</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="relative w-full h-2 bg-gray-800 rounded mt-2">
              <div
                className="h-2 bg-green-400 rounded absolute top-0 left-0 transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>

            {/* Labels */}
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>BEGINNER</span>
              <span>INTERMEDIATE</span>
              <span>EXPERT</span>
            </div>
          </div>
        ))}
        </div>
  </div>
  
</div>

</div>
<div className="max-w-3xl mx-auto mt-20 ">
<div className="  border border-green-400 bg-green-400/5  p-8 hover:border-green-400 hover:bg-green-400/5 transition-all duration-300 group ">
<div className="flex gap-6 flex-col-1">

<div className="border border-green-400 bg-black p-2 w-10 h-10 hover:border-green-300 hover:bg-green-400/5 transition-all duration-300 group" />
                   
<div className="text-4xl md:text-3xl font-bold text-white mb-4 ">
    BACKENED ARSENAL
  </div>
  </div>
  <div className="border border-green-800 bg-black px-1 hover:border-green-300 hover:bg-green-400/5 transition-all duration-300 group mt-10" />
  
  <div className="grid grid-cols- md:grid-cols-1 gap-6 max-w-3xl mx-auto mb-10">
    <div className="mt-10">
{test2.map((skill) => (
  <div key={skill.value} className="mb-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-white">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <strong>{skill.value}</strong>
              </div>
              <div className="text-green-400 text-sm font-semibold">
                {skill.experience} <span className="ml-2">{skill.level}%</span>
              </div>
            </div>
            <div className="relative w-full h-2 bg-gray-800 rounded mt-2">
              <div
                className="h-2 bg-green-400 rounded absolute top-0 left-0 transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>

            {/* Labels */}
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>BEGINNER</span>
              <span>INTERMEDIATE</span>
              <span>EXPERT</span>
            </div>
            </div>
            
            
))}
    </div>
  </div>
  </div>
</div>
<div className="grid grid-cols-2  gap-6 max-w-3xl mx-auto mt-20">
{end.map((skill , i) => (
  <div
  key={i}
  className="group w-full border border-green-400/30 bg-black h-40 
                 hover:border-green-400 hover:bg-green-400/10 transition-all duration-300 
                  gap-3 text-gray-400 hover:text-green-300 pl-10  flex flex-col justify-center
                 font-mono font-semibold tracking-wide shadow-md hover:shadow-[0_0_15px_#22c55e40] hover:scale-110">
                  <h2 className="text-green-400 text-3xl">{skill.value}</h2>
                  <span className="text-gray-300">{skill.label}</span>
                  </div>
))}
</div>
</div>
</div>

        </>
    )
}
export default Skills;