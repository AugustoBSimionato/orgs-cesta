import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import Texto from '../../../componentes/texto';
import logo from '../../../../assets/logo.png';

export default function Detalhes() {
    return <>
        <Texto style={estilos.nome}>Cesta de Verduras</Texto>

        <View style={estilos.fazenda} >
            <Image source={logo} style={estilos.imagemFazenda} />
            <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
        </View>

        <Texto style={estilos.descricao}>Uma com produtos selecionados cuidadosamente da fazenda direto para sua cozinha</Texto>
        <Texto style={estilos.preco}>R$ 40,00</Texto>
    </>
}

const estilos = StyleSheet.create({
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: "bold",
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    descricao: {
        color: "#A3A3A3",
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 30,
        lineHeight: 42,
        marginTop: 8,
    },
})