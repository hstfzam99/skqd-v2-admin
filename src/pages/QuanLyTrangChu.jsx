import { Box, Typography } from "@mui/material"
import { CustomPage, CustomTable } from "../components"

const columns = [
    { label: "ID", field: "id", align: "left" },
    { label: "Name", field: "name" },
    {
        label: "Image",
        field: "image",
        align: "left",
        render: (row) => <img src={row.image} alt="Profile" width="50" height="50" style={{ borderRadius: "50%" }} />
    },
    { label: "Age", field: "age", align: "left" },
];

const data = [
    { id: 1, name: "Alice", image: "/images/loibacday1.jpg", age: 25 },
    { id: 2, name: "Bob", image: "/images/loibacday1.jpg", age: 30 },
    { id: 3, name: "Charlie", image: "/images/loibacday1.jpg", age: 28 },
];


export const QuanLyTrangChu = () => {
    const handleDelete = (row) => {
        alert(`Delete clicked for: ${row.name}`);
    };

    const handleGoToDetail = (row) => {
        alert(`Detail clicked for: ${row.name}`);
    };

    return (
        <CustomPage title="Quản lý trang chủ">
            <Typography>
                Intro content edit
            </Typography>
            <CustomTable
                columns={columns}
                data={data}
                onDelete={handleDelete}
                onGoToDetail={handleGoToDetail}
            />
        </CustomPage>
    )
}