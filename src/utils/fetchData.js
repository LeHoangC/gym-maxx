export const exercisesOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6ed92ac87emsh672febad4b7ed0ap19d364jsn06c9eb443be3',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    },
}

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6ed92ac87emsh672febad4b7ed0ap19d364jsn06c9eb443be3',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    },
}

export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()
    return data
}
