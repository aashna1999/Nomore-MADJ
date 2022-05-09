import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormPersonalDetails extends Component {
  state = { checkedfirst: false, checkedsecond: false, checkedthird: false, checkedfourth: false, checkedfifth: false }
  state = { checkedsixth: false, checkedseventh: false, checkedeigth: false, checkedninth: false, checkedtenth: false }
  state = { checkedelleventh: false, checkedtwelth: false }

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  handleCheckboxChangefirst = event =>
     this.setState({ checkedfirst: event.target.checked })

     handleCheckboxChangesecond = event =>
        this.setState({ checkedsecond: event.target.checked })

        handleCheckboxChangethird = event =>
           this.setState({ checkedthird: event.target.checked })

           handleCheckboxChangefourth = event =>
              this.setState({ checkedfourth: event.target.checked })

              handleCheckboxChangefifth = event =>
                 this.setState({ checkedfifth: event.target.checked })

                 handleCheckboxChangesixth = event =>
                    this.setState({ checkedsixth: event.target.checked })

                    handleCheckboxChangeseventh = event =>
                       this.setState({ checkedseventh: event.target.checked })

                       handleCheckboxChangeeigth = event =>
                          this.setState({ checkedeigth: event.target.checked })

                          handleCheckboxChangeninth = event =>
                             this.setState({ checkedninth: event.target.checked })

                             handleCheckboxChangetenth = event =>
                                this.setState({ checkedtenth: event.target.checked })

                                handleCheckboxChangeelleventh = event =>
                                   this.setState({ checkedelleventh: event.target.checked })

                                   handleCheckboxChangetwelth = event =>
                                      this.setState({ checkedtwelth: event.target.checked })

  render() {
    const Checkbox = props => (
    <input type="checkbox" {...props} />
  )
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <center><h2>NoMore</h2></center>
              <h4> Do you have or had any of the following conditions?    </h4>
            <div>

            <label>
              <Checkbox
                checked={this.state.checkedfirst}
                onChange={this.handleCheckboxChangefirst}
              />
              <span>Uterine polyps or fibroids</span>
            </label>


            <br></br>
            <label>
              <Checkbox
                checked={this.state.checkedsecond}
                onChange={this.handleCheckboxChangesecond}
              />
              <span>Endometriosis</span>
            </label>


            <br></br>
            <label>
              <Checkbox
                checked={this.state.checkedthird}
                onChange={this.handleCheckboxChangethird}
              />
              <span>Pelvic inflammatory disease</span>
            </label>


            <br></br>
            <label>
              <Checkbox
                checked={this.state.checkedfourth}
                onChange={this.handleCheckboxChangefourth}
              />
              <span>Polycystic ovary syndrome</span>
            </label>


            <br></br>
            <label>
              <Checkbox
                checked={this.state.checkedfifth}
                onChange={this.handleCheckboxChangefifth}
              />
              <span>Uterine cancer</span>
            </label>
          </div>
            <br />

              <h4>  Which type of birth control do you use?    </h4>
            <div>

            <label>
              <Checkbox
                checked={this.state.checkedsixth}
                onChange={this.handleCheckboxChangesixth}
              />
              <span>Birth control pills</span>
            </label>


            <br></br>
            <label>
              <Checkbox
                checked={this.state.checkedseventh}
                onChange={this.handleCheckboxChangeseventh}
              />
              <span> Injected and implanted contraceptives</span>
            </label>


            <br></br>
            <label>
              <Checkbox
                checked={this.state.checkedeigth}
                onChange={this.handleCheckboxChangeeigth}
              />
              <span>Injected and implanted contraceptives</span>
            </label>


            <br></br>
            <label>
              <Checkbox
                checked={this.state.checkedninth}
                onChange={this.handleCheckboxChangeninth}
              />
              <span>Condoms</span>
            </label>


            <br></br>
            <label>
              <Checkbox
                checked={this.state.checkedtenth}
                onChange={this.handleCheckboxChangetenth}
              />
              <span>None of the above</span>
            </label>
          </div>

          <h4> Have you had biological children of your own? </h4>
          <div>
          <label>
            <Checkbox
              checked={this.state.checkedelleventh}
              onChange={this.handleCheckboxChangeelleventh}
            />
            <span>Yes</span>
          </label>


          <br></br>
          <label>
            <Checkbox
              checked={this.state.checkedtwelth}
              onChange={this.handleCheckboxChangetwelth}
            />
            <span> No</span>
          </label>
          </div>

<br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
