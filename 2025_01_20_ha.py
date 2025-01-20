from flask import Flask

app = Flask(__name__)


# Begrüßungsroute
@app.route("/")
def home():
    return "Willkommen bei meiner Flask-App!"


# Info-Route
@app.route("/about")
def about():
    return "Mein Name ist Max Muster, und ich interessiere mich für Webentwicklung."


# Team-Route
@app.route("/projekt")
def projekt():
    return "Mein aktuelles Projekt ist eine Flask-API für Anfänger."


# Hilfe-Route
@app.route("/news")
def news():
    return "Heute lernen wir, wie man APIs mit Flask erstellt!"


# Kontakt-Route
@app.route("/feedback")
def feedback():
    return "Wir freuen uns über dein Feedback unter feedback@example.com."


@app.route("/support")
def support():
    return "Besuche unsere Support-Seite unter support.example.com."


@app.route("/greet/<name>")
def greet_name(name):
    return f"Hallo {name}, willkommen auf meiner Flask-API!"


if __name__ == "__main__":
    app.run(port=6060)
