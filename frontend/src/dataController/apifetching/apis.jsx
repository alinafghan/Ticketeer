//import React from 'react';
import baseURL from './baseURL';

async function getCountriesTable() {
   const url = baseURL + "/countries";
   const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    return data;
}

async function deleteCountries(id){
    const url = baseURL + "/countries/deletecountry";
    try{
    const response = await fetch(url,{
        method : 'DELETE',
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify({
            country_id : id,
        })
    })

    if(response.status === 202){
        return true;
    }
    else{
        return false;
    }


    }
    catch(err){
        console.log(err);
        return false;
    }
}

async function UpdateCountry(id, name){
    console.log(id," ",name)
    const url = baseURL + "/countries/updatecountry";
    try{
    const response = await fetch(url,{
        method : 'PUT',
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify({
            country_id : id,
            country_name : name,
        })
    })

    if(response.status === 202){
        return true;
    }
    else{
        return false;
    }
}
catch(err){
    console.log(err);
    return false;
}
}


async function AddCountry(country_name){
    const url = baseURL + "/country/addnewcountry";
    try{
        const response =  fetch(url,{
            method : "POST",
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({
                country_name : country_name
            })

        })

        if(response.status === 202)
        {
            return true;
        }
        else{
            return false;
        }
    }catch(err){
        console.log(err)
        return false;
    }
}

async function AddMockData(){
    const url = baseURL + "/countries/populate";
   // const url2 = baseURL + "/Person/populate";
    //const url3 = baseURL + "/Order/populate";
    try{
        const response1 =  fetch(url,{
            method : "POST",
            headers : {
                'Content-Type' : 'application/json',
            }
        })
       /* const response2 =  fetch(url2,{
            method : "POST",
            headers : {
                'Content-Type' : 'application/json',
            }
        });
        const response3 =  fetch(url3,{
            method : "POST",
            headers : {
                'Content-Type' : 'application/json',
            }
        }); */
//        if(response1.status === 202 && response2.status === 202 && response3.status === 202)

        if(response1.status === 202)
        {
           return true;
        }
        else{
            return false;
        }
    }catch(err){
        console.log(err)
        return false;
    }
    
}

 async function DropAllTables () {

    const url = baseURL + "/TableCreation/dropTables";
    try{
        const response =  fetch(url,{
            method : "POST",
            headers : {
                'Content-Type' : 'application/json',
            }

        })

        if(response.status === 202)
        {
            return true;
        }
        else{
            return false;
        }
    }catch(err){
        console.log(err)
        return false;
    }
        
}

async function TablesCreate () {

    const url = baseURL + "/TableCreation";
    try{
        const response =  fetch(url,{
            method : "POST",
            headers : {
                'Content-Type' : 'application/json',
            }

        })

        if(response.status === 202)
        {
            return true;
        }
        else{
            return false;
        }
    }catch(err){
        console.log(err)
        return false;
    }
        
}

export {TablesCreate,DropAllTables,AddMockData, getCountriesTable, deleteCountries , UpdateCountry, AddCountry}