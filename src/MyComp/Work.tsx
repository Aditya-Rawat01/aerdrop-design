import target from '../assets/accurate.svg'
import support from '../assets/service.svg'
import dollar from '../assets/dollar.svg'
import bg from '../assets/dronebg.png'
export function Work() {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 grid-rows-4 relative text-white font-display">            
            <div className='col-span-1 sm:col-span-3 text-[#FCA424] font-extrabold w-full flex text-2xl sm:text-5xl underline underline-offset-8 lg:text-7xl xl:text-8xl justify-center items-center font-primary'>Our Work Speak For Itself</div>
            <div className='row-span-3 cols-span-1 grid grid-rows-3 h-96'>
                <div className='row-span-1 flex flex-col items-center justify-around'>
                    <img src={target}/>
                    <p className='text-xl text-white'>100% Satisfaction rate</p>
                </div>
                <div className='sm:row-span-2 flex flex-col items-center justify-center sm:justify-start p-5 text-center'>
                    
                    <p>Your happiness is our priority. We’re committed to delivering excellence and won’t rest until you’re completely satisfied.</p>
                </div>
            </div>
            <div className='row-span-3 cols-span-1 grid grid-rows-3 h-96'>
                <div className=' row-span-1 flex flex-col items-center justify-around'>
                    <img src={support}/>
                    <p className='text-xl'>24/7 support</p>
                </div>
                <div className=' sm:row-span-2 flex flex-col items-center justify-center sm:justify-start p-5 text-center'>
                    
                    <p>Always here for you, day or night— our dedicated support team ensures seamless assistance whenever you need it.</p>
                </div>
            </div>
            <div className=' row-span-3 cols-span-1 grid grid-rows-3 h-96'>
                <div className='row-span-1 flex flex-col items-center justify-around'>
                    <img src={dollar}/>
                    <p className='text-xl'>Competitive Prices</p>
                </div>
                <div className='sm:row-span-2 flex flex-col items-center justify-center sm:justify-start p-5 text-center'>
                    
                    <p>Top-tier delivery at prices that won’t break the bank, quality and affordability, perfectly balanced for your convenience.</p>
                </div>
            </div>

        </div>
    )
}