import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    NavBar : {
        marginTop: "5px",
        display: "flex",
        justifyContent: "space-between",
        padding: "5px",
        alignItems: "center",
    },
    Links: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "5px",
        backgroundColor: "#487346",
        border: "3px solid #b6cc76",
    },
    Profile: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    ProfileInfo: {
        padding: "5px",
        backgroundColor: "#487346",
        border: "3px solid #b6cc76",
    }
}));