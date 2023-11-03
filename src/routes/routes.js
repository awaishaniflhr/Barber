import React, {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {useSelector} from 'react-redux';
import MainStack from './mainStack';
import AuthStack from './authStack';

const Routes = () => {
  const {isLogin} = useSelector(state => state.root.user);
  console.log(isLogin)
  return (
    <SafeAreaProvider>
      {isLogin == true ? <MainStack /> : <AuthStack />}
    </SafeAreaProvider>
  );
};

export default Routes;
