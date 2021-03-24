class FontChooser extends React.Component {

    constructor(props) {
		super(props);
		
		
		var props_size = parseInt(props.size);
		var props_max = parseInt(props.max);
		var props_min = parseInt(props.min);
		this.state = {
			isBold: (props.bold == 'false') ? false : true,
			isHidden: true,
			fontSize: props_size,
			color: 'black',
			min: (props_min < 1) ? 1 : props_min,
			max: (props_min > props_max) ? props_min : props_max,
			fontSizeDefault: parseInt(props_size < props_min ? (props_min < 1) ? 1 : props_min : (props_size > props_max) ? props_max : props_size)
		}
    }
    
	bold(){
		this.setState( {isBold: !this.state.isBold} );
	}

	toggleHidden(){
		this.setState( {isHidden: !this.state.isHidden} );
	}

	decrease(){
		if(this.state.fontSize > parseInt(this.state.min, 10)){
			this.setState({fontSize: this.state.fontSize - 1});
		}
		if(this.state.fontSize <= parseInt(this.state.min,10) + 1){
			this.setState({color: "red"})
		}else{
			this.setState({color: "black"})
		}
	}

	increase(){
		if(this.state.fontSize < this.state.max){
			this.setState({fontSize: this.state.fontSize + 1});
		}
		if(this.state.fontSize >= (this.state.max - 1)){
			this.setState({color: "red"})
		}else{
			this.setState({color: "black"})
		}
	}

	reset(){
		this.setState({fontSize: parseInt(this.state.fontSizeDefault)});
	}


    render() {
		var weight = this.state.isBold ? 'bold' : 'normal';
		var hidden = this.state.isHidden ? true : false;
		

		return(
			<div>
			<input type="checkbox" id="boldCheckbox" hidden={hidden} checked={this.state.isBold} onChange = {this.bold.bind(this)}/>
			<button id="decreaseButton" hidden={hidden} onClick = {this.decrease.bind(this)}>-</button>
			<span id="fontSizeSpan" style={{color: this.state.color}}hidden={hidden} onDoubleClick={this.reset.bind(this)} >{parseInt(this.state.fontSize)}</span>
			<button id="increaseButton" hidden={hidden} onClick = {this.increase.bind(this)}>+</button>
			<span id="textSpan" style={{fontWeight:weight, fontSize: this.state.fontSize}} onClick = {this.toggleHidden.bind(this)}>{this.props.text}</span>
			</div>
		);
    }
}

