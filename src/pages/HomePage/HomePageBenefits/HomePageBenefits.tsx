import {
    FunctionComponent, h
} from 'preact';
import clsx from 'clsx';
import {
    ContentWrapper, Paragraph, Title
} from '../../../components';
import BenefitCard from '../../../components/BenefitCard/BenefitCard';
import {
    CONTENT_TAGS, TEXT_ALIGNS, TITLE_TAGS
} from '../../../constants';
import { benefits } from './mock';
import styles from './HomePageBenefits.module.scss';
import imageFlower from '../../../assets/img/farming/img-flower.png';

const HomePageBenefits: FunctionComponent = () => (
    <ContentWrapper
        tag={CONTENT_TAGS.SECTION}
        classNameWrapper={styles.sectionBenefits}
    >
        <Title
            tag={TITLE_TAGS.H2}
            theme={TITLE_TAGS.H1}
            align={TEXT_ALIGNS.LEFT}
            className={styles.sectionBenefits__title}
            isUppercase
        >
            What are the
            <br />
            benefits?
        </Title>
        <Paragraph
            align={TEXT_ALIGNS.LEFT}
            className={clsx(
                styles.sectionBenefits__paragraph,
                styles.sectionBenefits__paragraph_indent_bottom
            )}
        >
            The benefits of yield farming are obvious - profit. Farmers who
            start a new project early can be rewarded with tokens, the value of
            which can rise quickly.
        </Paragraph>
        <Paragraph
            align={TEXT_ALIGNS.LEFT}
            className={styles.sectionBenefits__paragraph}
        >
            If they sell these tokens at the right time, a significant profit
            can be made. These profits can be reinvested in other DeFi projects
            to generate even more income.
        </Paragraph>
        <div className={styles.sectionBenefits__imageWrapper}>
            <img
                src={imageFlower}
                alt='What are the benefits?'
                className={styles.sectionBenefits__image}
            />
        </div>
        <section className={styles.sectionBenefits__question}>
            <h4 className={styles.sectionBenefits__questionTitle}>
                How to calculate returns in DeFi yield farming?
            </h4>
            <p>
                When it comes to calculating returns for liquidity providers,
                the following metrics play a crucial role.
            </p>
        </section>
        <ul className={styles.sectionBenefits__benefitsWrapper}>
            {benefits.map((benefit) => (
                <li
                    key={benefit.title}
                    className={styles.sectionBenefits__benefit}
                >
                    <BenefitCard
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                    />
                </li>
            ))}
        </ul>
    </ContentWrapper>
);

export default HomePageBenefits;
