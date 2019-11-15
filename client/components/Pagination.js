import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { vw } from 'react-native-expo-viewport-units';
import PropTypes from 'prop-types';
import commonStyles from './commonStyles';
import { setSelectedPage } from '../actions';

function Pagination({onUpdateSelectedPage, currentPageNumber, totalPageNumber}) {
    const back = () => {
        if (currentPageNumber !== 1) {
            onUpdateSelectedPage(currentPageNumber - 1);
        }
    };

    const forward = () => {
        if (currentPageNumber !== totalPageNumber) {
            onUpdateSelectedPage(currentPageNumber + 1);
        }
    };
    const clickNumber = number => {
        onUpdateSelectedPage(number);
    };

    // If no results do not show page numbers
    if (totalPageNumber <= 0) {
        return <Text style={[styles.text, commonStyles.text]}>No results!</Text>;
    }

    /* Creates the pagination */
    return (
        <View style={styles.pagination}>
            { currentPageNumber !== 1 && (
                <TouchableOpacity activeOpacity={0.7} onPress={() => back()}>
                    <View style={[commonStyles.shadow, styles.button]}>
                        <Ionicons name="md-arrow-round-back" size={38} color="#403632" style={styles.icon} />
                    </View>
                </TouchableOpacity>
            )}
            { currentPageNumber > 1 && (
                <TouchableOpacity activeOpacity={0.7} onPress={() => clickNumber(1)}>
                    <View style={[commonStyles.shadow, styles.button]}>
                        <Text style={styles.text}>
                            1
                        </Text>
                    </View>
                </TouchableOpacity>
            )}
            { currentPageNumber > 2 && (
                <Text style={styles.dots}>
                    ...
                </Text>
            )}
            <View style={[commonStyles.shadow, styles.button, styles.current]}>
                <Text style={styles.text}>
                    {currentPageNumber}
                </Text>
            </View>
            { currentPageNumber < totalPageNumber - 1 && (
                <Text style={styles.dots}>
                    ...
                </Text>
            )}
            { currentPageNumber < totalPageNumber && (
                <TouchableOpacity activeOpacity={0.7} onPress={() => clickNumber(totalPageNumber)}>
                    <View style={[commonStyles.shadow, styles.button]}>
                        <Text style={styles.text}>
                            {totalPageNumber}
                        </Text>
                    </View>
                </TouchableOpacity>
            )}
            { currentPageNumber !== totalPageNumber && (
                <TouchableOpacity activeOpacity={0.7} onPress={() => forward()}>
                    <View style={[commonStyles.shadow, styles.button]}>
                        <Ionicons name="md-arrow-round-forward" size={38} color="#403632" style={styles.icon} />
                    </View>
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    pagination: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        minWidth: vw(50),
        marginTop: 18,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#f0d5c9',
        borderRadius: 5,
        color: 'rgb(64, 54, 50)',
        padding: vw(1.5),
        width: vw(14),
        height: vw(14),
        maxHeight: 62,
        maxWidth: 62,
        margin: 2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        color: '#403632',
        textAlignVertical: 'center',
    },
    dots: {
        fontSize: vw(8),
        textAlign: 'center',
        color: '#d1a797',
        marginBottom: vw(2),
    },
    current: {
        backgroundColor: '#d1a797',
    },
    icon: {
        textAlign: 'center',
        textAlignVertical: 'center',
    },
});

const mapStateToProps = state => ({
    currentPageNumber: state.page.pageNumber,
    totalPageNumber: state.page.totalPageNumber,
});

const mapDispatchToProps = dispatch => ({
    onUpdateSelectedPage: pageNumber => dispatch(setSelectedPage(pageNumber)),
});

Pagination.propTypes = {
    onUpdateSelectedPage: PropTypes.func,
    currentPageNumber: PropTypes.number,
    totalPageNumber: PropTypes.number,
};

Pagination.defaultProps = {
    onUpdateSelectedPage: null,
    currentPageNumber: 1,
    totalPageNumber: 2,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);