const ArrowRight= ({index, rowIndex}: {index: number, rowIndex:number}) => {
    return (
        <div className={`absolute z-10 top-[50%] translate-y-[-50%]`} style ={{ left: `${(index+1)*292 + 101*index}px` }}>
            <svg width="102" height="23" viewBox="0 0 102 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 11.5C0 15.9183 3.58172 19.5 8 19.5C12.4183 19.5 16 15.9183 16 11.5C16 7.08172 12.4183 3.5 8 3.5C3.58172 3.5 0 7.08172 0 11.5ZM101.061 12.5607C101.646 11.9749 101.646 11.0251 101.061 10.4393L91.5147 0.893398C90.9289 0.307611 89.9792 0.307611 89.3934 0.893398C88.8076 1.47919 88.8076 2.42893 89.3934 3.01472L97.8787 11.5L89.3934 19.9853C88.8076 20.5711 88.8076 21.5208 89.3934 22.1066C89.9792 22.6924 90.9289 22.6924 91.5147 22.1066L101.061 12.5607ZM8 13H100V10H8V13Z" fill="#888888"/>
            </svg>
        </div>
    )
}

export default ArrowRight