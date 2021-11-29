import { VictoryPie, VictoryLegend, VictoryTheme } from 'victory';
import { useEffect, useState } from 'react';
import StudentsData from './StudentData';
import './App.css';

function App() {

  const [classVIIIIsChecked, setclassVIIIIsChecked] = useState(true);
  const [classIXIsChecked, setclassIXIsChecked] = useState(false);
  const [classXIsChecked, setclassXIsChecked] = useState(false);
  const [classXIIsChecked, setclassXIIsChecked] = useState(false);
  const [classXIIIsChecked, setclassXIIIsChecked] = useState(false);
  const [Maths, setMathsIsChecked] = useState(true);
  const [Sci, setSciIsChecked] = useState(false);

  const setclassVIII = () => {
    setclassIXIsChecked(false)
    setclassVIIIIsChecked(true)
    setclassXIsChecked(false)
    setclassXIIsChecked(false)
    setclassXIIIsChecked(false)
  }

  const setclassIX = () => {
    setclassIXIsChecked(true)
    setclassVIIIIsChecked(false)
    setclassXIsChecked(false)
    setclassXIIsChecked(false)
    setclassXIIIsChecked(false)
  }

  const setclassX = () => {
    setclassIXIsChecked(false)
    setclassVIIIIsChecked(false)
    setclassXIsChecked(true)
    setclassXIIsChecked(false)
    setclassXIIIsChecked(false)
  }

  const setclassXI = () => {
    setclassIXIsChecked(false)
    setclassVIIIIsChecked(false)
    setclassXIsChecked(false)
    setclassXIIsChecked(true)
    setclassXIIIsChecked(false)
  }

  const setclassXII = () => {
    setclassIXIsChecked(false)
    setclassVIIIIsChecked(false)
    setclassXIsChecked(false)
    setclassXIIsChecked(false)
    setclassXIIIsChecked(true)
  }

  const Mathe = (event) => {
    setMathsIsChecked(true)
    setSciIsChecked(false)
  }

  const Scie = (event) => {
    setSciIsChecked(true)
    setMathsIsChecked(false)
  }

  return (
    <div className="App" id="photo">
      <nav className="navbar navbar-dark navbar-expand-lg" style={{ backgroundColor: "#424040" }}>
        <div className="container-fluid">
          <span className="navbar-brand">USAGE METRIX</span>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="bi bi-lightning-charge-fill" style={{ color: "#FFD700" }} data-bs-toggle="modal" data-bs-target="#exampleModal"></a>
            </div>
          </div>
        </div>
      </nav>
      <br />
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          CLASS
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a className="dropdown-item" onClick={setclassVIII}>Class VIII</a></li>
          <li><a className="dropdown-item" onClick={setclassIX}>Class IX</a></li>
          <li><a className="dropdown-item" onClick={setclassX}>Class X</a></li>
          <li><a className="dropdown-item" onClick={setclassXI}>Class XI</a></li>
          <li><a className="dropdown-item" onClick={setclassXII}>Class XII</a></li>

        </ul>
        <br /><br />
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            SUBJECT            </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a className="dropdown-item" onClick={Mathe}>Mathematics</a></li>
            <li><a className="dropdown-item" onClick={Scie}>Science</a></li>

          </ul>
        </div>
      </div>


      {
        classVIIIIsChecked === true ?

          (Maths === true ?
            <div className="container">
              <div className="row">
                <div className="col">
                  <VictoryPie
                    radius={100}
                    labels={() => null}
                    colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                    data={[
                      { x: "90-100%", y: StudentsData[0].MarksStats.Mathematics.Markab90 },
                      { x: "80-90%", y: StudentsData[0].MarksStats.Mathematics.Markab80 },
                      { x: "70-80%", y: StudentsData[0].MarksStats.Mathematics.Markab70 },
                      { x: "60-70%", y: StudentsData[0].MarksStats.Mathematics.Markab60 },
                      { x: "50-60%", y: StudentsData[0].MarksStats.Mathematics.Markab50 },
                      { x: "Fail", y: StudentsData[0].MarksStats.Mathematics.MarkF },
                    ]}
                  />
                </div>
                <div className="col">
                  <VictoryLegend x={125} y={50}
                    orientation="vertical"
                    gutter={50}
                    colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                    style={{ border: { stroke: "black" } }}
                    data={[
                      { name: "90-100% - " + StudentsData[0].MarksStats.Mathematics.Markab90 + " - " + Math.round((StudentsData[0].MarksStats.Mathematics.Markab90 / StudentsData[0].NoOfStudents) * 100) + "%" },
                      { name: "80-90% - " + StudentsData[0].MarksStats.Mathematics.Markab80 + " - " + Math.round((StudentsData[0].MarksStats.Mathematics.Markab80 / StudentsData[0].NoOfStudents) * 100) + "%" },
                      { name: "70-80% - " + StudentsData[0].MarksStats.Mathematics.Markab70 + " - " + Math.round((StudentsData[0].MarksStats.Mathematics.Markab70 / StudentsData[0].NoOfStudents) * 100) + "%" },
                      { name: "60-70% - " + StudentsData[0].MarksStats.Mathematics.Markab60 + " - " + Math.round((StudentsData[0].MarksStats.Mathematics.Markab60 / StudentsData[0].NoOfStudents) * 100) + "%" },
                      { name: "50-60% - " + StudentsData[0].MarksStats.Mathematics.Markab50 + " - " + Math.round((StudentsData[0].MarksStats.Mathematics.Markab50 / StudentsData[0].NoOfStudents) * 100) + "%" },
                      { name: "Fail - " + StudentsData[0].MarksStats.Mathematics.MarkF + " - " + Math.round((StudentsData[0].MarksStats.Mathematics.MarkF / StudentsData[0].NoOfStudents) * 100) + "%" }
                    ]}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <VictoryPie
                    radius={100}
                    labels={() => null}
                    colorScale={["#3BFF00", "red"]}
                    data={[
                      { x: "Pass", y: StudentsData[0].NoOfStudents - StudentsData[0].MarksStats.Mathematics.MarkF },
                      { x: "Fail", y: StudentsData[0].MarksStats.Mathematics.MarkF }
                    ]}
                  />
                </div>
                <div className="col">
                  <VictoryLegend x={125} y={50}
                    orientation="vertical"
                    gutter={50}
                    colorScale={["#3BFF00", "red"]}
                    style={{ border: { stroke: "black" } }}
                    data={[
                      { name: "Pass -" + (StudentsData[0].NoOfStudents - StudentsData[0].MarksStats.Mathematics.MarkF) + " - " + Math.round(((StudentsData[0].NoOfStudents - StudentsData[0].MarksStats.Mathematics.MarkF) / StudentsData[0].NoOfStudents) * 100) + "%" },
                      { name: "Fail -" + StudentsData[0].MarksStats.Mathematics.MarkF + " - " + Math.round((StudentsData[0].MarksStats.Mathematics.MarkF / StudentsData[0].NoOfStudents) * 100) + "%" },
                    ]}
                  />
                  </div>
                <div className="row">
                  <div className="col">
                    <VictoryPie
                      radius={100}
                      labels={() => null}
                      colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                      data={[
                        { x: "90-100%", y: StudentsData[0].FeedbackStats.Mathematics.Review5 },
                        { x: "80-90%", y: StudentsData[0].FeedbackStats.Mathematics.Review4 },
                        { x: "70-80%", y: StudentsData[0].FeedbackStats.Mathematics.Review3 },
                        { x: "60-70%", y: StudentsData[0].FeedbackStats.Mathematics.Review2 },
                        { x: "50-60%", y: StudentsData[0].FeedbackStats.Mathematics.Review1 }
                      ]}
                    />
                  </div>
                  <div className="col">
                    <VictoryLegend x={125} y={50}
                      orientation="vertical"
                      gutter={50}
                      colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                      style={{ border: { stroke: "black" } }}
                      data={[
                        { name: "5 stars - " + StudentsData[0].FeedbackStats.Mathematics.Review5 + " - " + Math.round((StudentsData[0].FeedbackStats.Mathematics.Review5 / StudentsData[0].NoOfStudents) * 100) + "%" },
                        { name: "4 stars - " + StudentsData[0].FeedbackStats.Mathematics.Review4 + " - " + Math.round((StudentsData[0].FeedbackStats.Mathematics.Review4 / StudentsData[0].NoOfStudents) * 100) + "%" },
                        { name: "3 stars - " + StudentsData[0].FeedbackStats.Mathematics.Review3 + " - " + Math.round((StudentsData[0].FeedbackStats.Mathematics.Review3 / StudentsData[0].NoOfStudents) * 100) + "%" },
                        { name: "2 stars - " + StudentsData[0].FeedbackStats.Mathematics.Review2 + " - " + Math.round((StudentsData[0].FeedbackStats.Mathematics.Review2 / StudentsData[0].NoOfStudents) * 100) + "%" },
                        { name: "1 star - " + StudentsData[0].FeedbackStats.Mathematics.Review1 + " - " + Math.round((StudentsData[0].FeedbackStats.Mathematics.Review1 / StudentsData[0].NoOfStudents) * 100) + "%" },
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
            :
            Sci === true ?
              <div className="row">
                <div className="col">
                  <VictoryPie
                    radius={100}
                    labels={() => null}
                    colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                    data={[
                      { x: "90-100%", y: StudentsData[0].MarksStats.Science.Markab90 },
                      { x: "80-90%", y: StudentsData[0].MarksStats.Science.Markab80 },
                      { x: "70-80%", y: StudentsData[0].MarksStats.Science.Markab70 },
                      { x: "60-70%", y: StudentsData[0].MarksStats.Science.Markab60 },
                      { x: "50-60%", y: StudentsData[0].MarksStats.Science.Markab50 },
                      { x: "Fail", y: StudentsData[0].MarksStats.Science.MarkF },
                    ]}
                  />
                </div>
                <div className="col">
                  <VictoryLegend x={125} y={50}
                    orientation="vertical"
                    gutter={50}
                    colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                    style={{ border: { stroke: "black" } }}
                    data={[
                      { name: "90-100% - " + StudentsData[0].MarksStats.Science.Markab90 + " - " + Math.round((StudentsData[0].MarksStats.Science.Markab90 / StudentsData[0].NoOfStudents) * 100) + "%" },
                      { name: "80-90% - " + StudentsData[0].MarksStats.Science.Markab80 + " - " + Math.round((StudentsData[0].MarksStats.Science.Markab80 / StudentsData[0].NoOfStudents) * 100) + "%" },
                      { name: "70-80% - " + StudentsData[0].MarksStats.Science.Markab70 + " - " + Math.round((StudentsData[0].MarksStats.Science.Markab70 / StudentsData[0].NoOfStudents) * 100) + "%" },
                      { name: "60-70% - " + StudentsData[0].MarksStats.Science.Markab60 + " - " + Math.round((StudentsData[0].MarksStats.Science.Markab60 / StudentsData[0].NoOfStudents) * 100) + "%" },
                      { name: "50-60% - " + StudentsData[0].MarksStats.Science.Markab50 + " - " + Math.round((StudentsData[0].MarksStats.Science.Markab50 / StudentsData[0].NoOfStudents) * 100) + "%" },
                      { name: "Fail - " + StudentsData[0].MarksStats.Science.MarkF + " - " + Math.round((StudentsData[0].MarksStats.Science.MarkF / StudentsData[0].NoOfStudents) * 100) + "%" }
                    ]}
                  />
                </div>
                <div className="row">
                  <div className="col">
                    <VictoryPie
                      radius={100}
                      labels={() => null}
                      colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                      data={[
                        { x: "90-100%", y: StudentsData[0].FeedbackStats.Science.Review5 },
                        { x: "80-90%", y: StudentsData[0].FeedbackStats.Science.Review4 },
                        { x: "70-80%", y: StudentsData[0].FeedbackStats.Science.Review3 },
                        { x: "60-70%", y: StudentsData[0].FeedbackStats.Science.Review2 },
                        { x: "50-60%", y: StudentsData[0].FeedbackStats.Science.Review1 }
                      ]}
                    />
                  </div>
                  <div className="col">
                    <VictoryLegend x={125} y={50}
                      orientation="vertical"
                      gutter={50}
                      colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                      style={{ border: { stroke: "black" } }}
                      data={[
                        { name: "5 stars - " + StudentsData[0].FeedbackStats.Science.Review5 + " - " + Math.round((StudentsData[0].FeedbackStats.Science.Review5 / StudentsData[0].NoOfStudents) * 100) + "%" },
                        { name: "4 stars - " + StudentsData[0].FeedbackStats.Science.Review4 + " - " + Math.round((StudentsData[0].FeedbackStats.Science.Review4 / StudentsData[0].NoOfStudents) * 100) + "%" },
                        { name: "3 stars - " + StudentsData[0].FeedbackStats.Science.Review3 + " - " + Math.round((StudentsData[0].FeedbackStats.Science.Review3 / StudentsData[0].NoOfStudents) * 100) + "%" },
                        { name: "2 stars - " + StudentsData[0].FeedbackStats.Science.Review2 + " - " + Math.round((StudentsData[0].FeedbackStats.Science.Review2 / StudentsData[0].NoOfStudents) * 100) + "%" },
                        { name: "1 star - " + StudentsData[0].FeedbackStats.Science.Review1 + " - " + Math.round((StudentsData[0].FeedbackStats.Science.Review1 / StudentsData[0].NoOfStudents) * 100) + "%" },
                      ]}
                    />
                  </div>
                </div>
              </div>
              :

              null
          )
          :
          classIXIsChecked === true ?
            (Maths === true ? <div className="container">
              <div className="row">
                <div className="col">
                  <VictoryPie
                    radius={100}
                    labels={() => null}
                    colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                    data={[
                      { x: "90-100%", y: StudentsData[1].MarksStats.Mathematics.Markab90 },
                      { x: "80-90%", y: StudentsData[1].MarksStats.Mathematics.Markab80 },
                      { x: "70-80%", y: StudentsData[1].MarksStats.Mathematics.Markab70 },
                      { x: "60-70%", y: StudentsData[1].MarksStats.Mathematics.Markab60 },
                      { x: "50-60%", y: StudentsData[1].MarksStats.Mathematics.Markab50 },
                      { x: "Fail", y: StudentsData[1].MarksStats.Mathematics.MarkF },
                    ]}
                  />
                </div>
                <div className="col">
                  <VictoryLegend x={125} y={50}
                    orientation="vertical"
                    gutter={50}
                    colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                    style={{ border: { stroke: "black" } }}
                    data={[
                      { name: "90-100% - " + StudentsData[1].MarksStats.Mathematics.Markab90 + " - " + Math.round((StudentsData[1].MarksStats.Mathematics.Markab90 / StudentsData[1].NoOfStudents) * 100) + "%" },
                      { name: "80-90% - " + StudentsData[1].MarksStats.Mathematics.Markab80 + " - " + Math.round((StudentsData[1].MarksStats.Mathematics.Markab80 / StudentsData[1].NoOfStudents) * 100) + "%" },
                      { name: "70-80% - " + StudentsData[1].MarksStats.Mathematics.Markab70 + " - " + Math.round((StudentsData[1].MarksStats.Mathematics.Markab70 / StudentsData[1].NoOfStudents) * 100) + "%" },
                      { name: "60-70% - " + StudentsData[1].MarksStats.Mathematics.Markab60 + " - " + Math.round((StudentsData[1].MarksStats.Mathematics.Markab60 / StudentsData[1].NoOfStudents) * 100) + "%" },
                      { name: "50-60% - " + StudentsData[1].MarksStats.Mathematics.Markab50 + " - " + Math.round((StudentsData[1].MarksStats.Mathematics.Markab50 / StudentsData[1].NoOfStudents) * 100) + "%" },
                      { name: "Fail - " + StudentsData[1].MarksStats.Mathematics.MarkF + " - " + Math.round((StudentsData[1].MarksStats.Mathematics.MarkF / StudentsData[1].NoOfStudents) * 100) + "%" }
                    ]}
                  />
                </div>
                <div className="row">
                  <div className="col">
                    <VictoryPie
                      radius={100}
                      labels={() => null}
                      colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                      data={[
                        { x: "90-100%", y: StudentsData[1].FeedbackStats.Mathematics.Review5 },
                        { x: "80-90%", y: StudentsData[1].FeedbackStats.Mathematics.Review4 },
                        { x: "70-80%", y: StudentsData[1].FeedbackStats.Mathematics.Review3 },
                        { x: "60-70%", y: StudentsData[1].FeedbackStats.Mathematics.Review2 },
                        { x: "50-60%", y: StudentsData[1].FeedbackStats.Mathematics.Review1 }
                      ]}
                    />
                  </div>
                  <div className="col">
                    <VictoryLegend x={125} y={50}
                      orientation="vertical"
                      gutter={50}
                      colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                      style={{ border: { stroke: "black" } }}
                      data={[
                        { name: "5 stars - " + StudentsData[1].FeedbackStats.Mathematics.Review5 + " - " + Math.round((StudentsData[1].FeedbackStats.Mathematics.Review5 / StudentsData[1].NoOfStudents) * 100) + "%" },
                        { name: "4 stars - " + StudentsData[1].FeedbackStats.Mathematics.Review4 + " - " + Math.round((StudentsData[1].FeedbackStats.Mathematics.Review4 / StudentsData[1].NoOfStudents) * 100) + "%" },
                        { name: "3 stars - " + StudentsData[1].FeedbackStats.Mathematics.Review3 + " - " + Math.round((StudentsData[1].FeedbackStats.Mathematics.Review3 / StudentsData[1].NoOfStudents) * 100) + "%" },
                        { name: "2 stars - " + StudentsData[1].FeedbackStats.Mathematics.Review2 + " - " + Math.round((StudentsData[1].FeedbackStats.Mathematics.Review2 / StudentsData[1].NoOfStudents) * 100) + "%" },
                        { name: "1 star - " + StudentsData[1].FeedbackStats.Mathematics.Review1 + " - " + Math.round((StudentsData[1].FeedbackStats.Mathematics.Review1 / StudentsData[1].NoOfStudents) * 100) + "%" },
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div> :
              Sci === true ?
                <div className="row">
                  <div className="col">
                    <VictoryPie
                      radius={100}
                      labels={() => null}
                      colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                      data={[
                        { x: "90-100%", y: StudentsData[1].MarksStats.Science.Markab90 },
                        { x: "80-90%", y: StudentsData[1].MarksStats.Science.Markab80 },
                        { x: "70-80%", y: StudentsData[1].MarksStats.Science.Markab70 },
                        { x: "60-70%", y: StudentsData[1].MarksStats.Science.Markab60 },
                        { x: "50-60%", y: StudentsData[1].MarksStats.Science.Markab50 },
                        { x: "Fail", y: StudentsData[1].MarksStats.Science.MarkF },
                      ]}
                    />
                  </div>
                  <div className="col">
                    <VictoryLegend x={125} y={50}
                      orientation="vertical"
                      gutter={50}
                      colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                      style={{ border: { stroke: "black" } }}
                      data={[
                        { name: "90-100% - " + StudentsData[1].MarksStats.Science.Markab90 + " - " + Math.round((StudentsData[1].MarksStats.Science.Markab90 / StudentsData[1].NoOfStudents) * 100) + "%" },
                        { name: "80-90% - " + StudentsData[1].MarksStats.Science.Markab80 + " - " + Math.round((StudentsData[1].MarksStats.Science.Markab80 / StudentsData[1].NoOfStudents) * 100) + "%" },
                        { name: "70-80% - " + StudentsData[1].MarksStats.Science.Markab70 + " - " + Math.round((StudentsData[1].MarksStats.Science.Markab70 / StudentsData[1].NoOfStudents) * 100) + "%" },
                        { name: "60-70% - " + StudentsData[1].MarksStats.Science.Markab60 + " - " + Math.round((StudentsData[1].MarksStats.Science.Markab60 / StudentsData[1].NoOfStudents) * 100) + "%" },
                        { name: "50-60% - " + StudentsData[1].MarksStats.Science.Markab50 + " - " + Math.round((StudentsData[1].MarksStats.Science.Markab50 / StudentsData[1].NoOfStudents) * 100) + "%" },
                        { name: "Fail - " + StudentsData[1].MarksStats.Science.MarkF + " - " + Math.round((StudentsData[1].MarksStats.Science.MarkF / StudentsData[1].NoOfStudents) * 100) + "%" }
                      ]}
                    />
                  </div>
                  <div className="row">
                    <div className="col">
                      <VictoryPie
                        radius={100}
                        labels={() => null}
                        colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                        data={[
                          { x: "90-100%", y: StudentsData[1].FeedbackStats.Science.Review5 },
                          { x: "80-90%", y: StudentsData[1].FeedbackStats.Science.Review4 },
                          { x: "70-80%", y: StudentsData[1].FeedbackStats.Science.Review3 },
                          { x: "60-70%", y: StudentsData[1].FeedbackStats.Science.Review2 },
                          { x: "50-60%", y: StudentsData[1].FeedbackStats.Science.Review1 }
                        ]}
                      />
                    </div>
                    <div className="col">
                      <VictoryLegend x={125} y={50}
                        orientation="vertical"
                        gutter={50}
                        colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                        style={{ border: { stroke: "black" } }}
                        data={[
                          { name: "5 stars - " + StudentsData[1].FeedbackStats.Science.Review5 + " - " + Math.round((StudentsData[1].FeedbackStats.Science.Review5 / StudentsData[1].NoOfStudents) * 100) + "%" },
                          { name: "4 stars - " + StudentsData[1].FeedbackStats.Science.Review4 + " - " + Math.round((StudentsData[1].FeedbackStats.Science.Review4 / StudentsData[1].NoOfStudents) * 100) + "%" },
                          { name: "3 stars - " + StudentsData[1].FeedbackStats.Science.Review3 + " - " + Math.round((StudentsData[1].FeedbackStats.Science.Review3 / StudentsData[1].NoOfStudents) * 100) + "%" },
                          { name: "2 stars - " + StudentsData[1].FeedbackStats.Science.Review2 + " - " + Math.round((StudentsData[1].FeedbackStats.Science.Review2 / StudentsData[1].NoOfStudents) * 100) + "%" },
                          { name: "1 star - " + StudentsData[1].FeedbackStats.Science.Review1 + " - " + Math.round((StudentsData[1].FeedbackStats.Science.Review1 / StudentsData[1].NoOfStudents) * 100) + "%" },
                        ]}
                      />
                    </div>
                  </div>
                </div> :
                null
            ) :
            classXIsChecked === true ?
              (
                Maths === true ?
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <VictoryPie
                          radius={100}
                          labels={() => null}
                          colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                          data={[
                            { x: "90-100%", y: StudentsData[2].MarksStats.Mathematics.Markab90 },
                            { x: "80-90%", y: StudentsData[2].MarksStats.Mathematics.Markab80 },
                            { x: "70-80%", y: StudentsData[2].MarksStats.Mathematics.Markab70 },
                            { x: "60-70%", y: StudentsData[2].MarksStats.Mathematics.Markab60 },
                            { x: "50-60%", y: StudentsData[2].MarksStats.Mathematics.Markab50 },
                            { x: "Fail", y: StudentsData[2].MarksStats.Mathematics.MarkF },
                          ]}
                        />
                      </div>
                      <div className="col">
                        <VictoryLegend x={125} y={50}
                          orientation="vertical"
                          gutter={50}
                          colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                          style={{ border: { stroke: "black" } }}
                          data={[
                            { name: "90-100% - " + StudentsData[2].MarksStats.Mathematics.Markab90 + " - " + Math.round((StudentsData[2].MarksStats.Mathematics.Markab90 / StudentsData[2].NoOfStudents) * 100) + "%" },
                            { name: "80-90% - " + StudentsData[2].MarksStats.Mathematics.Markab80 + " - " + Math.round((StudentsData[2].MarksStats.Mathematics.Markab80 / StudentsData[2].NoOfStudents) * 100) + "%" },
                            { name: "70-80% - " + StudentsData[2].MarksStats.Mathematics.Markab70 + " - " + Math.round((StudentsData[2].MarksStats.Mathematics.Markab70 / StudentsData[2].NoOfStudents) * 100) + "%" },
                            { name: "60-70% - " + StudentsData[2].MarksStats.Mathematics.Markab60 + " - " + Math.round((StudentsData[2].MarksStats.Mathematics.Markab60 / StudentsData[2].NoOfStudents) * 100) + "%" },
                            { name: "50-60% - " + StudentsData[2].MarksStats.Mathematics.Markab50 + " - " + Math.round((StudentsData[2].MarksStats.Mathematics.Markab50 / StudentsData[2].NoOfStudents) * 100) + "%" },
                            { name: "Fail - " + StudentsData[2].MarksStats.Mathematics.MarkF + " - " + Math.round((StudentsData[2].MarksStats.Mathematics.MarkF / StudentsData[2].NoOfStudents) * 100) + "%" }
                          ]}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <VictoryPie
                          radius={100}
                          labels={() => null}
                          colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                          data={[
                            { x: "90-100%", y: StudentsData[2].FeedbackStats.Mathematics.Review5 },
                            { x: "80-90%", y: StudentsData[2].FeedbackStats.Mathematics.Review4 },
                            { x: "70-80%", y: StudentsData[2].FeedbackStats.Mathematics.Review3 },
                            { x: "60-70%", y: StudentsData[2].FeedbackStats.Mathematics.Review2 },
                            { x: "50-60%", y: StudentsData[2].FeedbackStats.Mathematics.Review1 }
                          ]}
                        />
                      </div>
                      <div className="col">
                        <VictoryLegend x={125} y={50}
                          orientation="vertical"
                          gutter={50}
                          colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                          style={{ border: { stroke: "black" } }}
                          data={[
                            { name: "5 stars - " + StudentsData[2].FeedbackStats.Mathematics.Review5 + " - " + Math.round((StudentsData[2].FeedbackStats.Mathematics.Review5 / StudentsData[2].NoOfStudents) * 100) + "%" },
                            { name: "4 stars - " + StudentsData[2].FeedbackStats.Mathematics.Review4 + " - " + Math.round((StudentsData[2].FeedbackStats.Mathematics.Review4 / StudentsData[2].NoOfStudents) * 100) + "%" },
                            { name: "3 stars - " + StudentsData[2].FeedbackStats.Mathematics.Review3 + " - " + Math.round((StudentsData[2].FeedbackStats.Mathematics.Review3 / StudentsData[2].NoOfStudents) * 100) + "%" },
                            { name: "2 stars - " + StudentsData[2].FeedbackStats.Mathematics.Review2 + " - " + Math.round((StudentsData[2].FeedbackStats.Mathematics.Review2 / StudentsData[2].NoOfStudents) * 100) + "%" },
                            { name: "1 star - " + StudentsData[2].FeedbackStats.Mathematics.Review1 + " - " + Math.round((StudentsData[2].FeedbackStats.Mathematics.Review1 / StudentsData[2].NoOfStudents) * 100) + "%" },
                          ]}
                        />
                      </div>
                    </div>
                  </div> :
                  Sci === true ?
                    <div className="row">
                      <div className="col">
                        <VictoryPie
                          radius={100}
                          labels={() => null}
                          colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                          data={[
                            { x: "90-100%", y: StudentsData[2].MarksStats.Science.Markab90 },
                            { x: "80-90%", y: StudentsData[2].MarksStats.Science.Markab80 },
                            { x: "70-80%", y: StudentsData[2].MarksStats.Science.Markab70 },
                            { x: "60-70%", y: StudentsData[2].MarksStats.Science.Markab60 },
                            { x: "50-60%", y: StudentsData[2].MarksStats.Science.Markab50 },
                            { x: "Fail", y: StudentsData[2].MarksStats.Science.MarkF },
                          ]}
                        />
                      </div>
                      <div className="col">
                        <VictoryLegend x={125} y={50}
                          orientation="vertical"
                          gutter={50}
                          colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                          style={{ border: { stroke: "black" } }}
                          data={[
                            { name: "90-100% - " + StudentsData[2].MarksStats.Science.Markab90 + " - " + Math.round((StudentsData[2].MarksStats.Science.Markab90 / StudentsData[2].NoOfStudents) * 100) + "%" },
                            { name: "80-90% - " + StudentsData[2].MarksStats.Science.Markab80 + " - " + Math.round((StudentsData[2].MarksStats.Science.Markab80 / StudentsData[2].NoOfStudents) * 100) + "%" },
                            { name: "70-80% - " + StudentsData[2].MarksStats.Science.Markab70 + " - " + Math.round((StudentsData[2].MarksStats.Science.Markab70 / StudentsData[2].NoOfStudents) * 100) + "%" },
                            { name: "60-70% - " + StudentsData[2].MarksStats.Science.Markab60 + " - " + Math.round((StudentsData[2].MarksStats.Science.Markab60 / StudentsData[2].NoOfStudents) * 100) + "%" },
                            { name: "50-60% - " + StudentsData[2].MarksStats.Science.Markab50 + " - " + Math.round((StudentsData[2].MarksStats.Science.Markab50 / StudentsData[2].NoOfStudents) * 100) + "%" },
                            { name: "Fail - " + StudentsData[2].MarksStats.Science.MarkF + " - " + Math.round((StudentsData[2].MarksStats.Science.MarkF / StudentsData[2].NoOfStudents) * 100) + "%" }
                          ]}
                        />
                      </div>
                      <div className="row">
                        <div className="col">
                          <VictoryPie
                            radius={100}
                            labels={() => null}
                            colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                            data={[
                              { x: "90-100%", y: StudentsData[2].FeedbackStats.Science.Review5 },
                              { x: "80-90%", y: StudentsData[2].FeedbackStats.Science.Review4 },
                              { x: "70-80%", y: StudentsData[2].FeedbackStats.Science.Review3 },
                              { x: "60-70%", y: StudentsData[2].FeedbackStats.Science.Review2 },
                              { x: "50-60%", y: StudentsData[2].FeedbackStats.Science.Review1 }
                            ]}
                          />
                        </div>
                        <div className="col">
                          <VictoryLegend x={125} y={50}
                            orientation="vertical"
                            gutter={50}
                            colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                            style={{ border: { stroke: "black" } }}
                            data={[
                              { name: "5 stars - " + StudentsData[2].FeedbackStats.Science.Review5 + " - " + Math.round((StudentsData[2].FeedbackStats.Science.Review5 / StudentsData[2].NoOfStudents) * 100) + "%" },
                              { name: "4 stars - " + StudentsData[2].FeedbackStats.Science.Review4 + " - " + Math.round((StudentsData[2].FeedbackStats.Science.Review4 / StudentsData[2].NoOfStudents) * 100) + "%" },
                              { name: "3 stars - " + StudentsData[2].FeedbackStats.Science.Review3 + " - " + Math.round((StudentsData[2].FeedbackStats.Science.Review3 / StudentsData[2].NoOfStudents) * 100) + "%" },
                              { name: "2 stars - " + StudentsData[2].FeedbackStats.Science.Review2 + " - " + Math.round((StudentsData[2].FeedbackStats.Science.Review2 / StudentsData[2].NoOfStudents) * 100) + "%" },
                              { name: "1 star - " + StudentsData[2].FeedbackStats.Science.Review1 + " - " + Math.round((StudentsData[2].FeedbackStats.Science.Review1 / StudentsData[2].NoOfStudents) * 100) + "%" },
                            ]}
                          />
                        </div>
                      </div>
                    </div>
                    :
                    null
              )
              :
              classXIIsChecked === true ?
                (
                  Maths === true ?
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          <VictoryPie
                            radius={100}
                            labels={() => null}
                            colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                            data={[
                              { x: "90-100%", y: StudentsData[3].MarksStats.Mathematics.Markab90 },
                              { x: "80-90%", y: StudentsData[3].MarksStats.Mathematics.Markab80 },
                              { x: "70-80%", y: StudentsData[3].MarksStats.Mathematics.Markab70 },
                              { x: "60-70%", y: StudentsData[3].MarksStats.Mathematics.Markab60 },
                              { x: "50-60%", y: StudentsData[3].MarksStats.Mathematics.Markab50 },
                              { x: "Fail", y: StudentsData[3].MarksStats.Mathematics.MarkF },
                            ]}
                          />
                        </div>
                        <div className="col">
                          <VictoryLegend x={125} y={50}
                            orientation="vertical"
                            gutter={50}
                            colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                            style={{ border: { stroke: "black" } }}
                            data={[
                              { name: "90-100% - " + StudentsData[3].MarksStats.Mathematics.Markab90 + " - " + Math.round((StudentsData[3].MarksStats.Mathematics.Markab90 / StudentsData[3].NoOfStudents) * 100) + "%" },
                              { name: "80-90% - " + StudentsData[3].MarksStats.Mathematics.Markab80 + " - " + Math.round((StudentsData[3].MarksStats.Mathematics.Markab80 / StudentsData[3].NoOfStudents) * 100) + "%" },
                              { name: "70-80% - " + StudentsData[3].MarksStats.Mathematics.Markab70 + " - " + Math.round((StudentsData[3].MarksStats.Mathematics.Markab70 / StudentsData[3].NoOfStudents) * 100) + "%" },
                              { name: "60-70% - " + StudentsData[3].MarksStats.Mathematics.Markab60 + " - " + Math.round((StudentsData[3].MarksStats.Mathematics.Markab60 / StudentsData[3].NoOfStudents) * 100) + "%" },
                              { name: "50-60% - " + StudentsData[3].MarksStats.Mathematics.Markab50 + " - " + Math.round((StudentsData[3].MarksStats.Mathematics.Markab50 / StudentsData[3].NoOfStudents) * 100) + "%" },
                              { name: "Fail - " + StudentsData[3].MarksStats.Mathematics.MarkF + " - " + Math.round((StudentsData[3].MarksStats.Mathematics.MarkF / StudentsData[3].NoOfStudents) * 100) + "%" }
                            ]}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <VictoryPie
                            radius={100}
                            labels={() => null}
                            colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                            data={[
                              { x: "90-100%", y: StudentsData[3].FeedbackStats.Mathematics.Review5 },
                              { x: "80-90%", y: StudentsData[3].FeedbackStats.Mathematics.Review4 },
                              { x: "70-80%", y: StudentsData[3].FeedbackStats.Mathematics.Review3 },
                              { x: "60-70%", y: StudentsData[3].FeedbackStats.Mathematics.Review2 },
                              { x: "50-60%", y: StudentsData[3].FeedbackStats.Mathematics.Review1 }
                            ]}
                          />
                        </div>
                        <div className="col">
                          <VictoryLegend x={125} y={50}
                            orientation="vertical"
                            gutter={50}
                            colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                            style={{ border: { stroke: "black" } }}
                            data={[
                              { name: "5 stars - " + StudentsData[3].FeedbackStats.Mathematics.Review5 + " - " + Math.round((StudentsData[3].FeedbackStats.Mathematics.Review5 / StudentsData[3].NoOfStudents) * 100) + "%" },
                              { name: "4 stars - " + StudentsData[3].FeedbackStats.Mathematics.Review4 + " - " + Math.round((StudentsData[3].FeedbackStats.Mathematics.Review4 / StudentsData[3].NoOfStudents) * 100) + "%" },
                              { name: "3 stars - " + StudentsData[3].FeedbackStats.Mathematics.Review3 + " - " + Math.round((StudentsData[3].FeedbackStats.Mathematics.Review3 / StudentsData[3].NoOfStudents) * 100) + "%" },
                              { name: "2 stars - " + StudentsData[3].FeedbackStats.Mathematics.Review2 + " - " + Math.round((StudentsData[3].FeedbackStats.Mathematics.Review2 / StudentsData[3].NoOfStudents) * 100) + "%" },
                              { name: "1 star - " + StudentsData[3].FeedbackStats.Mathematics.Review1 + " - " + Math.round((StudentsData[3].FeedbackStats.Mathematics.Review1 / StudentsData[3].NoOfStudents) * 100) + "%" },
                            ]}
                          />
                        </div>
                      </div>
                    </div> :
                    Sci === true ?
                      <div className="row">
                        <div className="col">
                          <VictoryPie
                            radius={100}
                            labels={() => null}
                            colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                            data={[
                              { x: "90-100%", y: StudentsData[3].MarksStats.Science.Markab90 },
                              { x: "80-90%", y: StudentsData[3].MarksStats.Science.Markab80 },
                              { x: "70-80%", y: StudentsData[3].MarksStats.Science.Markab70 },
                              { x: "60-70%", y: StudentsData[3].MarksStats.Science.Markab60 },
                              { x: "50-60%", y: StudentsData[3].MarksStats.Science.Markab50 },
                              { x: "Fail", y: StudentsData[3].MarksStats.Science.MarkF },
                            ]}
                          />
                        </div>
                        <div className="col">
                          <VictoryLegend x={125} y={50}
                            orientation="vertical"
                            gutter={50}
                            colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                            style={{ border: { stroke: "black" } }}
                            data={[
                              { name: "90-100% - " + StudentsData[3].MarksStats.Science.Markab90 + " - " + Math.round((StudentsData[3].MarksStats.Science.Markab90 / StudentsData[3].NoOfStudents) * 100) + "%" },
                              { name: "80-90% - " + StudentsData[3].MarksStats.Science.Markab80 + " - " + Math.round((StudentsData[3].MarksStats.Science.Markab80 / StudentsData[3].NoOfStudents) * 100) + "%" },
                              { name: "70-80% - " + StudentsData[3].MarksStats.Science.Markab70 + " - " + Math.round((StudentsData[3].MarksStats.Science.Markab70 / StudentsData[3].NoOfStudents) * 100) + "%" },
                              { name: "60-70% - " + StudentsData[3].MarksStats.Science.Markab60 + " - " + Math.round((StudentsData[3].MarksStats.Science.Markab60 / StudentsData[3].NoOfStudents) * 100) + "%" },
                              { name: "50-60% - " + StudentsData[3].MarksStats.Science.Markab50 + " - " + Math.round((StudentsData[3].MarksStats.Science.Markab50 / StudentsData[3].NoOfStudents) * 100) + "%" },
                              { name: "Fail - " + StudentsData[3].MarksStats.Science.MarkF + " - " + Math.round((StudentsData[3].MarksStats.Science.MarkF / StudentsData[3].NoOfStudents) * 100) + "%" }
                            ]}
                          />
                        </div>
                        <div className="row">
                          <div className="col">
                            <VictoryPie
                              radius={100}
                              labels={() => null}
                              colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                              data={[
                                { x: "90-100%", y: StudentsData[3].FeedbackStats.Science.Review5 },
                                { x: "80-90%", y: StudentsData[3].FeedbackStats.Science.Review4 },
                                { x: "70-80%", y: StudentsData[3].FeedbackStats.Science.Review3 },
                                { x: "60-70%", y: StudentsData[3].FeedbackStats.Science.Review2 },
                                { x: "50-60%", y: StudentsData[3].FeedbackStats.Science.Review1 }
                              ]}
                            />
                          </div>
                          <div className="col">
                            <VictoryLegend x={125} y={50}
                              orientation="vertical"
                              gutter={50}
                              colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                              style={{ border: { stroke: "black" } }}
                              data={[
                                { name: "5 stars - " + StudentsData[3].FeedbackStats.Science.Review5 + " - " + Math.round((StudentsData[3].FeedbackStats.Science.Review5 / StudentsData[3].NoOfStudents) * 100) + "%" },
                                { name: "4 stars - " + StudentsData[3].FeedbackStats.Science.Review4 + " - " + Math.round((StudentsData[3].FeedbackStats.Science.Review4 / StudentsData[3].NoOfStudents) * 100) + "%" },
                                { name: "3 stars - " + StudentsData[3].FeedbackStats.Science.Review3 + " - " + Math.round((StudentsData[3].FeedbackStats.Science.Review3 / StudentsData[3].NoOfStudents) * 100) + "%" },
                                { name: "2 stars - " + StudentsData[3].FeedbackStats.Science.Review2 + " - " + Math.round((StudentsData[3].FeedbackStats.Science.Review2 / StudentsData[3].NoOfStudents) * 100) + "%" },
                                { name: "1 star - " + StudentsData[3].FeedbackStats.Science.Review1 + " - " + Math.round((StudentsData[3].FeedbackStats.Science.Review1 / StudentsData[3].NoOfStudents) * 100) + "%" },
                              ]}
                            />
                          </div>
                        </div>
                      </div>
                      :
                      null
                )
                :
                classXIIIsChecked === true ?
                  (
                    Maths === true ?
                      <div className="container">
                        <div className="row">
                          <div className="col">
                            <VictoryPie
                              radius={100}
                              labels={() => null}
                              colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                              data={[
                                { x: "90-100%", y: StudentsData[4].MarksStats.Mathematics.Markab90 },
                                { x: "80-90%", y: StudentsData[4].MarksStats.Mathematics.Markab80 },
                                { x: "70-80%", y: StudentsData[4].MarksStats.Mathematics.Markab70 },
                                { x: "60-70%", y: StudentsData[4].MarksStats.Mathematics.Markab60 },
                                { x: "50-60%", y: StudentsData[4].MarksStats.Mathematics.Markab50 },
                                { x: "Fail", y: StudentsData[4].MarksStats.Mathematics.MarkF },
                              ]}
                            />
                          </div>
                          <div className="col">
                            <VictoryLegend x={125} y={50}
                              orientation="vertical"
                              gutter={50}
                              colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                              style={{ border: { stroke: "black" } }}
                              data={[
                                { name: "90-100% - " + StudentsData[4].MarksStats.Mathematics.Markab90 + " - " + Math.round((StudentsData[4].MarksStats.Mathematics.Markab90 / StudentsData[4].NoOfStudents) * 100) + "%" },
                                { name: "80-90% - " + StudentsData[4].MarksStats.Mathematics.Markab80 + " - " + Math.round((StudentsData[4].MarksStats.Mathematics.Markab80 / StudentsData[4].NoOfStudents) * 100) + "%" },
                                { name: "70-80% - " + StudentsData[4].MarksStats.Mathematics.Markab70 + " - " + Math.round((StudentsData[4].MarksStats.Mathematics.Markab70 / StudentsData[4].NoOfStudents) * 100) + "%" },
                                { name: "60-70% - " + StudentsData[4].MarksStats.Mathematics.Markab60 + " - " + Math.round((StudentsData[4].MarksStats.Mathematics.Markab60 / StudentsData[4].NoOfStudents) * 100) + "%" },
                                { name: "50-60% - " + StudentsData[4].MarksStats.Mathematics.Markab50 + " - " + Math.round((StudentsData[4].MarksStats.Mathematics.Markab50 / StudentsData[4].NoOfStudents) * 100) + "%" },
                                { name: "Fail - " + StudentsData[4].MarksStats.Mathematics.MarkF + " - " + Math.round((StudentsData[4].MarksStats.Mathematics.MarkF / StudentsData[4].NoOfStudents) * 100) + "%" }
                              ]}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <VictoryPie
                              radius={100}
                              labels={() => null}
                              colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                              data={[
                                { x: "90-100%", y: StudentsData[4].FeedbackStats.Mathematics.Review5 },
                                { x: "80-90%", y: StudentsData[4].FeedbackStats.Mathematics.Review4 },
                                { x: "70-80%", y: StudentsData[4].FeedbackStats.Mathematics.Review3 },
                                { x: "60-70%", y: StudentsData[4].FeedbackStats.Mathematics.Review2 },
                                { x: "50-60%", y: StudentsData[4].FeedbackStats.Mathematics.Review1 }
                              ]}
                            />
                          </div>
                          <div className="col">
                            <VictoryLegend x={125} y={50}
                              orientation="vertical"
                              gutter={50}
                              colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                              style={{ border: { stroke: "black" } }}
                              data={[
                                { name: "5 stars - " + StudentsData[4].FeedbackStats.Mathematics.Review5 + " - " + Math.round((StudentsData[4].FeedbackStats.Mathematics.Review5 / StudentsData[4].NoOfStudents) * 100) + "%" },
                                { name: "4 stars - " + StudentsData[4].FeedbackStats.Mathematics.Review4 + " - " + Math.round((StudentsData[4].FeedbackStats.Mathematics.Review4 / StudentsData[4].NoOfStudents) * 100) + "%" },
                                { name: "3 stars - " + StudentsData[4].FeedbackStats.Mathematics.Review3 + " - " + Math.round((StudentsData[4].FeedbackStats.Mathematics.Review3 / StudentsData[4].NoOfStudents) * 100) + "%" },
                                { name: "2 stars - " + StudentsData[4].FeedbackStats.Mathematics.Review2 + " - " + Math.round((StudentsData[4].FeedbackStats.Mathematics.Review2 / StudentsData[4].NoOfStudents) * 100) + "%" },
                                { name: "1 star - " + StudentsData[4].FeedbackStats.Mathematics.Review1 + " - " + Math.round((StudentsData[4].FeedbackStats.Mathematics.Review1 / StudentsData[4].NoOfStudents) * 100) + "%" },
                              ]}
                            />
                          </div>
                        </div>
                      </div> :
                      Sci === true ?
                        <div className="row">
                          <div className="col">
                            <VictoryPie
                              radius={100}
                              labels={() => null}
                              colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                              data={[
                                { x: "90-100%", y: StudentsData[4].MarksStats.Science.Markab90 },
                                { x: "80-90%", y: StudentsData[4].MarksStats.Science.Markab80 },
                                { x: "70-80%", y: StudentsData[4].MarksStats.Science.Markab70 },
                                { x: "60-70%", y: StudentsData[4].MarksStats.Science.Markab60 },
                                { x: "50-60%", y: StudentsData[4].MarksStats.Science.Markab50 },
                                { x: "Fail", y: StudentsData[4].MarksStats.Science.MarkF },
                              ]}
                            />
                          </div>
                          <div className="col">
                            <VictoryLegend x={125} y={50}
                              orientation="vertical"
                              gutter={50}
                              colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                              style={{ border: { stroke: "black" } }}
                              data={[
                                { name: "90-100% - " + StudentsData[4].MarksStats.Science.Markab90 + " - " + Math.round((StudentsData[4].MarksStats.Science.Markab90 / StudentsData[4].NoOfStudents) * 100) + "%" },
                                { name: "80-90% - " + StudentsData[4].MarksStats.Science.Markab80 + " - " + Math.round((StudentsData[4].MarksStats.Science.Markab80 / StudentsData[4].NoOfStudents) * 100) + "%" },
                                { name: "70-80% - " + StudentsData[4].MarksStats.Science.Markab70 + " - " + Math.round((StudentsData[4].MarksStats.Science.Markab70 / StudentsData[4].NoOfStudents) * 100) + "%" },
                                { name: "60-70% - " + StudentsData[4].MarksStats.Science.Markab60 + " - " + Math.round((StudentsData[4].MarksStats.Science.Markab60 / StudentsData[4].NoOfStudents) * 100) + "%" },
                                { name: "50-60% - " + StudentsData[4].MarksStats.Science.Markab50 + " - " + Math.round((StudentsData[4].MarksStats.Science.Markab50 / StudentsData[4].NoOfStudents) * 100) + "%" },
                                { name: "Fail - " + StudentsData[4].MarksStats.Science.MarkF + " - " + Math.round((StudentsData[4].MarksStats.Science.MarkF / StudentsData[4].NoOfStudents) * 100) + "%" }
                              ]}
                            />
                          </div>
                          <div className="row">
                            <div className="col">
                              <VictoryPie
                                radius={100}
                                labels={() => null}
                                colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                                data={[
                                  { x: "90-100%", y: StudentsData[4].FeedbackStats.Science.Review5 },
                                  { x: "80-90%", y: StudentsData[4].FeedbackStats.Science.Review4 },
                                  { x: "70-80%", y: StudentsData[4].FeedbackStats.Science.Review3 },
                                  { x: "60-70%", y: StudentsData[4].FeedbackStats.Science.Review2 },
                                  { x: "50-60%", y: StudentsData[4].FeedbackStats.Science.Review1 }
                                ]}
                              />
                            </div>
                            <div className="col">
                              <VictoryLegend x={125} y={50}
                                orientation="vertical"
                                gutter={50}
                                colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                                style={{ border: { stroke: "black" } }}
                                data={[
                                  { name: "5 stars - " + StudentsData[4].FeedbackStats.Science.Review5 + " - " + Math.round((StudentsData[4].FeedbackStats.Science.Review5 / StudentsData[4].NoOfStudents) * 100) + "%" },
                                  { name: "4 stars - " + StudentsData[4].FeedbackStats.Science.Review4 + " - " + Math.round((StudentsData[4].FeedbackStats.Science.Review4 / StudentsData[4].NoOfStudents) * 100) + "%" },
                                  { name: "3 stars - " + StudentsData[4].FeedbackStats.Science.Review3 + " - " + Math.round((StudentsData[4].FeedbackStats.Science.Review3 / StudentsData[4].NoOfStudents) * 100) + "%" },
                                  { name: "2 stars - " + StudentsData[4].FeedbackStats.Science.Review2 + " - " + Math.round((StudentsData[4].FeedbackStats.Science.Review2 / StudentsData[4].NoOfStudents) * 100) + "%" },
                                  { name: "1 star - " + StudentsData[4].FeedbackStats.Science.Review1 + " - " + Math.round((StudentsData[4].FeedbackStats.Science.Review1 / StudentsData[4].NoOfStudents) * 100) + "%" },
                                ]}
                              />
                            </div>
                          </div>
                        </div>
                        :
                        null
                  ) : null
      }


    </div>

  );

}

export default App;
