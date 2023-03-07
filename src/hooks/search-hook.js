import {useState, useEffect} from 'react'

const useSearch = (data, searchKey) => {
    const [filteredData, setFilteredData] = useState(data)

    useEffect(()=>{
        if (!searchKey) {
            setFilteredData(data)
            return
        }

        const lowerCaseSearchKey = searchKey.toLowerCase()

        const filtered = data.filter((item) => {
            const values = Object.values(item).map((value) =>
                typeof value === 'string' ? value.toLowerCase() : ''
            )
            return values.some((value)=> value.includes(lowerCaseSearchKey))
        })
        setFilteredData(filtered)
    }, [data, searchKey])
    return filteredData;
}

export default useSearch;