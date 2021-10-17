import {
    FunctionComponent, h
} from 'preact';
import {
    ContentWrapper, Paragraph, Title
} from '../../../components';
import PlatformCard from '../../../components/PlatformCard/PlatformCard';
import {
    CONTENT_TAGS, TEXT_ALIGNS, TITLE_TAGS
} from '../../../constants';
import styles from './HomePageRole.module.scss';
import { platforms } from './mock';

const HomePageRole: FunctionComponent = () => (
    <ContentWrapper
        tag={CONTENT_TAGS.SECTION}
        classNameWrapper={styles.sectionRole}
    >
        <Title
            tag={TITLE_TAGS.H2}
            theme={TITLE_TAGS.H2}
            align={TEXT_ALIGNS.CENTER}
            isUppercase
        >
            The Role of Liquidity
            <br />
            provider in Yield Farming:
        </Title>
        <Paragraph
            align={TEXT_ALIGNS.CENTER}
            className={styles.sectionRole__description}
        >
            Yield Farming is not achievable without the liquidity providers who
            stake their deposit in
            <br />
            liquidity pools. The pools act as a smart contract where a buyer and
            seller agreement is
            <br />
            coded and made available in the decentralized blockchain platform!.
            Some of the leading
            <br />
            mining platforms are
        </Paragraph>

        <ul className={styles.sectionRole__platformsWrapper}>
            {platforms.map((platform) => (
                <li
                    className={styles.sectionRole__platform}
                    key={platform.name}
                >
                    <PlatformCard
                        logotype={platform.logotype}
                        logotypeName={platform.logotypeName}
                        name={platform.name}
                    />
                </li>
            ))}
        </ul>

        <div className={styles.sectionRole__more}>
            <span className={styles.sectionRole__moreText}>and more</span>
        </div>
    </ContentWrapper>
);

export default HomePageRole;
