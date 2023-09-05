import { View, Text } from "react-native";
import React, { useState } from "react";
import NoteTakingComp from "../../../components/NoteTakingComp";
import { useDispatch, useSelector } from "react-redux";
import { addNoteToList, removeNote } from "../../../redux/noteTakingSlice";

const NoteTakingScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user);
  const noteList = useSelector((state) => state.note);

  console.log(noteList, "noteList");

  const[ searchNote, setSearchNote] = useState("")
  const [modalVisible, setModalVisible] = React.useState(false);
  const [showList, setShowList] = React.useState(false);
  const [form, setForm] = React.useState({});
  const [addNote, setAddNote] = React.useState("");

  const handleAddNote = (note) => {
    console.log(note, "addnote");
    dispatch(addNoteToList(note));
    // setAddNote("")
  };

  //remove note
  const handleRemoveNote = (note) => {
    console.log(note, "removeItem");
     dispatch(removeNote(note));
  };


  //search
  const filterNote = noteList.data.filter((note) =>
    note.toLowerCase().includes(searchNote.toLowerCase())
  );



  console.log(filterNote, "earchNote");
  console.log(filterNote.length <= 0, "hhhhh");

  const onchangeText = (value) => {
    console.log(value, "vvvv")
    setSearchNote(value);
  };

  const onSubmit = () => {
    console.log(form);
  };
  return (
    <NoteTakingComp
      navigation={navigation}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      showList={showList}
      setShowList={setShowList}
      addNote={addNote}
      setAddNote={setAddNote}
      userInfo={userInfo}
      onchangeText={onchangeText}
      onSubmit={onSubmit}
      handleAddNote={handleAddNote}
      noteList={noteList}
      handleRemoveNote={handleRemoveNote}
      setSearchNote={setSearchNote}
      filterNote={filterNote}
    />
  );
};

export default NoteTakingScreen;
