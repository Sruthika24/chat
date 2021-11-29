import { VictoryPie, VictoryLegend, VictoryTheme } from 'victory';
import { useEffect, useState } from 'react';
import StudentsData from './StudentData';
import './App.css';

function App() {

  const [currClass, setCurrClass] = useState(0);
  const [Maths, setMathsIsChecked] = useState(true);
  const [Sci, setSciIsChecked] = useState(false);

  const setclassVIII = () => {
    setCurrClass(0)
  }

  const setclassIX = () => {
    setCurrClass(1)
  }

  const setclassX = () => {
    setCurrClass(2)
  }

  const setclassXI = () => {
    setCurrClass(3)
  }

  const setclassXII = () => {
    setCurrClass(4)
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
      <br />
      <div className="name"> ACADEMIC STATISTICS </div>

      {
        Maths === true ?
          <div className="container">
            <div className="content">{StudentsData[currClass].Class} Standard</div>
            <div className="content">Student Strength : {StudentsData[currClass].NoOfStudents}</div>

            <div className="row">
              <div className="col">
                <VictoryPie
                  radius={100}
                  labels={() => null}
                  colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                  data={[
                    { x: "90-100%", y: StudentsData[currClass].MarksStats.Mathematics.Markab90 },
                    { x: "80-90%", y: StudentsData[currClass].MarksStats.Mathematics.Markab80 },
                    { x: "70-80%", y: StudentsData[currClass].MarksStats.Mathematics.Markab70 },
                    { x: "60-70%", y: StudentsData[currClass].MarksStats.Mathematics.Markab60 },
                    { x: "50-60%", y: StudentsData[currClass].MarksStats.Mathematics.Markab50 },
                    { x: "Fail", y: StudentsData[currClass].MarksStats.Mathematics.MarkF },
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
                    { name: "90-100% - " + StudentsData[currClass].MarksStats.Mathematics.Markab90 + " - " + Math.round((StudentsData[currClass].MarksStats.Mathematics.Markab90 / StudentsData[currClass].NoOfStudents) * 100) + "%" },
                    { name: "80-90% - " + StudentsData[currClass].MarksStats.Mathematics.Markab80 + " - " + Math.round((StudentsData[currClass].MarksStats.Mathematics.Markab80 / StudentsData[currClass].NoOfStudents) * 100) + "%" },
                    { name: "70-80% - " + StudentsData[currClass].MarksStats.Mathematics.Markab70 + " - " + Math.round((StudentsData[currClass].MarksStats.Mathematics.Markab70 / StudentsData[currClass].NoOfStudents) * 100) + "%" },
                    { name: "60-70% - " + StudentsData[currClass].MarksStats.Mathematics.Markab60 + " - " + Math.round((StudentsData[currClass].MarksStats.Mathematics.Markab60 / StudentsData[currClass].NoOfStudents) * 100) + "%" },
                    { name: "50-60% - " + StudentsData[currClass].MarksStats.Mathematics.Markab50 + " - " + Math.round((StudentsData[currClass].MarksStats.Mathematics.Markab50 / StudentsData[currClass].NoOfStudents) * 100) + "%" },
                    { name: "Fail - " + StudentsData[currClass].MarksStats.Mathematics.MarkF + " - " + Math.round((StudentsData[currClass].MarksStats.Mathematics.MarkF / StudentsData[currClass].NoOfStudents) * 100) + "%" }
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
                    { x: "Pass", y: StudentsData[currClass].NoOfStudents - StudentsData[currClass].MarksStats.Mathematics.MarkF },
                    { x: "Fail", y: StudentsData[currClass].MarksStats.Mathematics.MarkF }
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
                    { name: "Pass -" + (StudentsData[currClass].NoOfStudents - StudentsData[currClass].MarksStats.Mathematics.MarkF) + " - " + Math.round(((StudentsData[currClass].NoOfStudents - StudentsData[currClass].MarksStats.Mathematics.MarkF) / StudentsData[currClass].NoOfStudents) * 100) + "%" },
                    { name: "Fail -" + StudentsData[currClass].MarksStats.Mathematics.MarkF + " - " + Math.round((StudentsData[currClass].MarksStats.Mathematics.MarkF / StudentsData[currClass].NoOfStudents) * 100) + "%" },
                  ]}
                />
              </div>
            </div>
            <div className="row">

              <div className="name"> FEEDBABCK STATISTICS </div>

              <div className="col">
                <VictoryPie
                  radius={100}
                  labels={() => null}
                  colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                  data={[
                    { x: "90-100%", y: StudentsData[currClass].FeedbackStats.Mathematics.Review5 },
                    { x: "80-90%", y: StudentsData[currClass].FeedbackStats.Mathematics.Review4 },
                    { x: "70-80%", y: StudentsData[currClass].FeedbackStats.Mathematics.Review3 },
                    { x: "60-70%", y: StudentsData[currClass].FeedbackStats.Mathematics.Review2 },
                    { x: "50-60%", y: StudentsData[currClass].FeedbackStats.Mathematics.Review1 }
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
                    { name: "5 stars - " + StudentsData[currClass].FeedbackStats.Mathematics.Review5 + " - " + Math.round((StudentsData[currClass].FeedbackStats.Mathematics.Review5 / StudentsData[currClass].NoOfStudents) * 100) + "%" },
                    { name: "4 stars - " + StudentsData[currClass].FeedbackStats.Mathematics.Review4 + " - " + Math.round((StudentsData[currClass].FeedbackStats.Mathematics.Review4 / StudentsData[currClass].NoOfStudents) * 100) + "%" },
                    { name: "3 stars - " + StudentsData[currClass].FeedbackStats.Mathematics.Review3 + " - " + Math.round((StudentsData[currClass].FeedbackStats.Mathematics.Review3 / StudentsData[currClass].NoOfStudents) * 100) + "%" },
                    { name: "2 stars - " + StudentsData[currClass].FeedbackStats.Mathematics.Review2 + " - " + Math.round((StudentsData[currClass].FeedbackStats.Mathematics.Review2 / StudentsData[currClass].NoOfStudents) * 100) + "%" },
                    { name: "1 star - " + StudentsData[currClass].FeedbackStats.Mathematics.Review1 + " - " + Math.round((StudentsData[currClass].FeedbackStats.Mathematics.Review1 / StudentsData[currClass].NoOfStudents) * 100) + "%" },
                  ]}
                />

              </div>
            </div>
          </div>
          :
          Sci === true ?
            <div className="row">
              <div className="content">{StudentsData[currClass].Class} Standard</div>
              <div className="content">Student Strength : {StudentsData[currClass].NoOfStudents}</div>
              <div className="col">
                <VictoryPie
                  radius={100}
                  labels={() => null}
                  colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                  data={[
                    { x: "90-100%", y: StudentsData[currClass].MarksStats.Science.Markab90 },
                    { x: "80-90%", y: StudentsData[currClass].MarksStats.Science.Markab80 },
                    { x: "70-80%", y: StudentsData[currClass].MarksStats.Science.Markab70 },
                    { x: "60-70%", y: StudentsData[currClass].MarksStats.Science.Markab60 },
                    { x: "50-60%", y: StudentsData[currClass].MarksStats.Science.Markab50 },
                    { x: "Fail", y: StudentsData[currClass].MarksStats.Science.MarkF },
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
                    { name: "90-100% - " + StudentsData[currClass].MarksStats.Science.Markab90 + " - " + Math.round((StudentsData[currClass].MarksStats.Science.Markab90 / StudentsData[currClass].NoOfStudents) * 100) + "%" },
                    { name: "80-90% - " + StudentsData[currClass].MarksStats.Science.Markab80 + " - " + Math.round((StudentsData[currClass].MarksStats.Science.Markab80 / StudentsData[currClass].NoOfStudents) * 100) + "%" },
                    { name: "70-80% - " + StudentsData[currClass].MarksStats.Science.Markab70 + " - " + Math.round((StudentsData[currClass].MarksStats.Science.Markab70 / StudentsData[currClass].NoOfStudents) * 100) + "%" },
                    { name: "60-70% - " + StudentsData[currClass].MarksStats.Science.Markab60 + " - " + Math.round((StudentsData[currClass].MarksStats.Science.Markab60 / StudentsData[currClass].NoOfStudents) * 100) + "%" },
                    { name: "50-60% - " + StudentsData[currClass].MarksStats.Science.Markab50 + " - " + Math.round((StudentsData[currClass].MarksStats.Science.Markab50 / StudentsData[currClass].NoOfStudents) * 100) + "%" },
                    { name: "Fail - " + StudentsData[currClass].MarksStats.Science.MarkF + " - " + Math.round((StudentsData[currClass].MarksStats.Science.MarkF / StudentsData[currClass].NoOfStudents) * 100) + "%" }
                  ]}
                />
              </div>
              <div className="row">
                <div className="col">
                  <VictoryPie
                    radius={100}
                    labels={() => null}
                    colorScale={["#3BFF00", "red"]}
                    data={[
                      { x: "Pass", y: StudentsData[currClass].NoOfStudents - StudentsData[currClass].MarksStats.Science.MarkF },
                      { x: "Fail", y: StudentsData[currClass].MarksStats.Science.MarkF }
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
                      { name: "Pass -" + (StudentsData[currClass].NoOfStudents - StudentsData[currClass].MarksStats.Science.MarkF) + " - " + Math.round(((StudentsData[currClass].NoOfStudents - StudentsData[currClass].MarksStats.Science.MarkF) / StudentsData[currClass].NoOfStudents) * 100) + "%" },
                      { name: "Fail -" + StudentsData[currClass].MarksStats.Science.MarkF + " - " + Math.round((StudentsData[currClass].MarksStats.Science.MarkF / StudentsData[currClass].NoOfStudents) * 100) + "%" },
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
                      { x: "90-100%", y: StudentsData[currClass].FeedbackStats.Science.Review5 },
                      { x: "80-90%", y: StudentsData[currClass].FeedbackStats.Science.Review4 },
                      { x: "70-80%", y: StudentsData[currClass].FeedbackStats.Science.Review3 },
                      { x: "60-70%", y: StudentsData[currClass].FeedbackStats.Science.Review2 },
                      { x: "50-60%", y: StudentsData[currClass].FeedbackStats.Science.Review1 }
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
                      { name: "5 stars - " + StudentsData[currClass].FeedbackStats.Science.Review5 + " - " + Math.round((StudentsData[currClass].FeedbackStats.Science.Review5 / StudentsData[currClass].NoOfStudents) * 100) + "%" },
                      { name: "4 stars - " + StudentsData[currClass].FeedbackStats.Science.Review4 + " - " + Math.round((StudentsData[currClass].FeedbackStats.Science.Review4 / StudentsData[currClass].NoOfStudents) * 100) + "%" },
                      { name: "3 stars - " + StudentsData[currClass].FeedbackStats.Science.Review3 + " - " + Math.round((StudentsData[currClass].FeedbackStats.Science.Review3 / StudentsData[currClass].NoOfStudents) * 100) + "%" },
                      { name: "2 stars - " + StudentsData[currClass].FeedbackStats.Science.Review2 + " - " + Math.round((StudentsData[currClass].FeedbackStats.Science.Review2 / StudentsData[currClass].NoOfStudents) * 100) + "%" },
                      { name: "1 star - " + StudentsData[currClass].FeedbackStats.Science.Review1 + " - " + Math.round((StudentsData[currClass].FeedbackStats.Science.Review1 / StudentsData[currClass].NoOfStudents) * 100) + "%" },
                    ]}
                  />
                </div>
              </div>
            </div> : null
      }


    </div>

  );

}

export default App;
