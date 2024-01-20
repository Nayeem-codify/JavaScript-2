let data = ["Html" , "Css" , "JavaScript" , "React" , "Doming" ]

console.log(data);

let information = {
    
    Name: "Nayeem",
    Batch: "2306",
    Phone: "01825468550",
    Adress: {
       House: "Mirpur 1",
       postno:"1216",
    }
}

console.log(information);
console.log(information.Adress);
console.log(information.Name);
console.log(information.Batch);
console.log(information.Phone);

let info = [
    {
    
        Name: "Nayeem",
        Batch: "2306",
        Phone: "01825468550",
        Adress: {
           House: "Mirpur 1",
           postno:"1216",
        }
    },
    {
    
        Name: "Ramim",
        Batch: "2306",
        Phone: "01825468550",
        Adress: {
           House: "Mirpur 1",
           postno:"1216",
        }
    }
]
console.log(info[1]);

function number (x = 0 , y = 0) {
     console.log( " x = " + x);
     console.log( "y = " + y);
   return
     console.log("return");
}

number(36554124 , 32515451)
number(36554124 , 154545154)
number(36554124 , 214415214)
number(36554124)
number(36554124)


const Details ={
    Institue: "Creative it Institue " ,
    Profession: "Student " ,
    Batch: "2306 " ,
    Year: "1 year " 
};

console.log( "Creative it Institue Student 2306 1 year");
console.log( Details.Institue + Details.Profession + Details.Batch + Details.Year );
console.log(`${Details.Institue} ${Details.Profession} ${Details.Batch} ${Details.Year}`);