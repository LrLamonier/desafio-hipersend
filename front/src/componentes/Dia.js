import "../css/Dia.css";
import Typography from "@mui/material/Typography";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { TextField } from "@mui/material";

function Dia(props) {
  return (
    <div className="dia-container">
      <Typography variant="body1">{props.dia}</Typography>
      <TimePicker
        label="Início"
        value={props.fimMin}
        onChange={props.handleIni}
        renderInput={(params) => <TextField {...params} />}
        inputFormat="hh:mm"
        mask="__:__"
      />
      <Typography variant="body1">até</Typography>
      <TimePicker
        label="Fim"
        value={props.fim}
        onChange={props.handleFim}
        minTime={props.fimMin}
        renderInput={(params) => <TextField {...params} />}
        inputFormat="hh:mm"
        mask="__:__"
      />
    </div>
  );
}
export default Dia;
