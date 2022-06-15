const data = require('./assets/city.json')
const FetchData = (cityName) => {
    const city = data.filter((c)=> c.city === cityName)
    console.log(city) 
    return city
}

export default FetchData