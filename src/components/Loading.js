import { Stack } from '@mui/material'
import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

function Loading() {
    return (
        <Stack direction="row" alignItems="center" justifyContent="center" width="100%">
            <InfinitySpin />
        </Stack>
    )
}

export default Loading
