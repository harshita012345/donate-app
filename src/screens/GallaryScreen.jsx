import React from "react";
import Footer from "../components/Footer";
import Gallary from "../components/Gallary";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";

const GallaryScreen = () => {
    return (
        <div>
            <Header />
            <PageHeader title="Gallary" />
            <Gallary />
            <Footer />
        </div>
    )
}
export default GallaryScreen;