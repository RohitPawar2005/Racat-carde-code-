import Child from './Child'
let Props =()=>{


    // let myname="Rohit"
    // let myage=20

    let myinfo={
        name:"Rohit Pawar",
        age:21,
        city :"bhopal",

    }

    return(
        <div>
            <h1>hello bhai </h1>
        <h1>i am PROPS PAGE</h1>

            {/* <Child myname={myname} myage={myage}    /> */}
            <Child myname={myinfo.name} myage={myinfo.age}    />
            {/* <Child myname="rohit" myage={20}    /> */}
            <Child mydata={myinfo}/>
            
            

        </div>
    )


}
export default Props