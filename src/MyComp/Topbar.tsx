    import logo from "../assets/Parachute Drop.png"

    export default function Topbar() {
        return (
            <div className="w-[calc(100%-16px)] md:w-[calc(100%-20px)] lg:w-[calc(100%-48px)] h-[80px]  fixed z-100 text-white rounded-xl shadow-topbar flex justify-between items-center p-4 mt-4 backdrop-blur-lg font-primary mx-3 md:mx-5 lg:mx-12">
                <div className="flex items-center text-2xl gap-2">
                    <img src={logo} className="h-10 pb-2"/>
                    <p className="text-3xl">Aerdrop</p>
                </div>
                <div className="sm:flex gap-4 text-xl hidden sm:visible">
                <p>Home</p>
                <p>Services</p>
                <p>About Us</p>
                <p>Reach Us</p>
                </div>
                <div className="visible sm:hidden">
                    ham menu
                </div>
            </div>
        )
    }