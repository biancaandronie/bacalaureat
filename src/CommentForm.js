import React, { Component } from "react";
import  axios from 'axios';

export default class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: "",

            comment: {
                name: "",
                message: "",
            },
        };

        // bind context to methods
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    /**
     * Handle form input field changes & update the state
     */
    handleFieldChange = event => {
        const { value, name } = event.target;

        this.setState({
            ...this.state,
            comment: {
                ...this.state.comment,
                [name]: value
            }
        });
    };

    /**
     * Form submit handler
     */
    onSubmit(e) {
        // prevent default form submission
        e.preventDefault();

        if (!this.isFormValid()) {
            this.setState({ error: "All fields are required." });
            return;
        }

        // loading status and clear error
        this.setState({ error: "", loading: true });

        // persist the comments on server
        let { comment } = this.state;
        axios.post("http://localhost:8080/api/v1/comment",JSON.stringify({
                name: comment.name,
                message: comment.message,
                video_id: sessionStorage.getItem('video_id')
            }))
            .then((response) => {
                if (response.error) {
                    this.setState({ loading: false, error: response.error });
                } else {
                    // add time return from api and push comment to parent state
                    //comment.time = res.time;
                    this.props.addComment(comment);

                    // clear the message box
                    this.setState({
                        loading: false,
                        comment: { ...comment, message: "" }
                    });
                    console.log(response.error)
                }
            })
            .catch(err => {
                this.setState({
                    error: "Something went wrong while submitting form.",
                    loading: false
                });

            });
    }

    isFormValid() {
        return this.state.comment.name !== "" && this.state.comment.message !== "";
    }

    renderError() {
        return this.state.error ? (
            <div className="alert alert-danger">{this.state.error}</div>
        ) : null;
    }

    render() {
        return (
            <React.Fragment>
                <form method="post" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input
                            onChange={this.handleFieldChange}
                            value={this.state.comment.name}
                            className="form-control"
                            placeholder="Your Name"
                            name="name"
                            type="text"
                        />
                    </div>

                    <div className="form-group">
            <textarea
                onChange={this.handleFieldChange}
                value={this.state.comment.message}
                className="form-control"
                placeholder="Your Comment"
                name="message"
                rows="5"
            />
                    </div>

                    {this.renderError()}

                    <div className="form-group">
                        <button disabled={this.state.loading} className="btn btn-primary">
                            Comment ➤
                        </button>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}