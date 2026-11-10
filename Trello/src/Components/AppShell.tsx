import Header from "./Header"
import MainContent from "./MainContent"
import Sidebar from "./Sidebar"
function AppShell() {
  return (
    <div className="bg-[#1f1f21] min-h-screen">
        <Header></Header>
        <MainContent></MainContent>
        <Sidebar></Sidebar>
    </div>
  )
}

export default AppShell