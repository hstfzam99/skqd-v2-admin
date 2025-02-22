import { Typography } from "@mui/material";
import { CustomPage, CustomTable } from "../components";
import { useNavigate } from "react-router";

const columns = [
    { label: "ID", field: "id", align: "center" },
    { label: "Name", field: "name" },
    { label: "Age", field: "age", align: "right" },
];

const data = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    age: Math.floor(Math.random() * 50) + 20,
}));

export const QuanLySangKien = () => {
    const navigate =useNavigate()
    const handleDelete = (row) => {
        alert(`Delete clicked for: ${row.name}`);
    };

    const handleGoToDetail = (row) => {
        alert(`Detail clicked for: ${row.name}`);
    };

    const onCreatePressed = ()=>{
        navigate('/them-sang-kien')
    }

    return (
        <CustomPage title="Quản lý sáng kiến">
            <CustomTable
                columns={columns}
                data={data}
                onDelete={handleDelete}
                onGoToDetail={handleGoToDetail}
                onCreate={onCreatePressed}
            />
        </CustomPage>
    )
}