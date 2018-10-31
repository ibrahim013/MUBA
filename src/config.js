
const allConfig = {

  development: {
    MUBA_API_BASE_URL: '',
    API_BASE_URL: 'https://muba-api.herokuapp.com/api/v1/rest-auth',
    BASE_URL: '',
  },

  production: {
    MUBA_API_BASE_URL: '',
    API_BASE_URL: 'https://muba-api.herokuapp.com/api/v1/rest-auth',
    BASE_URL: '',
  },

  staging: {
    MUBA_API_BASE_URL: '',
    API_BASE_URL: 'https://muba-api.herokuapp.com/api/v1/rest-auth',
    BASE_URL: '',
  },

};

export const config = allConfig[process.env.NODE_ENV];