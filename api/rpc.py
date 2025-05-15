from api import app
from flask import request, Response
from jsonrpcserver import method, Result, Success, dispatch, Error

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


@method
def listPosts() -> Result:
    return Success(list(posts.values()))


@method
def getPost(id: str | int) -> Result:
    if id not in posts:
        return Error(1, "Post not found")
    return Success(posts[id])


@app.route("/rpc", methods=["POST"])
def rpc():
    data = request.get_data().decode()
    print(data)
    return Response(dispatch(data), content_type="application/json")
