import React, {Component} from 'react';


class SendMessageForm extends Component {


    state = {
        messages : [

            {
                
                text: ''

            }
                 ]
            }    
            
                onChange(e)
                {
                    this.setState({text: e.target.value});

                }


                onSubmit(e)
                {
                    e.preventDefault();
                    this.setState({text: ""});
                    this.props.onSendMessage(this.state.text);
                   // this.setState({text: ""});    
                        
                }
    render(){

        const style = {
            width: '50%',
            padding: '3px 2px 3px 2px' 
        };

        return(

            <form  onSubmit={(e) => this.onSubmit(e)}>
            
            
            <input style={style} value={this.state.text} onChange={(e) => this.onChange(e)} type='text' placeholder='Enter your message' autofocus="false"></input>
            <button type='submit'> Send! </button>
            
            
            </form>


        );


    }




}

export default SendMessageForm;