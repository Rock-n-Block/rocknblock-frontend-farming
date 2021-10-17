import {
    Fragment, FunctionalComponent, h
} from 'preact';
import { useState } from 'preact/hooks';
import style from './style.scss';

interface Social {
    name: string;
    iconUrl?: string;
}

const socials: Social[] = [
    {
        name: 'Telegram',
        iconUrl: '../../../assets/img/icons/telegram.svg'
    },
    {
        name: 'E-mail',
        iconUrl: '../../../assets/img/icons/email.svg'
    },
    {
        name: 'Discord',
        iconUrl: '../../../assets/img/icons/discord.svg'
    },
    { name: 'Other' }
];

interface PropsSocialBtn {
    social: Social;
    isCurrent?: boolean;
    action(): void;
}

interface SocisalsProps {
    onChangeSocial(social: string): void;
    customStyleSocials?: string;
}

const Socials: FunctionalComponent<SocisalsProps> = ({
    onChangeSocial,
    customStyleSocials
}: SocisalsProps) => {
    const [isVisibleList, setVisibleList] = useState(false);
    const [currentSocial, setCurrentSocial] = useState<Social>(socials[1]);

    const Social: FunctionalComponent<PropsSocialBtn> = ({
        social,
        action,
        isCurrent = false
    }: PropsSocialBtn) => (
        <div
            className={`${style.socBlock} ${customStyleSocials}`}
            onClick={action}
        >
            {social.iconUrl ? (
                <img
                    className={style.socIcon}
                    src={social.iconUrl}
                />
            ) : null}
            <label className={style.socName}>{social.name}</label>
            {isCurrent ? (
                <img
                    className={style.downIcon}
                    src='../../../assets/img/icons/down.svg'
                />
            ) : null}
        </div>
    );

    const SocialList: FunctionalComponent = () => (
        <div className={style.socList}>
            {socials.map((
                item, i
            ) => (
                <Social
                    key={i}
                    social={item}
                    action={(): void => {
                        setVisibleList(false);
                        setCurrentSocial(item);
                        onChangeSocial(item.name);
                    }}
                />
            ))}
        </div>
    );

    return (
        <div>
            <div className={style.block}>
                <Social
                    social={currentSocial}
                    isCurrent
                    action={(): void => {
                        setVisibleList(!isVisibleList);
                    }}
                />
                {isVisibleList ? <SocialList /> : null}
            </div>
        </div>
    );
};

export interface PropsSocialInput {
    value: string;
    onChangeInput(contact: any): void;
    onChangeSocial(social: string): void;
    type?: string;
    placeholder?: string;
    customStyleInput?: string;
    customStyleBlock?: string;
    customStyleSocials?: string;
}

const SocialInput: FunctionalComponent<PropsSocialInput> = ({
    value,
    placeholder,
    type,
    customStyleInput,
    customStyleBlock,
    customStyleSocials,
    onChangeInput,
    onChangeSocial
}: PropsSocialInput) => (
    <Fragment>
        <div className={`${style.inputBlock} ${customStyleBlock}`}>
            <input
                className={`${style.input} ${customStyleInput}`}
                placeholder={placeholder}
                type={type ?? 'text'}
                value={value}
                onInput={(event: any): void => onChangeInput(String(event?.target?.value))}
            />
        </div>
        <Socials
            customStyleSocials={customStyleSocials}
            onChangeSocial={onChangeSocial}
        />
    </Fragment>
);

export default SocialInput;
