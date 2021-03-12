import storage from '@react-native-firebase/storage';

let imageURLRef = storage().ref('bee.png');
const getImgURL = async () => {
  let url = await imageURLRef.getDownloadURL();
  return url;
};
export {getImgURL};
