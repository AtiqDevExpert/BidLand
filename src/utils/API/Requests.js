
import Url from '../../baseUrl';
import axios from "axios";
import {store} from '@redux/store';


const put_request = async ({ target, body}) => {
    console.log("------------- API START -----------")
    console.log(body)
    console.log(Url+target)
    let state=store.getState();
    try {
        let token=state?.authReducer?.userData?.data?.token
   
        const inst = axios.create(
            {
                baseURL: Url,
                headers: {
                   "x-auth-token": token ? token : "empty_token"
                }
            });
        const response = await inst.put(target, body)
        console.log("post response", response.data);
        console.log("------------- API END -----------")
        return response

    } catch (error) {
        if (error.response) {
            console.log("post error", JSON.stringify(error.response));
             console.log("------------- API END -----------")
             return error.response.data.message
        }else{
            return "Invalide Error!"
        }
      
    }

}
const delete_request = async ({ target, body}) => {
    console.log("------------- API START -----------")
    console.log(body)
    console.log(Url+target)
    try {
        // let token = await get_data("USER_TOKEN")
        const inst = axios.create(
            {
                baseURL: Url,
                headers: {
                   "x-auth-token": token ? token : "empty_token"
                }
            });
        const response = await inst.delete(target, body)
        console.log("post response", response.data);
        console.log("------------- API END -----------")
        return response

    } catch (error) {
        if (error.response) {
            console.log("post error", JSON.stringify(error.response));
             console.log("------------- API END -----------")
             return error.response.data.message
        }else{
            return "Invalide Error!"
        }
      
    }

}

const get_request = async ({ target, auth_token = null} ) => {
    try {
        console.log("------------- API START -----------")
        console.log(Url+target)
        // let token = await get_data("USER_TOKEN")
        console.log("x-auth-token:"+token)
        const inst = axios.create(
            {
                baseURL: Url,
                headers: {
                    "x-auth-token": token ? token : auth_token
                }
            });
        const response = await inst.get(target)
        console.log("post response", JSON.stringify(response.data));
        console.log("------------- API END -----------")
        return response

    } catch (error) {
        if (error.response) {
            console.log("post error", JSON.stringify(error.response));
             console.log("------------- API END -----------")
             return error.response.data.message
        }else{
            return "Invalide Error!"
        }
    }
}
const get_request_with_Token = async ({ target, auth_token = null} ) => {
    let state=store.getState();
    console.log('inside get request ')
    try {
        console.log("------------- API START -----------")
        // console.log(Url+target)
        let token=state?.authReducer?.userData?.data?.token
        const inst = axios.create(
            {
                baseURL: Url,
                headers: {
                    "Authorization":  `Bearer ${token}`
                }
            });
        const response = await inst.get(target)
        // console.log("post response", JSON.stringify(response.data));
        console.log("------------- API END -----------")
        return response.data

    } catch (error) {
        if (error.response) {
            // console.log("post error", JSON.stringify(error.response));
             console.log("-------------Error API END -----------")
             return new Error( JSON.stringify(error.response.data.message))
        }else{
            throw new Error ("Invalide Error!")
        }
    }
}
const post_request = async ({ target, body}) => {
    console.log("------------- API START -----------")
    console.log(body)
    console.log(Url+target)
    try {
        // let token = await get_data("USER_TOKEN")
        const inst = axios.create(
            {
                baseURL: Url,
                // headers: {
                //    "x-auth-token": token ? token : "empty_token"
                // }
            });
        const response = await inst.post(target, body)
        console.log("post response", response.data);
        console.log("------------- API END -----------")
        return response.data

    } catch (error) {
       console.log(error)
        if (error.response) {
            console.log("post error", JSON.stringify(error.response));
             console.log("------------- API END -----------")
             throw new Error( error.response.data.message)
        }else{
            // return new Error(e?.message)
            throw new Error ("Invalide Error!")
        }
       
      
    }

}
const post_request_with_Token = async ({ target, body}) => {
    
    let state=store.getState();
    console.log("------------- API START -----------")
    // console.log(body)
    // console.log(Url+target)
    // console.log("society_name=============>",body.society_name)
    // let token=state?.authReducer?.userData?.data?.user?.token
    // console.log("token================>",token)
    try {
        let token=state?.authReducer?.userData?.data?.user?.token
        var myHeaders = new Headers();
        myHeaders.append("x-auth-token", "" + token);
        myHeaders.append("Authorization", "Bearer " + token);
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify(body);
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body:  raw,
            redirect: 'follow',
        };   

        const data=await fetch(
            (`${Url}${target}`),
            requestOptions,
        ) .then(response => response.text())
            .then(result => {
            //   console.log( "result data",result);
              return result
            })
            .catch(error => {
                console.log('error', error.message);
                throw new error.message
       
            }); 
            console.log("atif api post response===============> ", data);
            console.log("------------- API END -----------")
            return data;
       
       
        // const inst = axios.create(
        //     {   
        //         baseURL: Url,
        //         headers: {
        //             "Authorization":  `Bearer ${token}`,
        //              "Accept": `application/json`,
        //         },
        //     });
        
        // const response = await inst.post(target, body)
        // console.log("atif api post response===============> ", response);
        // console.log("------------- API END -----------")
        // return response.data
        // return response
    } catch (error) {
       console.log("----------",error)
       return error  
        // if (error.response) {
        //     console.log("post error", JSON.stringify(error.response));
        //     console.log("------------- eRROR API END -----------")
            
        //     // console.log("post error", JSON.stringify(error.response));
        //     // throw new Error( JSON.stringify(error.response.data.message))
        //     //  console.log("-------------Error API END -----------")
        // }else{
        //     // return new Error(e?.message)
        //     throw new Error ("Invalide Error!")
        // }
       
      
    }


}

const post_request_with_Token_Pic = async ({ target, body}) => {
    
    let state=store.getState();
    console.log("------------- API START -----------")
    console.log(body)
    console.log("------------------body.image---------------",body.image)
    console.log(Url+target)
    try {
        let token=state?.authReducer?.userData?.data?.user?.token
        const imageData = new FormData();
            imageData.append("image", {
                uri: body.image,
                name: 'image.png',
                fileName:'image',
                type: 'image/jpg',
                });
        var myHeaders = new Headers();
        myHeaders.append("content-type", "multipart/form-data");
        myHeaders.append("x-auth-token", "" + token);
        myHeaders.append("Authorization", "Bearer " + token);
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: imageData,
        };      
       const data=await fetch(
            (`${Url}${target}`),
            requestOptions,
        ) .then(response => response.text())
            .then(result => {
              console.log( "result data",result);
              return result
            })
            .catch(error => {
                console.log('error', error.message);
                throw new error.message
       
            });  

        console.log("------------- API END -----------")
        // console.log( "----------------response data---------",data);
        return data;

    } catch (error) {
        console.log("===>",error)
     return error  
        // if (error.response) {
        //     console.log("==============catch post error===============", JSON.stringify(error.response));
        //      console.log("-------------catch API END -----------")
        //     //  throw new Error( JSON.stringify(error.response.data.message))
        // }else{
        //     // return new Error(e?.message)
        //     throw new Error ("Invalide Error!")
        // }
       
      
    }


}


export {
     post_request,
      get_request,
      put_request,
      delete_request,
      get_request_with_Token,
    post_request_with_Token,
    post_request_with_Token_Pic, }