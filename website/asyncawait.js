
// fetch('tods.json')
// .then(response=>{
//     return response.json();
// }).then(data=>{
//     console.log(data);
// }).catch(data=>{
//     console.log('something went wrong');
// })

const todsfun=async()=>{

    try{
        const response=await fetch('cbff.json');
        const data=await response.json();
        return data;
    }
    catch(err){
        console.log("something went wrong");
        throw err;
    }

}

todsfun()
.then(data=>console.log(data))
.catch(err=>console.log(err))