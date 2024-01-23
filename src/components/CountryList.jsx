import { useContext } from 'react'
import CountryItem from './CountryItem'
import styles from './CountryList.module.css'
import Message from './Message'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import { CitiesContext, useCities } from '../contexts/CitiesContext'

const CountryList = () => {
   const {cities, isLoading} = useCities()
    if(isLoading) return <Spinner/>
    if(!cities.length) return <Message message='Add your first city by clicking on a city on the map'/>
    const countries = cities.reduce((acc,cur)=> {
      if(!acc.map((el)=> el.country).includes(cur.country)){
        return [...acc, {country:cur.country, emoji:cur.emoji}]
      }else return acc
    },[])
  return (
    <ul className={styles.CountriesList}>
        {countries?.map((country)=> <CountryItem country={country} key={country.country}/>)}
    </ul>
  )
}

CountryList.propTypes = {
    cities : PropTypes.array,
    isLoading : PropTypes.bool
}

export default CountryList