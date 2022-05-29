import React, { useEffect, useState } from 'react'

interface DashcardData {
  color: string;
  title: string;
}

function Dashcard({ color, gradientTo, title }: DashcardData) {
  const [gradient, setGradient] = useState({});
  function chooseGradient() {
    switch (color) { 
      case 'blue':
        return {
          gradientFrom: 'from-indigo-800',
          gradientTo: 'to-indigo-700'
        }
      case 'violet':
        return {
          gradientFrom: 'from-violet-800',
          gradientTo: 'to-violet-700'
        }
      case 'green':
        return {
          gradientFrom: 'from-green-800',
          gradientTo: 'to-green-700'
        }
  }
}

useEffect(() => {
  const grad = chooseGradient();
  setGradient(grad);
}, [])

  return (
    <div className={`flex items-center justify-center w-72 h-36 px-8 py-4 rounded-xl bg-gradient-to-r ${gradient?.gradientFrom} ${gradient?.gradientTo}`}>
      <p className="text-white text-3xl font-bold leading-10">{title}</p>
    </div>
  )
}

export default Dashcard