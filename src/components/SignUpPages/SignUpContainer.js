import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import validationSchema from './validationSchema';
import {Formik} from 'formik';
import BeeButton from '../BeeButton';
import BeeButtonOutline from '../BeeButtonOutline';
import BeeInput from '../BeeInput';
import LottieView from 'lottie-react-native';

const initialFormValues = {
  email: '',
  password: '',
  confirmPassword: '',
};

export default function SignUpContainer({loading, onSubmit, onLogin}) {
  return (
    <View style={styles.container}>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialFormValues}
        onSubmit={onSubmit}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <BeeInput
              placeholder="E-posta adresi"
              placeholderTextColor="#141e30"
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              error={errors.email}
              isTouched={touched.email}
            />

            <BeeInput
              placeholder="Şifre"
              placeholderTextColor="#141e30"
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              error={errors.password}
              isTouched={touched.password}
            />

            <BeeInput
              placeholder="Şifre Tekrarı"
              placeholderTextColor="#141e30"
              secureTextEntry
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              error={errors.confirmPassword}
              isTouched={touched.confirmPassword}
            />

            <BeeButton
              loading={loading}
              onPress={handleSubmit}
              title="Kayıt Ol"
            />
            <TouchableOpacity onPress={onLogin}>
              <LottieView
                source={require('../../assets/gif/home1.json')}
                autoPlay
                loop
                style={{
                  height: Dimensions.get('window').height / 10,
                  marginTop: 10,
                  alignSelf: 'center',
                }}
              />
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(250, 250, 250, 0.5)',
    borderRadius: 5,
    //levation: 10,
    padding: 20,
  },
  title: {
    fontSize: 20,
  },
});
