import React from 'react';
import {View, Text} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default () => {
	return (
		<View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
			<Text>Hi there</Text>
			<MaterialIcons name="devices" />
		</View>
	);
}