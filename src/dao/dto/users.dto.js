export default class userDTO {
    constructor(first_name, last_name, email, age, password, telefono) {
        this.first_name = first_name
        this.last_name = last_name
        this.email = email
        this.age = age
        this.password = password
        this.telefono = telefono ? telefono.split("-").join("") : ""
        }
}

