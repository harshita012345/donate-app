import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Map from "../components/Map";
import OurVolunteer from "../components/OurVolunteer";
import HelpUs from "../components/HelpUs";

import "../assets/scss/About.scss";
import "../assets/scss/Common.scss";

import sectionImg from "../assets/Images/section-icon.png";
import about1 from "../assets/Images/about-img.jpg";
import about2 from "../assets/Images/about-img2.jpg";
import faqImg from "../assets/Images/faq-img.jpg";

const AboutUsScreen = () => {
    return (
        <>
            <Header />
            <section class="breadcrumb-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breadcrumb-content">
                                <h2 class="breadcrumb__title">About</h2>
                                <ul class="breadcrumb__list">
                                    <li class="active__list-item"><a href="/">home</a></li>
                                    <li>About</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="about-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="about-large-img"><img src={about1} alt="" /></div>
                        </div>
                        <div class="col-lg-5">
                            <div class="about-semi-img"><img src={about2} alt="" /></div>
                        </div>
                        <div class="col-lg-7">
                            <div class="about-heading">
                                <div class="section-heading">
                                    <div class="section-icon"><img src={sectionImg} alt="section-icon" />
                                    </div>
                                    <h2 class="section__title">Discover About Oxpitan</h2>
                                    <p class="section__meta">learn about non profit agency</p>
                                    <p class="section__desc">Tincidunt elit magnis nulla facilisis sagittis maecenas.
                                        Sapien nunced amet ultrices, dolores sit ipsum velit purus aliquet, massa
                                        fringilla leo orcium dolors sit amet elit magnis amet ultrices lorem ipsum is
                                        simply free text purusrfed aliquet. Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                                        natoque penatibus et magnis dis parturient montes, nascetur ridiculus. penatibus
                                        et magnis dis parturient montes, nascetur ridiculus.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <OurVolunteer />
            <section class="faq-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="section-heading">
                                <div class="section-icon"><img src={sectionImg} alt="section-icon" /></div>
                                <h2 class="section__title">Have any Question?</h2>
                                <p class="section__meta">frequently asked questions</p>
                            </div>
                            <div class="faq-img-box"><img src={faqImg} alt="" /></div>
                        </div>
                        <div class="col-lg-6">
                            <div class="accordion-container">
                                <div class="ac">
                                    <h2 class="ac-q" tabindex="0">Make a difference in the life of a child</h2>
                                    <div class="ac-a">
                                        <p class="accordion__content-desc">Suspendisse finibus urna mauris, vitae
                                            consequat quam blandit vel. Vestibulum leo ligula, molestie ullamcorper
                                            vulputate vitae sodales commodo nisl. Nulla facilisi. Pellentesque est
                                            metus. There are many variations of eration in some form.</p>
                                    </div>
                                </div>
                                <div class="ac">
                                    <h2 class="ac-q" tabindex="0">Let’s do the right thing now</h2>
                                    <div class="ac-a">
                                        <p class="accordion__content-desc">Suspendisse finibus urna mauris, vitae
                                            consequat quam blandit vel. Vestibulum leo ligula, molestie ullamcorper
                                            vulputate vitae sodales commodo nisl. Nulla facilisi. Pellentesque est
                                            metus. There are many variations of eration in some form.</p>
                                    </div>
                                </div>
                                <div class="ac">
                                    <h2 class="ac-q" tabindex="0">Join your hand with us for a better life</h2>
                                    <div class="ac-a">
                                        <p class="accordion__content-desc">Suspendisse finibus urna mauris, vitae
                                            consequat quam blandit vel. Vestibulum leo ligula, molestie ullamcorper
                                            vulputate vitae sodales commodo nisl. Nulla facilisi. Pellentesque est
                                            metus. There are many variations of eration in some form.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <HelpUs />
            <Map />
            <Footer />
        </>
    )
}

export default AboutUsScreen;