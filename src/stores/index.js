// 总入口，把各种状态进行一个统一的导出
import React, { createContext, useContext } from 'react';
import { AuthStore } from './auth';

const context = createContext({
  AuthStore: new AuthStore()
});

export const useStores = () => useContext(context);