import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

import { connect } from "react-redux";

import Header from "components/Headers/Header.jsx";

import ReactDatetime from "react-datetime";

import * as ActionCreators from "../stateManager/actionCreators";

import isAuthenticated from "../helpers/isAuthenticated";

class Index extends React.Component {
  state = {
    activeNav: 1,
    chartExample1Data: "data1"
  };
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
    let wow = () => {
      console.log(this.state);
    };
    wow.bind(this);
    setTimeout(() => wow(), 1000);
    // this.chartReference.update();
  };
  async componentDidMount(){
    // console.log("sdsdsdsdsdsds", this.props)
    isAuthenticated(this.props.history);
    Promise.all([
      this.props.fetchSMSHistory(await localStorage.getItem("user"), this.props.history),
      this.props.fetchSMSSchedule(await localStorage.getItem("user", this.props.history))
    ])
    

  }
  componentWillMount() {
    // if (window.Chart) {
    //   parseOptions(Chart, chartOptions());
    // }
  }

  renderTableData(payload){
      return payload.map((p,i) => {
            return `
            <tr>
            <th scope="row">${p.message}</th>
            <td>${p.audience}</td>
            <td>${p.date_sent}</td>
            <td>
              ${p.status}
            </td>
          </tr>
            `
      })
  }

  renderFetchDataError(){
    return (
      <tr>
        <th scope="row">error</th>
        <td>error</td>
        <td>error</td>
    </tr>
    )
  }

  renderFetchingData(){
    return (
      <tr>
        <th scope="row">fetching</th>
        <td>fethcing</td>
        <td>fethcing</td>
        <td>fethcing</td>
    </tr>
    )
  }
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
       
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="8">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">SMS History</h3>
                    </div>
                    <div className="col text-right">
                   
                    </div>
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Message</th>
                      <th scope="col">Audience</th>
                      <th scope="col">Date Sent</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>

                    {!this.props.history.isFetching && !this.props.history.isFetchingError &&this.props.history.payload.length ? this.props.history.payload.map((p,i) => (
                       <tr>
                       <th scope="row">{p.message}</th>
                       <td>{p.audience}</td>
                       <td>{p.date_sent}</td>
                       <td>
                          {p.status}
                       </td>
                        </tr>
                    )) : (this.props.history.isFetching ? this.renderFetchingData() : this.renderFetchDataError())}

                  </tbody>
                </Table>
              </Card>
            </Col>
            <Col xl="4">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Schedules</h3>
                    </div>
                    <div className="col text-right">
                     
                    </div>
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Message </th>
                      <th scope="col">Audience</th>
                      <th scope="col">Time To Send</th>
                    </tr>
                  </thead>
                  <tbody>

                  {!this.props.schedule.isFetching && !this.props.schedule.isFetchingError &&this.props.schedule.payload.length ? this.props.schedule.payload.map((p,i) => (
                      <tr>
                       <th scope="row">{p.message}</th>
                       <td>{p.audience}</td>
                       <td>{p.date_to_send}</td>
                      </tr>
                    )) : (this.props.schedule.isFetching ? this.renderFetchingData() : this.renderFetchDataError())}
                  </tbody>
                </Table>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => {
  let {sms} = state;
  return {
    history: sms.history,
    schedule: sms.schedules,
    balance: sms.balance
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSMSHistory: (token, history) => dispatch(ActionCreators.fetchSMSHistory(token, history)),
    fetchSMSSchedule: (token, history) => dispatch(ActionCreators.fetchSMSSchedules(token,history)),
    fetchSMSBundleBalance: (token, history) => dispatch(ActionCreators.fetchSMSBalance(token, history))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Index)
