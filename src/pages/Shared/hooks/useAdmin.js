import {useEffect, useState } from "react"

const useAdmin = email =>{
    const [isAdmin, setIsadmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true)
    useEffect(()=>{
        if(email){
            fetch(`https://doctor-server-tan.vercel.app/users/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsadmin(data.isAdmin)
                setIsAdminLoading(false)
            })
        }
    },[email])
    return [isAdmin, isAdminLoading]
}

export default useAdmin