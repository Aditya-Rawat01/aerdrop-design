import Hero from "./MyComp/Hero"
import { Last } from "./MyComp/Last"
import Topbar from "./MyComp/Topbar"
import { TrackRecord } from "./MyComp/TrackRecord"
import { Work } from "./MyComp/Work"

function App() {
  return (
    <div className="bg-primary flex flex-col items-center relative px-3 md:px-5 lg:px-12 overflow-hidden">
      <Topbar/>
      <Hero/>
      <Work/>
      <TrackRecord/>
      <Last/>
    </div>
  )
}

export default App
