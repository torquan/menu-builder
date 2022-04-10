import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

export default function FontFamilySelect({
  key,
  name,
  value,
  onChange,
  label,
  fullWidth = true,
}: {
  key: string;
  name: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  value: string;
  label: string;
  fullWidth: boolean;
}) {
  return (
    <FormControl fullWidth>
      <InputLabel id={key + "-label"}>{label}</InputLabel>
      <Select
        labelId={key + "-label"}
        name={name}
        value={value}
        onChange={onChange}
        fullWidth={fullWidth}
        // this does not display the label, but it creates the gap in the border.. -.-
        label={label}
      >
        <MenuItem value={"Arial,sans-serif"}>Arial</MenuItem>
        <MenuItem value={"Verdana,sans-serif"}>Verdana</MenuItem>
        <MenuItem value={"Helvetica,sans-serif"}>Helvetica</MenuItem>
        <MenuItem value={"Tahoma,sans-serif"}>Tahoma</MenuItem>
        <MenuItem value={"Trebuchet MS, sans-serif"}>Trebuchet MS</MenuItem>
        <MenuItem value={"Times New Roman,serif"}>Times New Roman</MenuItem>
        <MenuItem value={"Georgie,serif"}>Georgia</MenuItem>
        <MenuItem value={"Courier New,monospace,serif"}>Courier New</MenuItem>
        <MenuItem value={"Bursh Script MT,cursive,sans-serif"}>
          Brush Script MT
        </MenuItem>
      </Select>
    </FormControl>
  );
}
