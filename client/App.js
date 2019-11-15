import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    Dimensions,
    Button,
    Alert,
} from 'react-native';
import { vh, vw } from 'react-native-expo-viewport-units';
import * as Font from 'expo-font';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import Search from './components/Search';
import Sort from './components/Sort';
import List from './components/List';
import Filter from './components/Filter';
import ModifyResultContainer from './components/ModifyResultContainer';
import Rating from './components/Rating';
import Api from './api/mountain';

const store = createStore(reducer);
const windowSize = Dimensions.get('window');
const background = '#5c4d48';

export default function App() {
    const [firstLoad, setFirstLoad] = useState(true);
    const [rating, setRating] = useState(1);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const loadFont = async () => {
            try {
                // Load font
                await Font.loadAsync({
                    'dancing-script': require('./assets/fonts/Dancing_Script/DancingScript-Bold.ttf'),
                });

                // Fetch mountains from the server
                const fetchedCountries = await Api.getCountries();
                setCountries(fetchedCountries);
                setFirstLoad(false);
            } catch (error) {
                Alert.alert('Error', 'Failed to retrieve list of all countries.');
            }
        };

        if (firstLoad) {
            loadFont();
        }
    }, firstLoad);

    // TODO: (re)move this function when implementing the rest
    const onStarRatingPressed = newRating => {
        // TODO: check if the user have rated this mountain before
        // => if the user has rated => display "Already rated ..." message

        // TODO: remove this if used a variable in the other component
        const mountainName = 'Mount Everest';

        Alert.alert(
            `Rate '${mountainName}'?`,
            `Do you want to rate '${mountainName}' ${newRating} star${(newRating > 1) ? 's' : ''}?`,
            [
                {text: 'Cancel'},
                {text: 'Yes', onPress: () => alert('TODO: change the rating! :)')},
            ],
        );
    };

    if (!firstLoad) {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Mountain Finder</Text>
                        </View>
                        <Image style={styles.backgroundImage} source={require('./assets/pink-mountains.jpg')} />
                        <View style={styles.contentContainer}>
                            <Search />
                            <ModifyResultContainer type="Sort">
                                <Sort />
                            </ModifyResultContainer>
                            <ModifyResultContainer type="Filter">
                                <Filter countries={countries} />
                            </ModifyResultContainer>
                            <Rating rating={rating} votes={rating} onSetRating={value => onStarRatingPressed(value)} />
                            <Button title="-" onPress={() => setRating(rating - 1)} />
                            <Button title="+" onPress={() => setRating(rating + 1)} />
                            <List />
                        </View>
                    </ScrollView>
                </View>
            </Provider>
        );
    }

    return (
        <View />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: background,
        alignItems: 'center',
    },
    scrollViewContainer: {
        alignItems: 'center',
    },
    titleContainer: {
        position: 'absolute',
        width: windowSize.width,
        zIndex: 3,
        alignItems: 'center',
        marginTop: 40,
    },
    title: {
        fontSize: vw(14),
        color: background,
        fontFamily: 'dancing-script',
        textShadowColor: '#5c4d4840',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 2,
    },
    backgroundImage: {
        width: windowSize.width,
        height: vh(40),
        resizeMode: 'stretch',
    },
    contentContainer: {
        width: vw(90),
        alignItems: 'center',
    },
});