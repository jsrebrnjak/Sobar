import React from 'react';
import { View, Text, StyleSheet, Button, Image, Transformation } from 'react-native';
import { globalStyles } from '../styles/global';

import Preferences from '../screens/preferences'

const HomeScreen = props => {

    const [pref, setpref] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const selectPref = prefTitle => {
        setpref(currentPref => [...pref, { key: Math.random().toString(), value: prefTitle }])
        setModalVisible(false);
    }

    return (
        <View>
            <View style={globalStyles.buttonContainer} >
                <Button title="Map" onPress={() => props.onStart} color='grey' />
                <Button title="Map Screen" onPress={() => props.onStart} color='grey' />
            </View>
            <View style={globalStyles.buttonContainer} >
                <Button title="Preferences Button" style={globalStyles.button} onPress={() => setModalVisible(true)}>PREFERENCES</Button>
                <Button title="Find Route" style={globalStyles.button} onPress={() => props.onStart}>FIND ROUTE</Button>
                <Preferences visible={modalVisible} />
            </View>
        </View>
    );
};

export default HomeScreen;