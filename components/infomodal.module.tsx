import React, { NewLifecycle } from 'react'
import { Modal, Button } from 'react-bootstrap'
import gitinfo from './githash.json'

interface InfoModalProps {
    show: boolean,
    hideFunc: { (): void }
}
interface InfoModalState { }


const burdle = () => {
    return (
        <span className="burdletext"> BURDLE </span>
    )
}
const wordle = () => {
    return (
        <span className="burdletext">WORDLE</span>
    )
}

export default class InfoModal
    extends React.Component<InfoModalProps, InfoModalState> {

    constructor(props: InfoModalProps) {
        super(props)
    }



    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.hideFunc} backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {burdle()}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container infotext">
                        {burdle()} is similar to {wordle()}, <i>except</i> it is possible to play as many times as you would like.
                    </div>
                    <div className="container infotext">
                        {burdle()} is statically hosted by github pages.  Source code is at: <a href="https://github.com/stevensamirmichael/burdle">https://github.com/stevensamirmichael/burdle</a>
                        <p></p>
                        <p>Current git hash: {gitinfo.githash}</p>
                    </div>
                    <div className="container infotext">
                        Contact Info: Steven Michael <a href="mailto:ssmichael@gmail.com">ssmichael@gmail.com</a>
                    </div>

                </Modal.Body>

            </Modal>
        )
    }

}