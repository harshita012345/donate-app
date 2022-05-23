/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Carousel } from "react-responsive-carousel";
import Header from "../components/Header";
import Map from "../components/Map";
import OurVolunteer from "../components/OurVolunteer";
import HelpUs from "../components/HelpUs";
import HomeCarousel from "../components/HomeCarousel";

import sectionImg from "../assets/Images/section-icon.png";
import entryVideo from "../assets/Images/entry-video-img.jpg";
import helpingImg from "../assets/Images/helping-img.jpg";
import blog from "../assets/Images/blog-img.jpg";
import blog2 from "../assets/Images/blog-img2.jpg";
import blog3 from "../assets/Images/blog-img3.jpg";
import blog4 from "../assets/Images/blog-img4.jpg";
import Footer from "../components/Footer";

const HomeScreen = () => {
    return (
        <>
            <Header />
            <HomeCarousel />
            <section class="entry-area">
                <div class="container">
                    <div class="row entry-static-wrap">
                        <div class="col-lg-3">
                            <div class="entry-static-box entry-static-box1">
                                <div class="section-icon"><img src={sectionImg} alt="section-icon" /></div>
                                <h4 class="entry__title">Hunger is stalking the globe</h4>
                            </div>
                        </div>
                        <div class="col-lg-9">
                            <div class="entry-static-box entry-static-box2 d-flex align-items-center">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="entry-video-img"><img src={entryVideo} alt="entry-video-img" />
                                            <div class="mfp-iframe video-play-btn" title="Play Video"><i class="fa fa-play"></i></div>
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="entry-video-text">
                                            <h4 class="entry__title">We are here to support you every step of the way.
                                            </h4>
                                            <p class="entry__text">Watch us how we take care of everyone</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <HelpUs />
            <div>
                <section class="mixer-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="section-heading mixer-heading">
                                    <div class="section-icon"><img src={sectionImg} alt="section-icon" />
                                    </div>
                                    <h2 class="section__title text__white">Fundraising for the people and causes you
                                        care about</h2><a href="donate" class="theme-btn">start donation</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="mixer-area2">
                    <div class="container">
                        <div class="row fun-content-wrap">
                            <div class="col-lg-6">
                                <div class="fun-content">
                                    <div class="fun-item fun-item1"><i class="icon-charity"></i>
                                        <h3 class="counter"><span></span></h3>
                                        <p class="fun__text">raised by 6,388 people in 7 days</p>
                                    </div>
                                </div>
                                <div class="fun-content">
                                    <div class="fun-item fun-item2"><i class="icon-cancer"></i>
                                        <h3 class="counter"><span></span></h3>
                                        <p class="fun__text">volunteer are available to help you</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="fun-content-slide">
                                    <div class="swiper-container">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide fun-slide-item">
                                                <div class="icon-quote">“</div>
                                                <h3 class="funslide__text">Every man must decide whether he will walk in
                                                    the light of creative altruism or in the darkness of destructive
                                                    selfishness.</h3>
                                                <p class="funslide__name">Martin Luther King, jr</p>
                                            </div>
                                            <div class="swiper-slide fun-slide-item">
                                                <div class="icon-quote">“</div>
                                                <h3 class="funslide__text">Every man must decide whether he will walk in
                                                    the light of creative altruism or in the darkness of destructive
                                                    selfishness.</h3>
                                                <p class="funslide__name">Martin Luther King, jr</p>
                                            </div>
                                            <div class="swiper-slide fun-slide-item">
                                                <div class="icon-quote">“</div>
                                                <h3 class="funslide__text">Every man must decide whether he will walk in
                                                    the light of creative altruism or in the darkness of destructive
                                                    selfishness.</h3>
                                                <p class="funslide__name">Martin Luther King, jr</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <section class="mixer-area helping-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="section-heading mixer-heading">
                                    <div class="section-icon"><img src={sectionImg} alt="section-icon" />
                                    </div>
                                    <h2 class="section__title">Give a helping hand for homeless childrens</h2>
                                </div>
                                <div class="helping-item">
                                    <div class="row">
                                        <div class="col">
                                            <div class="helping-box helping-box1"><i class="icon-hamburger"></i>
                                                <h4>food</h4>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="helping-box helping-box2"><i class="icon-water-bottle"></i>
                                                <h4>water</h4>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="helping-box helping-box3"><i class="icon-health"></i>
                                                <h4>Medical</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="helping-text-box">
                                    <p class="helping__text">Aliq is notm hendr erit a augue insu image pellen tes que
                                        id erat quis simply free text sollicitud. Lorem ipsum dolor sit amet,
                                        consectetur adipiscing ullam blandit hendrerit faucibus suspendisse. Dolor sit
                                        amet, consectetur adipiscing elit, sed do eiusmod tempor incidi labore et dolore
                                        magna aliqua enim ad minim veniam.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="mixer-area2 helping-area2">
                    <div class="container">
                        <div class="row fun-content-wrap">
                            <div class="col-lg-6">
                                <div class="fun-content">
                                    <div class="fun-item fun-item1"><img src={helpingImg} alt="" /></div>
                                    <div class="section-heading">
                                        <div class="section-icon"><img src={sectionImg}
                                            alt="section-icon" /></div>
                                        <h2 class="section__title">Charity activities are taken place around the world
                                        </h2>
                                        <p class="section__desc">Aliq is notm hendr erit a augue insu image pellen tes
                                            que id erat quis simply free text sollicitud. Lorem ipsum dolor sit not
                                            amet, consectetur adipiscing ullam blandit simply free text hendrerit
                                            faucibus suspendisse.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="helping-form">
                                    <div class="section-heading">
                                        <div class="section-icon"><img src={sectionImg}
                                            alt="section-icon" /></div>
                                        <h2 class="section__title text__white">Make a Donation</h2>
                                        <p class="section__meta text__white">donate us now</p>
                                    </div>
                                    <div class="form-shared">
                                        <form action="#">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div class="form-group"><input type="text" class="form-control"
                                                        placeholder="Insert Custom Value" /></div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="form-group"><input type="text" class="form-control"
                                                        placeholder="Full Name" /></div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="form-group"><input type="email" class="form-control"
                                                        placeholder="Email Address" /></div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="form-group"><input type="text" class="form-control"
                                                        placeholder="Location" /></div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="form-group"><textarea class="textarea" name="message"
                                                        placeholder="Leave a comment"></textarea></div>
                                                </div>
                                                <div class="col-lg-12"><button class="theme-btn submit__btn">continue
                                                    now</button></div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <OurVolunteer />
            <section class="blog-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 mx-auto text-center">
                            <div class="section-heading blog-heading">
                                <div class="section-icon"><img src={sectionImg} alt="section-icon" /></div>
                                <h2 class="section__title">Recent Blog Posts</h2>
                                <p class="section__meta">news and updates</p>
                            </div>
                        </div>
                    </div>
                    <div class="row recent-post-wrap">
                        <div class="col-lg-6">
                            <div class="recent-item">
                                <div class="recent__img"><span class="meta__date-date">09 mar, 2019</span><img
                                    src={blog} alt="service-image" /></div>
                                <div class="news__content">
                                    <h3 class="news__content-title"><a href="single-news">A place where start new life
                                        with peace</a></h3>
                                    <ul class="news__content-list">
                                        <li class="news__content-active__dot"><a href="#">mike hardson</a></li>
                                        <li><a href="#">3 comments</a></li>
                                    </ul>
                                    <p class="news__content-text">Aliq is notm hendr erit a augue insu image pellen tes
                                        que id erat quis sollicitud. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        ullam blandit hendrerit faucibus suspendisse.</p><a href="single-news"
                                            class="theme-btn">read more</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="third-recent-box">
                                <ul class="third-recent-item">
                                    <li>
                                        <div class="recent__img"><a href="single-news"><img src={blog2}
                                            alt="" /></a></div>
                                        <div class="recent__content"><span>07 mar, 2019</span>
                                            <h4><a href="404">Let’s together provide them a healthy food</a></h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="recent__img"><a href="single-news"><img src={blog3}
                                            alt="" /></a></div>
                                        <div class="recent__content"><span>04 mar, 2019</span>
                                            <h4><a href="single-news">Building clean water system for poor</a></h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="recent__img"><a href="single-news"><img src={blog4}
                                            alt="" /></a></div>
                                        <div class="recent__content"><span>30 feb, 2019</span>
                                            <h4><a href="404">Become a volunteer you will feel the benefits </a></h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Map />
            <Footer />
        </>
    );
};
export default HomeScreen;
