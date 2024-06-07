import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Bem_Vindo() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo ao VídeosGo</Text>
            <Text style={styles.subtitle}>A plataforma de pesquisa de vídeos pelo Youtube e Vimeo</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('rotaInterna')}>
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f8',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 22,
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
        marginHorizontal: 8
    },
    button: {
        backgroundColor: '#DB7B28',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});
