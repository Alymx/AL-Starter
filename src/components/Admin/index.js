import React from 'react';
import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';

class AdminPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            users: [],
        }
    }

    componentDidMount() {
        this.setState({ loading: true });

        this.props.firebase.users().on('value', (snap) => {
            const usersObject = snap.val();
            //Parsing d'objet en Array
            const usersList = Object.keys(usersObject).map((index) => ({
                ...usersObject[index], uid: index,
            }))

            this.setState({ users: usersList, loading: false });
        })
    }

    render() {

        const { users, loading } = this.state;

        return (
            <div>
                <h1>Admin Page</h1>
                {loading && <div> Chargement... </div>}
                <UserList users={users} />

            </div>
        );
    }

    componentWillUnmount() {
        this.props.firebase.users().off();
    }

};
const UserList = ({ users }) => (
    <ul style={{ "background": "#F8F8F8", "width": "70%", "margin": "30px auto", "padding": "10px", "border": "1px solid #ddd", "border-radius": "5px", "box-shadow": "0 0 4px #ccc" }}>
        {users.map((user) => (
            <li key={user.uid} className="form-group form-control" style={{ "margin": "15px auto", "width": "98%", "height": "60px", "overflow": "hidden" }}>
                <span>
                    <strong> Nom: </strong> {user.username}
                </span>
                <span>
                    <strong> E-Mail: </strong> {user.email}
                </span>
                <span>
                    <strong> ID: </strong> {user.uid}
                </span>
            </li>
        ))}
    </ul>
);


const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(withFirebase(AdminPage));