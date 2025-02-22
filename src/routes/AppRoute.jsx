import { Route, Routes } from "react-router";
import { Layout } from "../components/Layout";
import { QuanLyTrangChu, QuanLySangKien, QuanLyNhaTruyenThong, CreateOrUpdateSangKien } from "../pages";

export const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<QuanLyTrangChu />} />
                <Route path="sang-kien" element={<QuanLySangKien />} />
                <Route path="nha-truyen-thong" element={<QuanLyNhaTruyenThong />} /> 
                <Route path="them-sang-kien" element={<CreateOrUpdateSangKien />} />                
            </Route>
        </Routes>
    )
}