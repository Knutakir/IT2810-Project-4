import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import commonStyles from './commonStyles';
import { vw } from 'react-native-expo-viewport-units';

function Rating({rating, votes, onSetRating}) {
    const voteOnMountain = score => {
        if (onSetRating) {
            onSetRating(score);
        }
    };

    const starArray = [];
    const roundedRating = Math.round(parseFloat(rating));

    for (let i = 0; i < 5; i++) {
        starArray.push(
            <TouchableOpacity
                onPress={() => voteOnMountain(i + 1)}
                key={i}
                activeOpacity={0.6}
            >
                <Ionicons
                    name={(i < roundedRating) ? 'md-star' : 'md-star-outline'}
                    size={50}
                    color="#d1a797"
                />
            </TouchableOpacity>,
        );
    }

    return (
        <View style={styles.view}>
            {starArray}
            <Text
                style={styles.voteText}
            >
                {parseFloat(rating).toFixed(2)} ({votes} votes)
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    voteText: {
        marginLeft: 10,
        fontSize: 18,
        color: '#5c4d48',
    },
});

Rating.propTypes = {
    rating: PropTypes.number,
    votes: PropTypes.number,
    onSetRating: PropTypes.func,
};

Rating.defaultProps = {
    rating: 0,
    votes: 0,
    onSetRating: null,
};

export default Rating;