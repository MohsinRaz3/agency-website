"use client"
import { blogdata } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import { Title, TitleSm } from "@/components/common/Title"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"

const SinglePost = () => {
    const router = useRouter()
    const { id } = router.query
    const post = blogdata.find((post) => post.id === parseInt(id))

    const postData = blogdata;

    return (
        <>
            {
                postData.map((post) => (
                    <div key={post.id}>
                        <Head>
                            <title>{post.title}</title>
                        </Head>
                        <section className='post-details bg-top'>
                            <div className='container'>
                                <div className='heading-title'>
                                    <TitleSm title='TIPS & TRICKS / JANUARY 12, 2022' /> <br />
                                    <br />
                                    <Title title={post.title} className='title-bg' />
                                    <div className='img py'>
                                        <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
                                    </div>
                                    <div className='desc'>
                                        <TitleSm title={post.t1} />
                                        <p className='desc-p'> {post.para1}</p>
                                        <p className='desc-p'>{post.para2}</p>
                                        <p className='desc-p'>{post.para3}</p>
                                    </div>
                                </div>
                                <Banner />

                                <div className='heading-title'>
                                    <div className='desc'>
                                        <TitleSm title={post.t2} />

                                        <p className='desc-p'>{post.para4}</p>
                                        <p className='desc-p'>{post.para5}</p>
                                        <p className='desc-p'>{post.para6}</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                ))
            }

        </>
    )
}

export default SinglePost