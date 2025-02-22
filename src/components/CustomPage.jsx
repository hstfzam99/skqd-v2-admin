import { Box, Container, Typography } from "@mui/material"

/**
 * Props:
 * 1. Title
 * 2. Container Override
 * 3. Children 
 */
export const CustomPage = (props) => {
    return (
        <Container sx={{ mt: 4 }}>
            <Box mb={4}>
                <Typography sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 20, textAlign: 'center' }}>{props?.title ?? 'Title'}</Typography>
            </Box>
            <Box>
                {props?.children}
            </Box>
        </Container>
    )
}