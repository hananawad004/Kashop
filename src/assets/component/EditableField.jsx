// src/assets/components/EditableField.jsx
import React, { useState } from "react";
import { TextField, IconButton, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

function EditableField({ label, value, onSave }) {
  const [editing, setEditing] = useState(false);
  const [val, setVal] = useState(value);
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    try {
      await onSave(val);
      setEditing(false);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
      {editing ? (
        <>
          <TextField
            label={label}
            value={val}
            onChange={(e) => setVal(e.target.value)}
            size="small"
            disabled={loading}
          />
          <IconButton onClick={handleSave} disabled={loading} color="primary">
            <CheckIcon />
          </IconButton>
          <IconButton onClick={() => { setEditing(false); setVal(value); }} disabled={loading} color="error">
            <CloseIcon />
          </IconButton>
        </>
      ) : (
        <>
          <Box sx={{ flex: 1 }}>
            <strong>{label}: </strong> {value}
          </Box>
          <IconButton onClick={() => setEditing(true)} color="primary">
            <EditIcon />
          </IconButton>
        </>
      )}
    </Box>
  );
}

export default EditableField;
