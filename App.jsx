import React from 'react';
import marked from 'marked';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markContant: "",
            htmlContant: ""
        };
        marked.setOptions({
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: true,
            smartLists: true,
            smartypants: false
        });
        this.convertMarkedToHtml = this.convertMarkedToHtml.bind(this);
    }
    convertMarkedToHtml(e) {
        this.setState({
            markContant: e.target.value,
            htmlContant: marked(this.state.markContant)});
    }
    render() {
        return (
            <div>
                <div className="col-6">
                    <textarea type="text" onChange={this.convertMarkedToHtml}/>
                </div>
                <div className="col-6">
                    <div className="result" dangerouslySetInnerHTML={{__html: this.state.htmlContant}}></div>
                </div>
            </div>
        );
    }
}
export default App;