export function TrackRecord() {
    return (
        <div className="h-screen w-full relative font-primary bg-custom px-3 md:px-5 lg:px-12 flex items-end justify-end">
            <div className=" h-[90vh] absolute bottom-0 left-0 flex items-center justify-center w-20 md:w-32 bg-white text-custom">
                <span className="-rotate-90 text-5xl lg:text-6xl xl:text-7xl font-semibold h-32 flex w-[90vh] flex-col items-start justify-center">
                    <p className="text-xs md:text-base leading-0 ml-3 font-display">Growing Impact</p> <br/>
                    <p className="whitespace-nowrap leading-0 pb-3 drop-shadow-record">Our Track Record</p>
                    </span>
            </div>
            <div className="w-[calc(100vw-90px)] md:w-[calc(100vw-150px)] lg:w-[calc(100vw-180px)] xl:w-[calc(100vw-200px)] justify-self-end h-[90vh] grid grid-cols-1 sm:grid-cols-3 items-center justify-center p-2 gap-2 font-display">
                <div className="col-span-1 h-40 lg:h-60 bg-white text-custom flex flex-col items-center justify-center rounded-xl shadow-card">
                    <p className="text-3xl md:text-5xl lg:text-6xl font-semibold">50+</p>
                    <p>cities and expanding</p>
                </div>
                <div className="col-span-1 h-40 lg:h-60 bg-white text-custom flex flex-col items-center justify-center rounded-xl shadow-card">
                    <p className="text-3xl md:text-5xl lg:text-6xl font-semibold">5k+</p>
                    <p>satisfied customers</p>
                </div>
                <div className="col-span-1 h-40 lg:h-60 bg-white text-custom flex flex-col items-center justify-center rounded-xl shadow-card">
                    <p className="text-3xl md:text-5xl lg:text-6xl font-semibold">10k+</p>
                    <p>on-time deliveries</p>
                </div>
            </div>
        </div>
    )
}