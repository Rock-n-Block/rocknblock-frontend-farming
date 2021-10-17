import {
    FunctionComponent, h
} from 'preact';
import { FaqI } from '../../types';
import styles from './FaqCard.module.scss';

const FaqCard: FunctionComponent<FaqI> = (props) => {
    const {
        title, description
    } = props;

    return (
        <article className={styles.faq}>
            <h4 className={styles.faq__title}>{title}</h4>
            <p className={styles.faq__description}>{description}</p>
        </article>
    );
};

export default FaqCard;
