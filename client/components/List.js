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
            { /* Solution for clicking outside of modal to close found here: https://stackoverflow.com/questions/40483034/close-react-native-modal-by-clicking-on-overlay */}
            <Modal animationType="slide" transparent={false} visible={modalVisible} onRequestClose={() => {setModalVisible(false)}}>
                <TouchableOpacity style={styles.modalContainer} activeOpacity={1} onPressOut={() => {setModalVisible(false)}}>
                    <ScrollView directionalLockEnabled={true}>
                        <View style={styles.modalContainer2}>
                        <TouchableWithoutFeedback>
                            <View style={styles.modalContentContainer}>
                                <TouchableHighlight
                                    onPress={() => {
                                        setModalVisible(false);
                                    }}>
                                    <Text>Hide Modal</Text>
                                </TouchableHighlight>
                            </View>
                        </TouchableWithoutFeedback>
                        </View>
                    </ScrollView>
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
    modalContainer2: {
        /*marginTop: windowSize.height*6/16,*/
        flex: 1,
        flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
    },
    modalContentContainer: {
        backgroundColor: '#000000',
	    width: 50,
		height:50,
	    borderRadius: 18,
		opacity: 0.8,
    }
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