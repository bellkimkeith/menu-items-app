import { Label, Select, TextInput } from "flowbite-react";
import { useField } from "formik";

function CustomSelect({ options, label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="space-y-1">
      <div className="min-w-full">
        <div className="mb-2 block">
          <Label htmlFor={label} value={`Select ${label}`} />
        </div>
        <Select
          id={label}
          {...props}
          {...field}
          required
          color={meta.touched && meta.error ? "failure" : ""}
          helperText={
            meta.touched && meta.error ? (
              <>
                <span className="font-medium">{meta.error}</span>
              </>
            ) : null
          }
        >
          <option>Select {label}</option>
          {Object.values(options).map((option) => (
            <option key={option} id={label}>
              {option}
            </option>
          ))}
        </Select>
      </div>
    </div>
  );
}

export default CustomSelect;
