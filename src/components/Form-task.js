import shortid from "short-id";
import PropTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const FormTask = ({ addTask }) => {
  const handleAddTask = (e) => {
    e.preventDefault();

    //VALIDATION

    const [taskName, taskDescripcion] = e.target.elements;

    addTask({
      id: shortid.generate(),
      name: taskName.value.trim(),
      description: taskDescripcion.value.trim(),
    });

    taskName.value = "";
    taskDescripcion.value = "";
    taskName.focus();
  };

  return (
    <Container>
      <Row>
        <Col md={6} xs={12} lg={8}>
          <h3>Tareas</h3>
          <Form onSubmit={handleAddTask}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Titulo de la tarea</Form.Label>
              <Form.Control
                required
                placeholder="Tarea"
                name="taskName"
                type="text"
                autocomplete="off"
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Descripcion de la tarea</Form.Label>
              <Form.Control
                required
                name="taskDescription"
                as="textarea"
                rows={3}
                placeholder="Descripcion de la tarea"
                autocomplete="off"
              />
            </Form.Group>
            <Button type="submit" className="mt-3">
              Crear tarea
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

FormTask.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default FormTask;
