import React, { useState, useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner'
import { Text, View, StyleSheet, Button } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import { Bottom, Left, Center, Right, Top, ReadAgain, TitleText, TitleView } from './styles';


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
                <View style={{ flex: 1, borderWidth: 1, borderColor: '#fff', borderRadius: 5, borderStyle: 'dashed' }} />
                <Left />
            </Center>
            <Bottom>
                {scanned && <ReadAgain activeOpacity={0.5} onPress={() => { setScanned(false); }} >
                    <MaterialIcons name='camera-alt' size={40} color='#fff' />
                    <Text style={{ fontSize: 17, color: "#fff", fontWeight: 'bold' }}>Read Again</Text>
                </ReadAgain>}
            </Bottom>

        </BarCodeScanner>
    );
}
