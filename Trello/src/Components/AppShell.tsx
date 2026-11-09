import Header from "./Header"
import MainContent from "./MainContent"
import Sidebar from "./Sidebar"
function AppShell() {
  return (
    <div>
        <Header></Header>
        <MainContent></MainContent>
        <Sidebar></Sidebar>
    </div>
  )
}

export default AppShell