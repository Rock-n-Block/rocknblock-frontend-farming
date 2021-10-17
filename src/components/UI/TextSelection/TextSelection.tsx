import clsx from 'clsx';
import {
    ComponentChildren, FunctionComponent, h
} from 'preact';
import { TEXT_COLORS } from '../../../constants';
import styles from './TextSelection.module.scss';

interface TextSelectionProps {
    color: typeof TEXT_COLORS[keyof typeof TEXT_COLORS];
    children: ComponentChildren;
}

const COLOR_MAPPER = { [TEXT_COLORS.ALIZARIN_CRIMSON]: styles.text_color_alizarinCrimson };

const TextSelection: FunctionComponent<TextSelectionProps> = (props) => {
    const {
        color, children
    } = props;

    return (
        <span
            className={clsx(
                styles.text,
                color && COLOR_MAPPER[color]
            )}
        >
            {children}
        </span>
    );
};

export default TextSelection;
