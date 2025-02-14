import axios from "axios";

let api = axios.create({
  baseURL: "https://cpms-fz1w.onrender.com/storedData",
});

export const doGetUser = () => {
  return api.get("/storedData");
};

export const doPatchUser = (id, data) => {
  return api.patch(`/storedData/${id}`, data);
};

export const doDeleteUser = (id) => {
  return api.delete(`/storedData/${id}`);
};

export const doPostUser = (data) => {
  return api.post(`/storedData`, data);
};
