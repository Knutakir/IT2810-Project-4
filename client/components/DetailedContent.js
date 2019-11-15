import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Text,
    ScrollView,
    Linking,
    Alert,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { vw, vh } from 'react-native-expo-viewport-units';
import Rating from './Rating';
import Api from '../api/mountain';
import { setPerformingSearch } from '../actions';
import mountainStorage from '../mountainStorage';

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
    selectedRating,
    onSetRating,
}) {
    const [rating, setRating] = useState(startRating);
    const [votes, setVotes] = useState(startVotes);

    useEffect(() => {
        setRating(startRating);
    }, [startRating]);

    useEffect(() => {
        setVotes(startVotes);
    }, [startVotes]);

    const openMap = () => {
        Linking.openURL(`https://www.google.no/maps/@${latitude},${longitude},10z`);
    };

    const giveRating = async newRating => {
        const response = await Api.giveMountainRating(mountainId, newRating);

        setRating(response.rating);
        setVotes(response.votes);
        onUpdatePerformingSearch(true);
    };

    const onStarRatingPressed = async newRating => {
        // Check if the user have rated this mountain before
        const isMountainRated = await mountainStorage.hasVotedForMountain(mountainId);
        if (isMountainRated > 0) {
            Alert.alert('Error', 'You have already voted for this mountain!');
        } else {
            Alert.alert(
                `Rate '${mountain}'?`,
                `Do you want to rate '${mountain}' ${newRating} star${(newRating > 1) ? 's' : ''}?`,
                [
                    {text: 'Cancel'},
                    {
                        text: 'Yes',
                        onPress: () => {
                            // Save the rating on the server
                            giveRating(newRating);

                            // Save that the user has rated for this mountain in the async storage
                            mountainStorage.voteForMountain(mountainId, newRating);

                            if (onSetRating) {
                                onSetRating(newRating);
                            }
                        },
                    },
                ],
            );
        }
    };

    return (
        <ScrollView>
            <TouchableWithoutFeedback>
                <View style={styles.modalContentContainer}>
                    <View style={styles.header}>
                        <Text style={styles.modalTitle}>Detailed Information</Text>
                        <TouchableOpacity onPress={() => closeModal()} style={styles.close}>
                            <Ionicons name="md-close" size={vh(6)} color="#5c4d48" />
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
                        <Text style={styles.valuePositionText}>latitude: {latitude}, longitude: {longitude}</Text>
                        <TouchableOpacity activeOpacity={0.7} onPress={() => openMap()}>
                            <Text style={[styles.valueText, styles.mapText]}>Open in Google Maps</Text>
                        </TouchableOpacity>
                        <Text style={styles.boldText}>Rating</Text>
                        <View style={styles.ratingContainer}>
                            {(selectedRating > 0) && (
                                <Text style={styles.valueText}>You have rated this mountain {selectedRating} stars!</Text>
                            )}
                            <Rating rating={rating} votes={votes} onSetRating={value => onStarRatingPressed(value)} />
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
        borderRadius: 5,
        marginTop: vh(4),
        marginBottom: vh(4),
        padding: 20,
        borderWidth: 1,
        borderColor: '#e0c4ba',
    },
    modalTitle: {
        fontSize: 28,
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
    valuePositionText: {
        fontSize: 20,
        color: '#5c4d48',
    },
    mapText: {
        textDecorationLine: 'underline',
    },
    ratingContainer: {
        marginBottom: 15,
    },
    close: {
        padding: 3,
        marginLeft: 5,
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
    startRating: PropTypes.number,
    startVotes: PropTypes.number,
    onUpdatePerformingSearch: PropTypes.func,
    closeModal: PropTypes.func,
    selectedRating: PropTypes.number,
    onSetRating: PropTypes.func,
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
    selectedRating: 0,
    onSetRating: null,
};

const mapStateToProps = state => ({
    performingSearch: state.searching.performingSearch,
});

const mapDispatchToProps = dispatch => ({
    onUpdatePerformingSearch: performingSearch => dispatch(setPerformingSearch(performingSearch)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailedContent);