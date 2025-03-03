import PropTypes from 'prop-types';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/component/Popper';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import MenuItems from './MenuItems';
import Header from './Header';

const cx = classNames.bind(styles);

const defaultFn = () => {}; // create default function to avoid error when nothing pass in onChange (or any kind of event listeners)
function Menu({ children, items = [], onChange = defaultFn, hideOnClick = false }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((items, index) => {
            const isParent = !!items.children;
            return (
                <MenuItems
                    key={index}
                    data={items}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, items.children]);
                        } else {
                            onChange(items);
                        }
                    }}
                />
            );
        });
    };

    const onBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    return (
        <Tippy
            hideOnClick={hideOnClick}
            offset={[10, 15]}
            delay={[0, 700]}
            interactive
            placement="bottom-end"
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <div className={cx('tippy-arrow')} data-placement={attrs['data-placement']}></div>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header title={current.title} onBack={onBack}></Header>}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func,
    hideOnClick: PropTypes.bool,
};

export default Menu;
