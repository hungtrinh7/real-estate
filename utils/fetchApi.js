import axios from 'axios'

const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '60fe1ee903msh02fb66df537d67bp133635jsn2ba1ff47e65f'
          }
    })

    return data
}