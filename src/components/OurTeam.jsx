import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listVolunteers } from "../redux/actions/volunteerActions";
import sectionImg from "../assets/Images/section-icon.png";
import team from "../assets/Images/team.jpg";

const OurTeam = () => {
    const volunteerList = useSelector((state) => state.volunteer);
    const { loading, error, volunteers } = volunteerList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listVolunteers({}));
    }, [dispatch]);
    return(
        <div>
            <section className="team-area text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="section-heading">
                            <div className="section-icon"><img src={sectionImg} alt="section-icon" /></div>
                            <h2 className="section__title">Our Volunteers</h2>
                            <p className="section__meta">meet profesionals</p>
                        </div>
                    </div>
                </div>
                <div className="row team-content-wrap">
                    {loading ? "loading........." :
                        volunteers?.map((data) => {
                            return <div className="col-lg-3 col-sm-6">
                                <div className="team-item team-item1">
                                    <div className="team__img"><img src={data.image} alt="team image" />
                                        <div className="team__img-links">
                                            <ul>
                                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team__title">
                                        <h3 className="team__title-title"><a href="#">{data.name}</a></h3><span
                                            className="team__title-meta">{data.occupation}</span>
                                    </div>
                                </div>
                            </div>
                        })}
                </div>
            </div>
        </section>
        </div>
    )
}
export default OurTeam;