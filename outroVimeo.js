import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import { WebView } from 'react-native-webview';
import { buscarVideos } from './vimeo';

export default function Vimeo() {
  const [pesquisa, setPesquisa] = useState('');
  const [videos, setVideos] = useState([]);

  const pesquisar = async () => {
    try {
      const resultados = await buscarVideos(pesquisa);
      setVideos(resultados);
    } catch (erro) {
      console.error('Erro ao pesquisar vídeos:', erro);
    }
  };

  return (
    <KeyboardAvoidingView style={estilos.container}>
      <Text style={estilos.titulo}>Vimeo</Text>
      <View style={estilos.containerPesquisa}>
        <TextInput
          style={estilos.entrada}
          placeholder="Digite sua pesquisa"
          value={pesquisa}
          onChangeText={setPesquisa}
        />
        <TouchableOpacity style={estilos.botao} onPress={pesquisar}>
          <Text style={estilos.textoBotao}>Pesquisar</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={estilos.scrollView}>
        {videos.map(video => (
          <View key={video.uri} style={estilos.containerVideo}>
            <Text style={estilos.tituloVideo}>{video.name}</Text>
            <WebView
              style={estilos.webview}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              source={{ html: `<iframe width="100%" height="460" src="https://player.vimeo.com/video/${video.uri.split('/').pop()}" frameborder="0" allowfullscreen></iframe>` }}
            />
          </View>
        ))}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
  },
  containerPesquisa: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#88DFF2',
    borderRadius: 8,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  entrada: {
    height: 40,
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  botao: {
    backgroundColor: '#05C7F2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    fontSize: 16,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  containerVideo: {
    marginBottom: 40,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderColor: '#cacaca',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  tituloVideo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  webview: {
    aspectRatio: 16 / 9,
  },
  titulo: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 28
  },
});
