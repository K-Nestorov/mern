
import CommonForm from "@/components/common/form";
import { registerFormControls } from "@/config";
import {useState} from "react";
import {Link} from "react-router-dom";


  

const initialState={
  userName:'',
  email:'',
  password:'',
}


  function AuthRegister()
  {
    function onSubmit(){

    };
    
    const [formData,setFormData]=useState(initialState)
    return (<div className="mx-auto w full max-w-md space-y-6 ">
<div className="text-center">
<h1 className="text-3x1 font-bold tracking-tight text-foreground">Create new Account</h1>
<p className="mt-2">Already have an account
  <Link className="font-medium  ml-2 text-primary hover:underline" to='/auth/login'>Login</Link>
</p>
</div>
<CommonForm formControls={registerFormControls}
  buttonText={'Sign up'}
  formData={formData}
  setFormData={setFormData}
  onSubmit={onSubmit}
  >
    
  
</CommonForm>
    </div>);
  }
  export default AuthRegister;