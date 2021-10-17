import {
    FunctionComponent, h
} from 'preact';
import {
    ContentWrapper,
    Paragraph,
    TextSelection,
    Title
} from '../../../components';
import {
    CONTENT_TAGS,
    TEXT_ALIGNS,
    TEXT_COLORS,
    TITLE_TAGS
} from '../../../constants';
import styles from './HomePageWhatIs.module.scss';
import imgRays from '../../../assets/img/farming/img-rays.png';
import imgRoad from '../../../assets/img/farming/img-road.png';

const HomePageWhatIs: FunctionComponent = () => (
    <ContentWrapper
        tag={CONTENT_TAGS.SECTION}
        classNameWrapper={styles.sectionWhatIs}
    >
        <Title
            tag={TITLE_TAGS.H2}
            theme={TITLE_TAGS.H1}
            align={TEXT_ALIGNS.CENTER}
            className={styles.sectionWhatIs__title}
            isUppercase
        >
            What is
            <br />
            Yield
            {' '}
            <TextSelection color={TEXT_COLORS.ALIZARIN_CRIMSON}>
                Farming
            </TextSelection>
            ?
        </Title>
        <Paragraph
            align={TEXT_ALIGNS.CENTER}
            className={styles.sectionWhatIs__description}
        >
            Income farming is the practice of placing or locking in
            cryptocurrency in
            <br />
            exchange for rewards. While the expectation of return on investment
            is
            <br />
            nothing new, the general concept of "yield farming" emerged from the
            <br />
            decentralized financial sector.
        </Paragraph>
        <div className={styles.sectionWhatIs__imageRoadWrapper}>
            <img
                src={imgRoad}
                alt='What is Yield Farming'
                className={styles.sectionWhatIs__imageRoad}
            />
        </div>
        <div className={styles.sectionWhatIs__imageRaysWrapper}>
            <img
                src={imgRays}
                alt='What is Yield Farming'
                className={styles.sectionWhatIs__imageRays}
            />
        </div>
    </ContentWrapper>
);

export default HomePageWhatIs;
