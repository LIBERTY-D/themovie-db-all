/**
 * 
 * @param {*} dataArray 
 */

export default function storage(dataArray) {
    const retrievedDataString = localStorage.getItem('myData-M');
    let res = null;
    if(retrievedDataString){
        res = getData()
    }else{
        setData(dataArray)
    }

    return res;
    

 

  
}
function setData(dataArra){
    const dataToSaveString = JSON.stringify(dataArray);
    localStorage.setItem('myData-M', dataToSaveString);
 
    
}
function getData(){
        const retrievedDataString = localStorage.getItem('myData-M');
        const retrievedData = JSON.parse(retrievedDataString);
        return retrievedData;
         
}
