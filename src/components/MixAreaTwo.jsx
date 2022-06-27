import React, { useState } from "react";
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';

const MixAreaTwo = () => {
    // const [startCounter, setStartCounter] = useState(false);

    // const onVisibilityChange = isVisible => {
    //     if (isVisible) {
    //         console.log("🚀 ~ file: MixAreaTwo.jsx ~ line 9 ~ MixAreaTwo ~ isVisible", isVisible)
    //         setStartCounter(true);
    //     }
    // }

    return (
        <section className="mixer-area2">
            <div className="container">
                <div className="row fun-content-wrap">
                    <div className="col-lg-6">
                        <div className="fun-content">
                            <div className="fun-item fun-item1"><i className="fa fa-sack-dollar"></i>
                                <h3 className="counter">
                                    {/* <VisibilitySensor offset={{ top: 10 }} partialVisibility delayedCall> */}
                                    {/* <CountUp end={785000} /> */}
                                    {/* {({ isVisible }) => (
                                            isVisible ? <CountUp end={785000} /> : 0
                                        )}
                                    </VisibilitySensor> */}
                                    <CountUp start={0} end={785000} delay={0}>
                                        {({ countUpRef }) => (
                                            <span ref={countUpRef} />
                                        )}
                                    </CountUp>
                                </h3>
                                <p className="fun__text">raised by 6,388 people in 7 days</p>
                            </div>
                        </div>
                        <div className="fun-content">
                            <div className="fun-item fun-item2"><i className="fa fa-hands-holding-child"></i>
                                <h3 className="counter">
                                    {/* <VisibilitySensor offset={{ top: 10 }} partialVisibility delayedCall> */}
                                    {/* <CountUp end={isVisible ? 63000 : 0} /> */}
                                    {/* {({ isVisible }) => (
                                            isVisible ? <CountUp end={63000} /> : 0
                                        )}
                                    </VisibilitySensor> */}
                                    <CountUp start={0} end={63000} delay={0}>
                                        {({ countUpRef }) => (
                                            <span ref={countUpRef} />
                                        )}
                                    </CountUp>
                                </h3>
                                <p className="fun__text">volunteer are available to help you</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="fun-content-slide">
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide fun-slide-item">
                                        <div className="icon-quote">“</div>
                                        <h3 className="funslide__text">Every man must decide whether he will walk in
                                            the light of creative altruism or in the darkness of destructive
                                            selfishness.</h3>
                                        <p className="funslide__name">Martin Luther King, jr</p>
                                    </div>
                                    <div className="swiper-slide fun-slide-item">
                                        <div className="icon-quote">“</div>
                                        <h3 className="funslide__text">Every man must decide whether he will walk in
                                            the light of creative altruism or in the darkness of destructive
                                            selfishness.</h3>
                                        <p className="funslide__name">Martin Luther King, jr</p>
                                    </div>
                                    <div className="swiper-slide fun-slide-item">
                                        <div className="icon-quote">“</div>
                                        <h3 className="funslide__text">Every man must decide whether he will walk in
                                            the light of creative altruism or in the darkness of destructive
                                            selfishness.</h3>
                                        <p className="funslide__name">Martin Luther King, jr</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default MixAreaTwo;