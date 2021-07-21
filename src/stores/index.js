// 总入口，把各种状态进行一个统一的导出
import React, { createContext, useContext } from 'react';
import AuthStore from './auth';
import UserStore from './user'

const context = createContext({
  // AuthStore: new AuthStore()
  AuthStore,
  UserStore
});

// 测试：这样我们就可以在控制台看到数据
window.stores = {
  AuthStore,
  UserStore
}

export const useStores= () => useContext(context);