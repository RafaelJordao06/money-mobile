import {COLORES, FONT_SIZE} from "../../constants/theme"

export const styles = {
    despesa:{
        width: "100%",
        backgroundColor: COLORES.gray,
        padding: 12,
        borderRadius: 14,
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    containerIcon: {
        flex: 3
    },
    containerCategoria:{
        flex: 9        
    },
    containerValor:{
        flex: 5
    },
    despesaIcon:{
        width: 35,
        height: 35
    },
    despesaCategoria:{
        fontSize: FONT_SIZE.sm,
        color: COLORES.dark_gray,
        fontWeight: "bold"
    },
    despesaDescricao:{
        fontSize: FONT_SIZE.sm,
        color: COLORES.dark_gray
    },
    despesaValor:{
        fontSize: FONT_SIZE.sm,
        color: COLORES.dark_gray,
        fontWeight: "bold",
        textAlign: "right"
    },
}