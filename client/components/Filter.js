import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Picker,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFilteringCountry, setFilteringHeight, setFilteringRating } from '../actions';
import commonStyles from './commonStyles';
import Api from '../api/mountain';

function Filter({
    onUpdateFilteringCountry,
    onUpdateFilteringHeight,
    onUpdateFilteringRating,
    filteringCountry,
}) {
    const [sliderHeightValues, setSliderHeightValues] = useState([2000, 8848]);
    const [sliderRatingValues, setSliderRatingValues] = useState([0, 5]);
    const [firstVisit, setFirstVisit] = useState(true);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        if (!firstVisit) {
            return;
        }

        const fetchCountries = async () => {
            try {
                const fetchedCountries = await Api.getCountries();
                setCountries(fetchedCountries);
                setFirstVisit(false);
            } catch (error) {
                Alert.alert('Error', 'Failed to retrieve list of all countries.');
            }
        };

        fetchCountries();
    }, [firstVisit]);

    const resetFiltering = () => {
        onUpdateFilteringCountry('All');
        onUpdateFilteringHeight([2000, 8848]);
        setSliderHeightValues([2000, 8848]);
        onUpdateFilteringRating([0, 5]);
        setSliderRatingValues([0, 5]);
    };

    return (
        <View style={styles.outerView}>
            <View style={styles.topView}>
                <Text style={commonStyles.text}>Filter by country:</Text>
                <View style={[styles.pickerView, commonStyles.shadow]}>
                    <Picker
                        style={styles.picker}
                        selectedValue={filteringCountry}
                        onValueChange={itemValue => onUpdateFilteringCountry(itemValue)}
                    >
                        <Picker.Item label="All" value="All" color="rgb(64, 54, 50)" />
                        {countries.map(country => (
                            <Picker.Item label={country} value={country.toLowerCase()} color="rgb(64, 54, 50)" key={country} />
                        ))}
                    </Picker>
                </View>
                <TouchableOpacity
                    style={[styles.button, commonStyles.shadow]}
                    onPress={() => resetFiltering()}
                >
                    <Text>Reset filters</Text>
                </TouchableOpacity>
            </View>
            <Text style={commonStyles.text}>Filter by mountain height:</Text>
            <View style={styles.sliderView}>
                <Text style={styles.sliderText}>{sliderHeightValues[0]}</Text>
                <MultiSlider
                    values={sliderHeightValues}
                    min={2000}
                    max={8848}
                    step={10}
                    onValuesChange={values => setSliderHeightValues(values)}
                    onValuesChangeFinish={values => onUpdateFilteringHeight(values)}
                />
                <Text style={styles.sliderText}>{sliderHeightValues[1]}</Text>
            </View>
            <Text style={commonStyles.text}>Filter by rating:</Text>
            <View style={styles.sliderView}>
                <Text style={styles.sliderText}>{sliderRatingValues[0]}</Text>
                <MultiSlider
                    values={sliderRatingValues}
                    min={0}
                    max={5}
                    onValuesChange={values => setSliderRatingValues(values)}
                    onValuesChangeFinish={values => onUpdateFilteringRating(values)}
                />
                <Text style={styles.sliderText}>{sliderRatingValues[1]}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    outerView: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    topView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    pickerView: {
        backgroundColor: '#f0d5c9',
        borderRadius: 5,
        margin: 10,
    },
    picker: {
        height: 50,
        width: 150,
        color: 'rgb(64, 54, 50)',
    },
    button: {
        backgroundColor: '#f0d5c9',
        borderRadius: 5,
        color: 'rgb(64, 54, 50)',
        padding: 10,
    },
    sliderView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sliderText: {
        fontSize: 15,
        margin: 10,
    },
});

const mapStateToProps = state => ({
    filteringCountry: state.filtering.filteringCountry,
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
};

Filter.defaultProps = {
    onUpdateFilteringCountry: null,
    onUpdateFilteringHeight: null,
    onUpdateFilteringRating: null,
    filteringCountry: 'All',
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);