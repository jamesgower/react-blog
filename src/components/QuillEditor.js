import hljs from 'highlight.js';
import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill';
import React from 'react';
import '../styles/dracula.css';

export class QuillEditor extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			body: props.passedBody ? props.passedBody : '',
			modules: {
				toolbar: [
					[{ header: [1, 2, 3, 4, 5, false] }],
					['bold', 'italic', 'underline', 'strike', 'blockquote'],
					[{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
					['link', 'image'],
					[{ align: '' }],
					[{ align: 'center' }],
					[{ align: 'justify' }],
					[{ align: 'right' }],
				],
			},
			theme: 'snow',
		};
	}

	update = value => {
		this.setState({ body: value });
		this.props.onUpdate(value);
	};

	render() {
		return (
			<ReactQuill
				value={this.state.body}
				onChange={this.update}
				className="editor"
				modules={this.state.modules}
				theme={this.state.theme}
			/>
		);
	}
}

export default QuillEditor;
