import axiosInstance from './axios';

const fetchUsers = async () => {
  const { data } = await axiosInstance.get('/posts');
  return data;
};
export { fetchUsers };
