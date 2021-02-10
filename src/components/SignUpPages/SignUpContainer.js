import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import validationSchema from './validationSchema';
import {Formik} from 'formik';
import BeeButton from '../BeeButton';
import BeeButtonOutline from '../BeeButtonOutline';
import BeeInput from '../BeeInput';

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
            <BeeButtonOutline title="ANA SAYFAYA DÖN" onPress={onLogin} />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(250, 250, 250, 0.5)', //TODO: kayıt olma sayfasında arka taraf saydam mı yoksa gölgeli mi olsun?
    borderRadius: 5,
    //levation: 10,
    padding: 20,
  },
  title: {
    fontSize: 20,
  },
});
