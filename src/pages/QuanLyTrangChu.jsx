import { Box, Typography } from "@mui/material"
import { CustomPage, CustomTable } from "../components"

const columns = [
    { label: "ID", field: "id", align: "center" },
    { label: "Name", field: "name" },
    { label: "Age", field: "age", align: "right" },
];

const data = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 28 },
];

export const QuanLyTrangChu = () => {
    return (
        <CustomPage title="Quản lý trang chủ">
            <Typography>
                Intro content edit
            </Typography>

            <CustomTable columns={columns} data={data} />

        </CustomPage>
    )
}