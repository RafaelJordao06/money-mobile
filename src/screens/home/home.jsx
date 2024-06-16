import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import icons from "../../constants/icons";
import { styles } from "./home.style"
import Despesas from "../../components/despesa/despesa";
import { useState, useCallback } from "react";
import api from "../../services/api";
import { useFocusEffect } from "@react-navigation/native";

const Home = (props) => {

  const [total, setTotal] = useState(0);
  const [despesas, setDespesas] = useState([]);

  const OpenDespesa = (id) => {
    props.navigation.navigate("despesa", {
      id: id
    });
  }

  const ListarDespesa = async () => {
    try {
      const response = await api.get("/despesas")
      setDespesas(response.data);

      let total = 0;
      for (var i = 0; i < response.data.length; i++) {
        total = total + Number(response.data[i].valor)
      }
      setTotal(total)
    } catch (error) {
      console.log(error);
      Alert.alert("Erro ao buscar dados na despesas")
    }

  }

  useFocusEffect(useCallback(() => {
    ListarDespesa();
  }, []))

  return (
    <View style={styles.container}>
      <Image source={icons.logo} style={styles.logo} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.dashboard}>
          <View>
            <Text style={styles.dashboardValor}>R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</Text>
            <Text style={styles.dashboardText}>Total de Gastos</Text>
          </View>
          <Image style={styles.dashboardImg} source={icons.money} />
        </View>

        <View>
          <Text style={styles.despesasTitulo}>Despesas</Text>

          {
            despesas.map((desp) => {
              return (
                <Despesas
                  key={desp.id}
                  id={desp.id}
                  icon={desp.categoriaDetalhe.icon}
                  categoria={desp.categoria}
                  descricao={desp.descricao}
                  valor={desp.valor}
                  onClick={OpenDespesa}
                />)
            })
          }

        </View>
      </ScrollView>

      <TouchableOpacity style={styles.btnAdd} onPress={() => OpenDespesa(0)}>
        <Image source={icons.add} style={styles.btnAddImage} />
      </TouchableOpacity>
    </View>
  )
}

export default Home;