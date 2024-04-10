import axios from 'axios';

const ACCESS_KEY = 'jPoG1no69fpL0u-3xc-US0GYo3kg6CaMrEf2-CpT1T8';

const instance = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
});

export async function getImages(page, query) {
  return instance.get(`search/photos?page=${page}&query=${query}`).then(res => res.data.results);
}
