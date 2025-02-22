import { Route, Routes } from "react-router";
import { Layout } from "../components/Layout";
import { QuanLyTrangChu, QuanLySangKien, QuanLyNhaTruyenThong } from "../pages";

export const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<QuanLyTrangChu />} />
                <Route path="sang-kien" element={<QuanLySangKien />} />
                <Route path="nha-truyen-thong" element={<QuanLyNhaTruyenThong />} />                
            </Route>
        </Routes>
    )
}