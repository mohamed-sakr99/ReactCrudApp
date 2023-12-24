import React, { Component } from "react";

class CourseList extends Component {
	//Render Course ITem
	renderCourse = () => {
		return (
			<li>
				<span>{this.props.details.name}</span>
				<button onClick={() => this.toggleState()}>Edit Course</button>
				<button
					onClick={() => {
						this.props.deleteCourse(this.props.index);
					}}>
					delete
				</button>
			</li>
		);
	};

	// updateCourseItem
	updateCourseItem = (e) => {
		e.preventDefault();
		this.props.editCourse(this.props.index, this.input.value);
		this.toggleState();
	};

	//Render Update Form
	renderUpdateForm = () => {
		return (
			<form onSubmit={this.updateCourseItem}>
				<input
					type="text"
					defaultValue={this.props.details.name}
					ref={(v) => {
						this.input = v;
					}}
				/>
				<button>update course</button>
			</form>
		);
	};

	state = {
		isEdit: false,
	};

	//toggle state between renderUpdateForm and renderCourse;
	toggleState = () => {
		let { isEdit } = this.state;
		this.setState({
			isEdit: !isEdit,
		});
	};
	render() {
		let { isEdit } = this.state;
		return (
			<React.Fragment>
				{isEdit ? this.renderUpdateForm() : this.renderCourse()}
			</React.Fragment>
		);
	}
}

export default CourseList;
