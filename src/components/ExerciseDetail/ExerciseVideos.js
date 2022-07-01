import { Box, Stack, Typography } from '@mui/material'

function ExerciseVideos({ exercisesVideos, name }) {
    return (
        <Box p="20px" sx={{ marginTop: { lg: '200px', xs: '20px' } }}>
            <Typography variant="h4" mb="32px">
                Watch <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>{name}</span>{' '}
                exercise videos
            </Typography>
            <Stack
                flexWrap="wrap"
                justifyContent="flex-start"
                alignItems="center"
                sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }}
            >
                {exercisesVideos?.slice(0, 6).map((item, i) => (
                    <a
                        key={item.video.videoId}
                        className="exercise-video"
                        target="_blank"
                        rel="noreferrer"
                        href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                    >
                        <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                        <Box>
                            <Typography variant="h5" color="#000">
                                {item.video.title}
                            </Typography>
                            <Typography variant="h6" color="#ff1615">
                                {item.video.channelName}
                            </Typography>
                        </Box>
                    </a>
                ))}
            </Stack>
        </Box>
    )
}

export default ExerciseVideos
