import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import React from "react"
import Team from "@/sections/Team"


const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container' >
          {/* <TitleLogo title='Automation' caption='agency' className='logobg' /> */}
          <h1 className='hero-title'>Empowering <text style={{ "color": "#00DC93" }}>Clinics</text> <br />with AI Automation</h1>

          <div className='sub-heading'>
            <TitleSm title='Collaborate' /> <span>.</span>
            <TitleSm title='Automate' /> <span>.</span>
            <TitleSm title='Accelerate' />
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title="Robust AI chatbot" />
            <p>Automate your customer interaction to increase conversion rates and revenue for your business. We help business with lead generation, appointment booking, customer support, marketing automation.</p>
          </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Team />
      <Banner />
      <Testimonial />
      <ShowCase />
      <Brand />

      <div className='text-center'>
        <Title title='Latest news & articles' />
      </div>
      <BlogCard />
    </>
  )
}

export default Hero
