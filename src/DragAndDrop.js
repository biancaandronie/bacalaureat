import React from 'react';
import axios, { post } from 'axios';

class Page extends React.Component {
    constructor(props) {
    		super(props);
    		this.state = {
    			file: null,
    		};
    		this.onFormSubmit = this.onFormSubmit.bind(this);
    		this.onChange = this.onChange.bind(this);
    		this.fileUpload = this.fileUpload.bind(this);
    	}

    onFormSubmit(e) {
    		e.preventDefault();
    		this.fileUpload(this.state.file);
    	}

    	onChange(e) {
    		this.setState({ file: e.target.files[0] });
    	}

    	fileUpload(file) {
    		let data = new FormData();
    		data.append('data', file);
    		axios
    			.post('http://api.bacalaureat.local/api/v1/create', data, {
    				headers: {
    					'Content-Type': 'multipart/form-data',
    				},
    			})
    			.then(response => {
    				console.log('file upload response', response);
    			});
    	}

    	render() {
    		return (
    			<form onSubmit={this.onFormSubmit}>
    				<h1>File Upload</h1>
    				<input type="file" onChange={this.onChange} />
    				<button type="submit">Upload</button>
    			</form>
    		);
    	}
    }
export default Page;