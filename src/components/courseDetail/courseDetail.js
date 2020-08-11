import React from 'react';
import './courseDetail.css';

class CourseDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dept: '', 
      course: '', 
      year: '', 
      semester: ''
    };
  }

  render() {
    return (
      <div class="card">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{this.props.dept} {this.props.course}</p>
            <ul>
              <li class="subtitle is-6">Department   {this.props.dept}</li>
              <li class="subtitle is-6">Course   {this.props.course}</li>
              <li class="subtitle is-6">Year   {this.props.year}</li>
              <li class="subtitle is-6">Semester   {this.props.semester}</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
};

export default CourseDetail;