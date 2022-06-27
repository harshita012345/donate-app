/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import Header from "../components/Header";
import Map from "../components/Map";
import OurVolunteer from "../components/OurVolunteer";
import HelpUs from "../components/HelpUs";
import HomeCarousel from "../components/HomeCarousel";
import Footer from "../components/Footer";
import EntryArea from "../components/EntryArea";
import MixArea from "../components/MixArea";
import MixAreaTwo from "../components/MixAreaTwo";
import HelpingArea from "../components/HelpingArea";
import BlogHome from "../components/BlogHome";

const HomeScreen = () => {
    return (
        <>
            <Header />
            <HomeCarousel />
            <EntryArea />
            <HelpUs />
            <div>
                <MixArea />
                <MixAreaTwo />
            </div>
            <HelpingArea />
            <OurVolunteer />
            <BlogHome />
            <Map />
            <Footer />
        </>
    );
};
export default HomeScreen;
