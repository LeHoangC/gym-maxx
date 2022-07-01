import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import Detail from '../components/ExerciseDetail/Detail'
import ExerciseVideos from '../components/ExerciseDetail/ExerciseVideos'
import SimilarExercises from '../components/ExerciseDetail/SimilarExercises'
import { exercisesOptions, fetchData, youtubeOptions } from '../utils/fetchData'

function ExerciseDetail() {
    const [exercirseDetail, setExercirseDetail] = useState({})
    const [exercisesVideos, setExercisesVideos] = useState([])
    const [targetExercises, setTargetExercises] = useState([])
    const [equipmentExercises, setEquipmentExercises] = useState([])

    const { id } = useParams()

    useEffect(() => {
        const fetchExercisesData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
            const youtubeSearch = 'https://youtube-search-and-download.p.rapidapi.com'

            const exerciseDetailData = await fetchData(
                `${exerciseDbUrl}/exercises/exercise/${id}`,
                exercisesOptions
            )
            setExercirseDetail(exerciseDetailData)

            const exerciseVideosData = await fetchData(
                `${youtubeSearch}/search?query=${exerciseDetailData.name}`,
                youtubeOptions
            )
            setExercisesVideos(exerciseVideosData.contents)

            const targetExercisesData = await fetchData(
                `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
                exercisesOptions
            )

            setTargetExercises(targetExercisesData)

            const equipmentExercisesData = await fetchData(
                `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
                exercisesOptions
            )
            setEquipmentExercises(equipmentExercisesData)
        }

        fetchExercisesData()
    }, [id])

    return (
        <div>
            <Box>
                <Detail exercirseDetail={exercirseDetail} />
                <ExerciseVideos exercisesVideos={exercisesVideos} name={exercirseDetail.name} />
                <SimilarExercises
                    targetExercises={targetExercises}
                    equipmentExercises={equipmentExercises}
                />
            </Box>
        </div>
    )
}

export default ExerciseDetail
