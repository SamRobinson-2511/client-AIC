const Modal = props => {
    return(
        <div className="art-detail-modal">
            <div className="art-description">
                <div className="art-detail-title">
                    <h4 className="title">Art Title</h4>
                </div>
                <div className="art-detail-body">
                    This is modal content
                </div>
                <div className="art-detail-footer">
                    <button className="button">Close</button>
                </div>
            </div>
        </div>
    )
}


export default Modal;