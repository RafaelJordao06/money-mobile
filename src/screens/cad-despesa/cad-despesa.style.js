import {COLORES, FONT_SIZE} from "../../constants/theme"

export const styles = {
    container:{
        flex: 1,
        backgroundColor: COLORES.white,
        padding: 20,
        marginTop: 15
    },
    containerField:{
         marginBottom: 40
    },
    inputLabel:{
        fontSize: FONT_SIZE.xsm,
        color: COLORES.medium_gray
    },
    inputValor:{
        fontSize: FONT_SIZE.xl,
        borderBottomColor: COLORES.gray,
        borderBottomWidth: 2,
        padding: 5,
        fontWeight: "bold"
    },
    inputText:{
        fontSize: FONT_SIZE.md,
        borderBottomColor: COLORES.gray,
        borderBottomWidth: 2,
        padding: 5,
    },
    containerBtn:{
        alignItems: "flex-end"
    },
    btn:{
        backgroundColor: COLORES.blue,
        padding: 10,
        borderRadius: 6,
        width: 150
    },
    btnText:{
        color: COLORES.white,
        fontSize: FONT_SIZE.md,
        textAlign: "center"
    },
    containerDelete:{
        alignItems: "center",
        marginTop: 50
    },
    btnDelete:{
        width: 50,
        height: 50
    },
    inputPicker:{
        fontSize: FONT_SIZE.md,
        borderBottomColor: COLORES.gray,
        borderBottomWidth: 2
    }
}