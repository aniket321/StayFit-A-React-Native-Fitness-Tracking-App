import React from 'react'
import { View, Slider, Text } from 'react-native'


export default function Sliders({ max, unit, step, value, onChange }) {
    return (
        <View>
            <Text>Slider</Text>
            <Slider
                step={step}
                value={value}
                maximumValue={max}
                minimumValue={0}
                onValueChange={onChange}
            />
            <View>
                <Text>{value}</Text>
                <Text>{unit}</Text>
            </View>
        </View>
    )
} 