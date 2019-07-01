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
import * as ActionCreators from "../../stateManager/actionCreators";
import { connect } from "react-redux";

import isAuthenticated from "../../helpers/isAuthenticated";



function buildFileSelector(){
  const fileSelector = document.createElement("input");
  fileSelector.setAttribute("type","file");
  fileSelector.setAttribute("multiple","multiple");
  fileSelector.setAttribute("id","csv");
  return fileSelector;
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
        selectGroup:false,
        uploadCSV:false,
        selectFromList: false
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

  toggleGroups() {
    this.setState(state => ({...this.state, selectGroup: !state.selectGroup }));
  }


  toggle() {
    this.setState(state => ({...this.state, collapse: !state.collapse }));
  }

  toggleCSV() {
    this.setState(state => ({...this.state, uploadCSV: !state.uploadCSV }));
  }

  toggleList() {
    this.setState(state => ({...this.state, selectFromList: !state.selectFromList }));
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

  handleFile(props, toggle){
    return e => {
      let reader  = new FileReader();

      // props.csvFiles.push({name:e.target.files[0].files[0].name, extension:this.files[0].type});
      props.file()
      // console.log(props)
      reader.onload = function(e){
          console.log("file loaded", e.target.result)
      }
      // console.log(this.files[0])
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  }

  async componentDidMount(){
    // console.log("sdsdsdsdsdsds", this.props)
    this.fileSelector = buildFileSelector();
    this.fileSelector.addEventListener("change",this.handleFile(this.props, this.toggleCSV));

    isAuthenticated(this.props.history);
    Promise.all([
      this.props.fetchSMSHistory(await localStorage.getItem("user"), this.props.history),
      this.props.fetchSMSSchedule(await localStorage.getItem("user", this.props.history))
    ])
    

  }

  handleFileSelect(e){
    e.preventDefault();
    this.fileSelector.click();
  }
  componentWillMount() {
    // if (window.Chart) {
    //   parseOptions(Chart, chartOptions());
    // }
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

  renderFetchDataError(){
    return (
      <tr>
        <th scope="row">error</th>
        <td>error</td>
        <td>error</td>
    </tr>
    )
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
                      <h3 className="mb-0">SMS History</h3>
                    </div>
                    <div className="col text-right">
                    <Button
                        color="primary"
                        type="button"
                        onClick={() => this.toggleModal("formModal")}
                        >
                    Send SMS
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
                    
                      {this.props.senderIDs.map((id,i)=>(
                        <>
                         <DropdownItem>{id}</DropdownItem>
                         <DropdownItem divider />
                        </>
                      ))}
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
                    
                    {this.props.senderIDs.map((id,i)=>(
                        <>
                         <DropdownItem>{id}</DropdownItem>
                         <DropdownItem divider />
                        </>
                      ))}
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
                    <Button onClick={this.toggleGroups.bind(this)}  className="btn-icon btn-3 nav-fill flex-column flex-md-row" color="neutral" type="button">
                            <span className="btn-inner--icon">
                                <i className="fas fa-user-friends" />
                            </span>
                            <span className="btn-inner--text">Select Group</span>
                        </Button>
                        <Button onClick={this.handleFileSelect.bind(this)}  className="btn-icon btn-3" color="success" type="button">
                            <span className="btn-inner--icon">
                                <i className="fas fa-user-friends" />
                            </span>
                            <span className="btn-inner--text">Upload CSV File</span>
                        </Button>
                        <Button onClick={this.toggleList.bind(this)}  className="btn-icon btn-3" color="neutral" type="button">
                            <span className="btn-inner--icon">
                                <i className="fas fa-user-friends" />
                            </span>
                            <span className="btn-inner--text">Select From List</span>
                        </Button>
                        {/* <Input id="csv" type="file" display="none"></Input> */}
                    </div>
                      
            
                      {/* SELECT CONTACT */}
                  <Collapse isOpen={this.state.selectFromList}>
                    <Table className="align-items-center table-flush" responsive>
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Full Names</th>
                        <th scope="col">Groups</th>
                        <th scope="col">Select Contact</th>
                      </tr>
                    </thead>
                    <tbody>
                        {
                          this.props.contacts.map((contact,i) => (
                            <tr>
                            <th scope="row">{contact.phone_number}</th>
                            <td>{contact.full_names}</td>
                            <td>{contact.groups.toString()}</td>
                            <td>
                            <div className="custom-control custom-checkbox mb-3">
                            <input
                                className="custom-control-input"
                                id={"selectContact"+i}
                                type="checkbox"
                            />
                            <label className="custom-control-label" htmlFor={"selectContact"+i}>
                                
                            </label>
                             </div>
                         </td>
                             </tr>
                         ))
                        }
                      
                    </tbody>
                  </Table>
                </Collapse>

                        {/* SELECT FROM GROUP*/}


                        <Collapse isOpen={this.state.selectGroup}>
                    <Table className="align-items-center table-flush" responsive>
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">Group Name</th>
                        <th scope="col">Total Members</th>
                        <th scope="col">Select Group</th>
                      </tr>
                    </thead>
                    <tbody>
                        {
                          this.props.groups.map((group,i) => (
                            <tr>
                            <th scope="row">{group.name}</th>
                            <td>{group.num_membership}</td>
                            <td>
                            <div className="custom-control custom-checkbox mb-3">
                            <input
                                className="custom-control-input"
                                id={"selectGroup"+i}
                                type="checkbox"
                            />
                            <label className="custom-control-label" htmlFor={"selectGroup"+i}>
                                
                            </label>
                             </div>
                         </td>
                             </tr>
                         ))
                        }
                      
                    </tbody>
                  </Table>
                </Collapse>

                          {/* UPLOAD CSV */}




                <Collapse isOpen={this.state.uploadCSV}>
                    <Table className="align-items-center table-flush" responsive>
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">File Name</th>
                        <th scope="col">File Type</th>
                        <th scope="col">Save As Contacts</th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                          this.props.csvFiles.map((file,i) => (
                            <tr>
                            <th scope="row">{file.name}</th>
                            <td>{file.extension}</td>
                            <td>
                            <div className="custom-control custom-checkbox mb-3">
                            <input
                                className="custom-control-input"
                                id={"uploadCSV"+i}
                                type="checkbox"
                            />
                            <label className="custom-control-label" htmlFor={"uploadCSV"+i}>
                                
                            </label>
                             </div>
                         </td>
                             </tr>
                         ))
                        }
                      
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
            <br></br>
            <Col xl="12">
              <Card className="shadow">
                <Paginate/>
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
    balance: sms.balance,
    senderIDs: ["MicroTech", "DctalkRadio"],
    groups: [{name:"Family", num_membership:20},{name:"Lecture", num_membership:120},{name:"Church", num_membership:330},{name:"Dev", num_membership:20}],
    contacts: [{phone_number:"0950482560", full_names:"Lee Lwando", groups:["Church", "School"]},{phone_number:"0950482560", full_names:"Lee Lwando", groups:["Church", "School"]},{phone_number:"0950482560", full_names:"Lee Lwando", groups:["Church", "School"]},{phone_number:"0950482560", full_names:"Lee Lwando", groups:["Church", "School"]},{phone_number:"0950482560", full_names:"Lee Lwando", groups:["Church", "School"]},{phone_number:"0950482560", full_names:"Lee Lwando", groups:["Church", "School"]}],
    csvFiles:[]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSMSHistory: (token, history) => dispatch(ActionCreators.fetchSMSHistory(token, history)),
    fetchSMSSchedule: (token, history) => dispatch(ActionCreators.fetchSMSSchedules(token,history)),
    fetchSMSBundleBalance: (token, history) => dispatch(ActionCreators.fetchSMSBalance(token, history)),
    file: () => {console.log("dddddddddddddddddddddddddddddddddddddddddddd")}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Index)
