import React,{useContext,useEffect,useState} from 'react'
import { AuthContext } from '../Context/AuthContext'
import UploadFile from './UploadFile'
import { database} from '../Firebase'
import Posts from './Posts.js'
import Navbar from './Navbar'

function Feed() {
    const {user,logout} = useContext(AuthContext)
    const [userData,setUserData] = useState('')
    useEffect(() => {
        const unsub = database.users.doc(user.uid).onSnapshot((snapshot)=>{
            setUserData(snapshot.data())
        })
        return () => {unsub()}
    }, [user]) 
    return (
        <>
        <Navbar userData={userData}/>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            {/* <div className="comp" style={{width:'50%'}}>
                <h1>This is Feed</h1>
                <button onClick={logout}>Log Out</button>
            </div> */}
                <UploadFile user={userData}/>
                <Posts userData={userData}/>
        </div>
        </>
    )
}

export default Feed
