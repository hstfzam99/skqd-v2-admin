import { Box, Container, Typography } from "@mui/material"

/**
 * Props:
 * 1. Title
 * 2. Container Override
 * 3. Children 
 */
export const CustomPage = (props)=>{
    return (
        <Container>
            <Typography>{props?.title ?? 'Title'}</Typography>
            <Box>
                {props?.children}
            </Box>
        </Container>
    )
}