const employee = {
     name: 'Sam',
    streetAddress: '11 Broadway',
     }

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...obj};
    newObj[key] = value
    return newObj;
}
//console.log(updateEmployeeWithKeyAndValue(employee, 'name', 'Nick')) <==FORMULA incase i ever wanted to change the value of the key nondestructively. changing the clone/copy

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}
//console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway')) <==FORMULA incase i wanted to destructively change the value of the key. 

function deleteFromEmployeeByKey(obj, key) {
    const newEmployee = {...obj};
    delete newEmployee[key];
    return newEmployee;
} //==>formula for deleting the key function in the new clone/copy without changing the original

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
    
}

