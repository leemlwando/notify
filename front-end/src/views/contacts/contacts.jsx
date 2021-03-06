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
  Modal,
  Input,
  InputGroup,
  InputGroupText,
  Form,
  FormGroup,
  InputGroupAddon,
  TabContent,
  TabPane,
  Label,
  InputGroupButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  UncontrolledDropdown,
  Collapse
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.jsx";

import SendSMS from "../../components/SMS/SendSMS.jsx";
import Paginate from "../../components/Pagination/index"
import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";

class Index extends React.Component {
    constructor(props){
        super(props)
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.toggleSplit = this.toggleSplit.bind(this);
    this.toggle = this.toggle.bind(this);

    this.state = {
        activeNav: 1,
        chartExample1Data: "data1",
        defaultModal: false,
        tabs: 1,
        dropdownOpen: false,
        splitButtonOpen: false,
        collapse: false
      };
    }
 
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
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

  toggle() {
    this.setState(state => ({...this.state, collapse: !state.collapse }));
  }

  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
        ...this.state,
      [state]: index
    });
  };

  toggleDropDown() {
    this.setState({
        ...this.state,
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  toggleSplit() {
    this.setState({
        ...this.state,
      splitButtonOpen: !this.state.splitButtonOpen
    });
  }

  componentWillMount() {
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  render() {
    return (
      <>
        <SendSMS />
        {/* Page content */}
        <Container className="mt--7" fluid>
         
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="12">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Contacts List</h3>
                    </div>
                    <div className="col text-right">
                    <Button
                        color="primary"
                        type="button"
                        onClick={() => this.toggleModal("formModal")}
                        >
                    Create Contact
                 </Button>
                 
                 <Modal
              className="modal-dialog-centered"
              size="lg"
              isOpen={this.state.formModal}
              toggle={() => this.toggleModal("formModal")}
            >




              <div className="modal-body p-0">
                <Card className="bg-secondary shadow border-0">
                 

                <CardHeader className="bg-transparent pb-5">
                    <div className="text-muted text-center mt-2 mb-3">
                      <h2>Choose Audience Type</h2>
                    </div>
                    <div className="btn-wrapper text-center">
                    <Nav
            className="nav-fill flex-column flex-md-row"
            id="tabs-icons-text"
            pills
            role="tablist"
          >
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 1}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 1
                })}
                onClick={e => this.toggleNavs(e, "tabs", 1)}
                href="#pablo"
                role="tab"
              >
                <i className="fas fa-user mr-2" />
               Single
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 2}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 2
                })}
                onClick={e => this.toggleNavs(e, "tabs", 2)}
                href="#pablo"
                role="tab"
              >
                <i className="fas fa-users mr-2" />
                Bulk
              </NavLink>
            </NavItem>
           
          </Nav>
        </div>

                <br></br>

        <Card className="shadow">
          <CardBody>
            <TabContent activeTab={"tabs" + this.state.tabs}>
              <TabPane tabId="tabs1">
              
              <Form role="form">

              <InputGroup>
                <Input  className="form-control-alternative" placeholder="Enter Sender ID" type="text" />
                <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                    <DropdownToggle className="rounded-circle" caret>
                    Select Sender ID
                    </DropdownToggle>
                    <DropdownMenu>
                    
                    <DropdownItem>MicroTech</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>DCTalkRadio</DropdownItem>
                    </DropdownMenu>
                </InputGroupButtonDropdown>
                </InputGroup>

        <hr></hr>

                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <Input
                                className="form-control-alternative"
                                placeholder="Enter Message Here..."
                                rows="3"
                                type="textarea"
                            />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-mobile-button" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input  className="form-control-alternative" placeholder="Phone Number" type="text" />
                        </InputGroup>
                      </FormGroup>
                      <div className="custom-control custom-control-alternative custom-checkbox">
                        <input
                          className="custom-control-input"
                          id=" customCheckLogin"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor=" customCheckLogin"
                        >
                          <span className="text-muted">Auto Create Sender ID</span>
                        </label>
                      </div>
                      <div className="text-center">

                        <Button
                          className="my-4"
                          color="primary"
                          type="button"
                        >
                          Send SMS
                        </Button>
                      </div>
                    </Form>
                    
              </TabPane>

              {/* tab 2 */}

              <TabPane tabId="tabs2">
               
              <Form role="form">

              <InputGroup>
                <Input  className="form-control-alternative" placeholder="Enter Sender ID" type="text" />
                <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                    <DropdownToggle className="rounded-circle" caret>
                    Select Sender ID
                    </DropdownToggle>
                    <DropdownMenu>
                    
                    <DropdownItem>MicroTech</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>DCTalkRadio</DropdownItem>
                    </DropdownMenu>
                </InputGroupButtonDropdown>
                </InputGroup>

        <hr></hr>

                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <Input
                                className="form-control-alternative"
                                placeholder="Enter Message Here..."
                                rows="3"
                                type="textarea"
                            />
                        </InputGroup>
                      </FormGroup>

                    
                    <div className="btn-wrapper text-center">
                    <Button onClick={this.toggle}  className="btn-icon btn-3 nav-fill flex-column flex-md-row" color="neutral" type="button">
                            <span className="btn-inner--icon">
                                <i className="fas fa-user-friends" />
                            </span>
                            <span className="btn-inner--text">Select Group</span>
                        </Button>
                        <Button onClick={this.toggle}  className="btn-icon btn-3" color="success" type="button">
                            <span className="btn-inner--icon">
                                <i className="fas fa-user-friends" />
                            </span>
                            <span className="btn-inner--text">Upload CSV File</span>
                        </Button>
                        <Button onClick={this.toggle}  className="btn-icon btn-3" color="neutral" type="button">
                            <span className="btn-inner--icon">
                                <i className="fas fa-user-friends" />
                            </span>
                            <span className="btn-inner--text">Select From List</span>
                        </Button>
                    </div>
                      
                    
                    {/* <Row role="form" className>
                    <Col md={4} sm={12}>
                    <FormGroup className="mb-3">
                        <Button onClick={this.toggle} className="btn-icon btn-3" color="neutral" type="button">
                            <span className="btn-inner--icon">
                                <i className="fas fa-user-friends" />
                            </span>
                            <span className="btn-inner--text">Select Contact Group</span>
                        </Button>
                    </FormGroup>
                    </Col>
                    <Col md={4} sm={12}>
                    <FormGroup className="mb-3">
                        <Button onClick={this.toggle}  className="btn-icon btn-3" color="success" type="button">
                            <span className="btn-inner--icon">
                                <i className="fas fa-user-friends" />
                            </span>
                            <span className="btn-inner--text">Upload From A CSV File</span>
                        </Button>
                    </FormGroup>
                    </Col>
                    <Col md={4} sm={12}>
                    <FormGroup className="mb-3">
                        <Button onClick={this.toggle}  className="btn-icon btn-3" color="info" type="button">
                            <span className="btn-inner--icon">
                                <i className="fas fa-user-friends" />
                            </span>
                            <span className="btn-inner--text">Select Contacts</span>
                        </Button>
                    </FormGroup>
                    </Col>
                    </Row> */}






                    
                <Collapse isOpen={this.state.collapse}>
                    <Table className="align-items-center table-flush" responsive>
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">Group Name</th>
                        <th scope="col">Total Members</th>
                        <th scope="col">Select Group</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">/argon/</th>
                        <td>4,569</td>
                        <td>
                        <div className="custom-control custom-checkbox mb-3">
                        <input
                            className="custom-control-input"
                            id="customCheck1"
                            type="checkbox"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                            
                        </label>
                    </div>
                         </td>
                      </tr>
                      <tr>
                        <th scope="row">/argon/index.html</th>
                        <td>3,985</td>
                        <td>
                        <div className="custom-control custom-checkbox mb-3">
                        <input
                            className="custom-control-input"
                            id="customCheck1"
                            type="checkbox"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                            
                        </label>
                    </div>
                         </td>
                      </tr>
                      <tr>
                        <th scope="row">/argon/charts.html</th>
                        <td>3,513</td>
                        <td>
                        <div className="custom-control custom-checkbox mb-3">
                        <input
                            className="custom-control-input"
                            id="customCheck1"
                            type="checkbox"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                            
                        </label>
                    </div>
                         </td>
                      </tr>
                      <tr>
                        <th scope="row">/argon/tables.html</th>
                        <td>2,050</td>
                        <td className="text-right">
                        <input
                            className="custom-control-input"
                            id="customCheck1"
                            type="checkbox"
                        />
                         </td>
                      </tr>
                      <tr>
                        <th scope="row">/argon/profile.html</th>
                        <td>1,795</td>
                        <td>
                        <div className="custom-control custom-checkbox mb-3">
                        <input
                            className="custom-control-input"
                            id="customCheck1"
                            type="checkbox"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                            
                        </label>
                    </div>
                         </td>
                      </tr>
                    </tbody>
                  </Table>
                </Collapse>














                      <div className="custom-control custom-control-alternative custom-checkbox">
                        <input
                          className="custom-control-input"
                          id=" customCheckLogin"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor=" customCheckLogin"
                        >
                          <span className="text-muted">Auto Create Sender ID</span>
                        </label>
                      </div>
                      <div className="text-center">

                        <Button
                          className="my-4"
                          color="primary"
                          type="button"
                        >
                          Send SMS
                        </Button>
                      </div>
                    </Form>

              </TabPane>
            </TabContent>
          </CardBody>
        </Card>


                  </CardHeader>

                  {/* <CardBody className="px-lg-5 py-lg-5">
                    
                  </CardBody> */}
                </Card>
              </div>



            </Modal>
                    </div>
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Page name</th>
                      <th scope="col">Visitors</th>
                      <th scope="col">Unique users</th>
                      <th scope="col">Bounce rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">/argon/</th>
                      <td>4,569</td>
                      <td>340</td>
                      <td>
                        <i className="fas fa-arrow-up text-success mr-3" />{" "}
                        46,53%
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">/argon/index.html</th>
                      <td>3,985</td>
                      <td>319</td>
                      <td>
                        <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                        46,53%
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">/argon/charts.html</th>
                      <td>3,513</td>
                      <td>294</td>
                      <td>
                        <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                        36,49%
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">/argon/tables.html</th>
                      <td>2,050</td>
                      <td>147</td>
                      <td>
                        <i className="fas fa-arrow-up text-success mr-3" />{" "}
                        50,87%
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">/argon/profile.html</th>
                      <td>1,795</td>
                      <td>190</td>
                      <td>
                        <i className="fas fa-arrow-down text-danger mr-3" />{" "}
                        46,53%
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <Paginate/>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Index;
