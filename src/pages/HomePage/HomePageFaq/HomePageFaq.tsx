import clsx from 'clsx';
import {
    FunctionComponent, h
} from 'preact';
import {
    ContentWrapper, Title
} from '../../../components';
import FaqCard from '../../../components/FaqCard/FaqCard';
import {
    CONTENT_TAGS, TEXT_ALIGNS, TITLE_TAGS
} from '../../../constants';
import styles from './HomePageFaq.module.scss';
import { questions } from './mock';

const QUESTION_IN_ROW = 2;

const HomePageFaq: FunctionComponent = () => {
    const questionsLength = questions.length;
    const isNeedFullWidth = questionsLength % QUESTION_IN_ROW === 1;

    return (
        <ContentWrapper
            tag={CONTENT_TAGS.SECTION}
            classNameWrapper={styles.sectionFaq}
        >
            <div className={styles.sectionFaq__inner}>
                <Title
                    tag={TITLE_TAGS.H2}
                    theme={TITLE_TAGS.H1}
                    align={TEXT_ALIGNS.CENTER}
                    isUppercase
                >
                    Faq
                </Title>
                <ul className={styles.sectionFaq__questionsWrapper}>
                    {questions.map((
                        question, index
                    ) => (
                        <li
                            key={question.title}
                            className={clsx(
                                styles.sectionFaq__question,
                                isNeedFullWidth
                                    && index === questionsLength - 1
                                    && styles.sectionFaq__question_width_full
                            )}
                        >
                            <FaqCard
                                title={question.title}
                                description={question.description}
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.ellipseContainer}>
                <div className={styles.ellipse} />
            </div>
        </ContentWrapper>
    );
};

export default HomePageFaq;
