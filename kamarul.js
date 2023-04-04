let Users = [
    {
        username: "knk",
        password:"kamarul17",
        name: "nizam",
        email: "kamarul@yahoo.com",
    },

    {
        username: "hajim",
        password: "696969",
        name:"fazim",
        email: "hazimfahmi69@gmail.com",
    }

]

function login(username,password)
{
   let matchUser = Users.find(user => user.username == username)
   if(!matchUser)return "User does not exist!"
   if(matchUser.password == password)
   {
    return matchUser
   }
   else{
    return "Invalid password!"
   }

   console.log(matchUser)

}

function register(reqUsername,reqPassword,reqName,reqEmail)
{
    Users.push({
        username: reqUsername,
        password: reqPassword,
        name: reqName,
        email: reqEmail,
    })

}
//try to login
console.log(login("hajim","696969"))
console.log(login("knk","password"))


register("syahmi","password","syahmi amir","syahmi@utem.edu.my")
console.log(login("syahmi","password"))