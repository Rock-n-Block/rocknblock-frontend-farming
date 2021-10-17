import {
    FunctionalComponent, h
} from 'preact';
import {
    ContentWrapper, TextSelection, Title
} from '../../../components';
import {
    CONTENT_TAGS,
    TEXT_ALIGNS,
    TEXT_COLORS,
    TITLE_TAGS
} from '../../../constants';
import styles from './HomePageFarming.module.scss';
import imageFarming from '../../../assets/img/farming/img-farming.png';

const HomePageFarming: FunctionalComponent = () => (
    <ContentWrapper
        tag={CONTENT_TAGS.SECTION}
        classNameWrapper={styles.sectionFarming}
    >
        <Title
            tag={TITLE_TAGS.H1}
            theme={TITLE_TAGS.H1}
            align={TEXT_ALIGNS.CENTER}
            className={styles.sectionFarming__title}
            isUppercase
        >
            <TextSelection color={TEXT_COLORS.ALIZARIN_CRIMSON}>
                Yield Farming
            </TextSelection>
            <br />
            Development Services
        </Title>

        <div className={styles.sectionFarming__imageWrapper}>
            <img
                className={styles.sectionFarming__image}
                src={imageFarming}
                alt='Yield Farming Development Services'
            />
        </div>
    </ContentWrapper>
);

export default HomePageFarming;
