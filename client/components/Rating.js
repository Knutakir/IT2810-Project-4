import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import commonStyles from './commonStyles';

function Rating({rating, votes, onSetRating}) {
    const voteOnMountain = score => {
        if (onSetRating) {
            onSetRating(score);
        }
    };

    const starArray = [];
    const roundedRating = Math.round(parseFloat(rating));

    for (let i = 0; i < 5; i++) {
        starArray.push(<Ionicons
            name={(i < roundedRating) ? 'md-star' : 'md-star-outline'}
            size={30}
            color="#d1a797"
            key={i}
            onPress={() => voteOnMountain(i + 1)}
        />);
    }

    return (
        <View style={styles.view}>
            {starArray}
            <Text
                style={[styles.voteText, commonStyles.text]}
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
    },
    voteText: {
        marginLeft: 10,
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