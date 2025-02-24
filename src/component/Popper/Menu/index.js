import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/component/Popper';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import MenuItems from './MenuItems';

const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((items, index) => {
            return <MenuItems key={index} data={items} />;
        });
    };

    return (
        <Tippy
            delay={[0, 700]}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
                </div>
            )}
            interactive
            placement="bottom-end"
        >
            {children}
        </Tippy>
    );
}

export default Menu;
