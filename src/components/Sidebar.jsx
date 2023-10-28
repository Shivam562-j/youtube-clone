import React from 'react'
import {
  MdHomeFilled,
  MdOutlineSlowMotionVideo,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineWatchLater,
  MdSubscriptions
} from 'react-icons/md'

import {LuThumbsUp} from 'react-icons/lu'

function Sidebar() {

  const mainLinks = [
    {
      icon: <MdHomeFilled />,
      name: 'Home'
    },
    {
      icon: <MdOutlineSlowMotionVideo />,
      name: 'Shorts'
    },
    {
      icon: <MdSubscriptions />,
      name: 'Subscriptions'
    }
  ]

  const otherLinks = [
    {
      icon: <MdOutlineVideoLibrary />,
      name: 'Library'
    },
    {
      icon: <MdHistory />,
      name: 'History'
    },
    {
      icon: <MdOutlineWatchLater/>,
      name: 'Watch Later'
    },
    {
      icon: <LuThumbsUp/>,
      name: 'Liked Video'
    }
  ]

  return (
    <div className='w-2/12 bg-[#212121] p-2 pr-5 overflow-auto pb-8 h-screen'>
      
      <ul className='flex flex-col border-b-2 border-gray-700'>
        {mainLinks.map(
          ({icon, name}) => {
            return (
              <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 ${name === 'Home' ? "bg-slate-600" : " "}`}>
                <a href='#' className='flex items-center gap-5'>
                  {icon}
                  <span className='text-sm tracking-wider'>{name}</span>
                </a>
              </li>
            )
          }
        )}
      </ul>


    </div>
  )
}

export default Sidebar