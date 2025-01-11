import { useEffect, useState } from 'react';
import dataBase from '../baseDB';
import { createPropsUserI, createUserI, getUserI, UserI } from './user.interface';

const find = () => {

  const [users, setUsers] = useState<UserI[]>([]);
  const [isLoading, setIsLoading] = useState(true)

  const resp = async () => {
    const resp = await dataBase.get<getUserI>('/api/users');
    setUsers(resp.data.data);
    setIsLoading(false);
  }
  useEffect(() => {
    resp();
  }, [])


  return {
    users,
    isLoading
  }
}


export const useUser = {
  find,
}