const fs = require('fs');
//reading file
fs.readFile('./Docs/blog1.txt',(err,data) => {
    if (err) {
        console.log(err);
    }  
    console.log(data.toString());
}
      
    
);
//writting in blog2
fs.writeFile('./Docs/blog2.txt','rihab,benhassouna',() => {
    console.log('file wos writing');
});
//directories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err)=>{
        if (err){
        console.log(err);}
        console.log('folder created');
    });
}
else{
    fs.rmdir('./assets',(err) =>{
        if (err){
            console.log(err) ; }
        
        console.log('folder deleted')
    
    });
}
//delete file 
if(fs.existsSync('./Docs/delete.txt')){
    fs.unlink('./Docs/delete.txt',(err) =>{
        if(err){
            console.log(err);
        }
        console.log('deleted file');

    
});
}

