import Hero from "./MyComp/Hero"
import Topbar from "./MyComp/Topbar"

function App() {
  return (
    <div className="bg-primary w-screen h-screen flex flex-col items-center relative">
      <Topbar/>
      <Hero/>
    </div>
  )
}

export default App
