const userModel = require("../db/models/user.model")
class user{
    static home = async(req, res)=> { 
      try{
        const data=await userModel.find()
        res.render("home", {
            pageTitle:"all users",
            data,
            isEmpty: !data.length
        }) 
      }
      catch(e){
        res.send(e)
      }
          
    }
    static add = (req, res)=> { 
        res.render("add", {
            pageTitle:"Add user"
        })    
    }
    static addLogic = async(req,res)=>{
        const post = new userModel(req.body)
        
        try{
            await post.save()
            res.redirect("/")
        }
        catch(e){
            res.render("add",{
            nameErr: e.errors.name?.message||null

        }
            
            )
        }
    }
    static single = async(req, res)=> { 
        try{
            const postData=await userModel.findById(req.params.id)
            res.render("single", {
            pageTitle:"single user", postData
                         })
        }
        catch(e){
            res.send(e)
        }
        
    }
    static edit = async (req, res)=> { 
        try{
            const postData=await userModel.findById(req.params.id)
            res.render("edit", {
            pageTitle:"edit user", postData
                         })
        }
        catch(e){
            res.send(e)
        }

    }
    static editLogic = async(req,res)=>{
        try{
            await userModel.findByIdAndUpdate(req.params.id,req.body,{runValidators:"true"})
            res.redirect("/")
        }
        catch(e){
            res.render("edit",{
            nameErr: e.errors.name?.message||null,user:req.body

        })
    }
    }
    static delItem = async(req,res)=>{
        try{
            const postData=await userModel.findByIdAndDelete(req.params.id)
            res.redirect("/")
        }
        catch(e){
            res.send(e)
        }
    }
   
}
module.exports = user
