'use client';
import { createContext, ReactNode, SetStateAction, useContext, useState } from 'react';

interface IContextType {
    categoryFilters: []
    setCategoryFilters: React.Dispatch<SetStateAction<string[]>>
    sort: string
    setSort: React.Dispatch<SetStateAction<string>>
}

//using React Context API to create single data source
//that is shared and subscribed by all children FC
export const INITIAL_FILTER_DATA = {
    category: [],
    setCategoryFilters: () => [],
    sort: '',
    setSort: () => '',
}
//step 1: create a FilterContext object
const FilterContext = createContext(INITIAL_FILTER_DATA);

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
    //useState and setter that we are going to pass to children prop
    const [ categoryFilters, setCategoryFilters] = useState([]);
    const [sort, setSort] = useState('-createdAt');

    return (
        <FilterContext.Provider 
        value={{
            categoryFilters,
            setCategoryFilters,
            sort,
            setSort
        }}>
            {children}
        </FilterContext.Provider>
    )
}
//allow components to access and subscribe to filter state
export const useFilter = () => useContext(FilterContext)