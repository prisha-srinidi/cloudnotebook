import NoteContext from "./noteContext";

const NoteState = (props) => {
  const state = {
    name: "prisha",
    class: "5a",
  };
  return (
    <NoteContext.Provider value={state}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
