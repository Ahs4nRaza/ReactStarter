
export const scrollToTop = (ref) => {
    if (ref?.current) {
        ref.current.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
};


export const loadMorePaginatedData = ({
    page, setPage, fetchFn, setIsLoading, setIsSearching, delay = 500,
}) => {
    setIsSearching(true);
    setIsLoading(true);
    const nextPage = page + 1;

    setTimeout(() => {
        fetchFn(nextPage);
    }, delay);

    setPage(nextPage);
};
