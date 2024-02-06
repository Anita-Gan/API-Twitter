const Users =[{
    nom:'anita',
},
{
    nom:'Ganene',
},{
    age:'24'
}]

const create=(req,res)=>{
let nom=req.Users
Users.push(nom)
get(req,res)
    }

module.exports={
    create
}
