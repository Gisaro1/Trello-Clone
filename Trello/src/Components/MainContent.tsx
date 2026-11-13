import LeftDiv from "./LeftDiv"
import RightDiv from "./RightDiv"
import {Beat,BUpload,BBeat,Bchart,Upload,Chart,Account,Chevron,Cancel,Clock,Spider} from '../Components/AssetsT/index'
function MainContent() {
  return (
    <div className=" flex">
      <div className="pt-8 pb-4 flex flex-col ">
        <LeftDiv image={Chart} hover={Bchart} text="Boards" ></LeftDiv>
        <LeftDiv image={Upload} hover={BUpload} text="Templates"></LeftDiv>
        <LeftDiv image={Beat} hover={BBeat} text="Home"></LeftDiv>
        <div className="ml-10 mt-4 border-b border-[#545456] w-56" />
        <h1 className='text-[#cecfd2] text-sm font-semibold pl-10 pt-2'>Workspaces</h1>
        <div className="flex items-center">
          <LeftDiv image={Account} text="Gisaro's workspaces" />
            <img src={Chevron} alt="" className=" h-8 pt-4 mr-4" />
        </div>
      </div>
      <div className="text-[#cecfd2] pt-10 pl-6">
        <div className="flex items-center justify-between w-[130vh]">
        <div className="flex gap-2 items-center">
          <img src={Upload} alt="" className="h-7" />
          <h1 className="text-lg font-semibold">Most popular templates</h1>
        </div>
        <img src={Cancel} alt="" className="pl-12 h-8" />
        </div>
        <div className="pt-3 flex items-center gap-2">
          <h1 className="text-[12px]">Get going faster with a template from the Trello community or </h1>
          <div className="text-sm flex items-center justify-between w-42 bg-[#1f1f21] rounded px-3 cursor-pointer py-1 border border-[#7e8188] bg-[#383839]">
            <h1>Choose category</h1>
            <img src={Chevron} alt=""  className="h-5"/>
          </div>
        </div>
        <h1 className="text-sm text-[#669df1] underline decoration-[#669df1] pt-6">Browse the full template gallery</h1>
        <div className="flex gap-2 items-center pt-8">
          <img src={Clock} alt="" className="h-5" />
          <h1 className="text-md font-semibold">Recently viewed</h1>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <RightDiv image={Spider} text="React-Theory"></RightDiv>
          <RightDiv image={Spider} text="React-Theory"></RightDiv>
          <RightDiv image={Spider} text="React-Theory"></RightDiv>
          <RightDiv image={Spider} text="React-Theory"></RightDiv>
          <RightDiv image={Spider} text="React-Theory"></RightDiv>
        </div>
      </div>
    </div>
  )
}

export default MainContent