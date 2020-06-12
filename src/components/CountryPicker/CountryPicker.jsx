import React ,{ useState, useEffect } from 'react'
import { NativeSelect ,FormControl } from '@material-ui/core'
import { fetchCountries } from '../../api'

import styles from './CountryPicker.module.css'

function CountryPicker({ handleCountryChange }) {

    const [fetcheddCountries, setFetcheddCountries] = useState([])

    useEffect(()=>{
        const fetchAPI = async () => {
            setFetcheddCountries(await fetchCountries())
        }

        fetchAPI()
    },[setFetcheddCountries])


    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetcheddCountries.map((country,i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
