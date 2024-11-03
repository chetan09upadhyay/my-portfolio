import { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import client1 from '../assets/img/client-1.png'
import client2 from '../assets/img/client-2.png'
import client3 from '../assets/img/client-3.jfif'

export const Testimonial = () => {
    useEffect(() => {
        new Swiper(".mySwiper", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }, []);
    return (
        <>
            <section id='testimonial' className="test-container">
                <h2
                    className="client-heading">
                    What my clients are saying?
                </h2>
                <div className="swiper mySwiper" >
                    <div className="swiper-wrapper items-center">
                        <div className="swiper-slide ">
                            <div
                                className="box cursor-grab">
                                <img
                                    className="img" src={client1} alt="testimonial 3" />
                                <div className="testimonial-text ">
                                    <p className="text-sm md:text-base mb-2">
                                        “Chetan is a talented, committed individual who will leave no
                                        stone unturned in his pursuit to provide with the best. His
                                        attention to detail and in-depth experience in the of web
                                        development is indeed commendable. He has exhibited exemplary
                                        skills in the field, and I hope to see all the great projects
                                        coming up!”
                                    </p>
                                    <h2 >
                                        Saatvik Nagpal
                                    </h2>
                                    <h5 className="text-right text-[#459bd5] text-base md:text-lg">
                                        Founder, EazyGrad
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide ">
                            <div
                                className="box cursor-grab">
                                <img
                                    className="img"
                                    src={client2} alt="testimonial 3" />
                                <div className="testimonial-text  ">
                                    <p className="text-sm md:text-base mb-2">
                                        “Chetan was a wonderful developer to work with! He anticipated
                                        everything I need to consider for my website. He also went the
                                        extra mile and added details that I hadn't considered! He is
                                        helping my business grow, and I will definitely work with him
                                        again!”
                                    </p>
                                    <h2 className="text-right text-[#459bd5] font-bold text-2xl md:text-4xl">
                                        Kira Bragg
                                    </h2>
                                    <h5 className="text-right text-[#459bd5] text-base md:text-lg">
                                        English Mentor
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide px-4">
                            <div
                                className="box cursor-grab">
                                <img
                                    className="img"
                                    src={client3} alt="testimonial 3" />
                                <div className="testimonial-text  ">
                                    <p className="text-sm md:text-base mb-2">
                                        “I worked with Anurag to make my website. I am speechless by
                                        looking at his work ethic and dedication. Working with him was
                                        the best decision I made.”
                                    </p>
                                    <h2 className="text-right text-[#459bd5] font-bold text-2xl md:text-4xl">
                                        Srihari Kestur
                                    </h2>
                                    <h5 className="text-right text-[#459bd5] text-base md:text-lg">
                                        Founder Harigurus
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-pagination"></div>

                </div>
            </section>
        </>
    )
}

