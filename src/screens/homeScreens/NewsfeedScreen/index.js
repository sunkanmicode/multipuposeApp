import { View, Text } from "react-native";
import React from "react";
import NewfeedComp from "../../../components/NewsfeedComp";
import { useDispatch, useSelector } from "react-redux";
import { getAllNewsFeed } from "../../../redux/newsFeedSlice/newsFeedApi";

const NewsfeedScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const {
    newsFeedInfo: { data, loading, error },
  } = useSelector((state) => state.newsFeed);


  React.useEffect(() => {
    getAllNewsFeed(dispatch);
  }, []);

  return (
    <NewfeedComp
      navigation={navigation}
      data={data}
      loading={loading}
      error={error}
    />
  );
};

export default NewsfeedScreen;
