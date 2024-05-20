import { useEffect, useState } from "react";


const useMenu = () => {

    const [loading,setLoading]=useState(false)
    const [menu,setMenu]=useState([])


    useEffect(()=>{
        setLoading(true)
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            
            setMenu(data)
            setLoading(true)
        })
    },[])
    return [menu]
};

export default useMenu;