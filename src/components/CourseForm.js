import React from "react";
const CourseForm = (props) => {
	return (
		<div>
			<form onSubmit={props.addCourse}>
				<input
					type="text"
					onChange={props.updateCourse}
					value={props.current}
				/>
				<button type="submit">Add Course</button>
			</form>
		</div>
	);
};
export default CourseForm;
