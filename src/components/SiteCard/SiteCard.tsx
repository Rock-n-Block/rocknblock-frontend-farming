import {
    FunctionComponent, h
} from 'preact';
import { SiteI } from '../../types';
import styles from './SiteCard.module.scss';
import iconArrow from '../../assets/img/farming/icon-arrow.png';

const SiteCard: FunctionComponent<SiteI> = (props) => {
    const {
        image, title, link
    } = props;

    return (
        <article className={styles.site}>
            <figure className={styles.site__imageWrapper}>
                <img
                    src={image}
                    alt={title}
                    className={styles.site__image}
                />
            </figure>
            <h4 className={styles.site__title}>{title}</h4>
            <a
                className={styles.site__link}
                href={link}
                target='_blank'
                rel='nofollow noreferrer'
            >
                Click here
                <i className={styles.site__linkIcon}>
                    <img
                        src={iconArrow}
                        alt='arrow'
                    />
                </i>
            </a>
        </article>
    );
};

export default SiteCard;
