import axios from 'axios';


const generateUsers = (userCount: number, maxPosts: number): any => {
  return axios.get(`http://localhost:3500/api/v1/generateUsers`, {
      params: {
        userCount,
        maxPosts,
      }
    });
}

export default generateUsers;