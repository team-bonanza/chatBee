import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import validationSchema from './validationSchema';
import BeeInput from '../BeeInput';
import BeeButton from '../BeeButton';
import BeeButtonOutline from '../BeeButtonOutline';

const initalFormValues = {
  email: '',
  password: '',
};

export default function LoginContainer({loading, onSubmit, onRegister}) {
  return (
    <View style={styles.container}>
      <Formik
        validationSchema={validationSchema}
        initialValues={initalFormValues}
        onSubmit={onSubmit}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => {
          return (
            <View>
              <Text>ChatBee</Text>
              <BeeInput
                placeholder="e-posta adresinizi giriniz"
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                error={errors.email}
                isTouched={touched.email}
              />

              <BeeInput
                placeholder="şifrenizi giriniz"
                secureTextEntry
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                error={errors.password}
                isTouched={touched.password}
              />
              <BeeButton
                loading={loading}
                onPress={handleSubmit}
                title="GİRİŞ YAP"
              />

              <BeeButtonOutline title="Kayıt Ol" onPress={onRegister} />
            </View>
          );
        }}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
