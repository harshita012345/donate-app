import React from "react";

import sectionImg from "../assets/Images/section-icon.png";

const MixArea = () => {
    return (
        <section className="mixer-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="section-heading mixer-heading">
                            <div className="section-icon"><img src={sectionImg} alt="section-icon" />
                            </div>
                            <h2 className="section__title text__white">Fundraising for the people and causes you
                                care about</h2><a href="donate" className="theme-btn">start donation</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default MixArea;