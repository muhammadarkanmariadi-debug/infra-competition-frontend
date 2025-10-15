'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'

import cn from '@/lib/clsx'

import HamburgerIcon from './icons/HamburgerIcon'

interface NavOption {
  title: string
  href: string
}

const navOptions: NavOption[] = [
  { title: 'Beranda', href: '/' },
  { title: 'Tentang Kami', href: '/tentang-kami' },
  { title: 'Program', href: '/program' },
  { title: 'Alumni', href: '/alumni' },
  { title: 'Hubungi Kami', href: '/hubungi-kami' }
]

export default function Navbar () {
  const pathname = usePathname()
  const [isExpanded, setIsExpanded] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll () {
      setScrolled(window.scrollY > 80)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className='top-0 z-[999] xl:relative flex flex-col mx-auto w-full 2xl:text-xl'>
      <div className='z-[999] flex justify-between items-center bg-white xl:bg-transparent mx-auto px-5 py-4 xl:py-0 w-full 2xl:max-w-[1400px] xl:max-w-[1300px]'>
        <Link href={'/'} className='xl:mt-[36px]'>
          <span className='block bg-[url(/assets/image/logo.png)] bg-contain bg-no-repeat w-[130px] h-[39px] text-transparent pointer-events-none select-none'>
            SMK Telkom Malang
          </span>
        </Link>
        <div
          className={cn(
            `fixed hidden left-1/2 scale-[0.9] top-[24.5px] xl:flex xl:items-center justify-between w-full transition-all duration-300 ${
              scrolled
                ? (pathname === '/post' ? 'relative' : 'max-w-[900px] 2xl:max-w-[900px]')
                : '  max-w-[700px] 2xl:max-w-[800px]'
            } -translate-x-1/2 rounded-full border border-neutral-300 bg-white px-[50px] py-3 drop-shadow-[0_3px_6px_rgba(0,0,0,0.25)]`
          )}
        >
          {scrolled && (
            <Link href='/'>
              <Image
                src={'/assets/image/logo.png'}
                alt='Moklet Organization: SMK Telkom Malang'
                width={120}
                height={50}
                className={cn(
                  `pointer-events-none h-[40px] object-contain transition-all duration-300 ${
                    scrolled ? 'w-[120px]' : 'w-0'
                  }`
                )}
              />
            </Link>
          )}
          {navOptions.map(navOption => (
            <Link
              key={navOption.title}
              href={navOption.href}
              // Splitted "/a/b" will form an array: ["", "a", "b"], that's why we use the second index as comparation
              className={cn(
                `py-2 rounded-full text-primary text-center transition-all duration-300 2xl:gap1-0`
              )}
            >
              {navOption.title}
            </Link>
          ))}
        </div>
        <div className='hidden min-xl:flex gap-[9px] mt-[6px] min-xl:ml-[129px]'>
          <Link href={'/registration'} className='min-xl:mt-[36px]'>
            <div className='hidden xl:block bg-primary hover:bg-primary/90 px-4 py-2 rounded-full text-white transition-colors'>
              <h1 className='font-medium'>PPDB</h1>
            </div>
          </Link>
          <Link
            href={'https://www.tiktok.com/@smktelkommalang?is_from_webapp=1&sender_device=pc'}
            className='min-xl:mt-[36px]'
          >
            <div className='hidden xl:block bg-primary rounded-full text-transparent pointer-events-none select-none'>
              <FontAwesomeIcon icon={faTiktok} className='m-2 text-white' />
            </div>
          </Link>
          <Link
            href={'https://www.instagram.com/smktelkommalang?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='}
            className='xl:mt-[36px]'
          >
            <div className='hidden xl:block bg-primary rounded-full text-transparent pointer-events-none select-none'>
              <FontAwesomeIcon icon={faInstagram} className='m-2 text-white' />
            </div>
          </Link>
        </div>
        <button
          className='xl:hidden block'
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <HamburgerIcon />
        </button>
      </div>
      <div
        className={cn(
          `block xl:hidden h-[300px] w-full z-[800] bg-white transition-all duration-500 ${
            isExpanded ? 'mt-0' : ' -mt-120'
          }`
        )}
      >
        <div className='flex flex-col justify-start items-start gap-8 my-[21px] ms-[20px] lg:ms-[52px] text-start'>
          {navOptions.map(navOption => (
            <Link
              key={navOption.title}
              href={navOption.href}
              // Splitted "/a/b" will form an array: ["", "a", "b"], that's why we use the second index as comparation
              className={cn(
                `rounded-full text-center text-[16px] transition-all duration-300 hover:text-primary-400 ${
                  pathname.split('/')[1] === navOption.href.split('/')[1]
                    ? 'text-red-400'
                    : ''
                }`
              )}
              onClick={() => setIsExpanded(false)}
            >
              {navOption.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
