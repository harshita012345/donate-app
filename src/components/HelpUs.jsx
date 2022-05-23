import React from "react";

import sectionImg from "../assets/Images/section-icon.png";
import heart1 from "../assets/Images/heart-icon1.png";
import heart2 from "../assets/Images/heart-icon2.png";
import heart3 from "../assets/Images/heart-icon3.png";
import heart4 from "../assets/Images/heart-icon4.png";
import heart5 from "../assets/Images/heart-icon5.png";
import heart6 from "../assets/Images/heart-icon6.png";
import heart7 from "../assets/Images/heart-icon7.png";
import heart8 from "../assets/Images/heart-icon8.png";
import heart9 from "../assets/Images/heart-icon9.png";
import heart10 from "../assets/Images/heart-icon10.png";
import heart11 from "../assets/Images/heart-icon11.png";

const HelpUs = () => {
    return (
        <section class="service-area text-center"><img src={heart1} alt=""
            class="heart-icon heart-icon-1" /><img src={heart2} alt=""
                class="heart-icon heart-icon-2" /><img src={heart3} alt=""
                    class="heart-icon heart-icon-3" /><img src={heart4} alt=""
                        class="heart-icon heart-icon-4" /><img src={heart5} alt=""
                            class="heart-icon heart-icon-5" /><img src={heart6} alt=""
                                class="heart-icon heart-icon-6" /><img src={heart7} alt=""
                                    class="heart-icon heart-icon-7" /><img src={heart8} alt=""
                                        class="heart-icon heart-icon-8" /><img src={heart9} alt=""
                                            class="heart-icon heart-icon-9" /><img src={heart10} alt=""
                                                class="heart-icon heart-icon-10" /><img src={heart11} alt=""
                                                    class="heart-icon heart-icon-11" />
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <div class="section-heading service-heading">
                            <div class="section-icon"><img src={sectionImg} alt="section-icon" /></div>
                            <h2 class="section__title">We Believe that We can Save More Lifes with you</h2>
                            <p class="section__meta">help us now</p>
                        </div>
                    </div>
                </div>
                <div class="row service-wrap">
                    <div class="col">
                        <div class="service-item service-item1">
                            <div class="service-item-inner">
                                <div class="service-icon"><i class="icon-peace-1"></i></div>
                                <div class="service-content">
                                    <h4 class="service__title">hope</h4>
                                    <p class="service__desc">Lorem ipsum is simply free text available in the market
                                        wesbites.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="service-item service-item2">
                            <div class="service-item-inner">
                                <div class="service-icon"><i class="icon-praying"></i></div>
                                <div class="service-content">
                                    <h4 class="service__title">prayers</h4>
                                    <p class="service__desc">Lorem ipsum is simply free text available in the market
                                        wesbites.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="service-item service-item3">
                            <div class="service-item-inner">
                                <div class="service-icon"><i class="icon-peace"></i></div>
                                <div class="service-content">
                                    <h4 class="service__title">peace</h4>
                                    <p class="service__desc">Lorem ipsum is simply free text available in the market
                                        wesbites.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="service-item service-item4">
                            <div class="service-item-inner">
                                <div class="service-icon"><i class="icon-heart"></i></div>
                                <div class="service-content">
                                    <h4 class="service__title">donation</h4>
                                    <p class="service__desc">Lorem ipsum is simply free text available in the market
                                        wesbites.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="button-shared"><a href="donate" class="theme-btn">donate now</a></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HelpUs;