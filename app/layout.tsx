import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import {ContextWrapper} from "../store/useContextFile"
import {Toaster} from "react-hot-toast"
import { FaPhone,FaWhatsapp, FaGithub, FaLinkedin   } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dzanibe Media E-commerce demo',
  description: 'Front End E-Commerce Demo',
  keywords : "malwande dzanibe, ecommerce demo, e-commerce demo, nextJS, next.js, reactJS, react.js, portfolio, project, typescript, javascript, html, css, html5, css3, dzanibe media, frontend, front end, sanity.io"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
          <body className={inter.className} >
          <ContextWrapper>
            <nav>
            <NavBar/>
            </nav>
            <Toaster/>
            {children}
            <footer>
                <div className='socials'>
                    <h4 className='contacts-title'>
                      Contacts
                    </h4>
                    <div className='line'></div>
                      <div className='icons'>
                      <FaPhone className={"icons-style"}/><h4>+ 27 748 031 890</h4>
                      </div>
                      <div >                    
                      <a  className='icons'href="https://wa.me/+27748031890" target="_blank"><FaWhatsapp  className={"icons-style"}/><h4>+ 27 748 031 890</h4></a>
                      </div>
                      <div >
                        <a className='icons' href="mailto:malwandedza@gmail.com" target="_blank">  <SiGmail className={"icons-style"}/><h4>malwandedza@gmail.com</h4></a>
                      </div>
                      <div >
                        <a className='icons' href="https://github.com/Malwande-Dzanibe" target="_blank">
                        <FaGithub className={"icons-style"}/><h4>github.com/Malwande-Dzanibe</h4>
                        </a>
                      </div>
                      <div  >
                        <a className='icons' href="http://www.linkedin.com/mwlite/in/malwande-dzanibe-3550a0261" target="_blank">
                        <FaLinkedin className={"icons-style"}/><h4 className='linked'>www.linkedin.com/mwlite/in/malwande-dzanibe</h4>
                        </a>
                      </div>
                      <div className='line'></div>
                </div>
                <div className='dzanibe'>
                      Dzanibe Media &copy; 2023, All Rights Reserved 
                </div>
            </footer>
            </ContextWrapper>
          </body>
    </html>
  )
}
