import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 0,
      seconds: 5,
      isStartedExam: false
    };
  }

  startTimer() {
    this.timer = setInterval(this.decrementTime, 1000);
    this.setState({ isStartedExam: true });
    this.timerFinished = setTimeout(this.handleTimerFinish, (this.state.minutes * 60 + this.state.seconds) * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  decrementTime = () => {
    const { minutes, seconds } = this.state;
    if (minutes === 0 && seconds === 0) {
      clearInterval(this.timer);
      return;
    }

    if (seconds === 0) {
      this.setState((prevState) => ({
        minutes: prevState.minutes - 1,
        seconds: 59
      }));
    } else {
      this.setState((prevState) => ({
        seconds: prevState.seconds - 1
      }));
    }
  };

  handleTimerFinish = () => {
    clearInterval(this.timer);
    clearTimeout(this.timerFinished);
    document.body.innerHTML = "<h1 text align=center> Sınav Süresi Bitti.</h1> ";
  };

  render() {
    const { minutes, seconds, isStartedExam } = this.state;

    return (
      <div className="container">
        <Tabs
          defaultActiveKey="profile"
          id="justify-tab-example"
          className="mb-3"
          justify
        >
          {/*Matematik tüm sorular */}
          <Tab eventKey="mat" title="Matematik">
            <h2>Soru - 1</h2>
            <label>
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
                {/* <Button variant="primary" className="mt-4">İlerle</Button> */}
              </Form>
              <h2>Soru - 2</h2>
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
                {/* <Button variant="primary" className="mt-4">İlerle</Button> */}
              </Form>
              <h2>Soru - 3</h2>
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
                {/* <Button variant="primary" className="mt-4">İlerle</Button> */}
              </Form>
              <h2>Soru - 4</h2>
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
                <Button variant="primary" className="mt-4">
                  <Link to="/hakkimizda" className="btn btn-primary me-3">
                    Bitir
                  </Link>
                </Button>
              </Form>
            </label>
          </Tab>

          {/*Fizik tüm sorular */}
          <Tab eventKey="fizik" title="Fizik">
            <h2>Soru - 1</h2>
            <label>
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
                {/* <Button variant="primary" className="mt-4">
               <Link to="/hakkimizda" className="btn btn-primary me-3">Bitir</Link> 
              </Button> */}
              </Form>
              <h2>Soru - 2</h2>
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
                <Button variant="primary" className="mt-4">

                  <Link to="/hakkimizda" className="btn btn-primary me-3">
                    Bitir
                  </Link>
                </Button>
              </Form>
            </label>
          </Tab>

          {/*Kimya tüm sorular */}
          <Tab eventKey="kimya" title="Kimya">
            <h2>Soru - 1</h2>
            <label>
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
                {/* <Button variant="primary" className="mt-4">İlerle</Button> */}
              </Form>
              <h2>Soru - 2</h2>
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
                {/* <Button variant="primary" className="mt-4">İlerle</Button> */}
              </Form>

              <h2>Soru - 3</h2>
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
                <Button variant="primary" className="mt-4">
                  <Link to="/hakkimizda" className="btn btn-primary me-3">
                    Bitir
                  </Link>
                </Button>
              </Form>
            </label>
          </Tab>
        </Tabs>
        <br></br>
        {isStartedExam ?
          <div>
            <h5 className="my-3">Sınav Süreniz başlamıştır lütfen yukarıdan ilgili dersi seçiniz</h5>
            <h1>{`${minutes.toString().padStart(2, '0')}:${seconds
              .toString()
              .padStart(2, '0')}`}</h1>
          </div>
          :
          <Link to="/quiz" className="btn btn-primary">
            Sınavı Başlat
          </Link>
        }
      </div>

    );
  }
}

export default Home;
