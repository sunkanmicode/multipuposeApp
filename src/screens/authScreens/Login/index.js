import { View, Text } from 'react-native'
import React from 'react'
import LoginComp from '../../../components/LoginComp'
import { useDispatch } from 'react-redux';
import { LoginUser } from '../../../redux/userSlice';

const Login = ({ navigation }) => {
  const [isSecureEntry, setIsSecureEntry] = React.useState(true);
  const [form, setForm] = React.useState({});
const dispatch = useDispatch()


  const onchangeText = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const onSubmit = () => {
    console.log(form, "form");
    dispatch(LoginUser(form))
  };
  return (
    <LoginComp
      onchangeText={onchangeText}
      onSubmit={onSubmit}
      isSecureEntry={isSecureEntry}
      setIsSecureEntry={setIsSecureEntry}
      navigation={navigation}
    />
  );
};

export default Login