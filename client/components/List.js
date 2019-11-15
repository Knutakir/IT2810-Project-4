import React, {useState} from 'react';
import {
    View,
    Modal,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Text,
    ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { vw, vh } from 'react-native-expo-viewport-units';
import ListItem from './ListItem';
import DetailedContent from './DetailedContent';

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
            { /* Solution for clicking outside of modal to close (in List.js and DetailedContent.js) found here:
            https://stackoverflow.com/questions/40483034/close-react-native-modal-by-clicking-on-overlay */}
            <Modal animationType="slide" transparent visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
                <TouchableOpacity style={styles.modalContainer} activeOpacity={1} onPressOut={() => setModalVisible(false)}>
                    <DetailedContent closeModal={() => setModalVisible(false)} />
                </TouchableOpacity>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        width: vw(90),
    },
    modalContainer: {
        flex: 1,
		justifyContent: 'center',
        alignItems: 'center',
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