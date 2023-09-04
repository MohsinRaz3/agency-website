import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"

const Expertise = () => {
  return (
    <>
      <section className='expertise'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Meet The Team' />
            <p>

              Our team, with diverse background in AI powered chatbot application, Data science, Scaleble Web Application with cutting-edge technologies, is your ideal partner for seamless AI integration, whether you’re a small business, startup or an enterprise.
            </p>

          </div>


          {/* <div className='hero-content grid-4'>
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption='learn more' />
            ))}
          </div> */}
        </div>
      </section>
    </>
  )
}

export default Expertise
