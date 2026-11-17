import { Chevron,Trello ,Microsoft,Favi,Apple} from "../AssetsT/index"
import SideCard from "../MainContent/SideCard"
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
      <div>
        <SideCard image={Trello} text="Trello"></SideCard>
         <SideCard image={Apple} text="Apple"></SideCard>
          <SideCard image={Microsoft} text="Microsoft"></SideCard>
          <SideCard image={Favi} text="Atenselium"></SideCard>
      </div>
    </div>
  )
}

export default Sidebar