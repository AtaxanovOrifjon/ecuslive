import { Button, Input } from "@material-tailwind/react";
import { Icons } from "../Icons";
import React, { useRef, useState } from "react";
import { UserName } from "../dailog/user";


export function Header({ placeholder, onSubmit }: SearchInputProps) {  
    // const inputRef = useRef<HTMLInputElement>(null);
  const [openLeft, setOpenLeft] = React.useState(false)
  const [username,setUserName] = useState(false)
  function submitAndClear (){
   onSubmit(inputRef.current?.value ?? "");
   if (inputRef.current) {
    inputRef.current.value = "";
   }

  }

  function userNameHandle () {
    setUserName(!username)
  }
    
  function openLeftHandle () {
    setOpenLeft(!openLeft)
  }
  return (
   
      <div className=" shadow-2xl flex items-center justify-between p-2">
      <h1 className=" text-2xl font-bold">Exclusive</h1>
      <Button className="flex xl:hidden " onClick={openLeftHandle}>Menu</Button>
     
      <div className=" hidden xl:flex items-center gap-x-8">
           <a href="/" className="text-black hover:text-yellow-900">Home</a> 
           <a href="#!" className="text-black  hover:text-yellow-900">Contact</a>
           <a href="#!" className="text-black hover:text-yellow-900">About</a>
           <a href="#!" onClick={userNameHandle}  className="text-black hover:text-yellow-900">Sign In</a>
        </div>
        <div className="hidden xl:flex items-center gap-x-5">     
            <div>
                <Input label="What are you looking for?"/>
            </div>
            <div className="flex items-center gap-x-1">
                <a href="#!">
                    <Icons.likeIcon/>
                </a>
                <a href="#!">
                    <Icons.cartIcon/>
                </a>
            </div>
            <UserName open={username} handleOpen={userNameHandle}/>
        </div>
      </div>
      
  )
}
