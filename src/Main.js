import * as React from 'react';
import { Text, View } from 'react-native';
import { useColorScheme } from 'react-native-appearance';

const colorSchemes = {
  light: {
    background: '#fff',
    text: '#333',
  },
  dark: {
    background: '#333',
    text: '#fff',
  },
};

const Main = () => {
  const colorScheme = useColorScheme();
  const colors = colorSchemes[colorScheme] || colorSchemes.light;

  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: colors.background,
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <Text style={{ color: colors.text, fontSize: 24 }}>
        zero to dark mode
      </Text>
      <Text style={{ color: colors.text }}>
        color scheme: {colorScheme}
      </Text>
    </View>
  );
}

export default Main;