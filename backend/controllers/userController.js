import User from '../models/User.js'


export const createUser = async (req,res)=>{
    const newUser = new User(req.body)

    try{
        const savedUser = await newUser.save()

        res.status(200).json({sucess:true,message:'Successfully created',
    data:savedUser})
    }
    catch(err){
        res.status(500).json({success:false,message:"Failed to create. Try again"})
    }
};


//update user
export const updateUser = async (req, res) =>{
    const id = req.params.id
    try{

     const updatedUser = await Tour.findByIdAndUpdate(id,
        { $set: req.body }, 
        {new:true})

     res.status(200).json({
        success:true,
        message:"Successfully updated" ,
        data: updatedUser,
     });

    }catch(err){
        res.status(200).json({
            success:false,
            message:"failed to updated" ,
         
         });
    
    }
};

//delete user
export const deleteUser = async (req, res) =>{
    const id = req.params.id
    try{
       await Tour.findByIdAndDelete(id);
       res.status(200).json({
        success:true,
        message:"Successfully deleted" ,
        
     });

    }catch(err){
        res.status(200).json({
            success:false,
            message:"failed to delete" ,
         
         });

    }
};

//getsingle user
export const getSingleuser = async (req, res) =>{
    const id = req.params.id
    try{

     const user = await User.findById(id)
        

     res.status(200).json({
        success:true,
        message:"Successful" ,
        data: updateUser,
        data:user,
     });

    }catch(err){
        res.status(404).json({
            success:false,
            message:"Package not found" ,
         
         });
    
    }
};

//getAll users
export const getAllUser = async (req, res) =>{
    

    try{

     const users = await User.find({})
        

     res.status(200).json({
        success:true,
       
        message:"Successful",
        data:users,
     });

    }catch(err){
        res.status(404).json({
            success:false,
            message:"Package not found" ,
         
         });
    
    }
};
