import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { BaseInput, CustomEditor, CustomPage } from "../components";
import { useSnackbar } from 'notistack';
import { mockSangKien } from "../constants";
import { useEffect, useState } from "react";

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
        setValue,
        watch
    } = useForm({
        resolver: yupResolver(schema),
    });
    const { enqueueSnackbar } = useSnackbar();
    const [loading, setLoading] = useState(false)

    // get params, if params.id !==null => isEdit = true


    const onSubmit = (data) => {
        console.log("Form Submitted:", data);
        // if isEdit = true => call hook onCreate (data)
        // if isEdit = false => call hook onUpdate (id, data)

        enqueueSnackbar('success', { variant: 'success' });
    };

    // useEffect: if isEdit = true, fetch detail and setValue
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setValue('editor-content', mockSangKien['editor-content'])
            setLoading(false)
        }, 1000)
    }, [])

    return (
        <CustomPage title="Tạo mới sáng kiến">
            {loading && <Typography>Loading...</Typography>}
            {!loading &&
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={2}>
                        <BaseInput control={control} name="username" label="Username" required />
                        <BaseInput control={control} name="email" label="Email" required />
                        <BaseInput control={control} name="password" label="Password" type="password" required />
                        <CustomEditor formProps={{ name: 'editor-content', control: control }} />

                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </Stack>
                </form>
            }
        </CustomPage>
    )
}