const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLSchema, GraphQLScalarType }  = require('graphql')
const axios = require('axios')

// Launch Type
const LaunchType = new GraphQLObjectType({
    name: 'Launch',
    fields: () => ({
        flight_number: { type: GraphQLInt },
        mission_name: { type: GraphQLString },
        launch_year: { type: GraphQLString },
        launch_date_local: { type: GraphQLString },
        launch_success: { type: GraphQLBoolean },
        rocket:{ type: RocketType },
        details: { type: GraphQLString},
        links: { type: LinkType }
    })
})

// Rocket Type
const RocketType = new GraphQLObjectType({
    name: 'Rocket',
    fields: () => ({
        rocket_id: { type: GraphQLString },
        rocket_name: { type: GraphQLString },
        rocket_type: { type: GraphQLString }
    })
})

// Link Type
const LinkType = new GraphQLObjectType({
    name: 'Link',
    fields: () => ({
        mission_patch_small: { type: GraphQLString}
    })
})

// Info Type
const InfoType = new GraphQLObjectType({
    name: 'Info',
    fields: () => ({
        name: { type: GraphQLString },
        founder: { type: GraphQLString },
        founded: { type: GraphQLInt },
        summary: { type: GraphQLString },
        headquarters: { type: new GraphQLObjectType({
            name:"HeadQuarters",
            fields: () => ({
                address: { type: GraphQLString },
                city: { type: GraphQLString },
                state: { type: GraphQLString }
            })
        }) }
    })
})

// History Type
const HistoryType = new GraphQLObjectType({
    name: 'History',
    fields: () => ({
        id: { type: GraphQLInt},
        title: { type: GraphQLString },
        event_date_utc: { type: GraphQLString },
        details: { type: GraphQLString },
        links: { type: new GraphQLObjectType({
            name:'LinkHistory',
            fields: () => ({
                wikipedia: { type: GraphQLString }
            })
        })}
    })
})

// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        launches: {
            type: new GraphQLList(LaunchType),
            resolve(parent, args) {
                return axios.get('https://api.spacexdata.com/v3/launches')
                        .then(res => res.data)
            }
        },
        launch: {
            type: LaunchType,
            args: {
                flight_number: {type: GraphQLInt}
            },
            resolve(parent, args) {
                return axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
                            .then(res => res.data)
            }

        },
        rockets: {
            type: new GraphQLList(RocketType),
            resolve(parent, args) {
                return axios.get('https://api.spacexdata.com/v3/rockets')
                        .then(res => res.data)
            }
        },
        rocket: {
            type: RocketType,
            args: {
                id: {type: GraphQLInt}
            },
            resolve(parent, args) {
                return axios.get(`https://api.spacexdata.com/v3/rockets/${args.id}`)
                            .then(res => res.data)
            }

        },
        info: {
            type: InfoType,
            resolve(parent, args) {
                return axios.get('https://api.spacexdata.com/v3/info')
                            .then(res => res.data)
            }
        },
        history: {
            type: new GraphQLList(HistoryType),
            resolve(parent, args) {
                return axios.get(`https://api.spacexdata.com/v3/history`)
                            .then(res => res.data)
            }
        }
    }
})

module.exports = new GraphQLSchema({ 
    query: RootQuery
})