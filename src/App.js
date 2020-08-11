import React from 'react';
import CourseDetail from './components/courseDetail/courseDetail';
import './App.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';

function App() {
  return (
    <div className="App">
      <section class="section">
        <div class="container">
          <nav class="columns">
            <div class="column">
              <div class="field">
                <p class="control">
                  <label for="course-search">
                    Course
                  </label>
                </p>
                <p class="control">
                  <input id="course-search" name="course-search" class="input" type="text" placeholder="Enter course" />
                </p>
              </div>
            </div>  
            <div class="column">
              <div class="field">
                <p class="control">
                  <button class="button course-button">
                    Submit
                  </button>
                </p>
              </div>
            </div>  
          </nav>
          <div class="columns">
            <div class="column">
              <CourseDetail dept='CS' course='111' year='2018' semester='Fall' />  
            </div>
            <div class="column">
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
