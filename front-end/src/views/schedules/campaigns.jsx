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
import DateTime from "../../components/datetime/single";
import Paginate from "../../components/Pagination/index"
import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";

class TableData extends React.PureComponent{

  render(){
    return (
    <>
    <Row className="align-items-center">
                    <Col>
                    <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Description</th>
                      <th scope="col">Date</th>
                      <th scope="col">Manage Day</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                    {this.props.days.map((day,index) => {
                      return (
                        
                      <tr>
                      <th scope="row">{day.title}</th>
                      <td>{day.message}</td>
                      <td>{"  "}</td>
                      <td>
                        <a href="#!">
                        <i className="bg fas fa-edit text-success mr-3" />{" "}
                        </a>
                      </td>
                    </tr>
                      
                      )
                    })}
                  </tbody>
                </Table>
                    </Col>
                    
                  </Row>

    </>)
  }
}

class ViewAllCampaings extends React.PureComponent{
  render(){
    return (<></>);
  }
};

class CreateNewCampaign extends React.PureComponent{
  render(){
    return (
    <>
    
                      <br></br>
                  <Row className="align-items-center">
                    <Col lg={4}>
                    <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Campaign Tilte
                            </label>
                            <Input
                              className="form-control"
                              defaultValue=""
                              id="input-username"
                              placeholder="Give Your Campaign A Title"
                              type="text"
                            />
                          </FormGroup>
                    </Col>
                    <Col lg={6}>
                    <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                            Description
                            </label>
                            <Input
                              className="form-control"
                              id="input-email"
                              placeholder="Provide Desciption for this campaign"
                              rows="2"
                              type="textarea"
                            />
                          </FormGroup>
                    </Col>
                    <Col lg={2}>
                    
                    <Button onClick={() => this.props.toggleModal("formModal")}  className="btn-icon btn-3 rounded-circle" color="primary" type="button">
                            <span className="btn-inner--icon">
                                <i className=" fas fa-plus" />
                            </span>
                            <span className="btn-inner--text">Add Day</span>
                        </Button>
                    </Col>
                  </Row>

    </>);
  }
};

class NewModal extends React.PureComponent{
  render(){
    return(
      <>
                 
                 <Modal
                    className="modal-dialog-centered"
                    size="lg"
                    isOpen={this.props.formModal}
                    toggle={() => this.toggleModal("formModal")}
                  >
                  <div className="modal-body p-0">
                          <Card className="bg-secondary shadow border-0">
                          

                          <CardHeader className="bg-transparent pb-5">
                              <div className="text-muted text-center mt-2 mb-3">
                                <h2>Add A Day To The Campaign</h2>
                              </div>
                              
                              <div className="btn-wrapper text-center">
                              
                  </div>

        <br></br>

                  <Card className="shadow">
                    <CardBody>
                      <TabContent activeTab={"tabs" + this.props.tabs}>
                        <TabPane tabId="tabs1">
                        
                        <Form role="form">

                        <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-username"
                              >
                                Message Tilte
                              </label>
                              <Input
                                className="form-control"
                                defaultValue=""
                                id="input-username"
                                placeholder="Give Your Campaign A Title"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-email"
                              >
                              Message
                              </label>
                              <Input
                                className="form-control"
                                id="input-email"
                                placeholder="Provide Desciption for this campaign"
                                rows="2"
                                type="textarea"
                              />
                            </FormGroup>
                            
                          </Col>
                      </Row>
                      <Row className="align-items-center md-4">
        
                        <Col className="md-4" >
                          <DateTime placeholder={"select Date"}/>
                        </Col>
                    
                      </Row>
                      <Nav
                        className="nav-fill flex-column flex-md-row"
                        id="tabs-icons-text"
                        pills
                        role="tablist"
                      >
                        <NavItem>
                          <NavLink
                            aria-selected={this.props.tabs === 1}
                            className={classnames("mb-sm-3 mb-md-0", {
                              active: this.props.tabs === 1
                            })}
                            onClick={e => this.toggleNavs(e, "tabs", 1)}
                            href="#allcontacts"
                            role="tab"
                          >
                            <i className="fas fa-user mr-2" />
                          All Contacts
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            aria-selected={this.props.tabs === 4}
                            className={classnames("mb-sm-3 mb-md-0", {
                              active: this.props.tabs === 2
                            })}
                            onClick={e => this.toggleNavs(e, "tabs", 2)}
                            href="#groups"
                            role="tab"
                          >
                            <i className="fas fa-users mr-2" />
                            Contact Groups
                          </NavLink>
                        </NavItem>

                        <NavItem>
                          <NavLink
                            aria-selected={this.props.props === 2}
                            className={classnames("mb-sm-3 mb-md-0", {
                              active: this.props.tabs === 2
                            })}
                            onClick={e => this.toggleNavs(e, "tabs", 2)}
                            href="#uploadcsv"
                            role="tab"
                          >
                            <i className="fas fa-users mr-2" />
                            Upload CSV
                          </NavLink>
                        </NavItem>
                      
                      </Nav>

                  <hr></hr>

                              
                <div className="custom-control custom-control custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="">Auto Create Sender ID</span>
                  </label>
                </div>

              <div className="text-center">

                <Button
                  className="my-4"
                  color="primary"
                  type="button"
                  onClick={() => this.toggleModal("formModal")}
                >
                  Save Day
                </Button>
              </div>
            </Form>
         </TabPane>            
        </TabContent>
      </CardBody>
    </Card>
  </CardHeader>
</Card>
</div>
 </Modal>
      </>
    );
  }
}

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
        collapse: false,
        data:[1]
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
                href="#allcontacts"
                role="tab"
              >
                <i className="fas fa-user mr-2" />
               View All Campaigns
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 2}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 2
                })}
                onClick={e => this.toggleNavs(e, "tabs", 2)}
                href="#groups"
                role="tab"
              >
                <i className="fas fa-users mr-2" />
                Create A Campaign
              </NavLink>
            </NavItem>
           
          </Nav>
                {/* TAB CONTENT */}
  <TabContent activeTab={"tabs" + this.state.tabs}>

    <TabPane tabId="tabs1">
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                
                {this.state.data.length ? <TableData days={[{title:"Xmas", message:"happy xmas", time:new Date()},
                {title:"Xmas", message:"happy xmas", time:new Date()},{title:"Xmas", message:"happy xmas", time:new Date()},{title:"Xmas", message:"happy xmas", time:new Date()},{title:"Xmas", message:"happy xmas", time:new Date()},{title:"Xmas", message:"happy xmas", time:new Date()},{title:"Xmas", message:"happy xmas", time:new Date()}]}/> : (
                <Row><Col></Col><Col>
                 <div className="text-center">
                  <h2>No Messages Scheduled Yet</h2>
                </div>
                </Col><Col></Col></Row>)}
              </CardHeader>
            </Card>
          </Col>
        </Row>
    </TabPane>

    <TabPane tabId="tabs2">
      <CreateNewCampaign />
    </TabPane>

    </TabContent>
    {/* END TAB CONTENT */}
    <NewModal
      className="modal-dialog-centered"
      size="lg"
      isOpen={this.state.formModal}
      tabs={this.state.tabs}
      toggle={() => this.toggleModal("formModal")}
    />
         
      </CardHeader>
    </Card>
  </Col>
            
  </Row>
</Container>     
       
      </>
    );
  }
}

export default Index;




