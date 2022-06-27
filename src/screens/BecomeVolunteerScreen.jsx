import React from 'react';

import "../assets/scss/BecomeVolunteer.scss"
import BecomeVolunteer from '../components/BecomeVolunteer';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';

const BecomeVolunteerScreen = () => {
    return (
        <div>
            <Header />
            <PageHeader title="become a volunteer" />
            <BecomeVolunteer />
            <Footer />
        </div>
    );
};

export default BecomeVolunteerScreen;
