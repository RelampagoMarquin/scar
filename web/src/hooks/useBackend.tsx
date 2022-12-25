import { useEffect, useState } from 'react';

import api from '../services/api';

type User = {
  name: string;
  password: string;
  email: string;
  class: string;
  registration: string;
};

const useBackend = async () => {
  const [data, setData] = useState<User[]>();

  useEffect(() => {
    api.get('users').then((response) => setData(response.data));
  }, []);

  return data;
};

export default useBackend;
