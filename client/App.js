import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import Search from './components/Search';
import Sort from './components/Sort';
import Filter from './components/Filter';

const store = createStore(reducer);

export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <Text>Hello world!</Text>
                <Text>Project 4!😎</Text>
                <Search />
                <Sort />
                <Filter />
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
