from api import app
from flask import request, jsonify
from ariadne import load_schema_from_path, make_executable_schema, \
    graphql_sync, snake_case_fallback_resolvers, QueryType
from ariadne.explorer import ExplorerGraphiQL

type_defs = load_schema_from_path("schema.graphql")
query = QueryType()

posts = {
    "1": {
        "id": 1,
        "title": "Hello World",
        "description": "This is a sample post",
        "created_at": "2023-10-01",
    },
    "2": {
        "id": 2,
        "title": "Another Post",
        "description": "This is a sample post",
        "created_at": "2023-10-03",
    },
    "3": {
        "id": 3,
        "title": "Another Post again",
        "description": "This is a sample post again",
        "created_at": "2023-10-05",
    },
}


@query.field("listPosts")
def resolve_listPosts(_, info):
    return {
        "success": True,
        "post": list(posts.values())
    }


@query.field("getPost")
def resolve_getPost(_, info, id):
    if id not in posts:
        return {
            "success": False,
            "error": "Post not found"
        }
    return {
        "success": True,
        "post": posts[id]
    }


schema = make_executable_schema(
    type_defs, query, snake_case_fallback_resolvers
)


@app.route("/graphql", methods=["GET"])
def graphql_playground():
    return ExplorerGraphiQL().html(None), 200


@app.route("/graphql", methods=["POST"])
def graphql_server():
    data = request.get_json()
    success, result = graphql_sync(
        schema,
        data,
        context_value=request,
        debug=app.debug
    )
    status_code = 200 if success else 400
    return jsonify(result), status_code
