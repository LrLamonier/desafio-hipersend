import React, { useState } from "react";
import "./css/Formulario.css";
import Dia from "./componentes/Dia";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import axios from "axios";

function Formulario() {
  const [ativo, setAtivo] = useState(false);
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
  const resetDom = () => {
    setInicioDom(null);
    setFimDom(null);
  };

  const handleIniSeg = (h) => {
    setInicioSeg(h);
  };
  const handleFimSeg = (h) => {
    setFimSeg(h);
  };
  const resetSeg = () => {
    setInicioSeg(null);
    setFimSeg(null);
  };

  const handleIniTer = (h) => {
    setInicioTer(h);
  };
  const handleFimTer = (h) => {
    setFimTer(h);
  };
  const resetTer = () => {
    setInicioTer(null);
    setFimTer(null);
  };

  const handleIniQua = (h) => {
    setInicioQua(h);
  };
  const handleFimQua = (h) => {
    setFimQua(h);
  };
  const resetQua = () => {
    setInicioQua(null);
    setFimQua(null);
  };

  const handleIniQui = (h) => {
    setInicioQui(h);
  };
  const handleFimQui = (h) => {
    setFimQui(h);
  };
  const resetQui = () => {
    setInicioQui(null);
    setFimQui(null);
  };

  const handleIniSex = (h) => {
    setInicioSex(h);
  };
  const handleFimSex = (h) => {
    setFimSex(h);
  };
  const resetSex = () => {
    setInicioSex(null);
    setFimSex(null);
  };

  const handleIniSab = (h) => {
    setInicioSab(h);
  };
  const handleFimSab = (h) => {
    setFimSab(h);
  };
  const resetSab = () => {
    setInicioSab(null);
    setFimSab(null);
  };

  // Função de submissão do formulário
  const submissaoHandler = async (e) => {
    e.preventDefault();
    const jornada = {
      jornadaAtiva: ativo,
      config: envio,
      dom: {
        atv: domAtv,
        inicio: inicioDom ? inicioDom.toString() : null,
        fim: fimDom ? fimDom.toString() : null,
      },
      seg: {
        atv: segAtv,
        inicio: inicioSeg ? inicioSeg.toString() : null,
        fim: fimSeg ? fimSeg.toString() : null,
      },
      ter: {
        atv: terAtv,
        inicio: inicioTer ? inicioTer.toString() : null,
        fim: fimTer ? fimTer.toString() : null,
      },
      qua: {
        atv: quaAtv,
        inicio: inicioQua ? inicioQua.toString() : null,
        fim: fimQua ? fimQua.toString() : null,
      },
      qui: {
        atv: quiAtv,
        inicio: inicioQui ? inicioQui.toString() : null,
        fim: fimQui ? fimQui.toString() : null,
      },
      sex: {
        atv: sexAtv,
        inicio: inicioSex ? inicioSex.toString() : null,
        fim: fimSex ? fimSex.toString() : null,
      },
      sab: {
        atv: sabAtv,
        inicio: inicioSab ? inicioSab.toString() : null,
        fim: fimSab ? fimSab.toString() : null,
      },
    };

    try {
      const res = await axios.put("/s", jornada);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="form-container" onSubmit={submissaoHandler}>
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
      <div className="botoes-container">
        <button
          type="button"
          className={`btn-dia ${domAtv ? "ativo" : ""}`}
          onClick={toggleDom}
        >
          D
        </button>
        <button
          type="button"
          className={`btn-dia ${segAtv ? "ativo" : ""}`}
          onClick={toggleSeg}
        >
          S
        </button>
        <button
          type="button"
          className={`btn-dia ${terAtv ? "ativo" : ""}`}
          onClick={toggleTer}
        >
          T
        </button>
        <button
          type="button"
          className={`btn-dia ${quaAtv ? "ativo" : ""}`}
          onClick={toggleQua}
        >
          Q
        </button>
        <button
          type="button"
          className={`btn-dia ${quiAtv ? "ativo" : ""}`}
          onClick={toggleQui}
        >
          Q
        </button>
        <button
          type="button"
          className={`btn-dia ${sexAtv ? "ativo" : ""}`}
          onClick={toggleSex}
        >
          S
        </button>
        <button
          type="button"
          className={`btn-dia ${sabAtv ? "ativo" : ""}`}
          onClick={toggleSab}
        >
          S
        </button>
      </div>
      <div className="semana-container">
        {domAtv ? (
          <Dia
            dia="Dom"
            handleIni={handleIniDom}
            fimMin={inicioDom}
            fim={fimDom}
            handleFim={handleFimDom}
            reset={resetDom}
          />
        ) : (
          ""
        )}
        {segAtv ? (
          <Dia
            dia="Seg"
            handleIni={handleIniSeg}
            fimMin={inicioSeg}
            fim={fimSeg}
            handleFim={handleFimSeg}
            reset={resetSeg}
          />
        ) : (
          ""
        )}
        {terAtv ? (
          <Dia
            dia="Ter"
            handleIni={handleIniTer}
            fimMin={inicioTer}
            fim={fimTer}
            handleFim={handleFimTer}
            reset={resetTer}
          />
        ) : (
          ""
        )}
        {quaAtv ? (
          <Dia
            dia="Qua"
            handleIni={handleIniQua}
            fimMin={inicioQua}
            fim={fimQua}
            handleFim={handleFimQua}
            reset={resetQua}
          />
        ) : (
          ""
        )}
        {quiAtv ? (
          <Dia
            dia="Qui"
            handleIni={handleIniQui}
            fimMin={inicioQui}
            fim={fimQui}
            handleFim={handleFimQui}
            reset={resetQui}
          />
        ) : (
          ""
        )}
        {sexAtv ? (
          <Dia
            dia="Sex"
            handleIni={handleIniSex}
            fimMin={inicioSex}
            fim={fimSex}
            handleFim={handleFimSex}
            reset={resetSex}
          />
        ) : (
          ""
        )}
        {sabAtv ? (
          <Dia
            dia="Sab"
            handleIni={handleIniSab}
            fimMin={inicioSab}
            fim={fimSab}
            handleFim={handleFimSab}
            reset={resetSab}
          />
        ) : (
          ""
        )}
      </div>
      <div className="submit-container">
        <Button variant="contained" size="large" type="submit">
          SALVAR
        </Button>
      </div>
    </form>
  );
}

export default Formulario;
