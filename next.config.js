/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        // swcPlugins:[["next-suprjson-plugin",{}]]
    },
    images:{
        domains:[
            "res.cloudinary.com","avatar.githubusercontent.com","avatar.githubusercontent.com","lh3.googleusercontent.com"
        ]
    }
}

module.exports = nextConfig
