import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Your Logo
        </Link>
        <div className="flex items-center space-x-4">
          <NavLink href="/about">About</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <Dialog>
            <DialogTrigger asChild>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-black text-white rounded-full"
              >
                Subscribe
              </motion.button>
            </DialogTrigger>
            <DialogContent>
              <h2>Subscribe to our newsletter</h2>
            </DialogContent>
          </Dialog>
        </div>
      </nav>
    </header>
  )
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <Link href={href}>
    <motion.span
      className="relative inline-block cursor-pointer"
      whileHover={{ y: -2 }}
    >
      {children}
      <motion.span
        className="absolute bottom-0 left-0 w-full h-0.5 bg-black"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.span>
  </Link>
)

export default Header