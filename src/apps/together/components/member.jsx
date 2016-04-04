class Member extends React.Component {
    render() {
        return <div className="row">
            <div className="button-container">
            <a className='button -blue center' onClick={this.props.actions.getMember}>View Members</a>
                </div>
        </div>
    }
}

MyComponents.Member = Member;