import {
    FunctionalComponent, h
} from 'preact';
import { Router } from 'preact-router';

import * as smoothscroll from 'smoothscroll-polyfill';

import { useState } from 'preact/hooks';
import Header from './header';
import Footer from './footer';
import HomePage from '../pages/HomePage/HomePage';
import PrivacyPolicyPage from '../pages/PrivacyPolicy';
import TermsPage from '../pages/Terms';
import CompanyPage from '../pages/Company';
import { PopupPreloader } from '.';

if (typeof window !== 'undefined') smoothscroll.polyfill();

const App: FunctionalComponent = () => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div id='preact_root'>
            {isLoading && (
                <PopupPreloader
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                />
            )}
            <Header />
            <Router>
                <HomePage path='/' />
                <PrivacyPolicyPage path='/privacy-policy' />
                <TermsPage path='/terms-of-service' />
                <CompanyPage path='/company' />
            </Router>
            <Footer />
        </div>
    );
};

export default App;
