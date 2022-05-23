import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../assets/scss/Contact.scss";
import "../assets/scss/Common.scss";

import sectionImg from "../assets/Images/section-icon.png";
import Map from "../components/Map";

const ContactScreen = () => {
    return (
        <>
            <Header />
            <section class="breadcrumb-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breadcrumb-content">
                                <h2 class="breadcrumb__title">Contact</h2>
                                <ul class="breadcrumb__list">
                                    <li class="active__list-item"><a href="/">home</a></li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="contact-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="section-heading">
                                <div class="section-icon"><img src={sectionImg} alt="section-icon" /></div>
                                <h2 class="section__title">Get in Touch With Us</h2>
                                <p class="section__meta">Write a message</p>
                                <p class="section__desc">Aliq is notm hendr erit a augue insu image pellen tes que id
                                    erat quis sollicitud. Lorem ipsum is simply free text dolor sit amet, consectetur
                                    adipiscing ullam blandit hendrerit faucibus suspendisse.</p>
                                <ul class="section__list">
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                    <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-shared">
                                <form action="#" method="post">
                                    <div class="row">
                                        <div class="col-lg-6 col-sm-6 form-group"><input type="text"
                                            class="form-control" name="name" placeholder="Full Name" /></div>
                                        <div class="col-lg-6 col-sm-6 form-group"><input type="email"
                                            class="form-control" name="email" placeholder="Email Address" /></div>
                                        <div class="col-lg-12 form-group"><input type="number" class="form-control"
                                            name="phone" placeholder="Phone Number" /></div>
                                        <div class="col-lg-12 col-sm-12 form-group"><textarea class="textarea"
                                            name="message" placeholder="Write a Message"></textarea></div>
                                        <div class="col-lg-12 col-sm-12"><button class="theme-btn submit__btn"
                                            type="submit">Send Message</button></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="row contact-detail-action">
                        <div class="col-lg-4">
                            <div class="contact-item contact-item1">
                                <h3 class="contact__title">About</h3>
                                <p class="contact__desc">Lorem ipsum is simply free text dolor sit amet, duise
                                    consectetur ullam blandit</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="contact-item contact-item2">
                                <h3 class="contact__title">Address</h3>
                                <p class="contact__desc">660 broklyn street , 88 new york, United states of america</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="contact-item contact-item3">
                                <h3 class="contact__title">Contact</h3>
                                <p class="contact__desc">needhelp@oxpitan.com <br />666 888 000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Map />
            <Footer />
        </>
    )
}

export default ContactScreen;