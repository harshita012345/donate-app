import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Map from "../components/Map";
import PageHeader from "../components/PageHeader";

import "../assets/scss/Common.scss";
import "../assets/scss/Contact.scss";
import Contact from "../components/Contact";

const ContactScreen = () => {
    return (
        <>
            <Header />
            <PageHeader title="Contact" />
            <Contact />
            <Map />
            <Footer />
        </>
    )
}

export default ContactScreen;