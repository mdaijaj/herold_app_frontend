export const ProductsArrowsRederenzen = () => {
    return (
        <>
            <div className="arrows_referenzen herold_arrows_wrapper">
                <span className="referenzen_prev_arrow">
                    <img
                        src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg"
                        alt="Previous"
                    />
                </span>
                <div className="arrows_referenzen_between">
                    <ul className="slick-dots">
                        <li>
                            <button
                                type="button"
                                aria-label="1 of 9"
                            >
                                1
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                aria-label="2 of 9"
                            >
                                2
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                aria-label="3 of 9"
                            >
                                3
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                aria-label="4 of 9"
                                aria-selected="true"
                            >
                                4
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                aria-label="5 of 9"
                            >
                                5
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                aria-label="6 of 9"
                            >
                                6
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                aria-label="7 of 9"
                            >
                                7
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                aria-label="8 of 9"
                            >
                                8
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                aria-label="9 of 9"
                            >
                                9
                            </button>
                        </li>
                    </ul>
                </div>
                <span className="referenzen_next_arrow">
                    <img width={20} height={20} class="entered lazyloaded"
                        src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg"
                        alt="Next"
                    />
                </span>
            </div>
        </>
    )
}