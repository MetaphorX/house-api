import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async(url) =>{
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'f5a09da9f3msh63f97df394b5c8bp11e1e4jsn55785f01cd0c'
          }
        
    });

    return data;
}