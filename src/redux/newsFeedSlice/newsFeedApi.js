import axios from "axios"
import { getNewsFeedFail, getNewsFeedStart, getNewsFeedSuccess } from "./index";

export const getAllNewsFeed = async (dispatch) => {
  dispatch(getNewsFeedStart());
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    dispatch(getNewsFeedSuccess(res.data));
  } catch (err) {
    dispatch(getNewsFeedFail(err.response.data));
    console.log(err.response.data, "Error");
  }
};
