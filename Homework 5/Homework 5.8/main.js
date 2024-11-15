let listOfUser = (users) => {
    for (let user of users) {
        document.write(`<div> ${user.id} ${user.name} ${user.age} </div>` )
    }
}

listOfUser([{id:2, name:"dsadsa", age:12}])


