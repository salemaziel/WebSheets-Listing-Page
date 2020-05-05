import React from 'react'

interface Props {
  title: string
}

const Navbar: React.FC<Props> = ({ title }) => (
  <div>
    <div className="bg-indigo-800 h-2"></div>
    <nav className="container mx-auto py-8 flex text-indigo-800">
      <div className="px-4">
        <span className="font-bold text-lg tracking-tight">{title}</span>
      </div>
    </nav>
  </div>
)

export default Navbar
