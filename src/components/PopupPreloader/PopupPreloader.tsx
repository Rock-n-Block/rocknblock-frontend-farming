import {
    FunctionComponent, h
} from 'preact';
import styles from './PopupPreloader.module.scss';
import iconLoader from '../../assets/img/farming/icon-loader.svg';

const PopupPreloader: FunctionComponent = () => (
    <div className={styles.preloader}>
        <div className={styles.preloader__iconWrapper}>
            <img
                src={iconLoader}
                alt='loading'
                className={styles.preloader__icon}
            />
        </div>
    </div>
);

export default PopupPreloader;
