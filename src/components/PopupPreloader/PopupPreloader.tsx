import {
    FunctionComponent, h
} from 'preact';
import { useEffect } from 'preact/hooks';
import styles from './PopupPreloader.module.scss';
import iconLoader from '../../assets/img/farming/icon-loader.svg';

interface PopupPreloaderProps {
    isLoading: boolean;
    setIsLoading(val: boolean): void;
}

const PopupPreloader: FunctionComponent<PopupPreloaderProps> = (props) => {
    const {
        isLoading, setIsLoading
    } = props;

    useEffect(
        () => {
            if (isLoading) {
                setTimeout(
                    () => {
                        setIsLoading(!isLoading);
                    },
                    2000
                );
            }
        },
        []
    );

    return (
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
};

export default PopupPreloader;
