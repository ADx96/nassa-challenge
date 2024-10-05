import axiosInstance from './axios'; // Import the Axios instance

const fetchUsers = async () => {
  const response = await axiosInstance.get('/posts'); // Use the Axios instance to make the request
  return response.data; // Return the data from the response
};

export { fetchUsers };
