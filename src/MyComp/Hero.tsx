import drone from '../assets/droneshot.png'
import cloud from '../assets/rain-clouds.png'
import arrow from '../assets/arrow.png'
import firstCloud from '../assets/cloud.png'
import svg1 from '../assets/svg1.svg'
import svg2 from '../assets/svg2.svg'
import svg3 from '../assets/svg3.svg'
export default function Hero () {
    return (
    <div className='h-[calc(100vh-92px)] mt-[92px] w-full relative font-primary px-3 md:px-5 lg:px-12'>
        <div className='relative pt-15 z-10 h-full flex flex-col text-white items-start gap-2'>
        <span className='sm:text-[25px] pl-1 md:pl-2'>Need something, but...</span>
        <span className='text-[48px] leading-14 sm:text-[60px] md:text-[80px] lg:text-[96px] md:leading-20 drop-shadow-custom'>Late <br></br> Deliveries?</span>
        <span className='pl-1 md:pl-2'>Why don't take your route aerial?</span>

        <div className='relative mt-5'>
            <button  className='bg-custom flex pl-5 gap-2 items-center justify-center rounded-full w-[150px] h-[55px] shadow-topbar relative z-10'>
                <p className='font-medium text-black text-lg'>Try Now</p>
                <img 
                src={arrow}
                alt='arrow'
                className='w-1/3'
                />
            </button>
            <img src={firstCloud} alt='cloud behind the button' className='w-40 h-36 absolute -top-3/4'/>
        </div>
        <div className='rounded-full p-4 ring-1 ring-slate-300 mt-12  text-xs md:text-base text-slate-200 relative'>
            <div className='flex'>
                <img src={svg1} className='h-3/4 absolute top-2 left-2'/>
                <img src={svg2} className='h-3/4 absolute top-2 left-8'/>
                <img src={svg3} className='h-3/4 absolute top-2 left-14'/>
            </div>
            <p className='pl-[80px] md:pl-[84px] underline underline-offset-2'>10k+ people liked it already</p>
        
        </div>
        </div>
        <img src={drone} alt='drone flying' className='absolute z-0 top-1/2 -translate-y-1/2 left-[10%] sm:right-0 sm:left-auto w-full sm:w-[300px] md:w-[600px] lg:w-[750px] xl:w-[900px] min-w-[450px]'/>
        <img src={cloud} className='absolute -top-12 -right-6 lg:-right-12 w-32'/>
        <div className='w-full col-span-1 sm:col-span-3 h-1 bg-white rounded-full'></div>

    </div>
    )
}