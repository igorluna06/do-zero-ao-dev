import fastify from "fastify";


const server = fastify({logger: true});


const teams = [
    {
        id: 1,
        name: "Red Bull Racing",
        country: "Austria",
        founded: 2005,
        principal: "Christian Horner",
        engine: "Honda RBPT"
    },
    {
        id: 2,
        name: "Ferrari",
        country: "Italy",
        founded: 1929,
        principal: "Frédéric Vasseur",
        engine: "Ferrari"
    },
    {
        id: 3,
        name: "Mercedes",
        country: "Germany",
        founded: 2010,
        principal: "Toto Wolff",
        engine: "Mercedes"
    },
    {
        id: 4,
        name: "McLaren",
        country: "United Kingdom",
        founded: 1963,
        principal: "Andrea Stella",
        engine: "Mercedes"
    },
    {
        id: 5,
        name: "Aston Martin",
        country: "United Kingdom",
        founded: 2021,
        principal: "Mike Krack",
        engine: "Mercedes"
    },
    {
        id: 6,
        name: "Alpine",
        country: "France",
        founded: 2021,
        principal: "Bruno Famin",
        engine: "Renault"
    },
    {
        id: 7,
        name: "Williams",
        country: "United Kingdom",
        founded: 1977,
        principal: "James Vowles",
        engine: "Mercedes"
    },
    {
        id: 8,
        name: "Haas",
        country: "United States",
        founded: 2016,
        principal: "Ayao Komatsu",
        engine: "Ferrari"
    },
    {
        id: 9,
        name: "RB (Racing Bulls)",
        country: "Italy",
        founded: 2024,
        principal: "Laurent Mekies",
        engine: "Honda RBPT"
    },
    {
        id: 10,
        name: "Sauber (Stake F1 Team)",
        country: "Switzerland",
        founded: 1993,
        principal: "Alessandro Alunni Bravi",
        engine: "Ferrari"
    }
];

const drivers = [
    { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
    { id: 2, name: "Isack Hadjar", team: "Red Bull Racing" },

    { id: 3, name: "Charles Leclerc", team: "Ferrari" },
    { id: 4, name: "Lewis Hamilton", team: "Ferrari" },

    { id: 5, name: "George Russell", team: "Mercedes" },
    { id: 6, name: "Kimi Antonelli", team: "Mercedes" },

    { id: 7, name: "Lando Norris", team: "McLaren" },
    { id: 8, name: "Oscar Piastri", team: "McLaren" },

    { id: 9, name: "Fernando Alonso", team: "Aston Martin" },
    { id: 10, name: "Lance Stroll", team: "Aston Martin" },

    { id: 11, name: "Pierre Gasly", team: "Alpine" },
    { id: 12, name: "Franco Colapinto", team: "Alpine" },

    { id: 13, name: "Carlos Sainz", team: "Williams" },
    { id: 14, name: "Alexander Albon", team: "Williams" },

    { id: 15, name: "Esteban Ocon", team: "Haas" },
    { id: 16, name: "Oliver Bearman", team: "Haas" },

    { id: 17, name: "Liam Lawson", team: "Racing Bulls" },
    { id: 18, name: "Arvid Lindblad", team: "Racing Bulls" },

    { id: 19, name: "Nico Hulkenberg", team: "Audi" },
    { id: 20, name: "Gabriel Bortoleto", team: "Audi" },

    { id: 21, name: "Sergio Perez", team: "Cadillac" },
    { id: 22, name: "Valtteri Bottas", team: "Cadillac" }
];

server.get("/teams", async(req, res)=>{
    res.type("application/json").code(200);
    return {teams};
});

server.get("/drivers", async(req, res)=>{

    res.type("application/json").code(200);
    return {drivers};
});

interface DriverParams{

    id: string
}

server.get<{Params: DriverParams}>("/drivers/:id", async(req, res)=>{
    const id = parseInt(req.params.id);
    const driver = drivers.find(driver => driver.id === id);

    if(!driver){
        res.type("application/json").code(404);
        return {message: "Driver Not Found"};
    }else{
        res.type("application/json").code(200);
        return {driver};
    }
})

server.listen({port: 3333}, ()=>{
    console.log("Server init");
});
