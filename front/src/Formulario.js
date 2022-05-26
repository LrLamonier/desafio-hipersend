import React, { useEffect, useState } from "react";
import "./css/Formulario.css";
import Dia from "./componentes/Dia";
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

  // Estados dos dias da semana
  // dia ativo/inativo
  // horário de início
  // horário de fim
  const [domAtv, setDomAtv] = useState(false);
  const [inicioDom, setInicioDom] = useState(null);
  const [fimDom, setFimDom] = useState(null);

  const [segAtv, setSegAtv] = useState(false);
  const [inicioSeg, setInicioSeg] = useState(null);
  const [fimSeg, setFimSeg] = useState(null);

  const [terAtv, setTerAtv] = useState(false);
  const [inicioTer, setInicioTer] = useState(null);
  const [fimTer, setFimTer] = useState(null);

  const [quaAtv, setQuaAtv] = useState(false);
  const [inicioQua, setInicioQua] = useState(null);
  const [fimQua, setFimQua] = useState(null);

  const [quiAtv, setQuiAtv] = useState(false);
  const [inicioQui, setInicioQui] = useState(null);
  const [fimQui, setFimQui] = useState(null);

  const [sexAtv, setSexAtv] = useState(false);
  const [inicioSex, setInicioSex] = useState(null);
  const [fimSex, setFimSex] = useState(null);

  const [sabAtv, setSabAtv] = useState(false);
  const [inicioSab, setInicioSab] = useState(null);
  const [fimSab, setFimSab] = useState(null);

  // Funções de alteração da configuração da jornada
  const handleEnvio = (e) => {
    setEnvio(e.target.value);
  };
  const handleAtivo = () => {
    setAtivo(!ativo);
  };

  // Funções de ativação dos dias da semana
  const toggleDom = () => {
    setDomAtv(!domAtv);
  };
  const toggleSeg = () => {
    setSegAtv(!segAtv);
  };
  const toggleTer = () => {
    setTerAtv(!terAtv);
  };
  const toggleQua = () => {
    setQuaAtv(!quaAtv);
  };
  const toggleQui = () => {
    setQuiAtv(!quiAtv);
  };
  const toggleSex = () => {
    setSexAtv(!sexAtv);
  };
  const toggleSab = () => {
    setSabAtv(!sabAtv);
  };

  // Funções de alteração dos horários de início e fim
  const handleIniDom = (h) => {
    setInicioDom(h);
    console.log(inicioDom);
  };
  const handleFimDom = (h) => {
    setFimDom(h);
    console.log(fimDom);
  };

  const handleIniSeg = (h) => {
    setInicioSeg(h);
  };
  const handleFimSeg = (h) => {
    setFimSeg(h);
  };

  const handleIniTer = (h) => {
    setInicioTer(h);
  };
  const handleFimTer = (h) => {
    setFimTer(h);
  };

  const handleIniQua = (h) => {
    setInicioQua(h);
  };
  const handleFimQua = (h) => {
    setFimQua(h);
  };

  const handleIniQui = (h) => {
    setInicioQui(h);
  };
  const handleFimQui = (h) => {
    setFimQui(h);
  };

  const handleIniSex = (h) => {
    setInicioSex(h);
  };
  const handleFimSex = (h) => {
    setFimSex(h);
  };

  const handleIniSab = (h) => {
    setInicioSab(h);
  };
  const handleFimSab = (h) => {
    setFimSab(h);
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
      <div className="semana-container">
        <Dia
          dia="Dom"
          handleIni={handleIniDom}
          fimMin={inicioDom}
          fim={fimDom}
          handleFim={handleFimDom}
        />
        <Dia
          dia="Seg"
          handleIni={handleIniSeg}
          fimMin={inicioSeg}
          fim={fimSeg}
          handleFim={handleFimSeg}
        />
        <Dia
          dia="Ter"
          handleIni={handleIniTer}
          fimMin={inicioTer}
          fim={fimTer}
          handleFim={handleFimTer}
        />
        <Dia
          dia="Qua"
          handleIni={handleIniQua}
          fimMin={inicioQua}
          fim={fimQua}
          handleFim={handleFimQua}
        />
        <Dia
          dia="Qui"
          handleIni={handleIniQui}
          fimMin={inicioQui}
          fim={fimQui}
          handleFim={handleFimQui}
        />
        <Dia
          dia="Sex"
          handleIni={handleIniSex}
          fimMin={inicioSex}
          fim={fimSex}
          handleFim={handleFimSex}
        />
        <Dia
          dia="Sab"
          handleIni={handleIniSab}
          fimMin={inicioSab}
          fim={fimSab}
          handleFim={handleFimSab}
        />
      </div>
    </form>
  );
}

export default Formulario;
