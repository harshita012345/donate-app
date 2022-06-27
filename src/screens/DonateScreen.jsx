import React from "react";
import Footer from "../components/Footer";
import Donate from "../components/Donate";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import "../assets/scss/Donate.scss";

const DonateScreen = () => {
    return (
        <div>
            <Header />
            <PageHeader title="Donate" />
            <Donate />
            <Footer />
        </div>
    )
}
export default DonateScreen;