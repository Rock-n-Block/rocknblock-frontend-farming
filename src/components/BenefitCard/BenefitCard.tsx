import {
    FunctionComponent, h
} from 'preact';
import { BenefitsI } from '../../types';
import styles from './BenefitCard.module.scss';

const BenefitCard: FunctionComponent<BenefitsI> = (props) => {
    const {
        icon, title, description
    } = props;

    return (
        <article className={styles.benefit}>
            <figure className={styles.benefit__imageWrapper}>
                <img
                    src={icon}
                    alt={title}
                    className={styles.benefit__image}
                />
            </figure>
            <h4 className={styles.benefit__title}>{title}</h4>
            <p className={styles.benefit__description}>{description}</p>
        </article>
    );
};

export default BenefitCard;
