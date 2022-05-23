import React from "react";

import sectionImg from "../assets/Images/section-icon.png";
import team from "../assets/Images/team.jpg";
import team2 from "../assets/Images/team2.jpg";
import team3 from "../assets/Images/team3.jpg";
import team4 from "../assets/Images/team4.jpg";

const OurVolunteer = () => {
    return (
        <section class="team-area text-center">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <div class="section-heading">
                            <div class="section-icon"><img src={sectionImg} alt="section-icon" /></div>
                            <h2 class="section__title">Our Volunteers</h2>
                            <p class="section__meta">meet profesionals</p>
                        </div>
                    </div>
                </div>
                <div class="row team-content-wrap">
                    <div class="col-lg-3 col-sm-6">
                        <div class="team-item team-item1">
                            <div class="team__img"><img src={team} alt="team image" />
                                <div class="team__img-links">
                                    <ul>
                                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="team__title">
                                <h3 class="team__title-title"><a href="#">Jessica Brown</a></h3><span
                                    class="team__title-meta">student</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="team-item team-item2">
                            <div class="team__img"><img src={team2} alt="team image" />
                                <div class="team__img-links">
                                    <ul>
                                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="team__title">
                                <h3 class="team__title-title"><a href="#">yoni albert</a></h3><span
                                    class="team__title-meta">volunteer</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="team-item team-item3">
                            <div class="team__img"><img src={team3} alt="team image" />
                                <div class="team__img-links">
                                    <ul>
                                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="team__title">
                                <h3 class="team__title-title"><a href="#">christine eve</a></h3><span
                                    class="team__title-meta">co founder</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="team-item team-item4">
                            <div class="team__img"><img src={team4} alt="team image" />
                                <div class="team__img-links">
                                    <ul>
                                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="team__title">
                                <h3 class="team__title-title"><a href="#">david hardson</a></h3><span
                                    class="team__title-meta">student</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurVolunteer;