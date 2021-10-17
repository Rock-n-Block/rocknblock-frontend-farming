import {
    FunctionalComponent, h
} from 'preact';
import style from './style.scss';

type TypeInput = 'default' | 'social';

interface Props {
    type?: TypeInput;
    placeholder?: string;
    customStyle?: string;
}

const Input: FunctionalComponent<Props> = ({
    placeholder,
    customStyle,
    type
}) => (
    <input
        className={`${style.input} ${customStyle ?? ''}`}
        placeholder={placeholder}
    />
);

export default Input;
