import React from 'react';
 
import { useNavigate,   useSearchParams } from 'react-router-dom';
import qs from 'query-string'


const CategorieiconBox = ({categorieiconbox,selected}) => {
    const [params,setParams] = useSearchParams()
    const navigate = useNavigate()
    const {label,icon:Icon,description} = categorieiconbox;

    console.log(selected);

    const handleclick= ()=>{
        let currentQuery = {}
        if (params) {
            currentQuery = qs.parse(params.toString())
        }
            const updateQuery = {...currentQuery, category: label}

            const url = qs.stringifyUrl({
                url: '/',
                query: updateQuery,
            })
            navigate(url)
            
        
    }
    return (
       
            <div onClick={handleclick} className= {` border-b-2 ${selected ? 'border-b-slate-800' : 'border-transparent'}`} >
            <Icon size={26}></Icon>
            <p>{label}</p>
 
        </div>
        
    );
};

export default CategorieiconBox;