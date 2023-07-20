import { createServer, Model, Response } from "miragejs"


createServer({
    models: {
        vans: Model,
        users: Model
    },

    seeds(server) {
        server.create("van", { id: "1", name: "KIA Rio", price: 60, description: "The Kia Rio is an exceptional compact car that offers a perfect blend of affordability, fuel efficiency, and style. With its sleek and modern design, the Rio stands out on the road. It provides a comfortable and well-appointed interior, with plenty of legroom and headroom for both front and rear passengers. The Rio offers a smooth and efficient ride, powered by a reliable engine that delivers excellent fuel economy.", imageUrl: "https://images.carexpert.com.au/resize/1600/-/app/uploads/2021/06/2021-Kia-Rio-Sport-HERO.jpg", type: "simple", hostId: "123" })

        server.create("van", { id: "2", name: "Land Cruiser", price: 80, description: "The Toyota Land Cruiser is a legendary SUV that has been conquering various terrains for decades. Known for its ruggedness and durability, the Land Cruiser is built to tackle off-road challenges with ease. Its robust body-on-frame construction, coupled with advanced four-wheel drive systems, allows it to traverse through rough and challenging terrains effortlessly.", imageUrl: "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/8-toyota-land-cruiser.jpg?itok=ExiQNOOQ", type: "rugged", hostId: "123" })

        server.create("van", { id: "3", name: "Rolls Royce Phantom", price: 100, description: "The Rolls Royce Phantom is the pinnacle of luxury and opulence in the automotive world. It is a true symbol of status and sophistication. The Phantom boasts a timeless design with its signature iconic front grille and elegant lines. Its craftsmanship is unparalleled, with every detail meticulously handcrafted to perfection. Step inside the Phantom, and you are greeted by a lavish interior that exudes grandeur. The cabin is adorned with the finest quality materials, from rich leather upholstery to exquisite wood veneers. The ride quality is exceptionally smooth and serene, giving passengers a truly luxurious experience.", imageUrl: "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/rolls_royce_phantom_top_10.jpg?itok=P4JYsn-X", type: "luxury", hostId: "456" })

        server.create("van", { id: "4", name: "Mitsubishi Mirage", price: 65, description: "The Mitsubishi Mirage is a compact hatchback that excels in fuel efficiency and practicality. Ideal for urban dwellers or those seeking an economical and reliable commuter, the Mirage offers a compact size that makes parking and maneuvering a breeze. Its lightweight construction contributes to its exceptional fuel efficiency, allowing drivers to save on gas without sacrificing performance.", imageUrl: "https://di-uploads-pod16.dealerinspire.com/victorymitsubishi/uploads/2018/11/2018-Mitsubishi-Mirage-silver-drivers-side-1024x543.jpg", type: "simple", hostId: "789" })

        server.create("van", { id: "5", name: "Flying Spur", price: 120, description: "The Bentley Flying Spur is a luxury sedan that combines extraordinary performance with supreme comfort. Its design strikes a perfect balance between elegance and sportiness. The Flying Spur features a sleek and muscular body, showcasing Bentley's distinctive design cues. Inside, the cabin is a sanctuary of luxury, with handcrafted details and the finest materials throughout.", imageUrl: "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/bentley_flying_spur_top_10.jpg?itok=S46_2hDH", type: "luxury", hostId: "789" })

        server.create("van", { id: "6", name: "Jeep Wrangler", price: 70, description: "The Jeep Wrangler is an icon in the realm of off-roading vehicles. It is renowned for its unparalleled off-road capabilities and distinctive design. The Wrangler features a rugged and boxy exterior, with removable doors and roof options that encompass a true sense of freedom and adventure. Equipped with advanced four-wheel drive systems and superior suspension, the Wrangler can effortlessly tackle rough terrains and navigate through challenging trails.", imageUrl: "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/9-jeep-wrangler-top-10.jpg?itok=NjTdS9WN", type: "rugged", hostId: "123" })

        server.create("user", { id: "123", email: "D@ncho.com", password: "p123", name: "Dancho" })
    },

    routes() {
        this.namespace = "api"
        this.logging = false
        // this.timing = 2000

        this.get("/vans", (schema, request) => {
            // return new Response(400, {}, {error: "Error fetching data"})
            return schema.vans.all()
        })

        this.get("/vans/:id", (schema, request) => {
            const id = request.params.id
            return schema.vans.find(id)
        })

        this.get("/host/vans", (schema, request) => {
            // Hard-code the hostId for now
            return schema.vans.where({ hostId: "123" })
        })

        this.get("/host/vans/:id", (schema, request) => {
            // Hard-code the hostId for now
            const id = request.params.id
            return schema.vans.findBy({ id, hostId: "123" })
        })

        this.post("/login", (schema, request) => {
            const { email, password } = JSON.parse(request.requestBody)
            const foundUser = schema.users.findBy({ email, password })
            if (!foundUser) {
                return new Response(401, {}, { message: "No user with those credentials found!" })
            }

            // At the very least
            foundUser.password = undefined
            return {
                user: foundUser,
                token: "Enjoy your pizza, here's your tokens."
            }
        })
    }
})