import storage from '@react-native-firebase/storage';

let logo = storage()
  .refFromURL('gs://chat-bee-9f9f6.appspot.com/bee.png')
  .getDownloadURL();

export {logo};
