import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <Tabs
          defaultActiveKey="profile"
          id="justify-tab-example"
          className="mb-3"
          justify
        >
          <Tab eventKey="mat" title="Matematik">
            <h2>Soru - 1</h2>
            <Form>
              <ListGroup>
                <ListGroup.Item>
                  <Form.Check
                    type="radio"
                    label="(A) - Cevap - 1"
                    name="group1"
                  />
                </ListGroup.Item>

                <ListGroup.Item>
                  <Form.Check
                    type="radio"
                    label="(B) - Cevap - 2"
                    name="group1"
                  />
                </ListGroup.Item>

                <ListGroup.Item>
                  <Form.Check
                    type="radio"
                    label="(C) - Cevap - 3"
                    name="group1"
                  />
                </ListGroup.Item>

                <ListGroup.Item>
                  <Form.Check
                    type="radio"
                    label="(D) - Cevap - 4"
                    name="group1"
                  />
                </ListGroup.Item>

              </ListGroup>
              <Button variant="primary" className="mt-4">İlerle</Button>
            </Form>
          </Tab>

          <Tab eventKey="fizik" title="Fizik">
            <h2>Soru - 1</h2>
            <Form>
              <ListGroup>
                <ListGroup.Item>
                  <Form.Check
                    type="radio"
                    label="(A) - Cevap - 1"
                    name="group1"
                  />
                </ListGroup.Item>

                <ListGroup.Item>
                  <Form.Check
                    type="radio"
                    label="(B) - Cevap - 2"
                    name="group1"
                  />
                </ListGroup.Item>

                <ListGroup.Item>
                  <Form.Check
                    type="radio"
                    label="(C) - Cevap - 3"
                    name="group1"
                  />
                </ListGroup.Item>

                <ListGroup.Item>
                  <Form.Check
                    type="radio"
                    label="(D) - Cevap - 4"
                    name="group1"
                  />
                </ListGroup.Item>

              </ListGroup>
              <Button variant="primary" className="mt-4">İlerle</Button>
            </Form>
          </Tab>

          <Tab eventKey="kimya" title="Kimya">
            <h2>Soru - 1</h2>
            <Form>
              <ListGroup>
                <ListGroup.Item>
                  <Form.Check
                    type="radio"
                    label="(A) - Cevap - 1"
                    name="group1"
                  />
                </ListGroup.Item>

                <ListGroup.Item>
                  <Form.Check
                    type="radio"
                    label="(B) - Cevap - 2"
                    name="group1"
                  />
                </ListGroup.Item>

                <ListGroup.Item>
                  <Form.Check
                    type="radio"
                    label="(C) - Cevap - 3"
                    name="group1"
                  />
                </ListGroup.Item>

                <ListGroup.Item>
                  <Form.Check
                    type="radio"
                    label="(D) - Cevap - 4"
                    name="group1"
                  />
                </ListGroup.Item>

              </ListGroup>
              <Button variant="primary" className="mt-4">İlerle</Button>
            </Form>
          </Tab>
        </Tabs>
      </div >
    );
  }
}

export default Home;
