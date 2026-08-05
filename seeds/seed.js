const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const User = require("../src/models/user.models");

const dns = require('dns');
dns.setServers(['1.1.1.1', '8.8.8.8'])

require("dotenv").config({
    path: '../.env'
});


const users = [
    {
        name: "Peter Parker",
        email: "peter.parker@doppio.com",
        username: "spiderman_616",
        password: "WithGreatPower123!"
    },

    {
        name: "Tony Stark",
        email: "tony.stark@doppio.com",
        username: "ironman_stark",
        password: "JarvisMk85!"
    }
];


const seedDatabase = async () => {

    try {

        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB connected");

        await User.deleteMany({});
        console.log("Old users removed");


        // Hash passwords
        const hashedUsers = await Promise.all(
            users.map(async(user)=>{

                return {
                    ...user,
                    password: await bcrypt.hash(user.password,10)
                };

            })
        );


        // Insert new users
        await User.insertMany(hashedUsers);


        console.log("Database seeded successfully");


        mongoose.connection.close();


    } catch(error){

        console.log(error);

        mongoose.connection.close();

    }

};


seedDatabase();