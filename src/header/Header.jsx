import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='text-center'>
        <Link href={'/home'}>Home</Link>|
        <Link href={'/about'}>About</Link>|
        <Link href={'/course'}>Course</Link>
    </header>
  )
}
