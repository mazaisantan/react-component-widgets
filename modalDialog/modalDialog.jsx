import React from 'react'
import './modalDialog.scss'

class ModalDialog extends React.Component {
    constructor(props){
        super(props);      
    }
    render() {
        return (
        <div className="modalDialog">
            <div className="modal-header">
                <button className="close" ><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="myModalLabel">Modal title</h4>
            </div>
            <div className="modal-body">
                ...
            </div>
            <div className="modal-footer">
                <button className="btn btn-default">Close</button>
                <button className="btn btn-primary">Save changes</button>
            </div>
        </div>
        )
    }
}

export default ModalDialog