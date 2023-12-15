function Hello() {

  let myName = "Anusha Saha"
  let number = 777
  let fullName = () =>{
    return "Anusha"
  }
  return(
    <h3>This is the future speaking {myName} , I am your mastre {fullName()} Course Num:{number}</h3>
  )
}

export default Hello;