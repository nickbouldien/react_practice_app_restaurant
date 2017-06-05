import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {createMainCourse, loginOrRedirect} from '../actions/actions'
import menuItems from '../stores/MenuItems'
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';

class AddMenuItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      course: {
        courseName: '',
        type: '',
        description: '',
        cost: 1
      },
      message: ''
    }
  }

  handleChange(e){
    let target = e.target
    let course = this.state.course
    course[target.name] = target.value
    this.setState({
      course: course
    })
  }

  handleSubmit(e){
    e.preventDefault()
    createMainCourse(this.state)
  }

  // componentWillMount(){
  //   debugger
  //   return loginOrRedirect(this.props)
  // }

  // componentWillUpdate(){
  //   debugger
  //   return loginOrRedirect(this.props)
  // }

  // handleImage(err, response){
  //   if(err){
  //     //TODO
  //   } else {
  //     let event = {
  //       target: {
  //         name: 'imageUrl',
  //         value: response
  //       }
  //     }
  //     this.handleChange(event)
  //   }
  // }

  render(){
    return(
      <div>
        <div className="App-header">
          <h2>Add A Course</h2>
          <div className="pull-right">
            <Link to="/">Back</Link>
          </div>
        </div>
        {/* <ImagesUploader
         url="http://localhost:4000/files"
         optimisticPreviews
         multiple={false}
         onLoadEnd={this.handleImage.bind(this)}
         label="Upload a picture"
         /> */}
        <form className='form' onSubmit={this.handleSubmit.bind(this)}>
          <div className='formGroup'>
            <label htmlFor='courseName'>Course Name</label>
            <input type='text' name='courseName' id='color' value={this.state.course.courseName} onChange={this.handleChange.bind(this)}></input>
          </div>
          <br />
          <div className='formGroup'>
            <label htmlFor='type'>Type</label>
            <select
              name='type'
              id='type'
              value={this.state.course.type}
              onChange={this.handleChange.bind(this)}>
              <option>Main</option>
              <option>Side</option>
            </select>
          </div>
<br />
          <div className='formGroup'>
            <label htmlFor='cost'>Cost</label>
            <input
              type='number'
              name='cost'
              id='age'
              value={this.state.course.cost} onChange={this.handleChange.bind(this)}></input>
          </div>
<br />
          <div className='formGroup'>
            <textarea
              rows="4"
              cols="30"
              type='text'
              name='description'
              placeholder='Description'
              value={this.state.course.description}
              onChange={this.handleChange.bind(this)}>
            </textarea>
            {/* <input
              type='text'
              name='description'
              id='description'
              value={this.state.course.description}
              onChange={this.handleChange.bind(this)}>
            </input> */}
          </div>

          <div className='formGroup'>
            <input type='submit' value='Submit' className='btn btn-primary'></input>
          </div>
        </form>
      </div>
    )
  }
}
export default AddMenuItem;
