import Header from "./Header"
import MenuItems from './MenuItems'
import Contents from './Contents'

export default function Home() {
  return (
    <main>
      <Header/>
      <div className="menu-bar"><MenuItems></MenuItems></div>
      <div><Contents /></div>
    </main>
  )
}
