import clsx from 'clsx';
import {
    ComponentChildren, FunctionComponent, h
} from 'preact';
import { CONTENT_TAGS } from '../../constants';
import styles from './ContentWrapper.module.scss';

interface ContentWrapperProps {
    tag: typeof CONTENT_TAGS[keyof typeof CONTENT_TAGS];
    children: ComponentChildren;
    classNameWrapper?: string;
    className?: string;
}

const ContentWrapper: FunctionComponent<ContentWrapperProps> = (props) => {
    const {
        tag: Tag, children, classNameWrapper, className
    } = props;

    return (
        <div
            className={clsx(
                styles.contentWrapper,
                classNameWrapper
            )}
        >
            <div className={clsx(styles.contentInner)}>
                <Tag
                    className={clsx(
                        styles.content,
                        className
                    )}
                >
                    {children}
                </Tag>
            </div>
        </div>
    );
};

export default ContentWrapper;
