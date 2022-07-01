import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import HorizontalScrollbar from '../HorizontalScrollbar'
import Loading from '../Loading'

function SimilarExercises({ targetExercises, equipmentExercises }) {
    return (
        <Box sx={{ mt: { lg: '100px', xs: '0px' }, mb: { lg: '40px', xs: '0' } }}>
            <Typography variant="h3" mb="20px">
                Exercises that target the same muscle group
            </Typography>
            <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
                {targetExercises.length ? (
                    <HorizontalScrollbar data={targetExercises} />
                ) : (
                    <Loading />
                )}
            </Stack>

            <Typography variant="h3" mb="20px">
                Exercises that use the same equipment
            </Typography>
            <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
                {equipmentExercises.length ? (
                    <HorizontalScrollbar data={equipmentExercises} />
                ) : (
                    <Loading />
                )}
            </Stack>
        </Box>
    )
}

export default SimilarExercises
