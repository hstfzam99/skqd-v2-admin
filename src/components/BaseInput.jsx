import React from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

export const BaseInput = ({ control, name, label, rules, ...props }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          {...props}
          label={label}
          error={!!error}
          helperText={error ? error.message : ""}
          fullWidth
        />
      )}
    />
  );
};

