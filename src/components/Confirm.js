
import React, { useState, Component } from "react";
import Calendar from "react-calendar";
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

import "react-calendar/dist/Calendar.css";
import Moment from "react-moment";




export class Confirm extends Component {
// const [value, onChange] = useState(new Date());
// const [cycle, cycleValue] = useState("28");
// state = { value: new Date(), cycle: "28" }
// state = { checkedelleventh: false, checkedtwelth: false }
constructor(props) {
    super(props);
    this.state = {
    value: new Date,
    cycle: "28"
    };
  }




 continue = e => {
  e.preventDefault();
  // PROCESS FORM //
  this.props.nextStep();
};

 back = e => {
  e.preventDefault();
  this.props.prevStep();
};
handleChange = event => {
  this.setState({value: event});

};


// handleCheckboxChangefirst = event =>
//    this.setState({ checkedfirst: event.target.checked })

// handleCycle = event =>
// this.setState({ cycle: event.target.value})
// handleValue = event =>
// this.setState({ value: event.target.value})
   render() {


return (
  <MuiThemeProvider>
    <>
      <Dialog
        open
        fullWidth
        maxWidth='sm'
      >
	<div>
		<nav>
		<div>


		<center>	<h4> Get Ahead Your Next Cycle </h4></center>
		</div>
		</nav>


	<center>	<label>Select your Cycle Length : </label>
		<select
    onChange={(e) => this.setState({ cycle: e.target.value})}
		// onChange={(e) => cycleValue(e.target.value)}
		defaultValue={this.state.cycle}

		>
		<option value="28">28</option>
		<option value="29">29</option>
		<option value="30">30</option>
		<option value="31">31</option>
		<option value="32">32</option>
		<option value="33">33</option>
		<option value="34">34</option>
		<option value="35">35</option>
		<option value="36">36</option>
		<option value="37">37</option>
		<option value="38">38</option>
		<option value="39">39</option>
		<option value="40">40</option>
		<option value="41">41</option>
		<option value="42">42</option>
		<option value="43">43</option>
		<option value="44">44</option>
		<option value="45">45</option>
		</select> </center>
	</div>

<center>	<p>
		Select Your Last Period Start Date from the Calendar
	</p> </center>

<center>
	<div>
		<Calendar onChange = {this.handleChange} value={this.state.value}/>
	</div> </center>

	<div >
		<div>
		<div>
			<div>
			<p><h5>Next Period</h5></p>

			<Moment format="Do MMMM YYYY"
				add={{ days: this.state.cycle - 1 }}>
				{this.state.value}
			</Moment>
			</div>
			<div>
			<p><h5> Approximate Ovulation Day</h5></p>

			<Moment
				format="Do MMMM YYYY"
				add={{ days: this.state.cycle - 1 - 14 }}
			>
				{this.state.value}
			</Moment>

			</div>
<div>
      <p><h5>Length of luteal phase</h5></p>

      <p>14</p>

      </div>
    </div>
		</div>
	</div>

  <Button
    color="secondary"
    variant="contained"
    onClick={this.back}
  >Back</Button>

  <Button
    color="primary"
    variant="contained"
    onClick={this.continue}
  >Confirm & Continue</Button>
</Dialog>
</>
</MuiThemeProvider>


);
}}

export default Confirm;





// import React, { Component } from 'react';
// import Dialog from '@material-ui/core/Dialog';
// import AppBar from '@material-ui/core/AppBar';
// import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
// import { List, ListItem, ListItemText } from '@material-ui/core/';
// import Button from '@material-ui/core/Button';
//
// export class Confirm extends Component {
//   continue = e => {
//     e.preventDefault();
//     // PROCESS FORM //
//     this.props.nextStep();
//   };
//
//   back = e => {
//     e.preventDefault();
//     this.props.prevStep();
//   };
//
//   render() {
//     const {
//       values: { firstName, lastName, email, occupation, city, bio }
//     } = this.props;
//     return (
//       <MuiThemeProvider>
//         <>
//           <Dialog
//             open
//             fullWidth
//             maxWidth='sm'
//           >
//             <AppBar title="Confirm User Data" />
//             <List>
//               <ListItem>
//                 <ListItemText primary="First Name" secondary={firstName} />
//               </ListItem>
//               <ListItem>
//                 <ListItemText primary="Last Name" secondary={lastName} />
//               </ListItem>
//               <ListItem>
//                 <ListItemText primary="Email" secondary={email} />
//               </ListItem>
//               <ListItem>
//                 <ListItemText primary="Occupation" secondary={occupation} />
//               </ListItem>
//               <ListItem>
//                 <ListItemText primary="City" secondary={city} />
//               </ListItem>
//               <ListItem>
//                 <ListItemText primary="Bio" secondary={bio} />
//               </ListItem>
//             </List>
//             <br />
//
//             <Button
//               color="secondary"
//               variant="contained"
//               onClick={this.back}
//             >Back</Button>
//
//             <Button
//               color="primary"
//               variant="contained"
//               onClick={this.continue}
//             >Confirm & Continue</Button>
//           </Dialog>
//         </>
//       </MuiThemeProvider>
//     );
//   }
// }
//
// export default Confirm;
