import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
const NotPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/');
  }, [navigate]);

  return <></>;
};

export default NotPage;
