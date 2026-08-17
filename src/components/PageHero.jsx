import React from 'react'
import Badge from './Badge'

const PageHero = ({
  badgeText,
  badgeBg = 'bg-container text-white',
  title,
  description,
  bg = 'bg-primary',
  textColor = 'text-white',
  descColor = 'text-primary-light',
  padding = 'pt-24 pb-20 px-6 md:px-12',
  children
}) => {
  return (
    <section className={`${bg} relative overflow-hidden ${padding}`}>
      <div className="max-w-7xl mx-auto relative z-10">
        {badgeText && (
          <div className="mb-6">
            <Badge bg={badgeBg}>{badgeText}</Badge>
          </div>
        )}
        {title && (
          <h1 className={`text-4xl md:text-6xl font-extrabold ${textColor} mb-6 leading-tight max-w-3xl`}>
            {title}
          </h1>
        )}
        {description && (
          <p className={`${descColor} text-lg max-w-xl leading-relaxed`}>
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}

export default PageHero
