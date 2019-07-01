import React from "react";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
  Row,
  Container
} from "reactstrap";

import SendSMS from "../SMS/SendSMS.jsx";
class Datepicker extends React.PureComponent {
  state = {};
  render() {
    return (
      <>
      {/* <SendSMS/> */}
      {/* <Container> */}
        <FormGroup>
          <InputGroup className="input-group-alternative">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="ni ni-calendar-grid-58" />
              </InputGroupText>
            </InputGroupAddon>
            <ReactDatetime
              inputProps={{
                placeholder: this.props.placeholder
              }}
              timeFormat={false}
            />
          </InputGroup>
        </FormGroup>
        {/* </Container> */}

      </>
    );
  }
}

export default Datepicker;
