
import CommonForm from "@/components/common/form";
import { loginFormControls } from "@/config";
import {useState} from "react";
import {Link} from "react-router-dom";


  

const initialState={
  
  email:'',
  password:'',
}


  function AuthLogin()
  {
    function onSubmit(){

    };
    
    const [formData,setFormData]=useState(initialState)
    return (<div className="mx-auto w full max-w-md space-y-6 ">
<div className="text-center">
<h1 className="text-3x1 font-bold tracking-tight text-foreground">Sign in</h1>
<p className="mt-2">Dont have account
  <Link className="font-medium  ml-2 text-primary hover:underline" to='/auth/register'>Register</Link>
</p>
</div>
<CommonForm formControls={loginFormControls}
  buttonText={'Sign in'}
  formData={formData}
  setFormData={setFormData}
  onSubmit={onSubmit}
  >
    
  
</CommonForm>
    </div>);
  }
  export default AuthLogin;