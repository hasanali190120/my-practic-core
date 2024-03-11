export default function Friendss({friend}){
   const{name,email}= friend;
return(
 <div className="box">
    <p>name:{name}</p>
    <p>email:{email}</p>
 </div>
)
}