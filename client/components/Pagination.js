import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import commonStyles from './commonStyles';

// eslint-disable-next-line react/prop-types
function Pagination({onUpdateSelectedPage, currentPageNumber, totalPageNumber}) {
    currentPageNumber = 2;
    totalPageNumber = 6;
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

    /* Creates the pagination */
    return (
        <View style={styles.pagination}>
            { currentPageNumber !== 1 && (
                <TouchableOpacity style={commonStyles.shadow}>
                    <Ionicons name="md-arrow-round-back" size={25} color="#403632" style={styles.star} />
                </TouchableOpacity>
            )}
            { currentPageNumber > 1 && (
                <TouchableOpacity style={commonStyles.shadow}>
                    <Text>1</Text>
                </TouchableOpacity>
            )}
            { currentPageNumber > 2 && (
                <Text>
                    ...
                </Text>
            )}
            <View>
                <Text>
                    {currentPageNumber}
                </Text>
            </View>
            { currentPageNumber < totalPageNumber - 1 && (
                <Text>
                    ...
                </Text>
            )}
            { currentPageNumber < totalPageNumber && (
                <TouchableOpacity style={commonStyles.shadow}>
                    <Text>{totalPageNumber}</Text>
                </TouchableOpacity>
            )}
            { currentPageNumber !== totalPageNumber && (
                <TouchableOpacity style={commonStyles.shadow}>
                    <Ionicons name="md-arrow-round-forward" size={25} color="#403632" style={styles.star} />
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    pagination: {
    },
});

const mapStateToProps = state => ({
    //currentPageNumber: state.page.pageNumber,
    //totalPageNumber: state.page.totalPageNumber,
});

const mapDispatchToProps = dispatch => ({
    //onUpdateSelectedPage: pageNumber => dispatch(setSelectedPage(pageNumber)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);