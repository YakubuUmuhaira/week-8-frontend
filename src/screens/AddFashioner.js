import { Form, Container, Button } from "react-bootstrap";

const AddFashioner = () => {
  return (
    <Container
      style={{
        height: "80vh",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "40%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          width: "70%",
          gridTemplateColumns: "1fr",
          gridGap: 20,
          padding: "20px",
          border: "1px solid white",
        }}
      >
        <h2 className="text-center">Fashioners Details</h2>
        <Form.Control placeholder="enter  name"></Form.Control>
        <Form.Control placeholder="enter gender"></Form.Control>
        <Form.Control placeholder="enter location "></Form.Control>
        <Form.Control placeholder="enter services "></Form.Control>
        <Button>SAVE</Button>
      </Form>
    </Container>
  );
};

export default AddFashioner;
