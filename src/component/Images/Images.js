import PropTypes from 'prop-types';

import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Images.module.scss';
import classNames from 'classnames';

const Images = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            onError={handleError}
            {...props}
        />
    );
});

Images.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Images;
