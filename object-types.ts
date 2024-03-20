

//Types in objects
//Example 1 we can use (type) with object.

type Itcoursetype={
    coursename:string,
    Duration:string,
    fees:number,
    htmlcssinclude:Boolean,

}
var Itcourse ={
    coursename:"web designing",
    Duration:"6 Month",
    fees:2000,
    htmlcssinclude:true,
}
console.log(Itcourse);

//Example 2 we can use (interface) with objects this is second option for using types.
 
interface addresstype{
    streetname:string,
    city:string,
    country:string,
    zipcode:number,
}
interface studenttype{
    firstname:string,
    lastname:string,
    Education:string,
    Age:number,
    studentid:number,
    ispassed:boolean,
    ExtraQualification:string[],
    address:addresstype,
}
var student ={
    firstname:"Hina",
    lastname:"Alvi",
    Education:"Bachlor of commerce",
    Age:"20",
    studentid:5639823836,
    ispassed:true,
    ExtraQualification:["web designing","Ms office","Data business and intelligence"],
    address:{
        streetname:"abc",
        city:"karachi",
        country:"pakistan",
        zipcode:35620,
    }
};

console.log(student)