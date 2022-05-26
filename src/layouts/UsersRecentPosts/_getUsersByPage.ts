import axios from 'axios';


const getUsersByPage = (page: number, per: number): any => {
  return axios.get(`http://localhost:3500/api/v1/users`, {
      params: {
        page,
        per,
      }
    });
}

export default getUsersByPage;