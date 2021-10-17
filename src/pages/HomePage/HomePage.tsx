import {
    FunctionalComponent, h, Fragment
} from 'preact';
import { useState } from 'preact/hooks';

import {
    ContactUs, UpButton, TelegramWidget
} from '../../components';
import HomePageBenefits from './HomePageBenefits/HomePageBenefits';
import HomePageBuild from './HomePageBuild/HomePageBuild';
import HomePageFaq from './HomePageFaq/HomePageFaq';
import HomePageFarming from './HomePageFarming/HomePageFarming';
import HomePageRole from './HomePageRole/HomePageRole';
import HomePageSites from './HomePageSites/HomePageSites';
import HomePageWhatIs from './HomePageWhatIs/HomePageWhatIs';
import HomePageWork from './HomePageWork/HomePageWork';

const HomePage: FunctionalComponent = () => {
    const [isActive, setIsActive] = useState(false);

    if (typeof window !== 'undefined') {
        window.onscroll = (): void => {
            if (
                document.body.scrollTop > 500
                || document.documentElement.scrollTop > 500
            ) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        };
    }

    return (
        <Fragment>
            <HomePageFarming />
            <HomePageWhatIs />
            <HomePageRole />
            <HomePageWork />
            <HomePageBenefits />
            <HomePageBuild />
            <HomePageFaq />
            <HomePageSites />

            <TelegramWidget />
            {isActive ? <UpButton /> : null}
            <ContactUs title='Get Live Technical Demo' />
        </Fragment>
    );
};

export default HomePage;
