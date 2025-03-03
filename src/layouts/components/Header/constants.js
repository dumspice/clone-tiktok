import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faEarthAsia,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

export const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'jp',
                    title: 'Japanese',
                },
                {
                    code: 'ko',
                    title: 'Korean',
                },
                {
                    code: 'zh',
                    title: 'Chinese',
                },
                {
                    code: 'por',
                    title: 'Portugal',
                },
                {
                    code: 'laos',
                    title: 'Laos',
                },
                {
                    code: 'sing',
                    title: 'Singapore',
                },
                {
                    code: 'thai',
                    title: 'Thailand',
                },
                {
                    code: 'ger',
                    title: 'German',
                },
                {
                    code: 'por',
                    title: 'Portugal',
                },
                {
                    code: 'laos',
                    title: 'Laos',
                },
                {
                    code: 'sing',
                    title: 'Singapore',
                },
                {
                    code: 'thai',
                    title: 'Thailand',
                },
                {
                    code: 'ger',
                    title: 'German',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

export const USER_MENU = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/profile',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/get-coins',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Log out',
        to: '/setting',
        separate: true,
    },
];
