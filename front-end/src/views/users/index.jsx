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
import isAuthenticated from "../../helpers/isAuthenticated";

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

  componentDidMount(){
    // isAuthenticated(this.props.history);
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
                      <h3 className="mb-0">All Users</h3>
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
              size="sm"
              isOpen={this.state.formModal}
              toggle={() => this.toggleModal("formModal")}
            >




              <div className="modal-body p-0">
                <Card className="bg-secondary shadow border-0">
                 

                <CardHeader className="bg-transparent pb-5">
                    <div className="text-muted text-center mt-2 mb-3">
                      <h2>Invite A User</h2>
                    </div>
                    <div className="btn-wrapper text-center">
                    <Nav
            className="nav-fill flex-column flex-md-row"
            id="tabs-icons-text"
            pills
            role="tablist"
          >
            
           
          </Nav>
        </div>

                <br></br>

        <Card className="shadow">
          <CardBody>
            <TabContent activeTab={"tabs" + this.state.tabs}>
              

              {/* tab 2 */}

              <TabPane tabId="tabs1">
               
              <Form role="form">

         
                <Input  className="form-control-alternative" placeholder="Email ID" type="text" />                   
                      
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
                          <span className="text-muted">Invite As Admin</span>
                        </label>
                      </div>
                      <div className="text-center">

                        <Button
                          className="my-4"
                          color="primary"
                          type="button"
                        >
                        Invite
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
                      <th scope="col">Name</th>
                      <th scope="col">Role</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Emmanuel</th>
                      <td>Admin</td>
                      <td>
                      <i className="fas fa-edit text-success mr-3" />{" "}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Michael</th>
                      <td>Admin</td>
                      <td>
                      <i className="fas fa-edit text-success mr-3" />{" "}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Nyembezi</th>
                      <td>User</td>
                      <td>
                      <i className="fas fa-edit text-success mr-3" />{" "}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Chings</th>
                      <td>Admin</td>
                      <td>
                      <i className="fas fa-edit text-success mr-3" />{" "}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Mambwe</th>
                      <td>User</td>
                      <td>
                      <i className="fas fa-edit text-success mr-3" />{" "}
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
