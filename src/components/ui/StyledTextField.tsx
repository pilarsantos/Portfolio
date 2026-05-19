import { TextField, type Theme } from "@mui/material";

const inputSx = {
  "& .MuiOutlinedInput-root": {
    color: (theme: Theme) => theme.palette.text.primary,
    backgroundColor: "#bf26d319",
    border: "1px solid transparent",
    transition: "all 0.3s ease",
    "& fieldset": {
      borderColor: "#bf26d368",
    },
    "&:hover": {
      backgroundColor: "#bf26d333",
      transform: "translateY(-1px)",
      "& fieldset": {
        borderColor: "#bf26d3aa",
      },
    },
    "&.Mui-focused": {
      backgroundColor: "#bf26d319",
      "& fieldset": {
        borderColor: "#b163ff",
      },
    },
  },
  "& .MuiInputLabel-root": {
    color: (theme: Theme) => theme.palette.text.secondary,
    transition: "all 0.3s ease",
    "&.Mui-focused": {
      color: (theme: Theme) => theme.palette.secondary.main,
    },
  },
};

interface styledTextFieldProps {
  fullWidth: boolean;
  label: string;
  name: string;
  type?: string;
  multiline?: boolean;
  rows?: number;
  required: boolean;
}

export const StyledTextField = ({
  fullWidth,
  label,
  name,
  type,
  multiline,
  rows,
  required,
}: styledTextFieldProps) => {
  return (
    <TextField
      fullWidth={fullWidth}
      label={label}
      name={name}
      type={type}
      multiline={multiline}
      rows={rows}
      required={required}
      sx={inputSx}
    ></TextField>
  );
};
