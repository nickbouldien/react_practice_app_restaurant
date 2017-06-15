import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {createStaffMember, loginOrRedirect} from '../actions/actions'
import menuItems from '../stores/MenuItems'
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';

class AddStaffMember extends Component {
  constructor(props){
    super(props)
    this.state = {
      staff: {
        firstName: '',
        lastName: '',
        position: ''
      },
      message: ''
    }
  }

  handleChange(e){
    let target = e.target
    let staff = this.state.staff
    staff[target.name] = target.value
    this.setState({
      staff: staff
    })
    console.log(this.state.staff);
  }

  handleSubmit(e){
    e.preventDefault()
    createStaffMember(this.state)
  }

  // componentWillMount(){
  //   debugger
  //   return loginOrRedirect(this.props)
  // }

  // componentWillUpdate(){
  //   debugger
  //   return loginOrRedirect(this.props)
  // }


  render(){
    return(
      <div>

        <h2>Add A Staff Member</h2>
        <Link to="/">Back</Link>
        {/* <ImagesUploader
         url="http://localhost:4000/files"
         optimisticPreviews
         multiple={false}
         onLoadEnd={this.handleImage.bind(this)}
         label="Upload a picture"
         /> */}
        <form className='form' onSubmit={this.handleSubmit.bind(this)}>
          <div className='formGroup'>
            <label htmlFor='firstName'>First Name</label>
            <input type='text' name='firstName' id='firstName' value={this.state.staff.firstName} onChange={this.handleChange.bind(this)}></input>
          </div>
          <br />

            <div className='formGroup'>
              <label htmlFor='lastName'>Last Name</label>
              <input type='text' name='lastName' id='lastName' value={this.state.staff.lastName} onChange={this.handleChange.bind(this)}></input>
            </div>
            <br />


          <div className='formGroup'>
            <label htmlFor='type'>Position</label>
            <select
              name='type'
              id='type'
              value={this.state.staff.position}
              onChange={this.handleChange.bind(this)}>
              <option>Main</option>
              <option></option>
              <option>Bartender</option>

            </select>
          </div>

          <br />
          <div className='formGroup'>
            <input type='submit' value='Submit' className='btn btn-primary'></input>
          </div>
        </form>
      </div>
    )
  }
}
export default AddStaffMember;
