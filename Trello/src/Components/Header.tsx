import { Trello,Grid ,Search,Announcemnet,Notification,Account,Question} from "./AssetsT"
interface HeaderProps{
  onToggle():void
}
function Header({onToggle}:HeaderProps) {
  return (
    <div className="flex items-center justify-between p-2 border border-b-[#545456]">
        <div className="flex h-6 gap-4 items-center">
          <img src={Grid} alt="" className="h-4" onClick={onToggle}/>
          <div className="flex text-white font-semibold text-sm gap-2 items-center">
            <img src={Trello} alt=""  className="h-4"/>
            <h1>Trello</h1>
          </div>
        <div className="bg-[#2f2f31] w-150 border border-[#5e5e60] rounded-sm ml-32 text-[#87878b] flex items-center text-[12px] gap-1">
          <img src={Search} alt="" className="h-4" />
          <h1>Search</h1>
        </div>
        <div className="bg-[#669df1] px-3 rounded-sm ">
          <h1 className="text-[#212121] text-sm ">Create</h1>
        </div>
        </div>
      <div className="flex items-center gap-2">
        <img src={Announcemnet} alt="" className="h-4"/>
        <img src={Notification} alt=""className="h-4" />
        <img src={Question} alt="" className="h-4"/>
        <img src={Account} alt="" className="h-4"/>
      </div>
    </div>
  )
}

export default Header