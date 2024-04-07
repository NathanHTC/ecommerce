'use client';

export const INITIAL_FILTER_DATA = {
    category: [],
    setCategoryFilters: () => [],
    sort: '',
    setSort: () => '',
}

const FilterContext = createContext(INITIAL_FILTER_DATA);