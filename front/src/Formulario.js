import React, { useEffect, useState } from "react";
import "./Formulario.css";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { TextField } from "@mui/material";

function Formulario() {
  const [ativo, setAtivo] = useState(true);
  const [envio, setEnvio] = useState("Enviar no próximo expediente");
  const [inicio, setInicio] = useState(null);

  const handleEnvio = (e) => {
    setEnvio(e.target.value);
  };

  const handleAtivo = () => {
    setAtivo(!ativo);
  };

  const handleInicio = (e) => {
    setInicio(e);
    console.log(inicio);
  };

  return (
    <form className="form-container">
      <div>
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          Configuração jornada de trabalho
        </Typography>
        <FormControlLabel
          control={
            <Checkbox
              sx={{ "& .MuiSvgIcon-root": { fontSize: 24 } }}
              checked={ativo}
              onChange={handleAtivo}
            />
          }
          label="Ativar horário de trabalho"
        />
      </div>
      <div>
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          Configuração jornada de trabalho
        </Typography>
        <Select value={envio} onChange={handleEnvio}>
          <MenuItem value={"Enviar no próximo expediente"}>
            Enviar no próximo expediente
          </MenuItem>
          <MenuItem value={"Abortar"}>Abortar</MenuItem>
        </Select>
      </div>
      <div>
        <TimePicker
          label="Basic example"
          value={inicio}
          onChange={handleInicio}
          renderInput={(params) => <TextField {...params} />}
          inputFormat="hh:mm"
          mask="__:__"
        />
      </div>
    </form>
  );
}

export default Formulario;
