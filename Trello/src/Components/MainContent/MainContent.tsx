import LeftDiv from "../MainContent/LeftDiv"
import RightDiv from "../MainContent/RightDiv"
import SmallCard from "../MainContent/SmallCard"
import {Beat,BUpload,BBeat,Bchart,Upload,Chart,Account,Chevron,Cancel,Clock,Macl,Panda,Trust,Iron} from '../AssetsT/index'
import { useState } from "react"
function MainContent() {
  const [isOpen,setIsOpen] = useState(true)
  const [isClosed,setIsClosed] = useState(true)
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const Tdown = () => {
    setIsClosed(!isClosed);
  };
  return (
    <div className=" flex rounded-xl overflow-hidden">
      <div className="pt-8 pb-4 flex flex-col gap-2">
        <LeftDiv image={Chart} hover={Bchart} text="Boards" ></LeftDiv>
        <LeftDiv image={Upload} hover={BUpload} text="Templates"></LeftDiv>
        <LeftDiv image={Beat} hover={BBeat} text="Home"></LeftDiv>
        <div className="ml-10 mt-4 border-b border-[#545456] w-56" />
        <h1 className='text-[#cecfd2] text-sm font-semibold pl-10 pt-2'>Workspaces</h1>
        <div className="flex items-center  hover:bg-[#1C2B42] transition-all duration-300 ease-out rounded-lg " onClick={toggleDropdown}>
          <LeftDiv image={Account} text="Gisaro's workspaces" />
            <img src={Chevron} alt="" className={`h-5 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`} />
        </div>
        {isOpen && (
        <div className="pl-8">
          <LeftDiv image={Chart} hover={Bchart} text="Board" />
          <LeftDiv image={Upload} hover={BUpload} text="Templates" />
          <LeftDiv image={Beat} hover={BBeat} text="Home" />
        </div>
      )}
      </div>
      <div className="text-[#cecfd2] pt-10 pl-5">
        <div className="flex items-center justify-between w-[130vh]">
        <div className="flex gap-2 items-center">
          <img src={Upload} alt="" className="h-7" />
          <h1 className="text-lg font-bold">Most popular templates</h1>
        </div>
        <img src={Cancel} alt="" className="pl-12 h-8" />
        </div>
        <div className="pt-3 flex items-center gap-2">
          <h1 className="text-[12px]">Get going faster with a template from the Trello community or </h1>
          <div className="text-sm flex items-center justify-between w-42 rounded px-3 cursor-pointer py-1 border border-[#7e8188] bg-[#383839]">
            <h1>Choose category</h1>
            <img src={Chevron} alt="" onClick={Tdown} className={`h-5 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}/>
          </div>
          {isClosed && (<div className="bg-[#242528] absolute right-114 top-40 w-42 rounded-lg flex flex-col items-ce p-2 h-32 overflow-y-auto scrollbar-thin [&::-webkit-scrollbar]:w-1.5">
            <h1>Popular</h1>
            <h1>small Business</h1>
            <h1>Design</h1>
            <h1>Marketing</h1>
            <h1>Popular</h1>
            <h1>small Business</h1>
            <h1>Design</h1>
            <h1>Marketing</h1>
          </div>)}
        </div>
        <h1 className="text-sm text-[#669df1] underline decoration-[#669df1] pt-6">Browse the full template gallery</h1>
        <div className="flex gap-2 items-center pt-8">
          <img src={Clock} alt="" className="h-5" />
          <h1 className="text-md font-semibold">Recently viewed</h1>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <RightDiv image={Panda} text="Panda-Theory"></RightDiv>
          <RightDiv image={Macl} text="Car-Theory"></RightDiv>
          <RightDiv image={Trust} text="Trust-Theory"></RightDiv>
          <RightDiv image={Iron} text="Iron-Theory"></RightDiv>
        </div>
        <div className="pl-4 pt-5">
          <h1 className=" text-lg font-bold ">YOUR WORKSPACES</h1>
          <div>
            <div className="flex items-center gap-3 justify-between">
              <div className="flex items-center gap-2 mt-4">
                <img src={Account} alt="" className="h-5 "/>
                <h1 className="font-semibold">Gisaro Billy's workspace</h1>
              </div>
              <div className="flex items-center gap-2">
                <SmallCard image={Chart} text="Board"></SmallCard>
                <SmallCard image={Upload} text="Templates"></SmallCard>
                <SmallCard image={Beat} text="Home"></SmallCard>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 pt-3">
          <RightDiv image={Panda} text="KungFu_Panda"></RightDiv>
          <RightDiv image={Trust} text="Trust IAM"></RightDiv>
          <RightDiv image={Macl} text="Sport_Car"></RightDiv>
          <div className="w-45.75 m-2 h-27.5 bg-[#2C2C2E] shadow-md rounded-xl flex flex-col items-center justify-center fonts-[200px]">
            <h1 className="text-sm ">Create new board</h1>
            <p className="text-[10px]">7 remaining</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContent