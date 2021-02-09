import React from 'react';
import {View, Text, Image} from 'react-native';
import {Formik} from 'formik';
import validationSchema from './validationSchema';
import BeeInput from '../BeeInput';
import BeeButton from '../BeeButton';
import BeeButtonOutline from '../BeeButtonOutline';
import {login_container_styles} from '../../assets/styles';

const initalFormValues = {
  email: '',
  password: '',
};

export default function LoginContainer({loading, onSubmit, onRegister}) {
  return (
    <View style={login_container_styles.container}>
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
              <View style={login_container_styles.logoContainer}>
                <Text style={login_container_styles.logoFont}>ChatBee</Text>
                <Image
                  style={login_container_styles.logo}
                  source={require('../../assets/bee.png')}
                />
              </View>
              <View style={login_container_styles.inputstyle}>
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
            </View>
          );
        }}
      </Formik>
    </View>
  );
}
