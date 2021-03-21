import {useEffect, useState} from "react";

const Accueil = () => {

    const [user, setUser] = useState({})
    useEffect(() => {
        const u = localStorage.getItem('user')
        if (u)
            setUser(JSON.parse(u))
    })
    return (
        <>
            <h1>Accueil</h1>
            <h2>{user && user.user ? user.user.firstname : ''}</h2>
            <h2>{user && user.user ? user.user.lastname : ''}</h2>
        </>
    )
}
export default Accueil
