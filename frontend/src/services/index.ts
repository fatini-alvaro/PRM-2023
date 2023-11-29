import axios from "axios";
import { IComment, ICredential, ILike, ITopic, IUser } from "../@types";

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
const _REPOST = '/reposts';
const _LIKE = '/likes';


//AUTH
const signIn = (credential: ICredential) => api.post(`${_AUTH}/signin`, credential);
const signUp = (user: IUser) => api.post(`${_AUTH}/signup`, user);

//PROFLE
const getProfileByUsername = (username: string) => api.get(`${_PROFILE}/${username}`);

//TOPICS
const getTopicById = (id?: number) => ( api.get(`${_TOPICS}/${id}`));

const getTopicsByUsername = (username?: string) => {
  const queryParam = username ? `?username=${username}` : '';
  return api.get(`${_TOPICS}${queryParam}`);
}

const createTopic = (topic: ITopic) => (api.post(_TOPICS, topic))

//COMMENTS
const getCommentsByTopic = (topic: ITopic) => (api.get(`${_COMMENTS}?topic=${topic.id}`));
const createComment = (comment: IComment) => (api.post(_COMMENTS, comment));
const removeComment = (comment: IComment) => (api.delete(`${_COMMENTS}/${comment.id}`));

//REPOSTS
const getRepostsByTopic = (topic: ITopic) => (api.get(`${_REPOST}?topic=${topic.id}`));

//LIKES
const getLikesByTopic = (topic: ITopic) => (api.get(`${_LIKE}?topic=${topic.id}`));
const getLikeByUserInTopic = (topic: ITopic, user: IUser) => (api.get(`${_LIKE}?topic=${topic.id}&user=${user.id}`));
const createLike = (like: ILike) => (api.post(_LIKE, like));
const removeLike = (like: ILike) => (api.delete(`${_LIKE}/${like.id}`));


export {
  signIn,
  signUp,
  getProfileByUsername,
  getTopicsByUsername,
  createTopic,
  getCommentsByTopic,
  createComment,
  removeComment,
  getRepostsByTopic,
  getTopicById,
  getLikesByTopic,
  getLikeByUserInTopic,
  createLike,
  removeLike
}