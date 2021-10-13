import {
    FunctionalComponent, h
} from 'preact';
import { useState } from 'preact/hooks';

import {
    ContactUs, UpButton, TelegramWidget
} from '../../components';

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
        <div>
            <TelegramWidget />
            {isActive ? <UpButton /> : null}
            <ContactUs title='Get Live Technical Demo' />
        </div>
    );
};

export default HomePage;
