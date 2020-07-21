console.log("Assignment-2");

// User class
class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.coins = 0;
        this.courses = [];
    }
    login() {
        console.log(`${this.name} has logged in.`);
        return this;
    }
    logout() {
        console.log(`${this.name} has logged out.`);
        return this;
    }
}

// Moderator class
class Moderator extends User {
    addCoins(user) {
        user.coins++;
        console.log(`${user.name} has ${user.coins} coins`);
        return this;
    }
    removeCoins(user) {
        user.coins--;
        console.log(`${user.name} has ${user.coins} coins`);
        return this;
    }
}

// Admin class
class Admin extends Moderator {
    addCourse(user, course) {
        user.courses.push(course);
        console.log(`${course} added to ${user.name} courses`);
        return this;
    }
    deleteCourse(user, course) {
        user.courses = user.courses.filter((ele)=>(ele != course));
        console.log(`${course} removed from ${user.name} courses`);
        return this;
    }
}

// Creating objects
user1 = new User('Vishnu', 20, 'vishnu@gmail.com');
user2 = new User('Manoj', 21, 'manoj@gmail.com');
user3 = new User('Charan', 19, 'charan@gmail.com');
users = [user1, user2, user3];
console.log(users);

// Moderator operations
mod = new Moderator('Venkat', 30, 'venkat@gmail.com');
console.log(mod);

// adding coins to all users
mod.addCoins(user1);
mod.addCoins(user2);
mod.addCoins(user3);
console.log(users);

// removing coins
mod.removeCoins(user1);
console.log(user1);

// Admin operations
admin = new Admin('Karthik', 35, 'karthik@gmail.com');
console.log(admin);

// adding 'Javscript' course to all users
admin.addCourse(user1, 'Javascript');
admin.addCourse(user2, 'Javascript');
admin.addCourse(user3, 'Javascript');
console.log(users);

// adding 'Python' and 'Blockchain' courses to user1
admin.addCourse(user1, 'Python');
admin.addCourse(user1, 'Blockchain');
console.log(users);

// deleting course from user1
admin.deleteCourse(user1, "Javascript");
console.log(user1);

/* ADMIN CAN ALSO HAVE ACCESS TO 'addCoins' AND 'removeCoins' */
admin.addCoins(user2);
admin.removeCoins(user3);
console.log(users);
