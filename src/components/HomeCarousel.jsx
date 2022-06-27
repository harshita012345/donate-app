import React, { useEffect, useRef, useState } from 'react';
import Swiper from 'react-id-swiper';
import { useDispatch, useSelector } from 'react-redux';
import { getSlider } from '../redux/actions/volunteerActions';
// import 'swiper/swiper.min.css'

const SliderOne = () => {
    const dispatch = useDispatch();
    const sliderList = useSelector((state) => state?.getSlider)
    const { loading, sliderData, error } = sliderList;
    console.log("sliderData", sliderData);
    const swiperRef = useRef(null);
    const [swiper, setSwiper] = useState(null);

    const params = {
        initialSlide: 0,
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        spaceBetween: 30,
        loop: false,
        autoplay: true
    };

    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    useEffect(() => {
        dispatch(getSlider());
    }, [dispatch])

    return (
        <section className="slider-area">
            <div className="homepage-slide1">

                <Swiper getSwiper={setSwiper} {...params} ref={swiperRef} >
                    {loading ? "loading ............" :
                        sliderData?.map((slider, i) => {
                            return <div className={`single-slide-item slide-bg${i + 1}`}>
                                <div className="slide-item-table">
                                    <div className="slide-item-tablecell">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-7">
                                                    <div className="slider-heading">
                                                        <p className="slider__meta">{slider?.name}</p>
                                                        <h2 className="slider__title">{slider.desc}</h2>
                                                        <a href="#" className="theme-btn">discover more</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                    {/* <div className="single-slide-item slide-bg2">
                        <div className="slide-item-table">
                            <div className="slide-item-tablecell">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="slider-heading">
                                                <p className="slider__meta">welcome to oxpitan</p>
                                                <h2 className="slider__title">Lend the helping hand get involved</h2>
                                                <a href="#" className="theme-btn">discover more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-slide-item slide-bg3">
                        <div className="slide-item-table">
                            <div className="slide-item-tablecell">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="slider-heading">
                                                <p className="slider__meta">welcome to oxpitan</p>
                                                <h2 className="slider__title">Lend the helping hand get involved</h2>
                                                <a href="#" className="theme-btn">discover more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </Swiper>
                <div className="owl-dots">
                    <div onClick={goNext} className="owl-dot"><span></span></div>
                    <div onClick={goPrev} className="owl-dot"><span></span></div>
                </div>
            </div>
        </section>
    );
};

export default SliderOne;
