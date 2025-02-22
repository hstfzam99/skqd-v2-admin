import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { BaseInput, CustomPage } from "../components";

const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export const CreateOrUpdateSangKien = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log("Form Submitted:", data);
    };

    return (
        <CustomPage title="Tạo mới sáng kiến">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2}>
                    <BaseInput control={control} name="username" label="Username" required />
                    <BaseInput control={control} name="email" label="Email" required />
                    <BaseInput control={control} name="password" label="Password" type="password" required />

                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </Stack>
            </form>
        </CustomPage>
    )
}