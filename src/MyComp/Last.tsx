export function Last() {
    return (
        <div className="w-full text-white overflow-hidden">
            <div className='w-full h-[3px] bg-white rounded-full'></div>

            <div className="w-full h-96 flex flex-col  items-center justify-around bg-black">
                <div className="flex flex-col gap-6 items-center text-center">
                    <p className="font-primary text-2xl sm:text-4xl">Experience the operating system for commerce in India</p>
                <p className="underline underline-offset-4">Sign up now to start shipping with us</p>
                </div>
                <div className="flex gap-2">
                    <button className="bg-custom rounded-sm w-36 sm:w-40 h-16 hover:cursor-pointer">Personal Courier</button>
                    <button className="bg-white text-custom rounded-sm w-36 sm:w-40 h-16 hover:cursor-pointer">Business Shipments</button>
                </div>
            </div>
            <div className="grid grid-cols-2 h-[500px] sm:h-96 leading-5 sm:grid-cols-4">
                
                <div className="col-span-1 flex flex-col gap-1 bg-yellow-400 text-white p-3">
                <p className="font-semibold text-xl">Services:</p>
                <p>Express Parcel</p>
                <p>Warehousing</p>
                <p>Part Truckload</p>
                <p>Full Truckload</p>
                <p>Cross Border</p>
                <p>Data Intelligence</p>
                <p>Software Platform</p>
                </div>

                <div className="col-span-1 flex flex-col gap-1 bg-amber-400 p-3">
                <p className="font-semibold text-xl">Solutions:</p>
                <p>D2C Brands</p>
                <p>Personal Courier</p>
                <p>B2B Enterprises</p>
                <p>partners</p>
                <p>Franchise Opportunities</p>
                </div>

                <div className="col-span-1 flex flex-col gap-1 bg-amber-500 p-3">
                <p className="font-semibold text-xl">Delivery Partner:</p>
                <p>Fleet Owner</p>
                <p>Company</p>
                <p>About Us</p>
                <p>Governance</p>
                <p>Careers</p>
                <p>Press Release</p>
                <p>Investor Relations</p>
                </div>

                <div className="col-span-1 flex flex-col bg-orange-400 gap-1 p-3">
                <p className="font-semibold text-xl">Services:</p>
                <p>Express Parcel</p>
                <p>Warehousing</p>
                <p>Part Truckload</p>
                <p>Full Truckload</p>
                <p>Cross Border</p>
                <p>Data Intelligence</p>
                <p>Software Platform</p>
                </div>
            </div>
            <div className="flex w-full bg-black p-[2px] text-gray-500 justify-around text-xs">
                <p>Aerdrop @2025 All Rights Reserved</p>
                <p>Made by Aditya</p>
                </div>
        </div>
    )
}


