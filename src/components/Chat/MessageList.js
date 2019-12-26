import React, { Component } from 'react';
import '../../MessageList.css';
import ReactDom from 'react-dom';
//import autoscroll from "autoscroll-react";

class MessageList extends Component {

    componentDidUpdate()
    {
        const node = ReactDom.findDOMNode(this);
        node.scrollTop =node.scrollHeight;

    }

render()
{

    const styles = {
        overflowY: "scroll",
        height: "620px",
        border: '2px solid grey'
      }; 

return(
    <ul style={styles} >
       {this.props.message.map( (msg) => {
        return(
        <li className="container"  key={msg.text} >
                <div >
                       <span  >{msg.name}</span> 
                </div>
                
                <div >
                <span >{msg.text} </span>
                </div>
         </li>

)
 }
)
}

     </ul>
);



}


}

export default MessageList;