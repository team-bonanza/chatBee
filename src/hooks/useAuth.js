import {useState} from 'react';
import auth from '@react-native-firebase/auth';

export default function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  function signUp(values) {
    setError(null);
    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((serverResponse) => {
        setLoading(false);
        setResponse(serverResponse);
      })
      .catch((serverError) => {
        setLoading(false);
        setError(serverError);
      });
    return;
  }

  function signIn(values) {
    setError(null);
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then((serverResponse) => {
        setLoading(false);
        setResponse(serverResponse);
      })
      .catch((serverError) => {
        setLoading(false);
        setError(serverError);
      });
    return;
  }

  function errorReset() {
    setError(null);
  }
  function responseReset() {
    setResponse(null);
  }

  return {loading, error, response, signUp, signIn, errorReset, responseReset};
}
/*import {useState} from 'react';
import auth from '@react-native-firebase/auth';

export default function useAuth() {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  async function login(values) {
    try {
      setLoading(true);
      setError();
      return await auth().signInWithEmailAndPassword(
        values.email,
        values.password,
      );
    } catch (err) {
      setLoading();
      setError(err);
    }
  }
  async function sign(values) {
    try {
      setLoading(true);
      setError();
      return await auth().createUserWithEmailAndPassword(
        values.email,
        values.password,
      );
    } catch (err) {
      setLoading();
      setError(err);
    }
  }

  return {loading, error, login, sign};
}*/
