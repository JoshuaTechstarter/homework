from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route("/brand/<int:brand_id>", methods=["GET"])
def get_brand(brand_id):
    """
    Route 1: Verarbeitet eine GET-Anfrage mit `id`, `type` und `condition`-Parametern.
    Beispiel: /brand/10?type=clothes&condition=new
    """
    brand_type = request.args.get("type")
    condition = request.args.get("condition")

    if not brand_type or not condition:
        return (
            jsonify({"error": "Missing parameters: type and condition are required"}),
            400,
        )

    return f"Brand-ID: {brand_id}, Type: {brand_type}, Condition: {condition}"


@app.route("/product/<int:product_id>", methods=["GET"])
def get_product(product_id):
    """
    Route 2: Verarbeitet eine GET-Anfrage mit der Produkt-ID.
    Beispiel: /product/123
    """
    return f"Product-ID: {product_id}"


@app.route("/search", methods=["GET"])
def search():
    """
    Route 3: Verarbeitet eine GET-Anfrage mit einem `query`-Parameter.
    Beispiel: /search?query=shoes
    """
    query = request.args.get("query")
    if not query:
        return jsonify({"error": "Missing parameter: query is required"}), 400

    return f"Searching for: {query}"


if __name__ == "__main__":
    app.run(debug=True, port=6060)
