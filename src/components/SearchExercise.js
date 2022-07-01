import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { Search } from '@mui/icons-material'

import { fetchData, exercisesOptions } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

function SearchExercise({ setSearchResult, bodyPart, setBodyPart }) {
    const [search, setSearch] = useState('')

    const [bodyParts, setBodyParts] = useState([])

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData(
                'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
                exercisesOptions
            )
            setBodyParts(['all', ...bodyPartsData])
        }
        fetchExercisesData()
    }, [])

    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData(
                'https://exercisedb.p.rapidapi.com/exercises',
                exercisesOptions
            )
            const searchResult = exercisesData.filter(
                (exercise) =>
                    exercise.name.toLowerCase().includes(search) ||
                    exercise.bodyPart.toLowerCase().includes(search) ||
                    exercise.equipment.toLowerCase().includes(search) ||
                    exercise.target.toLowerCase().includes(search)
            )

            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
            setSearch('')
            setSearchResult(searchResult)
        }
    }

    return (
        <Stack alignItems="center" mt="38px" justifyContent="center" p="20px">
            <Typography
                fontWeight="700"
                mb="50px"
                textAlign="center"
                sx={{ fontSize: { lg: '44px', xs: '30px' } }}
            >
                Awesome Exercise You <br />
                Should Know
            </Typography>
            <Box position="relative" mb="72px" sx={{ mb: '72px' }}>
                <TextField
                    height="76px"
                    value={search}
                    placeholder="Search Exercise"
                    type="text"
                    sx={{
                        width: { lg: '800px', xs: '400px' },
                        bgcolor: '#fff',
                        borderRadius: '40px',
                        input: {
                            fontWeight: '700',
                            border: 'none',
                            borderRadius: '4px',
                        },
                    }}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                />
                <Button
                    className="search-btn"
                    startIcon={<Search sx={{ display: { lg: 'block', xs: 'none' } }} />}
                    sx={{
                        backgroundColor: '#ff2625',
                        color: '#fff',
                        textTransform: 'none',
                        width: { lg: '175px', xs: '80px' },
                        fontSize: { lg: '20px', xs: '16px' },
                        height: '56px',
                        position: 'absolute',
                        right: '0px',
                    }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                <HorizontalScrollbar
                    data={bodyParts}
                    bodyPart={bodyPart}
                    setBodyPart={setBodyPart}
                    isBodyPart
                />
            </Box>
        </Stack>
    )
}

export default SearchExercise
