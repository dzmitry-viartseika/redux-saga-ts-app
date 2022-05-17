const LIMIT = 10;

function ThePaginationPeople({total, page, onChange}: any): JSX.Element {
    const totalPages = Math.ceil(total / LIMIT);
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
