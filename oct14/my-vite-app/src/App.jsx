import Form from './components/Forms/form';
import Table1 from './components/Table/table1'
import Table2 from './components/Table/table2'
import Table3 from './components/Table/table3'
import Table4 from './components/Table/table4'
import Table5 from './components/Table/table5'
import ReactQ1 from './components/Frontend-Developer-Intern/app1'
import ReactQ2 from './components/Frontend-Developer-Intern/app2'
import ReactQ3 from './components/Frontend-Developer-Intern/app3'
import ReactQ4 from './components/Frontend-Developer-Intern/app4'
import ReactQ5 from './components/Frontend-Developer-Intern/app5'
import ReactQ6 from './components/Frontend-Developer-Intern/app6'
import ReactQ7 from './components/Frontend-Developer-Intern/app7'
import ReactQ8 from './components/Frontend-Developer-Intern/app8'
import ReactQ10 from './components/Frontend-Developer-Intern/app10'
import ReactQ11 from './components/Frontend-Developer-Intern/App11'
import ReactQ32 from './components/F-day1/app1'
import ReactQ12 from './components/F-day1/app2'
import ReactQ13 from './components/F-day1/app3'
import ReactQ14 from './components/F-day1/app4'
import ReactQ15 from './components/F-day1/app5'
import ReactQ16 from './components/F-day1/app6'
import ReactQ17 from './components/F-day1/app7'
import ReactQ18 from './components/F-day1/app7'
import ReactQ19 from './components/F-day1/app8'
import ReactQ20 from './components/F-day1/app9'
import ReactQ21 from './components/F-day1/app10'
import ReactQ22 from './components/F-day1/app11'
import ReactQ23 from './components/F-day1/app12'
import ReactQ24 from './components/F-day1/app13'
import ReactQ25 from './components/F-day1/app14'
import ReactQ26 from './components/F-day1/app15'
import ReactQ27 from './components/F-day1/app16'
import ReactQ28 from './components/F-day1/app17'
import ReactQ29 from './components/F-day1/app18'
import ReactQ30 from './components/F-day1/app19'
import ReactQ31 from './components/F-day1/app20'



import './App.css';

function App() {
  return (
    <div className="App">
      <div className="component-section form-component">
        <div className="component-header">
          <div className="component-icon">F</div>
          <div>
            <h2 className="component-title">Form Component</h2>
            <p className="component-subtitle">Interactive form with validation</p>
          </div>
        </div>
        <Form />
      </div>

      {[Table1, Table2, Table3, Table4, Table5].map((TableComponent, index) => (
        <div key={index} className="component-section table-component">
          <div className="component-header">
            <div className="component-icon">T{index + 1}</div>
            <div>
              <h2 className="component-title">Table {index + 1}</h2>
              <p className="component-subtitle">Data table component</p>
            </div>
          </div>
          <TableComponent />
        </div>
      ))}

      {[ReactQ1, ReactQ2, ReactQ3, ReactQ4, ReactQ5, ReactQ6, ReactQ7, ReactQ8, ReactQ10, ReactQ32,ReactQ11, ReactQ12, ReactQ13, ReactQ14, ReactQ15, ReactQ16, ReactQ17, ReactQ18, ReactQ19, ReactQ20, ReactQ21, ReactQ22, ReactQ23, ReactQ24, ReactQ25, ReactQ26, ReactQ27, ReactQ28, ReactQ29, ReactQ30, ReactQ31].map((ReactComponent, index) => (
        <div key={index} className="component-section react-component">
          <div className="component-header">
            <div className="component-icon">Q{index + 1}</div>
            <div>
              <h2 className="component-title">React Question {index + 1}</h2>
              <p className="component-subtitle">Frontend developer intern task</p>
            </div>
          </div>
          <ReactComponent />
        </div>
      ))}
    </div>
  )
}

export default App