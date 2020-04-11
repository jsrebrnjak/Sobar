import React, { useState } from 'react';
import { View, Text, Button, Modal, ScrollView, CheckBox } from 'react-native';
import { globalStyles } from '../styles/global';


// @brief Defines the preferences modal
const preferences = props => {
    
   // const [pref, setpref] = useState([]);
    let pref = [];

    const [karaokeSelected, setKaraokeSelected] = useState(false);
    const [nightlifeSelec, setNightLifeSelec] = useState(false);
    const [danceSelec, setDanceselec] = useState(false);
    const [foodSelec, setFoodSelec] = useState(false);
    const [sportsSelec, setSportsSelec] = useState(false);
    const [beerSelect, setBeerSelec] = useState(false);
    const [wineSelec, setWineSelec] = useState(false);
    const [cocktailSelec, setCocktailSelec] = useState(false);

    // @brief Adds preference to list of preferences
    function addPrefHandler () {
       // setpref(pref =>
        //    [...pref,
         //   { id: name, value: name }]);
        pref.push('added to array');
        props.onAddPref();
    };

    // @brief Exits out of preferences modal and clears selection
    const cancelGoalHandler = () => {
        setBeerSelec(false);
        setCocktailSelec(false);
        setNightLifeSelec(false);
        setDanceselec(false);
        setFoodSelec(false);
        setSportsSelec(false);
        setWineSelec(false);
        setKaraokeSelected(false);
        props.onCancel();
    };

    // @brief Removes preference from list of preferences
    // @param prefId id value of preference to be deleted
    const removePrefHandler = prefId => {
        setpref(currentPref => {
            return currentPref.filter((pref) => pref.id !== prefId)
        });
    };

    // @brief Returns view of preferences modal
    return (
        <Modal visible={props.visible} animationType="slide" >
            <View style={globalStyles.screen}>
                <View style={globalStyles.cancel}><Button title="X" color="red" onPress={cancelGoalHandler} /></View>
                <View style={{ padding: 30 }}>

            <Text> preferences = {pref[0]} </Text>

                    <View style={globalStyles.checkboxContainer}>
                        <CheckBox
                            value={foodSelec}
                            onValueChange={setFoodSelec}
                            style={{ alignSelf: 'center' }}
                        />
                        <Text style={{ margin: 8 }}>Food</Text>
                    </View>
                    <View style={globalStyles.checkboxContainer}>
                        <CheckBox
                            value={sportsSelec}
                            onValueChange={setSportsSelec}
                            style={{ alignSelf: 'center' }}
                        />
                        <Text style={{ margin: 8 }}>Sports</Text>
                    </View>
                    <View style={globalStyles.checkboxContainer}>
                        <CheckBox
                            value={beerSelect}
                            onValueChange={setBeerSelec}
                            style={{ alignSelf: 'center' }}
                        />
                        <Text style={{ margin: 8 }}>Beer</Text>
                    </View>
                    <View style={globalStyles.checkboxContainer}>
                        <CheckBox
                            value={wineSelec}
                            onValueChange={setWineSelec}
                            style={{ alignSelf: 'center' }}
                        />
                        <Text style={{ margin: 8 }}>Wine</Text>
                    </View>
                    <View style={globalStyles.checkboxContainer}>
                        <CheckBox
                            value={cocktailSelec}
                            onValueChange={setCocktailSelec}
                            style={{ alignSelf: 'center' }}
                        />
                        <Text style={{ margin: 8 }}>Cocktail</Text>
                    </View>
                    <View style={globalStyles.checkboxContainer}>
                        <CheckBox
                            value={karaokeSelected}
                            onValueChange={setKaraokeSelected}
                            style={{ alignSelf: 'center' }}
                        />
                        <Text style={{ margin: 8 }}>Karaoke</Text>
                    </View>
                    <View style={globalStyles.checkboxContainer}>
                        <CheckBox
                            value={nightlifeSelec}
                            onValueChange={setNightLifeSelec}
                            style={{ alignSelf: 'center' }}
                        />
                        <Text style={{ margin: 8 }}>Nightlife</Text>
                    </View>
                    <View style={globalStyles.checkboxContainer}>
                        <CheckBox
                            value={danceSelec}
                            onValueChange={setDanceselec}
                            style={{ alignSelf: 'center' }}
                        />
                        <Text style={{ margin: 8 }}>Dance</Text>
                    </View>
                    <View style={globalStyles.buttonContainer} >
                        <View style={globalStyles.button}><Button title="CONFIRM" color="grey" onPress={addPrefHandler} /></View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default preferences;