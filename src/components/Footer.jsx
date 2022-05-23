import React from "react";

const Footer = () => {
    return (
        <div>
            <section class="footer-area">
                <div class="footer-top">
                    <div class="container">
                        <div class="row footer-widget-wrap">
                            <div class="col footer-item footer-item1">
                                <h3 class="widget__title">about</h3>
                                <ul class="foot__links">
                                    <li><a href="#">causes</a></li>
                                    <li><a href="/about-us">about</a></li>
                                    <li><a href="#">New Campaign</a></li>
                                    <li><a href="#">Site Map</a></li>
                                    <li><a href="#">Events</a></li>
                                </ul>
                            </div>
                            <div class="col footer-item footer-item2">
                                <h3 class="widget__title">explore</h3>
                                <ul class="foot__links">
                                    <li><a href="#">Press Release</a></li>
                                    <li><a href="/contact-us">contact</a></li>
                                    <li><a href="#">Blog Posts</a></li>
                                    <li><a href="#">Social Connect</a></li>
                                    <li><a href="#">Help Topics</a></li>
                                </ul>
                            </div>
                            <div class="col footer-item footer-item3">
                                <h3 class="widget__title">links</h3>
                                <ul class="foot__links">
                                    <li><a href="#">Podcasts</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Videos</a></li>
                                    <li><a href="#">Terms of Use</a></li>
                                </ul>
                            </div>
                            <div class="col footer-item footer-item3">
                                <h3 class="widget__title">blog</h3>
                                <ul class="foot__links">
                                    <li><a href="#">Care for All People</a></li>
                                    <li><a href="#">Build school for kids</a></li>
                                    <li><a href="#">Being Volunteer</a></li>
                                    <li><a href="#">Raise fund to help</a></li>
                                </ul>
                            </div>
                            <div class="col footer-item footer-item4">
                                <h3 class="widget__title">contact</h3>
                                <ul class="contact__info">
                                    <li>660 Broklyn Street, 88 New York</li>
                                    <li><a href="mailto:jeevandeepfoundationsurat@gmail.com">jeevandeepfoundationsurat@gmail.com</a></li>
                                    <li><a href="tel:6668880000">+91 98799 55855</a></li>
                                </ul>
                                <div class="footer__social">
                                    <ul>
                                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="copyright-desc">
                                    <p>© Copyright {new Date().getFullYear()} by <a href="#">Layerdrops.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div id="back-to-top" class=""><i class="fa fa-angle-up" title="Go top"></i></div>
        </div>
    )
}
export default Footer;