import {COLORES, FONT_SIZE} from "../../constants/theme"

export const styles = {
    container:{
        flex: 1,
        backgroundColor: COLORES.white,
        alignItems: "center",
        padding: 20,
        marginTop: 15
    },
    logo:{
        width: 100,
        height: 30
    },
    dashboard:{
        width: "100%",
        backgroundColor: COLORES.blue,
        padding: 20,
        borderRadius: 20,
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    dashboardValor:{
        color: COLORES.white,
        fontSize: FONT_SIZE.xl,
        fontWeight: "bold"
    },
    dashboardText:{
        color: COLORES.white,
        fontSize: FONT_SIZE.sm
    },
    dashboardImg:{
       width: 35,
       height: 60 
    },
    despesasTitulo:{
        fontSize: FONT_SIZE.sm,
        color: COLORES.dark_gray,
        marginTop: 15,
        fontWeight: "bold",
    },
    btnAddImage:{
        width: 50,
        height: 50
    },
    btnAdd:{
        position: "absolute",
        bottom: 12
    }
}