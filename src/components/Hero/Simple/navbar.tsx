import React from 'react'
import { Theme } from '../../../utils/models'

interface Props {
  title: string
  theme: Theme
  isDarkMode: boolean
  handleDarkModeClick: () => void
}

const Navbar: React.FC<Props> = ({ title, isDarkMode, handleDarkModeClick }) => {
  const darkModeIcon = isDarkMode ? 'fa-sun' : 'fa-moon'
  return (
    <div>
      <nav className={`container mx-auto py-8 flex`}>
        <div className="px-4 flex">
          <span className={`font-bold text-lg tracking-tight text-gray-100 cursor-default`}>{title}</span>
        </div>
        <div className="flex-grow"></div>
        <div className={`flex px-4 text-gray-100`}>
          <i className={`fas ${darkModeIcon} text-2xl`} onClick={() => handleDarkModeClick()}></i>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
