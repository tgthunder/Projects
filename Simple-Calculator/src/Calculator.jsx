import React, { useEffect, useState } from 'react'

export default function Calculator() {

  const [input , setInput] = useState("");
  const [result , setResult] = useState(0);


    const addValToIp = (val) =>{
      setInput((prev) => prev+val)
      
    }
  
    const allClear = () =>{
      setInput("")
      setResult(0)
    }
  
    const findLog = () =>{
      try{
        if(input === "")
        {
          setResult("Not a valid input")
          
          
        }else{
          setResult(Math.log(eval(input)))
        }
        
      }catch
      {
        setResult("Error")
      }
    }
  
    const findPercent = () => {
      setResult(eval(input)/100)
    }
  
    const evalExp = ()=>{
      setResult(eval(input))
    }
  
    const findSqr = () =>
    {
      setResult(eval(input)*eval(input))
    }
  
  
  return (
    <div className="flex border rounded-md overflow-hidden max-w-4xl mx-auto my-8 shadow-lg">
      <div className="flex-1 bg-gray-200 flex items-center justify-center p-4">
        <img src="https://images.pexels.com/photos/6928995/pexels-photo-6928995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Placeholder" className="max-w-full max-h-96" />
      </div>
      <div className="flex-1 flex flex-col justify-center bg-green-400 p-4">
        
            <div className="flex flex-col bg-white max-w-full">
              <input 
              type="text" 
              value={input}
              className="text-lg text-right outline-none" />
              <div className="text-lg text-right">Ans: {result}</div>
            </div>
            <div className="flex flex-col bg-white max-w-full my-4">
              <div className="max-w-full flex justify-around py-2">
                <button className='bg-fuchsia-500 w-20 h-10 text-yellow-300 rounded-md px-8 py-1 active:bg-fuchsia-300'
                onClick={findLog}>log</button> 
                <button className='bg-fuchsia-500 w-20 h-10 text-yellow-300 rounded-md px-8 py-1 active:bg-fuchsia-300'
                onClick={findPercent}
                >%</button> 
                <button className='bg-fuchsia-500 w-20 h-10 text-yellow-300 rounded-md px-8 py-1 active:bg-fuchsia-300'
                onClick={findSqr}>sqr</button> 
                <button className='bg-fuchsia-500 w-20 h-10 text-yellow-300 rounded-md px-8 py-1 active:bg-fuchsia-300'
                onClick={allClear}>AC</button> 
              </div>
              <div className="max-w-full flex justify-around py-2">
                <button 
                className='bg-fuchsia-500 w-20 h-10 text-yellow-300 rounded-md px-8 py-1 active:bg-fuchsia-300'
                onClick={() =>{
                  addValToIp("1");
                }}
                >1</button> 
                <button className='bg-fuchsia-500 w-20 h-10 text-yellow-300 rounded-md px-8 py-1 active:bg-fuchsia-300'
                onClick={() =>{
                  addValToIp("2");
                }}
                >2</button> 
                <button className='bg-fuchsia-500 w-20 h-10 text-yellow-300 rounded-md px-8 py-1 active:bg-fuchsia-300'
                onClick={() =>{
                  addValToIp("3");
                }}
                >3</button> 
                <button className='bg-fuchsia-500 w-20 h-10 text-yellow-300 rounded-md px-8 py-1 active:bg-fuchsia-300'
                onClick={() =>{
                  addValToIp("+");
                }}
                >+</button> 
              </div>
              <div className="max-w-full flex justify-around py-2">
                <button className='bg-fuchsia-500 w-20 h-10 text-yellow-300 rounded-md px-8 py-1 active:bg-fuchsia-300'
                onClick={() =>{
                  addValToIp("4");
                }}
                >4</button> 
                <button className='bg-fuchsia-500 w-20 h-10 text-yellow-300 rounded-md px-8 py-1 active:bg-fuchsia-300'
                onClick={() =>{
                  addValToIp("5");
                }}
                >5</button> 
                <button className='bg-fuchsia-500 w-20 h-10 text-yellow-300 rounded-md px-8 py-1 active:bg-fuchsia-300'
                onClick={() =>{
                  addValToIp("6");
                }}
                >6</button> 
                <button className='bg-fuchsia-500 w-20 h-10 text-yellow-300 rounded-md px-8 py-1 active:bg-fuchsia-300'
                onClick={() =>{
                  addValToIp("-");
                }}>-</button> 
              </div>
              <div className="max-w-full flex justify-around py-2">
                <button className='bg-fuchsia-500 w-20 h-10 text-yellow-300 rounded-md px-8 py-1 active:bg-fuchsia-300'
                onClick={() =>{
                  addValToIp("7");
                }}
                >7</button> 
                <button className='bg-fuchsia-500 w-20 h-10 text-yellow-300 rounded-md px-8 py-1 active:bg-fuchsia-300'
                onClick={() =>{
                  addValToIp("8");
                }}>8</button> 
                <button className='bg-fuchsia-500 w-20 h-10 text-yellow-300 rounded-md px-8 py-1 active:bg-fuchsia-300'
                onClick={() =>{
                  addValToIp("9");
                }}>9</button> 
                <button className='bg-fuchsia-500 w-20 h-10 text-yellow-300 rounded-md px-8 py-1 active:bg-fuchsia-300'
                onClick={() =>{
                  addValToIp("*");
                }}>*</button> 
              </div>
              <div className="max-w-full flex justify-around py-2">
                <button className='bg-fuchsia-500 w-20 h-10 text-yellow-300 rounded-md px-8 py-1 active:bg-fuchsia-300'
                onClick={() =>{
                  addValToIp("0");
                }}>0</button> 
                <button className='bg-fuchsia-500 w-20 h-10 text-yellow-300 rounded-md px-8 py-1 active:bg-fuchsia-300'
                onClick={() =>{
                  addValToIp("00");
                }}>00</button> 
                <button className='bg-fuchsia-500 w-20 h-10 text-yellow-300 rounded-md px-8 py-1 active:bg-fuchsia-300'
                onClick={() =>{
                  addValToIp(".");
                }}>.</button> 
                <button className='bg-fuchsia-500 w-20 h-10 text-yellow-300 rounded-md px-8 py-1 active:bg-fuchsia-300'
                onClick={evalExp}>=</button> 
              </div>
            </div>
          
      </div>
    </div>
  )
}
