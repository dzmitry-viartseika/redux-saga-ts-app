import React from 'react';

/*
* Table row limit
* */
const LIMIT = 10;

interface IPaginationProp {
    total: number;
    page: number;
    onChange: (id: number) => void;
}

function ThePaginationPeople({total, page, onChange}: IPaginationProp): JSX.Element {

    const totalPages: number = Math.ceil(total / LIMIT);

    return (
        <>
            {
                Array.from({length: totalPages}, (_, index) => index + 1).map((item) => {
                    const isActive = item === page;
                    const action = () => {
                        if (item !== page) {
                            onChange(item);
                        }
                    }
                    return isActive ? (
                        <b
                            onClick={action}
                            key={item}
                        >{item}</b>
                    ) : <span
                        onClick={action}
                        key={item}
                    >
                            {item}
                        </span>
                })
            }
        </>
    )
}

export default ThePaginationPeople;
