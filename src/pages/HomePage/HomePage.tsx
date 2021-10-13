import {
    FunctionalComponent, h, Fragment
} from 'preact';
import { useState } from 'preact/hooks';

import {
    ContactUs, UpButton, TelegramWidget, Title
} from '../../components';
import { TITLE_TAGS } from '../../constants';

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
            <section>
                <Title tag={TITLE_TAGS.H1} theme={TITLE_TAGS.H1}>
                    Yield Farming
                    <br />
                    Development Services
                </Title>
            </section>
            <TelegramWidget />
            {isActive ? <UpButton /> : null}
            <ContactUs title='Get Live Technical Demo' />
        </Fragment>
    );
};

export default HomePage;
