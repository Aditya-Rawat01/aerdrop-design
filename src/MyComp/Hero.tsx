import drone from '../assets/droneshot.png'
import cloud from '../assets/rain-clouds.png'
import arrow from '../assets/arrow.png'
import firstCloud from '../assets/cloud.png'
export default function Hero () {
    return (
    
    <div className="w-screen h-screen relative grid grid-cols-12 grid-rows-12 pl-[180px] text-white overflow-x-hidden">
        <div className='row-span-6 row-start-1 col-span-7 col-start-6'><img src={drone} className='h-[800px] w-[900px]' /></div>
        <div className='col-start-1 col-span-6 row-start-4 relative'>
            <p className='text-[18px] pl-2'>Need something but...</p>
            <p className='text-[96px] leading-28 drop-shadow-custom'>Late Deliveries</p>
            <p className='text-[20px] poppins p-2'>Why not take your deliveries aerial?</p>
        </div>
            <div className='row-start-8 col-start-1 col-span-3 relative'>
                <div className='bg-custom shadow-black shadow-2xl w-[200px] h-[60px] rounded-full hover:cursor-pointer text-black absolute z-10 text-2xl font-medium grid grid-cols-12 grid-rows-12'>
                    <p className='col-start-3 col-span-6 row-start-4 poppins'>Try Now</p>
                    <img src={arrow} className='h-12 col-start-9 row-start-2 col-span-4 row-span-8'/>
                   
                </div>
                <img src={firstCloud} className='w-[300px] absolute z-0 -top-14 -left-12'/> 
            </div>
           
        <div className='col-start-12 row-start-2'> <img src={cloud} className='h-36'/></div>
        
    </div>
    )
}