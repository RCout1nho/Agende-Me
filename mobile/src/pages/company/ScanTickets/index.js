import React, { useState, useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner'
import { Text, View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import {
    Bottom, Left, Center, Right, Top, ReadAgain,
    TitleText, TitleView, CenterBorder, ReadAgainText
} from './styles';

export default function ScanTicket() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ data }) => {
        setScanned(true);
        alert('Check-in feito com sucesso!');
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={[StyleSheet.absoluteFill]}
        >
            <Top>
                <TitleView>
                    <TitleText>
                        Escaneie seu código
                    </TitleText>
                </TitleView>

            </Top>
            <Center>
                <Right />
                <CenterBorder />
                <Left />
            </Center>
            <Bottom>
                {scanned && <ReadAgain activeOpacity={0.5} onPress={() => { setScanned(false); }} >
                    <MaterialIcons name='camera-alt' size={40} color='#fff' />
                    <ReadAgainText>Read Again</ReadAgainText>
                </ReadAgain>}
            </Bottom>

        </BarCodeScanner>
    );
}
