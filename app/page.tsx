"use client"
import { useState } from 'react'

export default function Home() {
  
  const [convertPrompt, setConvertPrompt] = useState<string>('');
  const [getResult, setGetResult] = useState<string>('');
  const [result, setResult] = useState<string>('');
  
  const handleChangeConvertPrompt = (e: any) => {
    setConvertPrompt(e.target.value);
  }

  const handleChangeGetResult = (e: any) => {
    setGetResult(e.target.value);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-7xl w-full items-center flex flex-col text-sm lg:flex">
        <div className="w-full">
          <h1 className="text-center text-[35px] font-bold text-[#494949]">
            マークダウンプロンプト
          </h1>
        </div>

        <div className="w-full flex justify-between mt-[70px] p-[20px]">
          <div className="flex flex-col">
            <textarea 
              value={convertPrompt}
              onChange={handleChangeConvertPrompt}
              className="border-[1px] border-[#787878] rounded-[7px] h-[35rem] w-[20rem] p-[15px] text-[16px]"
            ></textarea>
            <button 
              className="inline-block mt-[30px] px-6 py-2.5 text-[15px] font-medium leading-6 text-center text-white uppercase transition bg-green-500 rounded-full shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none"
            >
              変換プロンプト
            </button>
          </div>

          <div className="flex flex-col">
            <textarea 
              value={getResult}
              onChange={handleChangeGetResult}
              className="border-[1px] border-[#787878] rounded-[7px] h-[35rem] w-[20rem] p-[15px] text-[16px]"
            ></textarea>
            <button 
              className="inline-block mt-[30px] px-6 py-2.5 text-[15px] font-medium leading-6 text-center text-white uppercase transition bg-green-500 rounded-full shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none"
            >
              結果の取得
            </button>
          </div>

          <div className="flex flex-col">
            <textarea 
              className="border-[1px] border-[#787878] rounded-[7px] h-[35rem] w-[20rem] p-[15px] text-[16px]"
            ></textarea>
          </div>
        </div>
      </div>
    </main>
  );
}
