import{u as e,a as s,r,j as i,s as a}from"./index-BaW1cT8h.js";function o(){const o=e(),{user:t}=s();return r.useEffect((()=>{(async()=>{var e,s;try{const{data:{session:r},error:i}=await a.auth.getSession();if(i)throw i;if(null==r?void 0:r.user){const{data:i,error:t}=await a.from("profiles").select("*").eq("id",r.user.id).single();if(t&&"PGRST116"!==t.code)throw t;if(!i){const{error:i}=await a.from("profiles").insert([{id:r.user.id,email:r.user.email,full_name:(null==(e=r.user.user_metadata)?void 0:e.full_name)||(null==(s=r.user.email)?void 0:s.split("@")[0]),user_type:"customer"}]);if(i)throw i}const n=(null==i?void 0:i.user_type)||"customer";o("provider"===n?"/dashboard":"/browse")}else o("/login")}catch(r){o("/login")}})()}),[o]),i.jsx("div",{className:"min-h-screen flex items-center justify-center",children:i.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"})})}export{o as default};
