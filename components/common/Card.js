import Link from "next/link"
import { TitleSm } from "./Title"
import { HiOutlineArrowRight } from "react-icons/hi"
import Image from "next/image"
export const Card = ({ data, caption, show, path }) => {
  const blogData = data?.link?.length;
  return (

    (blogData <= 1 ? (<div className='card' >
      <div className='card-img'>
        <img src={data.cover} alt={data.title} />
      </div>
      <div className='card-details'>
        <Link href={`${path}/${data.id}`} className='title-link'>
          <TitleSm title={data.title} />
        </Link>
        {caption && (
          <Link href={`${path}/${data.id}`}>
            {caption} <HiOutlineArrowRight className='link-icon' />
          </Link>
        )}
        <div className='flex'>
          <span> {data.catgeory} </span> {data.date && <span> / {data.date}</span>}
        </div>

        {show && (
          <ul>
            {data.desc.map((text, i) => (
              <li key={i}> - {text.text}</li>
            ))}
          </ul>
        )}
      </div>
    </div>) : (<div className='card' >
      <div className='card-img'>
        <img src={data.cover} alt={data.title} />
      </div>
      <div className='card-details'>
        <Link href={`${data.link}`} className='title-link'>
          <TitleSm title={data.title} />
        </Link>
        {caption && (
          <Link href={`${data.link}`}>
            {caption} <HiOutlineArrowRight className='link-icon' />
          </Link>
        )}
        <div className='flex'>
          <span> {data.catgeory} </span> {data.date && <span> / {data.date}</span>}
        </div>

        {show && (
          <ul>
            {data.desc.map((text, i) => (
              <li key={i}> - {text.text}</li>
            ))}
          </ul>
        )}
      </div>
    </div>))

  )
}
