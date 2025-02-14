import axios from "axios";

let api = axios.create({
  baseURL: "https://cpms-fz1w.onrender.com/adminReleases",
});

export const doGetAdmin = () => {
  return api.get("/adminReleases");
};

export const doPostAdmin = (data) => {
  return api.post("/adminReleases", data);
};

export const doUpdateAdmin = (id, data) => {
  return api.patch(`/adminReleases/${id}`, data);
};

export const doDeleteAdmin = (id) => {
  return api.delete(`/adminReleases/${id}`);
};
