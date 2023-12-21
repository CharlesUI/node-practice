const obj = {
    name: "Charles",
    age: 20,
    job: "Software Engineer"
}

function showData(obj) {
    console.log(`${obj.name} is ${obj.age} years old, and is already a ${obj.job}`)
}

module.exports = { obj, showData }