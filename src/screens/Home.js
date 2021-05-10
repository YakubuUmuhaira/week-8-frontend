import React from "react";
import { Container, Card, Row } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <h1>Fashioners App</h1>
      <>
        <Row>
          <Card style={{ width: "18rem" }} className="m-3">
            <Card.Img
              variant="top"
              src="/images/99.jpg"
              style={{ height: "18rem" }}
            />
            <Card.Body>
              <Card.Title>Fashioner number one</Card.Title>
              <Card.Text>
                This is just a sample. I will gather information on them and
                post it later. Thank you.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />

          <Card style={{ width: "18rem" }} className="m-3">
            <Card.Img src="/images/10.jpg" style={{ height: "18rem" }} />

            <Card.Body>
              <Card.Title>Fashioner number two</Card.Title>
              <Card.Text>
                This is just a sample. I will gather information on them and
                post it later. Thank you.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />

          <Card style={{ width: "18rem" }} className="m-3">
            <Card.Img src="/images/20.jpg" style={{ height: "18rem" }} />
            <Card.Body>
              <Card.Title>Fashioner number three</Card.Title>
              <Card.Text>
                This is just a sample. I will gather information on them and
                post it later. Thank you.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />

          <Card style={{ width: "18rem" }} className="m-3">
            <Card.Img
              variant="top"
              src="/images/22.jpg"
              style={{ height: "18rem" }}
            />
            <Card.Body>
              <Card.Title>Fashioner number one</Card.Title>
              <Card.Text>
                This is just a sample. I will gather information on them and
                post it later. Thank you.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />

          <Card style={{ width: "18rem" }} className="m-3">
            <Card.Img src="/images/44.jpg" style={{ height: "18rem" }} />

            <Card.Body>
              <Card.Title>Fashioner number two</Card.Title>
              <Card.Text>
                This is just a sample. I will gather information on them and
                post it later. Thank you.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />

          <Card style={{ width: "18rem" }} className="m-3">
            <Card.Img src="/images/55.jpg" style={{ height: "18rem" }} />
            <Card.Body>
              <Card.Title>Fashioner number three</Card.Title>
              <Card.Text>
                This is just a sample. I will gather information on them and
                post it later. Thank you.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />

          <Card style={{ width: "18rem" }} className="m-3">
            <Card.Img
              variant="top"
              src="/images/00.jpg"
              style={{ height: "18rem" }}
            />
            <Card.Body>
              <Card.Title>Fashioner number one</Card.Title>
              <Card.Text>
                This is just a sample. I will gather information on them and
                post it later. Thank you.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />

          <Card style={{ width: "18rem" }} className="m-3">
            <Card.Img src="/images/33.jpg" style={{ height: "18rem" }} />

            <Card.Body>
              <Card.Title>Fashioner number two</Card.Title>
              <Card.Text>
                This is just a sample. I will gather information on them and
                post it later. Thank you.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />

          <Card style={{ width: "18rem" }} className="m-3">
            <Card.Img src="/images/tt.jpg" style={{ height: "18rem" }} />
            <Card.Body>
              <Card.Title>Fashioner number three</Card.Title>
              <Card.Text>
                This is just a sample. I will gather information on them and
                post it later. Thank you.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
        </Row>
      </>
    </Container>
  );
};

export default Home;
