const Users =[{
    nom:'anita',
},
{
    nom:'Ganene',
},{
    nom:'Ben'
}]


const getAll=(req,res)=>{
res.render('Users',{Users})
}


const createTweets=(req,res)=>{
let name=req.body
Users.push(name)
getAll(req,res)
    }

module.exports={
    getAll,createTweets
}