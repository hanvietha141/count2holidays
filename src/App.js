import React, { useState } from "react";
import "./App.css";
import AddModal from "./component/addModal/AddModal";
import CountDown from "./component/countDownClock/CountDown";
import Headers from "./component/header/Headers";

function App() {
  const [sort, setSort] = useState("holiday");
  const [header, setHeader] = useState("Ngày lễ");
  const [headerFor, setHeaderFor] = useState("Tết Dương");

  const [dateTime, setDateTime] = useState("1 January, 2022");
  const dateTimeTo = new Date(dateTime).getTime();
  let current = new Date().getTime();

  const [day, setDay] = useState("");
  const [hour, setHour] = useState("");
  const [min, setMin] = useState("");
  const [sec, setSec] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [addState, setAddState] = useState("ngày lễ");
  const [addStateSort, setAddStateSort] = useState();
  const [getNewName, setGetNewName] = useState("");
  const [getNewDate, setGetNewDate] = useState("");


  const switchOptions = [
    {
      id: 1,
      title: "Ngày lễ",
      header: "Chào Mừng ngày lễ",
      sort: "holiday",
    },
    {
      id: 2,
      title: "Sinh nhật",
      header: "Chúc mừng sinh nhật",
      sort: "birthday",
    },
  ];

  const [switchOptionItems, setSwitchOptionItems] = useState([
    {
      id: 1,
      title: "Ngày lễ",
      name: "Tết Dương",
      happyFor: "Tết Dương",
      date: "1 January, 2022",
      img: "https://haitratancuong.com/wp-content/uploads/2021/09/tet-nguyen-dan-2022-tet-2022.jpg",
      sort: "holiday",
    },
    {
      id: 2,
      name: "Quốc tế Phụ Nữ",
      title: "Ngày lễ",
      happyFor: "Quốc tế Phụ Nữ",
      date: "3 March, 2022",
      img: "https://www.thanthongnhat.vn/uploads/news/2020_03/8-3.jpg",
      sort: "holiday",
    },
    {
      id: 3,
      name: "GP Miền Nam, Quốc tế lao động",
      title: "Ngày lễ",
      happyFor: "GP Miền Nam, Quốc tế lao động",
      date: "30 April, 2022",
      img: "https://www.thanthongnhat.vn/uploads/news/2020_03/8-3.jpg",
      sort: "holiday",
    },
    {
      id: 4,
      name: "Quốc Khánh",
      title: "Ngày lễ",
      happyFor: "Quốc Khánh",
      date: "2 September, 2022",
      img: "https://www.thanthongnhat.vn/uploads/news/2020_03/8-3.jpg",
      sort: "holiday",
    },
    {
      id: 5,
      name: "Phụ nữ Việt Nam",
      title: "Ngày lễ",
      happyFor: "Phụ nữ Việt Nam",
      date: "20 October, 2022",
      img: "https://www.thanthongnhat.vn/uploads/news/2020_03/8-3.jpg",
      sort: "holiday",
    },
    {
      id: 6,
      name: "Nhà giáo Việt Nam",
      title: "Ngày lễ",
      happyFor: "Nhà giáo Việt Nam",
      date: "20 November, 2022",
      img: "https://www.thanthongnhat.vn/uploads/news/2020_03/8-3.jpg",
      sort: "holiday",
    },
    {
      id: 7,
      name: "Sinh nhật của Hà",
      title: "Sinh nhật",
      happyFor: "Hà",
      date: "1 April, 2022",
      sort: "birthday",
    },
    {
      id: 8,
      name: "Sinh nhật của test",
      title: "Sinh nhật",
      happyFor: "Test",
      date: "7 September, 2022",
      sort: "birthday",
    },
  ]);

  const [changeBg, setChangeBg] = useState(switchOptionItems[0].img)

  const style = {
    height: "100vh",
    background: `url(${changeBg}) center center / cover no-repeat`
  }

  return (
    <div style={style} className="App">
      <div className="container">
        <Headers
          setHeaderFor={setHeaderFor}
          headerFor={headerFor}
          switchOptionItems={switchOptionItems}
          sort={sort}
          setSort={setSort}
          header={header}
          setHeader={setHeader}
          switchOptions={switchOptions}
          setDateTime={setDateTime}
          setShowModal={setShowModal}
          showModal={showModal}
          setChangeBg={setChangeBg}
        />
        {showModal && (
          <AddModal
            setShowModal={setShowModal}
            switchOptions={switchOptions}
            switchOptionItems={switchOptionItems}
            setSwitchOptionItems={setSwitchOptionItems}
            addState={addState}
            setAddState={setAddState}
            setAddStateSort={setAddStateSort}
            addStateSort={addStateSort}
            getNewName={getNewName}
            setGetNewName={setGetNewName}
            getNewDate={getNewDate}
            setGetNewDate={setGetNewDate}
          />
        )}
        <CountDown
          current={current}
          dateTimeTo={dateTimeTo}
          day={day}
          setDay={setDay}
          hour={hour}
          setHour={setHour}
          min={min}
          setMin={setMin}
          sec={sec}
          setSec={setSec}
        />
      </div>
    </div>
  );
}

export default App;
