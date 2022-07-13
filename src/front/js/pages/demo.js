import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Demo = () => {

	// const { store, actions } = useContext(Context);

	// const formId = 'vXF5Fe9t';
	// const formSparkUrl = 'https://submit-form.com/'+{formId}

	// const [submit, submitting] = useFormspark({
	// 	formId: 'vXF5Fe9t',
	//   });
	
	//   const [message, setMessage] = useState("");
	
	//   const onSubmit = async (e) => {
	// 	e.preventDefault();
	// 	await submit({ message });
	// 	alert("Form submitted");
	//   };


	// const submitForm = () => {

	// }


	return (
			<div className="container">
							{/* <!-- Wrapper container --> */}
				<div className="mt-5 w-50 border border-dark container py-4">

				{/* <!-- Bootstrap 5 starter form --> */}
				<form onClick={submitForm} className="" id="contactForm">

					{/* <!-- Name input --> */}
					<div className="mb-3">
					<label className="form-label" htmlFor="name">Name</label>
					<input className="form-control" id="name" type="text" placeholder="Name" />
					</div>

					{/* <!-- Email address input --> */}
					<div className="mb-3">
					<label className="form-label" htmlFor="emailAddress">Email Address</label>
					<input className="form-control" id="emailAddress" type="email" placeholder="Email Address" />
					</div>

					{/* <!-- Message input --> */}
					<div className="mb-3">
					<label className="form-label" htmlFor="message">Message</label>
					<textarea className="form-control" id="message" type="text" placeholder="Message"></textarea>
					</div>

					{/* <!-- Form submit button --> */}
					<div className="d-grid">
					<button className="btn btn-primary btn-lg" type="submit">Submit</button>
					</div>

				</form>

				</div>
			<br />
			{/* <Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link> */}
		</div>
		
	);
};
