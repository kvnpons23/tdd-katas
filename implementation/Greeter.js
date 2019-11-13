class Greeter {
    constructor(currentTime) {
        this.currentTime = new Date(currentTime).getHours();
    }

    greet(name) {
        const timelyGreeting = this.setTimelyGreeting()
        const greeting = this.formatGreeting(timelyGreeting, name)
        console.log(greeting)
        return greeting;
    }

    formatGreeting(timelyGreeting, name) {
        return this.trim(`${timelyGreeting} ${this.capitalizedFirstLetter(name)}`);
    }

    trim(greeting) {
        return greeting.trim();
    }

    capitalizedFirstLetter(name) {
        return name.charAt(0).toUpperCase() + name.substring(1)
    }

    setTimelyGreeting() {
        if (this.currentTime >= 6 && this.currentTime < 12) {
            return 'Good morning'
        } else if (this.currentTime >= 18 && this.currentTime < 22) {
            return 'Good evening'
        } else if (this.currentTime >= 22 && this.currentTime > 6) {
            return 'Good night'
        } else {
            return 'Hello'
        }
    }


}

module.exports = Greeter;