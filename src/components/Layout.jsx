import { Box, Stack } from "@mui/material"
import { Outlet } from "react-router"
import { SideBar } from "./SideBar"

export const Layout = () => {
    return (
        <Box>
            <Stack direction={'row'}>
                <SideBar />
                <Outlet />
            </Stack>
            {/* <Grid2 container>
                <Grid2 size={3}>
                    <SideBar />
                </Grid2>
                <Grid2 size={9}>
                    <Outlet />
                </Grid2>
            </Grid2> */}
        </Box>
    )
}