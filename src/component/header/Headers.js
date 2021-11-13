import React from "react";
import { Fragment } from "react";
import ModalBtn from "../addModal/ModalBtn";
import Header from "./Header";
import SwitchHeader from "./SwitchHeader";
import SwitchSort from "./SwitchSort";

const Headers = ({
  header, setHeader,
  setSort, sort,
  switchOptions,
  switchOptionItems,
  setDateTime,
  headerFor, setHeaderFor,
  showModal, setShowModal,
  setChangeBg
}) => {
  return (
    <Fragment>
      <div className="headersSwitch">
        <div className="header-sort-swtich">
          <SwitchHeader
            setHeaderFor={setHeaderFor}
            switchOptions={switchOptions}
            setHeader={setHeader}
            setSort={setSort}
            switchOptionItems={switchOptionItems}
            setDateTime={setDateTime}
            setChangeBg={setChangeBg}
          />
          <SwitchSort
            sort={sort}
            switchOptions={switchOptions}
            switchOptionItems={switchOptionItems}
            setDateTime={setDateTime}
            setChangeBg={setChangeBg}
            setHeaderFor={setHeaderFor}
          />
        </div>
        <ModalBtn setShowModal={setShowModal} showModal={showModal} />
      </div>
      <Header
        switchOptions={switchOptions}
        header={header}
        switchOptionItems={switchOptionItems}
        headerFor={headerFor}
      />
    </Fragment>
  );
};

export default Headers;
