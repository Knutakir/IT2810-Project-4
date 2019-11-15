import React, { useState } from 'react';
import {
    View,
    Text,
    Picker,
    StyleSheet,
    Platform,
} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { vw } from 'react-native-expo-viewport-units';
import { setFilteringCountry, setFilteringHeight, setFilteringRating } from '../actions';
import commonStyles from './commonStyles';
import CustomButton from './CustomButton';

function Filter({
    onUpdateFilteringCountry,
    onUpdateFilteringHeight,
    onUpdateFilteringRating,
    filteringCountry,
    filteringHeight,
    filteringRating,
    countries,
}) {
    const [sliderHeightValues, setSliderHeightValues] = useState(filteringHeight);
    const [sliderRatingValues, setSliderRatingValues] = useState(filteringRating);

    const resetFiltering = () => {
        onUpdateFilteringCountry('All');
        onUpdateFilteringHeight([2000, 8848]);
        setSliderHeightValues([2000, 8848]);
        onUpdateFilteringRating([0, 5]);
        setSliderRatingValues([0, 5]);
    };

    return (
        <View style={styles.outerView}>
            <CustomButton text="Reset filters" onPress={() => resetFiltering()} />
            <View style={styles.topView}>
                <Text style={commonStyles.text}>Filter by country:</Text>
                <View style={[styles.pickerView, commonStyles.shadow]}>
                    <Picker
                        style={styles.picker}
                        itemStyle={styles.pickerItem}
                        selectedValue={filteringCountry}
                        onValueChange={itemValue => onUpdateFilteringCountry(itemValue)}
                    >
                        <Picker.Item label="All" value="All" color="rgb(64, 54, 50)" />
                        {countries.map(country => (
                            <Picker.Item label={country} value={country} color="rgb(64, 54, 50)" key={country} />
                        ))}
                    </Picker>
                </View>
            </View>
            <Text style={commonStyles.text}>Filter by mountain height:</Text>
            <View style={styles.sliderView}>
                <Text style={[styles.sliderText, commonStyles.text]}>{sliderHeightValues[0]}</Text>
                <MultiSlider
                    sliderLength={vw(55)}
                    markerStyle={styles.sliderMarker}
                    unselectedStyle={styles.sliderUnselected}
                    selectedStyle={styles.sliderSelected}
                    values={sliderHeightValues}
                    min={2000}
                    max={8848}
                    step={10}
                    onValuesChange={values => setSliderHeightValues(values)}
                    onValuesChangeFinish={values => onUpdateFilteringHeight(values)}
                />
                <Text style={[styles.sliderText, commonStyles.text]}>{sliderHeightValues[1]}</Text>
            </View>
            <Text style={commonStyles.text}>Filter by rating:</Text>
            <View style={styles.sliderView}>
                <Text style={[styles.sliderText, commonStyles.text]}>{sliderRatingValues[0]}</Text>
                <MultiSlider
                    sliderLength={vw(68)}
                    markerStyle={styles.sliderMarker}
                    unselectedStyle={styles.sliderUnselected}
                    selectedStyle={styles.sliderSelected}
                    values={sliderRatingValues}
                    min={0}
                    max={5}
                    onValuesChange={values => setSliderRatingValues(values)}
                    onValuesChangeFinish={values => onUpdateFilteringRating(values)}
                />
                <Text style={[styles.sliderText, commonStyles.text]}>{sliderRatingValues[1]}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    outerView: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
    },
    topView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    pickerView: {
        backgroundColor: '#f0d5c9',
        borderRadius: 5,
        margin: 10,
    },
    picker: {
        height: Platform.OS === 'ios' ? 150 : 50,
        width: 150,
        color: 'rgb(64, 54, 50)',
    },
    pickerItem: {
        height: Platform.OS === 'ios' ? 150 : 50,
    },
    sliderView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sliderText: {
        fontSize: 15,
        margin: 16,
    },
    sliderMarker: {
        backgroundColor: '#f0d5c9',
    },
    sliderUnselected: {
        backgroundColor: '#d1a79750',
    },
    sliderSelected: {
        backgroundColor: '#d1a797',
    },
});

const mapStateToProps = state => ({
    filteringCountry: state.filtering.filteringCountry,
    filteringHeight: state.filtering.filteringHeight,
    filteringRating: state.filtering.filteringRating,
});

const mapDispatchToProps = dispatch => ({
    onUpdateFilteringCountry: filteringCountry => dispatch(setFilteringCountry(filteringCountry)),
    onUpdateFilteringHeight: filteringHeight => dispatch(setFilteringHeight(filteringHeight)),
    onUpdateFilteringRating: filteringRating => dispatch(setFilteringRating(filteringRating)),
});

Filter.propTypes = {
    onUpdateFilteringCountry: PropTypes.func,
    onUpdateFilteringHeight: PropTypes.func,
    onUpdateFilteringRating: PropTypes.func,
    filteringCountry: PropTypes.string,
    filteringHeight: PropTypes.array,
    filteringRating: PropTypes.array,
    countries: PropTypes.array,
};

Filter.defaultProps = {
    onUpdateFilteringCountry: null,
    onUpdateFilteringHeight: null,
    onUpdateFilteringRating: null,
    filteringCountry: 'All',
    filteringHeight: [2000, 8848],
    filteringRating: [0, 5],
    countries: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);