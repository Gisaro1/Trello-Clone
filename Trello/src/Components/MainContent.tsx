import LeftDiv from "./LeftDiv"
import {Beat,BUpload,BBeat,Bchart,Upload,Chart,Account,Chevron} from '../Components/AssetsT/index'
function MainContent() {
  return (
    <div>
      <div className="pt-8 pb-4 flex flex-col justify-center">
        <LeftDiv image={Chart} hover={Bchart} text="Boards" ></LeftDiv>
        <LeftDiv image={Upload} hover={BUpload} text="Templates"></LeftDiv>
        <LeftDiv image={Beat} hover={BBeat} text="Home"></LeftDiv>
        <div className="ml-10 mt-4 border-b border-[#545456] w-56" />
        <h1 className='text-[#cecfd2] text-sm font-semibold pl-10 pt-2'>Workspaces</h1>
        <div className="flex items-center gap-1">
          <LeftDiv image={Account} text="Gisaro's workspaces" />
            <img src={Chevron} alt="" className=" h-8 pt-4" />
        </div>
      </div>
    </div>
  )
}

export default MainContent