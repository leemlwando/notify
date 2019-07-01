import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Button, Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as ActionCreators from "../../stateManager/actionCreators";

class Header extends React.Component {
  async componentDidMount(){
    this.props.fetchSMSBundleBalance(await localStorage.getItem("user"), this.props.history);
  }
  render() {
    return (
      <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h4"
                            className="text-uppercase text-muted mb-0"
                          >
                            Bundle Balance
                          </CardTitle>
                    
                          <span className="h2 font-weight-bold mb-0">
                            {this.props.balance.payload.active_bundles_balance || "No Results"}
                          </span>
                          {" "}
                          <span className="h2 font-weight-bold mb-0">
                            {this.props.balance.payload.active_bundles_balance ? "SMS's" : ""}
                          </span>
                          <hr>
                          </hr>
                          <Button onClick={() => this.props.history.push("/admin/purchasebundles")} className="center text-center bg-success">
                              Purchase Bundle
                           </Button>
                        </div>
                        {/* <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className="fas fa-chart-bar" />
                          </div>
                        </Col> */}
                      </Row>
                      <Row>
                    </Row>
                     
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h4"
                            className="text-uppercase text-muted mb-0"
                          >
                            Contacts
                          </CardTitle>
                          <hr></hr>
                          <div className="row">
                          {/* <Button className="  bg-info">
                              Upload CSV
                           </Button> */}
                           
                           <Button className=" bg-primary" onClick={() => this.props.history.push("/admin/managecontacts")}>
                              Create Contact
                           </Button>    
                          </div>                    
                        </div>
                      </Row>
        
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h4"
                            className="text-uppercase text-muted mb-0"
                          >
                            Schedule SMS
                          </CardTitle>
                        </div>
                      </Row>
                      <hr></hr>
                      <Button className="center disabled text-center bg-danger">
                              Coming Soon
                           </Button>
                      
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h4"
                            className="text-uppercase text-muted mb-0"
                          >
                            Process SMS
                          </CardTitle>
                        </div>
                      </Row>
                      <hr></hr>
                      <Button className=" text-center bg-warning" onClick={()=>this.props.history.push("/admin/sendsms")}>
                              Send SMS
                           </Button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  let {sms} = state;
  return {
    balance: sms.balance
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSMSBundleBalance: (token, history) => dispatch(ActionCreators.fetchSMSBalance(token, history))
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
