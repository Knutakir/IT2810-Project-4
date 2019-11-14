import React, {useState} from 'react';
import {
    View,
    Modal,
    StyleSheet,
    TouchableHighlight,
    Text,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { vw } from 'react-native-expo-viewport-units';
import ListItem from './ListItem';

function List({
    sortingType,
    sortingOrder,
}) {
    const [modalVisible, setModalVisible] = useState(false);

    const clickListItem = (country) => {
        setModalVisible(true);
    };

    return (
        <View>
            <View style={styles.list}>
                <ListItem name='Mount Everest' country='Nepal' height={1243} rating='2.4' clickItem={() => clickListItem('Mount Everest')} />
                <ListItem name='K2' country='Nepal' height={15553} rating='4.4' clickItem={() => clickListItem('K2')} />
            </View>
            <Modal animationType="slide" transparent={false} visible={modalVisible}>
                <TouchableHighlight
                    onPress={() => {
                        setModalVisible(false);
                    }}>
                    <Text>Hide Modal</Text>
                </TouchableHighlight>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        width: vw(90),
    },
});

const mapStateToProps = state => ({
    sortingType: state.sorting.sortingType,
    sortingOrder: state.sorting.sortingOrder,
});

List.propTypes = {
    sortingType: PropTypes.string,
    sortingOrder: PropTypes.number,
};

List.defaultProps = {
    sortingType: 'height',
    sortingOrder: -1,
};

export default connect(mapStateToProps)(List);