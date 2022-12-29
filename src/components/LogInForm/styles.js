  import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    TextField: {
        backgroundColor: "#89cc7c",
      },
    
      root: {
        "& .MuiTextField-root": {
          margin: theme.spacing(1),
        },
      },
      paper: {
        padding: theme.spacing(2),
        backgroundColor: "#b6cc76",
        border: "solid 5px #768c3a",
        margin: "20px"
      },
      form: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      },
      buttonSubmit: {
        marginBottom: 10,
      },
}));