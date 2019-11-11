import React, { useState } from 'react';
import {
    View,
    Text,
    Picker,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import commonStyles from './commonStyles';

function Filter() {
    const [sliderHeightValues, setSliderHeightValues] = useState([2000, 8848]);
    const [sliderRatingValues, setSliderRatingValues] = useState([0, 5]);

    // TODO: fetch countries from the API

    const resetFiltering = () => {
        // TODO:
        // onUpdateFilteringCountry('All');
        // onUpdateFilteringHeight([0, 8848]);
        // onUpdateFilteringRating([0, 5]);
    };

    return (
        <View style={styles.outerView}>
            <View style={styles.topView}>
                <Text style={commonStyles.text}>Filter by country:</Text>
                <View style={[styles.pickerView, commonStyles.shadow]}>
                    <Picker style={styles.picker}>
                        <Picker.Item label="All" value="All" color="rgb(64, 54, 50)" />
                        {/* TODO: load more from API here */}
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
                    onValuesChangeFinish={values => {
                        // TODO: update values for redux
                        alert(values);
                    }}
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
                    onValuesChangeFinish={values => {
                        // TODO: update values for redux
                        alert(values);
                    }}
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

export default Filter;