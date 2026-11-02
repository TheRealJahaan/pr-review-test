

function getUser(id){
    if(!id){
        return null ;
    }
    else{
        return {id: id , name :"user " + id} ;
    }
    

}

function login(id , password) {
    const user = getUser(id) ;
    if(password.length  < 6) return false ;

    return user !== null ;
}
module.exports = {getUser , login} ;