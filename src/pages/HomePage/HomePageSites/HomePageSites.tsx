import {
    Fragment, FunctionComponent, h
} from 'preact';
import {
    Swiper, SwiperSlide
} from 'swiper/react';
import 'swiper/swiper.min.css';
import {
    ContentWrapper, SiteCard, Title
} from '../../../components';
import {
    CONTENT_TAGS, TEXT_ALIGNS, TITLE_TAGS
} from '../../../constants';
import styles from './HomePageSites.module.scss';
import { otherSites } from './mock';

const HomePageSites: FunctionComponent = () => (
    <Fragment>
        <ContentWrapper
            tag={CONTENT_TAGS.SECTION}
            classNameWrapper={styles.sectionSites}
        >
            <Title
                tag={TITLE_TAGS.H2}
                theme={TITLE_TAGS.H3}
                align={TEXT_ALIGNS.CENTER}
                className={styles.sectionSites__title}
                isUppercase
            >
                HEad
            </Title>
        </ContentWrapper>
        <div className={styles.sliderWrapper}>
            <Swiper
                slidesPerView='auto'
                centeredSlides
                grabCursor
                className={styles.slider}
                loop
            >
                {otherSites.map((site) => (
                    <SwiperSlide className={styles.slide}>
                        <SiteCard
                            image={site.image}
                            title={site.title}
                            link={site.link}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </Fragment>
);

export default HomePageSites;
