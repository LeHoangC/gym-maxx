import { useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercise from '../components/SearchExercise'
import Exercises from '../components/Exercises'

function Home() {
    const [searchResult, setSearchResult] = useState([])
    const [bodyPart, setBodyPart] = useState('all')
    return (
        <Box>
            <HeroBanner />
            <SearchExercise
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
                setSearchResult={setSearchResult}
            />
            <Exercises
                bodyPart={bodyPart}
                searchResult={searchResult}
                setSearchResult={setSearchResult}
            />
        </Box>
    )
}

export default Home
