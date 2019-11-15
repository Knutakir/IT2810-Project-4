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

function DetailedContent({
    mountainId,
    mountain,
    mainCountry,
    metres,
    locationAndNotes,
    formattedAddress,
    latitude,
    longitude,
    startRating,
    startVotes,
    onUpdatePerformingSearch,
    closeModal,
}) {

    return (
        <ScrollView directionalLockEnabled>
            <TouchableWithoutFeedback>
                <View style={styles.modalContentContainer}>
                    <TouchableOpacity onPress={() => closeModal()}>
                        <Ionicons name="md-close" size={vw(6)} color="#5c4d48" style={styles.close} />
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    modalContentContainer: {
        backgroundColor: '#fdebe0',
	    width: vw(90),
		maxHeight: vh(90),
	    borderRadius: 18,
        marginTop: vh(4),
    },
    close: {
        margin: 10,
    }
});

DetailedContent.propTypes = {
    mountainId: PropTypes.string,
    mountain: PropTypes.string,
    mainCountry: PropTypes.string,
    metres: PropTypes.number,
    locationAndNotes: PropTypes.string,
    formattedAddress: PropTypes.string,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    startRating: PropTypes.string,
    startVotes: PropTypes.number,
    onUpdatePerformingSearch: PropTypes.func,
};

DetailedContent.defaultProps = {
    mountainId: '',
    mountain: '',
    mainCountry: '',
    metres: 0,
    locationAndNotes: '',
    formattedAddress: '',
    latitude: 0.0,
    longitude: 0.0,
    startRating: '0',
    startVotes: 0,
    onUpdatePerformingSearch: null,
};

const mapStateToProps = state => ({
    performingSearch: state.searching.performingSearch,
});

const mapDispatchToProps = dispatch => ({
    onUpdatePerformingSearch: performingSearch => dispatch(setPerformingSearch(performingSearch)),
});

export default connect(mapStateToProps)(DetailedContent);