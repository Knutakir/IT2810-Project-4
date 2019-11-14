import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
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

const store = createStore(reducer);
const windowSize = Dimensions.get('window');
const background = '#5c4d48';

export default function App() {
    const [firstLoad, setFirstLoad] = useState(true);

    useEffect(() => {
        const loadFont = async () => {
            await Font.loadAsync({
                'dancing-script': require('./assets/fonts/Dancing_Script/DancingScript-Bold.ttf'),
            });
            setFirstLoad(false);
        };

        if (firstLoad) {
            loadFont();
        }
    }, firstLoad);

    if (!firstLoad) {
        return (
            <Provider store={store}>
                <View style={styles.container}>
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
                            <Filter />
                        </ModifyResultContainer>
                        <List />
                    </View>
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
        height: vh(60),
        width: vw(90),
        alignItems: 'center',
    },
});