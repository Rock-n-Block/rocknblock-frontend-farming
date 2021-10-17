import clsx from 'clsx';
import {
    ComponentChildren, FunctionComponent, h
} from 'preact';
import { TEXT_ALIGNS } from '../../../constants';
import styles from './Paragraph.module.scss';

interface ParagraphProps {
    children: ComponentChildren;
    className?: string;
    align?: typeof TEXT_ALIGNS[keyof typeof TEXT_ALIGNS];
}

const ALIGN_MAPPER = {
    [TEXT_ALIGNS.CENTER]: styles.paragraph_align_center,
    [TEXT_ALIGNS.LEFT]: styles.paragraph_align_left,
    [TEXT_ALIGNS.RIGHT]: styles.paragraph_align_right
};

const Paragraph: FunctionComponent<ParagraphProps> = (props) => {
    const {
        children, className, align
    } = props;

    return (
        <p
            className={clsx(
                styles.paragraph,
                className,
                align && ALIGN_MAPPER[align]
            )}
        >
            {children}
        </p>
    );
};

export default Paragraph;
