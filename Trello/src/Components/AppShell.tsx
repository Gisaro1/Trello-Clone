import Header from "./Header"
import MainContent from "./MainContent"
import Sidebar from "./Sidebar"
import { useState } from "react"
function AppShell() {
  const [isOpen, setIsOpen] = useState(false)
  const MakeChange = () => setIsOpen(stat => !stat)
  return (
    <div className="bg-[#1f1f21] min-h-screen">
        <Header onToggle={MakeChange}></Header>
        <MainContent></MainContent>
        <Sidebar isOpen ={isOpen}></Sidebar>
    </div>
  )
}

export default AppShell