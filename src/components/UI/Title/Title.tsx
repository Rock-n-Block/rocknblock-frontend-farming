import {
    ComponentChildren, FunctionComponent, h
} from 'preact';
import clsx from 'clsx';
import styles from './Title.module.scss';
import {
    TEXT_ALIGNS, TITLE_TAGS
} from '../../../constants';

interface TitleProps {
    tag: typeof TITLE_TAGS[keyof typeof TITLE_TAGS];
    children: ComponentChildren;
    theme?: typeof TITLE_TAGS[keyof typeof TITLE_TAGS];
    align?: typeof TEXT_ALIGNS[keyof typeof TEXT_ALIGNS];
    className?: string;
    isUppercase?: boolean;
}

const THEME_MAPPER = {
    [TITLE_TAGS.H1]: styles.title_theme_h1,
    [TITLE_TAGS.H2]: styles.title_theme_h2,
    [TITLE_TAGS.H3]: styles.title_theme_h3
};

const ALIGN_MAPPER = {
    [TEXT_ALIGNS.CENTER]: styles.title_align_center,
    [TEXT_ALIGNS.LEFT]: styles.title_align_left,
    [TEXT_ALIGNS.RIGHT]: styles.text_align_right
};

const Title: FunctionComponent<TitleProps> = (props) => {
    const {
        tag: Tag, theme, children, className, align, isUppercase
    } = props;

    return (
        <Tag
            className={clsx(
                styles.title,
                theme && THEME_MAPPER[theme],
                align && ALIGN_MAPPER[align],
                isUppercase && styles.title_transform_uppercase,
                className
            )}
        >
            {children}
        </Tag>
    );
};

export default Title;
