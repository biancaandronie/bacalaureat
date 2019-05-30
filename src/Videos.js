import React,{Component} from 'react';
import Search from 'react-search';
import  axios from 'axios';
import createHistory from 'history/createBrowserHistory';
import "../node_modules/video-react/dist/video-react.css"; // import css
import { Player } from 'video-react';
import CommentForm from './CommentForm';
import CommentList from  './CommentList';

class Videos extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            name: null,
            link: null,
            course: null,
            description: null,
            redirect: false,
            id: 0,
            comments: [],
            loading: false

        };
        this.addComment = this.addComment.bind(this);
    }

    addComment(comment) {
        this.setState({
            loading: false,
            comments: [comment, ...this.state.comments]
        });
    }

    componentWillMount() {
        const { id } = this.props.match.params;
        let video_url = 'http://localhost:8080/api/v1/videolink';
        axios.post(video_url, {"id": `${id}`})
            .then((response) => {
                if (response.data !== undefined) {
                    this.setState({name: response.data[0].name});
                    this.setState({id: response.data[0].id});
                    this.setState({link: response.data[0].link});
                    this.setState({course: response.data[0].course});
                   // this.setState({description: response.data[0].description});
                    let {name,id,link,course,description} = this.state;
                    console.log(`this is the link: ${link}`);
                    console.log(`this is name: ${name}`);
                    console.log(`this is id: ${id}`);
                    console.log(`this is link: ${link}`);
                    console.log(`this is course: ${course}`);
                    //console.log(`this is id: ${description}`);
                }
            });
        axios.post(comment_url, {"video_id": `${id}`})
            .then((response) => {
                if (response.data !== undefined) {
                    this.setState({comments: response.data});
                    let {name,message} = this.state.comments;
                    console.log(`this is the message: ${message}`);
                    console.log(`this is the name: ${name}`);
                }
            });
    }

    handleItemsChange(items, id) {
        if (items.length > 0) {
            let url = 'http://localhost:8080/api/v1/videolink'
            axios.post(url, {"id": items[0].id})
                .then((response) => {
                    if (response.data !== undefined) {
                        this.setState({name: response.data[0].name});
                        this.setState({id: response.data[0].id});
                        this.setState({link: response.data[0].link});
                        this.setState({course: response.data[0].course});
                        this.setState({ redirect: true});
                        let {link,id} = this.state;
                        console.log(`this is the link: ${link}`);
                        console.log(`this is id: ${id}`);
                    }
                });
        }
    }


    getItemsAsync(searchValue, cb) {
        let url = 'http://localhost:8080/api/v1/video'
        axios.post(url, {"name": searchValue})
            .then((response) => {
                console.log(response.data.name);
                if (response.data !== undefined) {
                    console.log(response.data);
                    let items = response.data.map((res, i) => {
                        return {id: res.id, value: res.name}
                    });
                    this.setState({videos: items});
                    cb(searchValue)
                }

            });
    }
    render() {
        const {id,link,redirect } = this.state;
        if (redirect) {
            const history = createHistory();
            history.push(`/videos/${id}`);
            history.go(0);
        }
    return (
        <div>
            <Search items={this.state.videos}
                    placeholder='Recherche vidéo'
                    maxSelected={1}
                    multiple={false}
                    getItemsAsync={this.getItemsAsync.bind(this)}
                    onItemsChanged={this.handleItemsChange.bind(this)}
                    onClick={this.handleItemsChange.bind(this)}
            />
            <div>
            <Player
                playsInline
                fluid={false}
                width={1280}
                height={480}
                poster="/assets/poster.png"
                src={link}
            />
            </div>
            <div className="row">
                <div className="col-4  pt-3 border-right">
                    <h6>Say something about React</h6>
                    <CommentForm addComment={this.addComment}/>
                </div>
                <div className="col-8  pt-3 bg-white">
                    {/* Comment List Component */}
                    <CommentList
                        loading={this.state.loading}
                        comments={this.state.comments}
                    />
                </div>
            </div>
        </div>
    );
    }
}

export default Videos;
