import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

import TargetImage from '../../assets/icons/body-part.png'
import BodyPartImage from '../../assets/icons/body-part.png'
import EquipmentImage from '../../assets/icons/equipment.png'

function Detail({ exercirseDetail }) {
    const { bodyPart, name, gifUrl, target, equipment } = exercirseDetail

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        },
    ]

    return (
        <Stack gap="60px" p="20px" alignItems="center" sx={{ flexDirection: { lg: 'row' } }}>
            <img src={gifUrl} alt={name} className="detail-image" />
            <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
                <Typography variant="h3" color="red" textTransform="capitalize">
                    {name}
                </Typography>
                <Typography variant="h6">
                    <span style={{ fontWeight: 'bold' }}>{name}</span> Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Suscipit, corrupti.
                </Typography>
                {extraDetail.map((item, i) => (
                    <Stack key={i} direction="row" alignItems="center" gap="24px">
                        <Button
                            sx={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                backgroundColor: '#fff2db',
                            }}
                        >
                            <img src={item.icon} alt={item.name} />
                        </Button>
                        <Typography variant="h6" textTransform="capitalize">
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    )
}

export default Detail
