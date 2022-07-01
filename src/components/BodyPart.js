import { Stack, Typography } from '@mui/material'

import Icon from '../assets/icons/gym.png'

function BodyPart({ item, bodyPart, setBodyPart }) {
    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            className="bodyPart-card"
            sx={{
                borderTop: bodyPart === item ? '4px solid #ff2625' : '',
                backgroundColor: '#fff',
                borderBottomLeftRadius: '20px',
                width: '270px',
                height: '280px',
                cursor: 'pointer',
                gap: '48px',
            }}
            onClick={() => setBodyPart(item)}
        >
            <img src={Icon} alt="quả tạ" style={{ width: '40px', height: '40px' }} />
            <Typography
                fontSize="24px"
                fontWeight="bold"
                textTransform="capitalize"
                color="#3a1212"
            >
                {item}
            </Typography>
        </Stack>
    )
}

export default BodyPart
