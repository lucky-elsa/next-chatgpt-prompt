"use client";
import { ChangeEvent, useState } from "react";

function Textarea(props: TextareaProps) {
   
   return (
      <textarea
         value={props.value}
         onChange={props.onChange}
         className="border-[1px] border-[#787878] rounded-[7px] h-[35rem] w-[20rem] p-[15px] text-[16px]"
      ></textarea>
   );
}

interface TextareaProps {
   value: string;
   onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default Textarea;
