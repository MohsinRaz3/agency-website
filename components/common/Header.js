import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { RiMenu4Line } from "react-icons/ri"
import { AiOutlineClose } from "react-icons/ai"
import Image from "next/image"

const Header = () => {
  const [activeLink, setActiveLink] = useState("")
  const [open, setOpen] = useState(false)

  const router = useRouter()
  useEffect(() => {
    setActiveLink(router.pathname)
  }, [router.pathname])
  return (
    <>
      <header>
        <div className='container'>
          <div className='logo'>
            <Link href='/'>
              <Image src="/images/logo1.png" alt="logo" width={100} height={30} />
            </Link>
          </div>
          <nav className={open ? "openMenu" : "closeMenu"} onClick={() => setOpen(null)}>
            <Link href='/' className={activeLink == "/" ? "activeLink" : "none"}>
              Home
            </Link>

            <Link href='/services' className={activeLink == "/services" ? "activeLink" : "none"}>
              Services
            </Link>

            <Link href='/blogs' className={activeLink == "/blogs" ? "activeLink" : "none"}>
              Blog
            </Link>
            <Link href='/contact' className={activeLink == "/contact" ? "activeLink" : "none"}>
              Contact
            </Link>
            <Link href={"https://calendly.com/migolab/discovery-meeting"}>    <button className='button-primary'>book a consultation</button> </Link>
          </nav>
          <button style={{ cursor: "pointer" }} onClick={() => setOpen(!open)}>{open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}</button>
        </div>
      </header>
    </>
  )
}

export default Header
