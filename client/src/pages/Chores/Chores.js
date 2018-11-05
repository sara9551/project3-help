import React, { Component } from "react";
import Hero2 from "../../components/Hero2";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import Hero from "../../components/Hero";
import Calendar from "../../components/Calendar";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, EnterBtn } from "../../components/Form";

class Chores extends Component {
  state = {
    Chores: []
  };

  componentDidMount() {
    this.loadChores();
  }

  loadChores = () => {
    API.getChores()
      .then(res => this.setState({ Chores: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>

      <Hero />
        <br></br>
        <Container>
        <Row>
            <Col size="md-6">
            <Hero2>
              <h1>What Chores Should I Read?</h1>
            </Hero2>
            <br></br>
            <form>
              <Input name="chore" placeholder="Chore" />
              <Input name="date" placeholder="Due Date" />
              <TextArea name="description" placeholder="Enter a brief description of your chore" />
              <EnterBtn>Enter a chore</EnterBtn> 
            </form>
            </Col>
            <Col size="md-6">
                <Calendar />
                </Col>
                  </Row>
            </Container>
      <br></br>
        <Row>
          <Col size="md-12 sm-12">
            <Hero2>
              <h1>Chores to do:</h1>
            </Hero2>
            {this.state.Chores.length ? (
              <List>
                  <ListItem key={Chores._id}>
                    <a href={"/Chores/" + Chores._id}>
                    </a>
                    <DeleteBtn />
                  </ListItem>
              </List>
            ) : (
              <h3>No Chores at the moment</h3>
            )}
          </Col>
        </Row>
          </Container>
          
    );
  }
}

export default Chores;