import {
    FunctionComponent, h
} from 'preact';
import {
    ContentWrapper, Title
} from '../../../components';
import {
    CONTENT_TAGS, TEXT_ALIGNS, TITLE_TAGS
} from '../../../constants';
import styles from './HomePageWork.module.scss';
import imageWorkDesktop from '../../../assets/img/farming/img-work-desktop.png';
import imageWorkMobile from '../../../assets/img/farming/img-work-mobile.png';

const HomePageWork: FunctionComponent = () => (
    <ContentWrapper
        tag={CONTENT_TAGS.SECTION}
        classNameWrapper={styles.sectionWork}
    >
        <Title
            tag={TITLE_TAGS.H2}
            theme={TITLE_TAGS.H1}
            align={TEXT_ALIGNS.CENTER}
            className={styles.sectionWork__title}
            isUppercase
        >
            How does DeFi yield
            <br />
            farming work?
        </Title>

        <div className={styles.sectionWork__imageWrapper}>
            <picture className={styles.sectionWork__picture}>
                <source
                    srcSet={imageWorkMobile}
                    media='(max-width: 991px)'
                    className={styles.sectionWork__image}
                />
                <img
                    src={imageWorkDesktop}
                    alt='How does DeFi yield farming work?'
                    className={styles.sectionWork__image}
                />
            </picture>
        </div>
    </ContentWrapper>
);

export default HomePageWork;
