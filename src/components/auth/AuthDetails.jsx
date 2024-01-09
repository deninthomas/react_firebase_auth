import React from 'react';
import { useEffect , useState} from 'react';
import { auth } from '../../fireBase';
import { onAuthStateChanged , signOut} from 'firebase/auth';
import { Button } from '@chakra-ui/react';

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);
    
   

    useEffect (() => {
        const listen = onAuthStateChanged(auth , (user) => {
            if (user) {
                setAuthUser(user)
            } else{
                setAuthUser(null);
            }
             });
             return ()=>listen(); //cleanup function to stop listening when the component unmounts
    }, []);

        const userSignOut = () => {
          signOut(auth).then(() => {
            console.log("signed out");
          }).catch((eroor) => {
            console.error("Eroor",eroor.message);
          });
        }
    return (
        <div> 
            {authUser ? <> <p> {`Signed In as ${authUser.email}`}</p><Button colorScheme={'teal'} onClick={userSignOut}>Signout</Button> </>: <p> Signed Out</p>}
        </div>
    )
}

export default AuthDetails;