import { View, Text } from "react-native";
import React, { useState } from "react";
import NoteTakingComp from "../../../components/NoteTakingComp";
import { useDispatch, useSelector } from "react-redux";
import { addNoteToList, removeNote } from "../../../redux/noteTakingSlice";

const NoteTakingScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user);
  const noteList = useSelector((state) => state.note);

  // console.log(noteList, "noteList");

  const [searchNote, setSearchNote] = useState("");
  const [modalVisible, setModalVisible] = React.useState(false);
  const [showTabBar, setShowTabBar] = React.useState(false);

  const [addNote, setAddNote] = React.useState("");

  const handleAddNote = (note) => {
    dispatch(addNoteToList(note));
    setAddNote("")
  };

  //remove note
  const handleRemoveNote = (note) => {
    dispatch(removeNote(note));
  };

  //search
  const filterNote = noteList.data.filter((note) =>
    note.toLowerCase().includes(searchNote.toLowerCase())
  );

  const onchangeText = (value) => {
    console.log(value, "vvvv");
    setSearchNote(value);
  };

  return (
    <NoteTakingComp
      navigation={navigation}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      addNote={addNote}
      setAddNote={setAddNote}
      userInfo={userInfo}
      onchangeText={onchangeText}
      handleAddNote={handleAddNote}
      noteList={noteList}
      handleRemoveNote={handleRemoveNote}
      setSearchNote={setSearchNote}
      filterNote={filterNote}
      showTabBar={showTabBar}
      setShowTabBar={setShowTabBar}
    />
  );
};

export default NoteTakingScreen;
