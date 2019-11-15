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
import CustomButton from './CustomButton';

// eslint-disable-next-line react/prop-types
function Pagination({onUpdateSelectedPage, currentPageNumber, totalPageNumber}) {
    currentPageNumber = 4;
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
                <TouchableOpacity>
                    <View style={[commonStyles.shadow, styles.button]}>
                        <Ionicons name="md-arrow-round-back" size={25} color="#403632" style={styles.star} />
                    </View>
                </TouchableOpacity>
            )}
            { currentPageNumber > 1 && (
                <TouchableOpacity>
                    <View style={[commonStyles.shadow, styles.button]}>
                        <Text>1</Text>
                    </View>
                </TouchableOpacity>
            )}
            { currentPageNumber > 2 && (
                <Text>
                    ...
                </Text>
            )}
            <View style={[commonStyles.shadow, styles.button]}>
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
                    <View style={[commonStyles.shadow, styles.button]}>
                        <Text>{totalPageNumber}</Text>
                    </View>
                </TouchableOpacity>
            )}
            { currentPageNumber !== totalPageNumber && (
                <TouchableOpacity>
                    <View style={[commonStyles.shadow, styles.button]}>
                        <Ionicons name="md-arrow-round-forward" size={25} color="#403632" style={styles.star} />
                    </View>
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    pagination: {
    },
    button: {
        backgroundColor: '#f0d5c9',
        borderRadius: 5,
        color: 'rgb(64, 54, 50)',
        padding: 10,
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