import {
    FunctionComponent, h
} from 'preact';
import { Link } from 'preact-router';
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
import styles from './HomePageBuild.module.scss';
import imageCoin from '../../../assets/img/farming/img-coin.png';
import iconArrow from '../../../assets/img/farming/icon-arrow.png';

const HomePageBuild: FunctionComponent = () => (
    <ContentWrapper
        tag={CONTENT_TAGS.SECTION}
        classNameWrapper={styles.sectionBuild}
    >
        <div className={styles.sectionBuild__imageWrapper}>
            <img
                src={imageCoin}
                alt='How to build a DeFi yield farming dApp?'
                className={styles.sectionBuild__image}
            />
        </div>
        <Title
            tag={TITLE_TAGS.H2}
            theme={TITLE_TAGS.H1}
            align={TEXT_ALIGNS.CENTER}
            isUppercase
        >
            How to build a DeFi
            <br />
            <TextSelection color={TEXT_COLORS.ALIZARIN_CRIMSON}>
                yield farming
            </TextSelection>
            {' '}
            dApp?
        </Title>

        <Paragraph
            align={TEXT_ALIGNS.CENTER}
            className={styles.sectionBuild__paragraph}
        >
            As a leading DeFi Development Company, Rock'n'Block have experts in
            delivering a
            <br />
            complete Yield Farming development services & solutions to people
            across the globe!
            <br />
            We offer the outstanding features and functionalities and assuring
            you to provide
            <br />
            highly innovative and immutable DeFi solutions, the team of
            blockchain developers
            <br />
            helps to offers you the best services to launch your own Yield
            Farming platform.
        </Paragraph>

        <Link
            className={styles.sectionBuild__link}
            href='#contact-us'
        >
            Get a Free Quote
            <i className={styles.sectionBuild__linkIcon}>
                <img
                    src={iconArrow}
                    alt='arrow'
                />
            </i>
        </Link>
    </ContentWrapper>
);

export default HomePageBuild;
