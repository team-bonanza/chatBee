import React from 'react';
import {View, Text,StyleSheet,Dimensions} from 'react-native';
import validationSchema from './validationSchema';
import { Formik} from 'formik';
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
          <View >
            <Text style={styles.title}>ChatBee</Text>
            <BeeInput
              placeholder="email adres"
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              error={errors.email}
              isTouched={touched.email}
            />

            <BeeInput
              placeholder="şifre"
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              error={errors.password}
              isTouched={touched.password}
            />

            <BeeInput
              placeholder="şifre tekrar.."
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

const styles=StyleSheet.create({
    container:{
        
        backgroundColor:'#fff',
        borderRadius:5,
        elevation:10,
        padding:20
        


    },
    title:{
        fontSize:20

    }
})
