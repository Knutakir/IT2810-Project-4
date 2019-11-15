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
import commonStyles from './commonStyles';

// eslint-disable-next-line react/prop-types
function Pagination({onUpdateSelectedPage, currentPageNumber, totalPageNumber}) {
    currentPageNumber = 4;
    totalPageNumber = 6;
    const back = () => {
        if (currentPageNumber !== 1) {
            //onUpdateSelectedPage(currentPageNumber - 1);
        }
    };
    const forward = () => {
        if (currentPageNumber !== totalPageNumber) {
            //onUpdateSelectedPage(currentPageNumber + 1);
        }
    };
    const clickNumber = number => {
        //onUpdateSelectedPage(number);
    };

    /* Creates the pagination */
    return (
        <View style={styles.pagination}>
            { currentPageNumber !== 1 && (
                <TouchableOpacity activeOpacity={0.7} onPress={() => back()}>
                    <View style={[commonStyles.shadow, styles.button]}>
                        <Ionicons name="md-arrow-round-back" size={35} color="#403632" style={styles.icon} />
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
                        <Ionicons name="md-arrow-round-forward" size={35} color="#403632" style={styles.icon} />
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
        justifyContent: 'space-between',
        alignItems: 'center',
        minWidth: vw(50),
        marginTop: 20,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#f0d5c9',
        borderRadius: 5,
        color: 'rgb(64, 54, 50)',
        padding: 10,
        width: 50,
    },
    text: {
        fontSize: 26,
        textAlign: 'center',
        color: '#403632',
    },
    dots: {
        fontSize: 26,
        textAlign: 'center',
        color: '#d1a797',
    },
    current: {
        backgroundColor: '#d1a797',
    },
    icon: {
        textAlign: 'center',
    }
});

const mapStateToProps = state => ({
    //currentPageNumber: state.page.pageNumber,
    //totalPageNumber: state.page.totalPageNumber,
});

const mapDispatchToProps = dispatch => ({
    //onUpdateSelectedPage: pageNumber => dispatch(setSelectedPage(pageNumber)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);