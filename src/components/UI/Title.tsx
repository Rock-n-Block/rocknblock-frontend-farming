import {
    ComponentChildren, FunctionComponent, h
} from 'preact';
import clsx from 'clsx';
import styles from './Title.scss';
import { TITLE_TAGS } from '../../constants';

interface TitleProps {
    tag: typeof TITLE_TAGS[keyof typeof TITLE_TAGS];
    theme?: typeof TITLE_TAGS[keyof typeof TITLE_TAGS];
    children: ComponentChildren;
    className?: string;
}

const THEME_MAPPER = {
    [TITLE_TAGS.H1]: styles.title_theme_h1,
    [TITLE_TAGS.H2]: styles.title_theme_h2,
    [TITLE_TAGS.H3]: styles.title_theme_h3
};

const Title: FunctionComponent<TitleProps> = (props) => {
    const {
        tag: Tag, theme, children, className
    } = props;

    return (
        <Tag
            className={clsx(
                styles.title,
                theme && THEME_MAPPER[theme],
                className
            )}
        >
            {children}
        </Tag>
    );
};

export default Title;
