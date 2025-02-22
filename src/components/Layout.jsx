import { Box, Stack } from "@mui/material";
import { SideBar } from "./SideBar";
import { Outlet } from "react-router";

export const Layout = () => {
    return (
        <Box>
            <Stack direction={"row"}>
                <SideBar />
                {/* Ensure content does not overlap with the sidebar */}
                <Box sx={{ flex: 1, marginLeft: "250px", padding: "16px" }}>
                    <Outlet />
                </Box>
            </Stack>
        </Box>
    );
};

