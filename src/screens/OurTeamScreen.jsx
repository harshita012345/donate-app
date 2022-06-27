import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OurTeam from "../components/OurTeam";
import PageHeader from "../components/PageHeader";

const OurTeamScreen = () => {
    return (
        <div>
            <Header />
            <PageHeader title="Our team" />
            <OurTeam />
            <Footer />
        </div>
    )
}
export default OurTeamScreen;