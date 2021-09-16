import React from 'react';
import Header from '../../Components/Dashboard/Header';
import Sidebar from './Sidebar/Sidebar';
import Questionairre from './Questionairre/Questionairre';
import GET from '../../Requests/GET';
import { Redirect } from 'react-router-dom';
export const UserContext = React.createContext();

const SellerQuestionairre = (props) => {
    const UID = props.match.params.id;
    const [view, setView] = React.useState(1);
    const [user, setUser] = React.useState(null);
    const [redirect, setRedirect] = React.useState(false)
    React.useEffect(() => {
        if (!(localStorage.getItem('JWTTOKEN') || sessionStorage.getItem('JWTTOKEN'))) {
            setRedirect(true);
        }
        else {
            GET(`/sellers/${UID}`)
                .then(res => setUser(res));
        }
    }, [UID]);

    if(redirect){
        return <Redirect to="/" />
    }

    return (
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            <div>
                <Header />
                <div style={{ height: "90vh", display: 'flex', justifyContent: 'space-between' }}>
                    <Sidebar view={view} setView={setView} />
                    <Questionairre view={view} setView={setView} ID={UID} />
                </div>
            </div>
        </UserContext.Provider>
    );
}

export default SellerQuestionairre;