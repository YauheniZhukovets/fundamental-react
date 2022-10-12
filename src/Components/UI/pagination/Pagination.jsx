import React from 'react';
import s from './Pagination.module.css'
import {usePagination} from "../../../hooks/usePagination";

export const Pagination = ({totalPage, currentPage, onClickCallback}) => {

    const pagesArray = usePagination(totalPage)

    return (
        <div className={s.page__wrapper}>
            {pagesArray && pagesArray.map(p => (
                <span onClick={() => onClickCallback(p)}
                      className={p === currentPage ? `${s.page} ${s.pageCurrent}` : s.page}
                      key={p}
                >
                        {p}
                    </span>
            ))}
        </div>
    )
}
