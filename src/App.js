import { useState } from "react";
import { Col, Container, Row, Alert } from "react-bootstrap";
import FormTask from "./components/Form-task";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";

function App() {
  //Declaro los useState que voy a usar
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    const finalTasks = tasks.filter((task) => task.id !== id);
    setTasks(finalTasks);
  };

  //ESTILOS
  const divStyle = {
    margin: "0.5%",
    border: "5px solid rgb(1, 20, 21 )",
    padding: "1%",
    borderRadius: "10px",
  };

  return (
    <Container>
      <Header />
      <Row className="mt-5" style={divStyle}>
        <Col sm={12} md={6} lg={6}>
          <FormTask addTask={addTask} />
        </Col>
        <Col sm={12} md={6} lg={6}>
          <Row>
            {tasks.length === 0 ? (
              <Alert variant="info">
                <Alert.Heading className="text-center">
                  No hay Tareas
                </Alert.Heading>
              </Alert>
            ) : (
              <>
                <h3 className="text-center">Listado de tareas</h3>
                <p>Tareas pendientes: {tasks.length}</p>
                <Tasks tasks={tasks} deleteTask={deleteTask} />
              </>
            )}
          </Row>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default App;
