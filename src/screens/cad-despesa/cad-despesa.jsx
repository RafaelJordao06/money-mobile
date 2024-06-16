import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./cad-despesa.style";
import icons from "../../constants/icons";
import { Picker } from "@react-native-picker/picker";
import { useState, useEffect } from "react";
import api from "../../services/api";

const CadDespesa = (props) => {
    const [id, setId] = useState(0);
    const [valor, setValor] = useState(0);
    const [descricao, setDescricao] = useState("");
    const [categoria, setCategoria] = useState("");

    const handleSalver = async () => {
        try {
            if (props.route.params.id > 0) {
                await api.put("/despesas/" + props.route.params.id, {
                    descricao: descricao,
                    categoria: categoria,
                    valor: valor
                })
            } else {
                await api.post("/despesas", {
                    descricao: descricao,
                    categoria: categoria,
                    valor: valor
                })
            }
        } catch (error) {
            console.log(error);
            Alert.alert("Erro ao editar/cadastrar despesas")
        }

        props.navigation.navigate("home")
    }

    const handleExcluir = async () => {
        try {
            await api.delete("/despesas/" + props.route.params.id)
        } catch (error) {
            console.log(error);
            Alert.alert("Erro ao editar/cadastrar despesas")
        }

        props.navigation.navigate("home")
    }

    const DadosDespesa = async (id) => {
        try {
            const response = await api.get("/despesas/" + id)

            setDescricao(response.data.descricao);
            setCategoria(response.data.categoria);
            setValor(response.data.valor);
        } catch (error) {
            console.log(error);
            Alert.alert("Erro ao buscar dados na despesas")
        }
    };

    useEffect(() => {
        //Tratar o texto do header
        props.navigation.setOptions({
            title: props.route.params.id > 0 ? "Editar Despesa" : "Nova Despesa"
        });

        //Buscar os dados da despesas na API
        if (props.route.params.id > 0) {
            DadosDespesa(props.route.params.id);
        }
    }, [])

    return (
        <View style={styles.container}>

            <View style={styles.containerField}>
                <Text style={styles.inputLabel}>Valor</Text>
                <TextInput defaultValue={valor} placeholder="0,00" style={styles.inputValor} keyboardType="decimal-pad" onChangeText={(text) => { setValor(text) }} />
            </View>

            <View style={styles.containerField}>
                <Text style={styles.inputLabel}>Descrição</Text>
                <TextInput defaultValue={descricao} placeholder="Cartão" style={styles.inputText} onChangeText={(text) => { setDescricao(text) }} />
            </View>

            <View style={styles.containerField}>
                <Text style={styles.inputLabel}>Categoria</Text>
                <View style={styles.inputPicker}>
                    <Picker selectedValue={categoria}
                        onValueChange={(itemValue, itemIndex) => {
                            setCategoria(itemValue)
                        }}>
                        <Picker.Item label="Carro" value="Carro" />
                        <Picker.Item label="Casa" value="Casa" />
                        <Picker.Item label="Lazer" value="Lazer" />
                        <Picker.Item label="Mercado" value="Mercado" />
                    </Picker>
                </View>
            </View>

            <View style={styles.containerBtn}>
                <TouchableOpacity style={styles.btn} onPress={handleSalver}>
                    <Text style={styles.btnText}>Salvar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerDelete}>
                <TouchableOpacity onPress={handleExcluir}>
                    <Image source={icons.remove} style={styles.btnDelete} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CadDespesa;