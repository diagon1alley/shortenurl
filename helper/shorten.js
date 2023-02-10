const axios = require('axios')
const axiosRetry = require('axios-retry')

axiosRetry(axios, {
    retries: 3
})

const TARGET_URL = 'https://api.shrtco.de/v2/shorten?url='

const callShortCode = async (url) => {
    console.log(`${TARGET_URL}${url}`)
    try {
        const response = await axios({
            method: 'GET',
            url: `${TARGET_URL}/${url}`
        })
        return response.data
    } catch(error) {
        return {
            status: 500,
            message: 'API Shortener failed'
        }
    }
}

module.exports = {
    callShortCode
}