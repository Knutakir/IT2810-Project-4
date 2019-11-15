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
                    <View style={styles.header}>
                        <Text style={styles.modalTitle}>Detailed Information</Text>
                        <TouchableOpacity onPress={() => closeModal()}>
                            <Ionicons name="md-close" size={vw(6)} color="#5c4d48" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.boldText}>Mountain</Text>
                        <Text style={styles.valueText}>{mountain}</Text>
                        <Text style={styles.boldText}>Heigth</Text>
                        <Text style={styles.valueText}>{metres} m</Text>
                        <Text style={styles.boldText}>Main country</Text>
                        <Text style={styles.valueText}>{mainCountry}</Text>
                        <Text style={styles.boldText}>Location and notes</Text>
                        <Text style={styles.valueText}>{locationAndNotes}</Text>
                        <Text style={styles.boldText}>Address</Text>
                        <Text style={styles.valueText}>{formattedAddress}</Text>
                        <Text style={styles.boldText}>Position</Text>
                        <Text style={styles.valueText}>latitude: {latitude}, longitude: {longitude}</Text>
                        <Text style={styles.boldText}>Rating</Text>
                        <View style={styles.ratingContainer}>
                            <Text>{startRating}</Text>
                        </View>
                    </View>
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
	    borderRadius: 5,
        marginTop: vh(4),
        padding: 20,
    },
    modalTitle: {
        fontSize: 30,
        color: '#5c4d48',
        fontWeight: 'bold',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#e0c4ba',
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#5c4d48',
    },
    valueText: {
        fontSize: 20,
        color: '#5c4d48',
        marginBottom: 15,
    },
    ratingContainer: {
        marginBottom: 15,
    },
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
    closeModal: PropTypes.func,
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
    closeModal: null,
};

const mapStateToProps = state => ({
    performingSearch: state.searching.performingSearch,
});

const mapDispatchToProps = dispatch => ({
    onUpdatePerformingSearch: performingSearch => dispatch(setPerformingSearch(performingSearch)),
});

export default connect(mapStateToProps)(DetailedContent);