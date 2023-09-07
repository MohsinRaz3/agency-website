import React from "react"
import { TitleLogo } from "./common/Title"
import Link from "next/link"
const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            <h2>We are looking forward to start a new project</h2> <br />
            <TitleLogo title='Lets take your business to the next level!' />
          </div>
          <div>
            <Link href={"https://calendly.com/migolab/discovery-meeting"}> <button className='button-primary'>Request a meeting</button></Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
