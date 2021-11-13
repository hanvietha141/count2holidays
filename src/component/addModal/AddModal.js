import React from "react";
import SelectionModal from "./addSelectionModal/SelectionModal";

const AddModal = ({
  setShowModal,
  switchOptions,
  setSwitchOptionItems,
  switchOptionItems,
  setAddState,
  addState,
  setAddStateSort,
  addStateSort,
  getNewName,
  setGetNewName,
  getNewDate,
  setGetNewDate
}) => {
  const hideAddModalHandler = () => {
    setShowModal(false);
  };

  const stopHideAddModalHandler = (e) => {
    e.stopPropagation();
  };

  const getName = (e) => {
    setGetNewName(e.target.value);
  };
  const getDate = (e) => {
    setGetNewDate(e.target.value);
  };

  const submidHandler = (e) => {
    e.preventDefault();
    setShowModal(false);
    setSwitchOptionItems([
      ...switchOptionItems,
      {
        id: switchOptionItems.length,
        title: addState,
        name: getNewName,
        happyFor: getNewName,
        date: getNewDate,
        sort: addStateSort,
      },
    ]);
  };

  return (
    <div onClick={hideAddModalHandler} className="modal">
      <div onClick={stopHideAddModalHandler} className="modal-container">
        {switchOptions.map((switchOption, index) => {
          return (
            <SelectionModal
              setAddState={setAddState}
              key={index}
              switchOption={switchOption}
              setAddStateSort={setAddStateSort}
            />
          );
        })}
        <div>
          <input onChange={getName} placeholder="Nhập tên..."></input>
          <input onChange={getDate} placeholder="Month(in text) day, year" />
          <div>
            <button onClick={submidHandler} type="submit">
              Thêm {addState}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
