import React from 'react';
import MyButton from '../MyButton';
import "./pagination.scss"
import { isMobile } from "react-device-detect"

const Pagination = ({ portionSize = 10, ...props }) => {

    if (isMobile) {
        portionSize = 5;
    }

    let pages = []
    const pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = React.useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize


    return (
        <div className="pagination">
            <MyButton onClick={() => setPortionNumber(portionNumber - 1)} disabled={portionNumber === 1}>
                Назад
            </MyButton>

            <div className="pagination_pages">
                {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => <PaginationItem p={p} onPageChange={props.onPageChange}
                        currentPage={props.currentPage} key={p} />)
                }
            </div>

            {portionCount > portionNumber && <MyButton onClick={() => setPortionNumber(portionNumber + 1)}>
                Далее
            </MyButton>}
        </div>
    );
};



const PaginationItem = ({ p, ...props }) => {
    return (
        <span onClick={() => props.onPageChange(p)}
            key={p}
            className={props.currentPage === p
                ? "pagination_page selected_page"
                : "pagination_page"
            }>
            {p}
        </span>
    )
}

export default Pagination;