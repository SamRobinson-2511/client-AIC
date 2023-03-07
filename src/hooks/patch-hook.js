import {useState} from 'react'

const usePatch = (initialValue) => {
    const [value, setValue] = useState(initialValue)

    const patchValue = (newValue) => {
        setValue(newValue)
    }

    return [value, patchValue]
}

export default usePatch;