import { Box, Stack, styled, Typography } from "@mui/material";
import { OPACITY_TO_HEX, ATagStyled } from "../constants";

const sidebarItems = [
    {
        name: 'Quản lý Trang chủ',
        link: '/',
    },
    {
        name: 'Quản lý Sáng Kiến',
        link: '/sang-kien',
    },
    {
        name: 'Quản lý Nhà Truyền Thống',
        link: '/nha-truyen-thong',
    },
];

export const SideBar = () => {
    return (
        <SideBarContainer>
            <Stack spacing={2}>
                {sidebarItems.map((item, index) => (
                    <SideBarItem key={index} name={item.name} link={item.link} />
                ))}
            </Stack>
        </SideBarContainer>
    );
};

const SideBarItem = ({ name, link }) => {
    return (
        <ATagStyled href={link}>
            <Typography sx={{ color: "white" }}>{name}</Typography>
        </ATagStyled>
    );
};

const SideBarContainer = styled(Box)({
    position: "fixed", // Keep sidebar fixed in place
    top: 0,
    left: 0,
    height: "100vh", // Full height of the viewport
    width: 250, // Sidebar width
    backgroundColor: `#000000${OPACITY_TO_HEX["75"]}`,
    paddingLeft: 8,
    paddingTop: 32,
    overflowY: "auto", // Prevent content from making sidebar scroll
});
