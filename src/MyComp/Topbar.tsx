import logo from "../assets/Parachute Drop.png"

export default function Topbar() {
    return (
        <div className="w-[1257px] h-[80px] fixed z-10 text-white rounded-xl shadow-topbar flex justify-between items-center p-4 mt-3 backdrop-blur-lg">
            <div className="flex items-center text-2xl gap-2">
                <img src={logo} className="h-10 pb-2"/>
                <p className="text-3xl">Aerdrop</p>
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