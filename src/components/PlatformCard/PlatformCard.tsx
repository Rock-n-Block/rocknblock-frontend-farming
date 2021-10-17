import {
    FunctionComponent, h
} from 'preact';
import { PlatformsI } from '../../types';
import styles from './PlatformCard.module.scss';

const PlatformCard: FunctionComponent<PlatformsI> = (props) => {
    const {
        logotype, logotypeName, name
    } = props;

    return (
        <article className={styles.card}>
            <figure className={styles.card__logotypeWrapper}>
                <img
                    className={styles.card__logotype}
                    src={logotype}
                    alt={name}
                />
            </figure>
            <img
                className={styles.card__logotypeName}
                src={logotypeName}
                alt={name}
            />
        </article>
    );
};

export default PlatformCard;
