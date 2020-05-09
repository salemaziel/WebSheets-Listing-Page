import React, { useState } from 'react'
import { SiteData, Theme } from '../../models'

interface Props {
  siteData: SiteData
  theme: Theme
}

const ShareButton: React.FC<Props> = ({ siteData, theme }) => {
  const { siteName, brandColor } = siteData
  const { primary, text, altText, altBackground, customShadow } = theme

  const siteUrl = document.querySelector('link[rel=canonical]')
    ? document.querySelector('link[rel=canonical]').href
    : document.location.href

  const [isOpen, setIsOpen] = useState(false)

  const navigatorShare = () => {
    navigator.share({
      title: siteName,
      url: siteUrl,
    })
  }

  const customShare = () => {
    setIsOpen(!isOpen)
  }

  const handleShareButtonClick = () => {
    if (navigator.share) {
      navigatorShare()
    } else {
      customShare()
    }
  }

  const renderSharePlatforms = () => {
    const sharePlatforms = [
      {
        name: 'Facebook',
        faClass: 'fa-facebook',
        url: `https://www.facebook.com/sharer/sharer.php?u=${siteUrl}`,
      },
      {
        name: 'Twitter',
        faClass: 'fa-twitter',
        url: `https://api.whatsapp.com/send?text=${siteUrl}`,
      },
      {
        name: 'Telegram',
        faClass: 'fa-telegram',
        url: `https://telegram.me/share/url?url=${siteUrl}`,
      },
      {
        name: 'Whatsapp',
        faClass: 'fa-whatsapp',
        url: `https://twitter.com/share?url=${siteUrl}`,
      },
    ]

    return sharePlatforms.map((platform) => (
      <a
        href={platform.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`block px-4 py-2 ${text} hover:bg-${brandColor}-500 hover:${altText}`}
        key={platform.faClass}
      >
        <i className={`fab ${platform.faClass} text-xl mr-2`}></i>
        {platform.name}
      </a>
    ))
  }

  return (
    <div className="relative ml-4 inline w-screen py-4">
      <a
        className={`border border-${primary} text-${primary} text-gray-100 py-3 px-6 rounded-lg cursor-pointer`}
        onClick={() => handleShareButtonClick()}
        onMouseOver={() => setIsOpen(true)}
        onMouseOut={() => setIsOpen(false)}
      >
        Share page
        <i className="fas fa-share ml-2"></i>
      </a>
      <div
        className={`${altBackground} rounded ${customShadow} absolute right-0 rounded-lg mt-2 ${
          isOpen ? 'block' : 'hidden'
        }`}
        onMouseOver={() => setIsOpen(true)}
        onMouseOut={() => setIsOpen(false)}
      >
        {renderSharePlatforms()}
      </div>
    </div>
  )
}

export default ShareButton
