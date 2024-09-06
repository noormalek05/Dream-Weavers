from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Home Page Route
@app.route('/')
def home():
    return render_template('index.html')

# Features Page Route
@app.route('/features')
def features():
    return render_template('features.html')

# Community Page Route
@app.route('/community')
def community():
    return render_template('community.html')

# Contact Page Route
@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        email = request.form['email']
        message = request.form['message']
        # Here you can add logic to handle form submission, e.g., send email, save to database, etc.
        print(f"Received message from {email}: {message}")
        return redirect(url_for('thankyou'))
    return render_template('contact.html')

# Thank You Page Route
@app.route('/thankyou')
def thankyou():
    return render_template('thankyou.html')

if __name__ == '__main__':
    app.run(debug=True)
