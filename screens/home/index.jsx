    import { View, TextInput, TouchableOpacity, FlatList, Image } from "react-native";
    import { styles } from "./styles.jsx";
    import Card from "../../components/cards/index.jsx";

    export default function Home(){

        const lista = ['teste', 'ana', 'vinicius', 'nathan']

        return(
            <View style={styles.tela}>
               <Image
                    source={require('../../assets/imagem.png')}
                    style={styles.imagemtopo}
                />
                <View style={styles.form}>
                    <TextInput style={style.input_text0}/>
                    <TouchableOpacity style={style.botao}>
                        <Image
                            style={style.imagem}
                            source={require('../../assets/lupa.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.lista}>
                    <FlatList 
                        data={lista}
                        keyExtravtor={item => item}
                        renderItem={({item}) =>(
                        <Card key={item} name={item}/>
                        )}
                    />
                </View>
            </View>
            
        )
    }