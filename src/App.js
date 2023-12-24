import React, { Component } from "react";
import "./App.css";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";

class App extends Component {
	state = {
		courses: [{ name: "Html" }, { name: "Css" }, { name: "Js" }],
		current: "",
	};

	//Update Course
	updateCourse = (e) => {
		this.setState({
			current: e.target.value,
		});
	};

	//Add Course
	addCourse = (e) => {
		e.preventDefault();
		let current = this.state.current;
		if (current === "") {
			return false;
		} else {
			let courses = this.state.courses;
			courses.push({ name: current });
			this.setState({
				courses,
				current: "",
			});
		}
	};

	//Delete Course
	deleteCourse = (index) => {
		let courses = this.state.courses;
		courses.splice(index, 1);
		this.setState({
			courses,
		});
	};

	//Edit Course
  editCourse = (index,value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course['name'] = value;
    this.setState({
      courses
    })
  }

	render() {
		const { courses } = this.state;
		const courseList = courses.map((course, index) => {
			return (
				<CourseList
					details={course}
					key={index}
					index={index}
					deleteCourse={this.deleteCourse}
					editCourse={this.editCourse}
				/>
			);
		});
		return (
			<section className="App">
				<h2>courses</h2>
				<CourseForm
					current={this.state.current}
					addCourse={this.addCourse}
					updateCourse={this.updateCourse}
				/>
				<ul>{courseList}</ul>
			</section>
		);
	}
}

export default App;
