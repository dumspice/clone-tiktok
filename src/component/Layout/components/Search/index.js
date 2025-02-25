import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountItems from '~/component/AccountItems';
import styles from './Search.module.scss';
import { SearchIcon } from '~/component/Icon/index.js';
import { useState, useEffect, useRef } from 'react';
import { useDebounce } from '~/hooks';
import * as searchService from '~/apiServices/searchService';

const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounce = useDebounce(searchValue, 500);

    const ref = useRef();

    // call api in this useEffect, then set search result.
    useEffect(() => {
        if (!debounce) return;

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchService.search(debounce);
            setSearchResult(result);
            setLoading(false);
        };

        fetchApi();

        setLoading(true);
    }, [debounce]);

    const handleClearSearchValue = () => {
        setSearchValue('');
        setSearchResult([]);
        ref.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleSearchChange = (e) => {
        const inputValue = e.target.value;

        if (inputValue.length === 0) {
            setSearchResult([]);
        }

        if (!inputValue.startsWith(' ')) {
            setSearchValue(inputValue);
        }
    };

    return (
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItems key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={ref}
                        value={searchValue}
                        placeholder="Search accounts and videos..."
                        spellCheck={false}
                        onChange={handleSearchChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClearSearchValue}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && <FontAwesomeIcon className={cx('icon-loading')} icon={faSpinner} />}

                    <button className={cx('btn-search')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
