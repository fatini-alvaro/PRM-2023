import axios from "axios";
import { IComment, ICredential, ITopic, IUser } from "../@types";

//Busca o token da local Storage
const token = localStorage.getItem('token');

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {'Authorization':`Bearer ${token}`}
});

//ENDPOINTS
const _AUTH = '/auth';
const _PROFILE = '/profile';
const _TOPICS = '/topics';
const _COMMENTS = '/comments';

//AUTH
const signIn = (credential: ICredential) => api.post(`${_AUTH}/signin`, credential);
const signUp = (user: IUser) => api.post(`${_AUTH}/signup`, user);

//PROFLE
const getProfileByUsername = (username: string) => api.get(`${_PROFILE}/${username}`);

//TOPICS
const getTopicsByUsername = (username?: string) => {
  const queryParam = username ? `?username=${username}` : '';
  return api.get(`${_TOPICS}${queryParam}`);
}

const createTopic = (topic: ITopic) => (api.post(_TOPICS, topic))

//COMMENTS
const getCommentsByTopic = (topic: ITopic) => (api.get(`${_COMMENTS}?topic=${topic.id}`));
const createComment = (comment: IComment) => (api.post(_COMMENTS, comment));
const removeComment = (comment: IComment) => (api.delete(`${_COMMENTS}/${comment.id}`));

export {
  signIn,
  signUp,
  getProfileByUsername,
  getTopicsByUsername,
  createTopic,
  getCommentsByTopic,
  createComment,
  removeComment
}