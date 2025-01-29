import logo from "../assets/Parachute Drop.png"

export default function Topbar() {
    return (
        <div className="w-[1257px] h-[80px] text-white rounded-xl shadow-topbar flex justify-between items-center p-4">
            <div className="flex items-center text-2xl gap-2">
                <img src={logo}/>
                <p>Aerdrop</p>
            </div>
            
            
            <div className="flex gap-4 text-xl">
            <p>Home</p>
            <p>Services</p>
            <p>About Us</p>
            <p>Reach Us</p>
            </div>
        </div>
    )
}