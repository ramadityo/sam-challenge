import { useState } from 'react'
import viteLogo from '/vite.svg'
import 'remixicon/fonts/remixicon.css'

function MobileLayer({ children }) {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-full h-screen flex bg-[#0a0a0a] relative overflow-hidden">
        <img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-hutao/sticker_12.png?2c9966a5520fdab6c03fda5ca193f388" alt="" width="300px" className='absolute -bottom-[2rem] -right-[2rem] -rotate-[20deg]' />
        <img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-furina/sticker_2.png?68f63bbc1d6e6364cc00236bdfde6367" alt="" width="300px" className='absolute -bottom-[2rem] -left-[2rem] rotate-[20deg]' />
        {/* bg-[#f5f3f0] */}
        <div className="relative z-10 m-auto w-[360px] h-[800px] break-words bg-white scale-1 rounded-xl overflow-hidden">
          
          {/* INI NAVBAR */}
          <div className='px-2 w-full h-[20px] flex justify-between items-center'>
            <p className='font-bold text-xs'>9:41</p>

            <div className="flex items-center gap-2 text-xs">
                <i class="ri-base-station-fill"></i>
                <i class="ri-wifi-fill"></i>
                <i class="ri-battery-fill"></i>
            </div>
          </div>
          {/* END OF NAVBAR */}

          { children }

        </div>
      </div>
    </>
  )
}

export default MobileLayer
