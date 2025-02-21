import { Box, Stack, styled, Typography } from "@mui/material"
import { OPACITY_TO_HEX, ATagStyled } from "../constants"

const drawerItems = [
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
        link: '/sang-kien',
    },
];

export const SideBar = () => {
    return (
        <SideBarContainer>
            <Stack spacing={2}>

            {drawerItems.map((item) => <SideBarItem name={item.name} link={item.link} />)}
            </Stack>
        </SideBarContainer>
    )
}

const SideBarItem = (props) => {
    return (
        <ATagStyled href={props.link}>
            <Typography sx={{ color: 'white' }}>{props.name}</Typography>
        </ATagStyled>
    )
}

const SideBarContainer = styled(Box)({
    minHeight: '100vh',
    width: 250,
    backgroundColor: `#000000${OPACITY_TO_HEX['75']}`,
    paddingLeft: 8,
    paddingTop:32
})