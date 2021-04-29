const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull
} = graphql ;

const Todo = require('../models/todo');

const TodoType = new GraphQLObjectType({
  name: 'Todo',
  fields: () => ({
    id: {type: GraphQLID},
    title: {type: GraphQLString},
    status: {type: GraphQLString}
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    todo: {
      type: TodoType,
      args: {id: {type: graphql.GraphQLID}},
      resolve(parent, args){
        return Todo.findById(args.id);
      },
    },
    todos: {
      type: new GraphQLList(TodoType),
      resolve(parent,args){
        return Todo.find({});
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTodo: {
      type: TodoType,
      args: {
        title: {type: new GraphQLNonNull(GraphQLString)},
        status: {type: new GraphQLNonNull(GraphQLString)},
      },
      resolve(parent, args){
        let todo = new Todo({
          title: args.title,
          status: args.status,
        });
        return todo.save();
      }
    },
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});