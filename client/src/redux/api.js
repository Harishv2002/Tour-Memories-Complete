import axios from "axios";

const devEnv = process.env.NODE_ENV !== "production";

const { REACT_APP_DEV_API, REACT_APP_PROD_API } = process.env;

const API = axios.create({
  baseURL: `${devEnv ? REACT_APP_DEV_API : REACT_APP_PROD_API}`,
});

// const API = axios.create({
//     baseURL: `http://localhost:5000`,
//   });

  API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
      req.headers.Authorization = `Bearer ${
        JSON.parse(localStorage.getItem("profile")).token
      }`;
    }
    return req;
  });

export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);
export const googleSignIn = (formData) => API.post("/users/googleSignIn", formData);

export const createTour = (tourData) => API.post("/tour", tourData);
// export const getTours = () => API.get("/tour");

export const getTours = (page) => API.get(`/tour?page=${page}`);
export const getTour = (id) => API.get(`/tour/${id}`);
export const getToursByUser = (userId) => API.get(`/tour/userTours/${userId}`);
export const deleteTour = (id) => API.delete(`/tour/${id}`);
export const updateTour = (updatedTourData,id) => API.patch(`/tour/${id}`,updatedTourData);
export const getToursBySearch = (searchQuery) =>
{
  // console.log(`Query inside api ${searchQuery}`)
  // console.log('inside api');
  return API.post(`/tour/search?searchQuery=${searchQuery}`);
}//used post rather than get

  
  export const getTagTours = (tag) => API.get(`/tour/tag/${tag}`);