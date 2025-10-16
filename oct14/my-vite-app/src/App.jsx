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
import ReactQ9 from './components/Frontend-Developer-Intern/app9'
import ReactQ10 from './components/Frontend-Developer-Intern/app10'
import ReactQ11 from './components/Frontend-Developer-Intern/App11'

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

      {[ReactQ1, ReactQ2, ReactQ3, ReactQ4, ReactQ5,ReactQ6,ReactQ7,ReactQ8,ReactQ10,ReactQ11].map((ReactComponent, index) => (
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