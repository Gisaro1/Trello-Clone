import { Chevron } from "./AssetsT"
interface SidebarProps{
  isOpen:boolean
}
function Sidebar({isOpen}:SidebarProps) {
  if(!isOpen) return null
  return (
    <div className="bg-[#2b2c2f] h-[75vh] w-[25%] absolute bottom-26 left-2 rounded-sm overflow-y-auto ">
      <div className="text-[#cecfd2] flex justify-between items-center pt-5 pb-4  border-b border-[#424346]" >
        <h1 className="text-sm pl-4">Select organisation</h1>
        <img src={Chevron} alt="" className="h-4 pr-4"/>
      </div>
    </div>
  )
}

export default Sidebar