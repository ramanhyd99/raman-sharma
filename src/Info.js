import React from "react";
import raman from './raman.png'
import { Toast, ToastHeader, ToastBody, List, ListGroupItem } from "reactstrap";

class Info extends React.Component {


    render() {
        return (
            <div className="p-3 bg-info my-2 rounded" style={{ display: 'flex', 'margin-left': '40%', 'margin-right':'40%' }}>
                <Toast>
                    <ToastHeader>
                        About me
                    </ToastHeader>
                    <ToastBody>
                        <b>Name: </b> Raman
                        <br />
                        <b>Insta: </b> raman_5harma
                    </ToastBody>
                </Toast>
            </div>
        )
    }
}


export default Info