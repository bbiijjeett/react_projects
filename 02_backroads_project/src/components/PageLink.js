import React from 'react'

const PageLink = ({ link, itemClass }) => {
  return (
    <li>
        <a  className={itemClass} href={link.href}  >{link.text}</a>
    </li>
  )
}

export default PageLink