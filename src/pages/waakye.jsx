import waakyeimg from '../assets/waakye.svg'
import logo from '../assets/logo.svg'

function Waakye(){
  return (
    <div className="px-5 min-h-screen w-full bg-no-repeat bg-center bg-cover flex flex-col relative" style={{ backgroundImage: `url(${waakyeimg})` }}>
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      <div className="relative z-10 w-full flex flex-col">
        <div className='bg-transparent px-[128px] py-[24px] text-md flex items-center justify-between w-full font-arial sticky top-0 z-10'>
        <div className='w-full'>
          <img src={logo} alt="Lindros logo" />
        </div>
        <div className='text-white w-full'>
          <ul className='flex justify-end px-20 items-center gap-[32px]'>
            <li className="border-orange-500 border-b-3 w-14 text-center cursor-pointer hover:border-b-2">Home</li>
            <li>Menu</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      <div className="ml-[128px] max-w-[568px] mt-[255px] flex flex-col gap-[30px] flex-grow justify-center">
        <div>
          <h1 className="font-[domine] font-bold text-[100px] text-white">Waakye</h1>
          <p className="w-[568px] h-[180px] font-[poppins] font-medium text-[20px] text-white">Enjoy our delicious Waakye, a perfect blend of rice, beans, and rich flavors cooked to perfection. Made with love and tradition, every plate brings you the true taste of Ghana. Whether for breakfast, lunch, or dinner, Waakye is the hearty meal that satisfies every craving and leaves you wanting more.</p>
        </div>
      </div>
        <div className="flex justify-center items-center gap-[10px] mt-[120px] ml-20">
          <button className="bg-[#7A281A] px-10 py-3 rounded-xl text-white hover:bg-white hover:text-[#7A281A] transition duration-400">Order Now</button>
          <button className="bg-transparent px-10 py-3 rounded-xl text-white ring-1 ring-white hover:bg-white hover:text-[#7A281A] transition duration-400 ">Explore More</button>
        </div>
      </div>
    </div>
  )
}

export default Waakye

