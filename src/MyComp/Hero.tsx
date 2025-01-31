import drone from '../assets/droneshot.png'
import cloud from '../assets/rain-clouds.png'
import arrow from '../assets/arrow.png'
import firstCloud from '../assets/cloud.png'
export default function Hero () {
    return (
    <div className='h-[calc(100vh-92px)] w-full relative'>
        <div className='relative pt-15 z-10 h-full flex flex-col text-white items-start gap-2'>
        <span className='sm:text-[25px] pl-1 md:pl-2'>Need something, but...</span>
        <span className='text-[48px] leading-14 sm:text-[60px] md:text-[80px] lg:text-[96px] md:leading-20 drop-shadow-custom'>Late <br></br> Deliveries?</span>
        <span className='pl-1 md:pl-2'>Why don't take your route aerial?</span>

        <div className='relative mt-5'>
            <button  className='bg-custom flex pl-5 gap-2 items-center justify-center rounded-full w-[150px] h-[55px] shadow-topbar relative z-10'>
                <p className='poppins font-medium text-black'>Try Now</p>
                <img 
                src={arrow}
                alt='arrow'
                className='w-1/3'
                />
            </button>
            <img src={firstCloud} alt='cloud behind the button' className='w-40 h-32 absolute -top-1/2'/>
        </div>
        <div className='rounded-full p-4 ring-1 ring-slate-300 mt-5 underline text-xs md:text-base poppins text-slate-200'>10k+ people liked it already</div>
        </div>
        <img src={drone} alt='drone flying' className='absolute z-0 top-1/2 -translate-y-1/2 left-[10%] sm:right-0 sm:left-auto w-full sm:w-[300px] md:w-[600px] lg:w-[750px] xl:w-[900px] min-w-[450px]'/>
        <img src={cloud} className='absolute -top-12 -right-6 lg:-right-12 w-32'/>
    </div>
    )
}