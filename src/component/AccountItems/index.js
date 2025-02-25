import classNames from 'classnames/bind';
import styles from './AccountItems.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Images from '~/component/Images';

const cx = classNames.bind(styles);
function AccountItems() {
    return (
        <div className={cx('wrapper')}>
            <Images
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/b3f94f259cd0a34e39bd0a180dcc408e~tplv-tiktokx-cropcenter:300:300.webp?dr=14577&nonce=56105&refresh_token=796d26d5d58af278f56468ffca8c42f8&x-expires=1740243600&x-signature=2FJA5GFJWhkY80RNOxy0u%2F7mBBM%3D&idc=my&ps=13740610&shcp=c1333099&shp=a5d48078&t=4d5b0474"
                alt="Hoa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nva</span>
            </div>
        </div>
    );
}

export default AccountItems;
