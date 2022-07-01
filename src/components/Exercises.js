import { Box, Pagination, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { exercisesOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'

function Exercises({ bodyPart, searchResult, setSearchResult }) {
    const [currentPage, setCurrentPage] = useState(1)
    const exercisesPerPage = 9

    const indexOfLastExercise = currentPage * exercisesPerPage

    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage

    const currentExercises = searchResult.slice(indexOfFirstExercise, indexOfLastExercise)

    const paginate = (e, value) => {
        setCurrentPage(value)
        window.scrollTo({ top: 1800, behavior: 'smooth' })
    }

    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData = []
            if (bodyPart === 'all') {
                exercisesData = await fetchData(
                    'https://exercisedb.p.rapidapi.com/exercises',
                    exercisesOptions
                )
            } else {
                exercisesData = await fetchData(
                    `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
                    exercisesOptions
                )
            }
            setSearchResult(exercisesData)
        }
        fetchExercisesData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bodyPart])

    return (
        <Box id="exercises" mt="50px" p="20px" sx={{ mt: { lg: '110px' } }}>
            <Typography variant="h3" mb="46px">
                Showing Result: {bodyPart}
            </Typography>
            <Stack
                direction="row"
                flexWrap="wrap"
                justifyContent="center"
                sx={{ gap: { lg: '110px', xs: '50px' } }}
            >
                {currentExercises.map((exercise, i) => (
                    <ExerciseCard key={i} exercise={exercise} />
                ))}
            </Stack>
            <Stack mt="100px" alignItems="center">
                {searchResult.length > 9 && (
                    <Pagination
                        color="standard"
                        shape="rounded"
                        defaultPage={1}
                        count={Math.ceil(searchResult.length / exercisesPerPage)}
                        size="large"
                        page={currentPage}
                        onChange={paginate}
                    />
                )}
            </Stack>
        </Box>
    )
}

export default Exercises
