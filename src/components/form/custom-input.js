"use client";

import { Label, TextInput } from "flowbite-react";
import { useField } from "formik";

function CustomInput({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="space-y-1">
      <div className="mb-2 block">
        <Label htmlFor={label}>{label}</Label>
      </div>
      <TextInput
        id={label}
        {...field}
        {...props}
        color={meta.touched && meta.error ? "failure" : ""}
        helperText={
          meta.touched && meta.error ? (
            <>
              <span className="font-medium">{meta.error}</span>
            </>
          ) : null
        }
      />
    </div>
  );
}

export default CustomInput;
