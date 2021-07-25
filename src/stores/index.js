// 总入口，把各种状态进行一个统一的导出
import React, { createContext, useContext } from 'react';
import AuthStore from './auth';
import UserStore from './user'
import ImageStore from './image'
import HistoryStore from './history'


const context = createContext({
  // AuthStore: new AuthStore()
  AuthStore,
  UserStore,
  ImageStore,
  HistoryStore
});

// 测试：这样我们就可以在控制台看到数据
window.stores = {
  AuthStore,
  UserStore,
  ImageStore,
  HistoryStore
}

export const useStores= () => useContext(context);