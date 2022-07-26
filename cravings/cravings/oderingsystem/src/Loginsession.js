export function setName(data)
{
    sessionStorage.setItem("mydata",data)
}
export function getName()
{
    return sessionStorage.getItem("mydata");
}
export function removeName(){
    return sessionStorage.removeItem("mydata");
}