// Simple Auth System
class Auth {
    constructor() {
        this.usersKey = 'alcode_users';
        this.currentUserKey = 'alcode_current_user';
        this.init();
    }

    init() {
        if (!localStorage.getItem(this.usersKey)) {
            localStorage.setItem(this.usersKey, JSON.stringify([]));
        }
    }

    register(username, password, confirmPassword) {
        // Validation
        if (!username || username.length > 10) {
            this.showError('Username must be 1-10 characters');
            return false;
        }
        
        if (!password || password.length > 15 || password.length < 4) {
            this.showError('Password must be 4-15 characters');
            return false;
        }
        
        if (password !== confirmPassword) {
            this.showError('Passwords do not match');
            return false;
        }
        
        // Check if user exists
        const users = JSON.parse(localStorage.getItem(this.usersKey));
        if (users.some(user => user.username === username)) {
            this.showError('Username already exists');
            return false;
        }
        
        // Create user
        const newUser = {
            id: Date.now(),
            username: username,
            password: password, // In real app, hash this!
            created: new Date().toISOString()
        };
        
        users.push(newUser);
        localStorage.setItem(this.usersKey, JSON.stringify(users));
        
        // Auto login
        this.login(username, password);
        return true;
    }

    login(username, password) {
        const users = JSON.parse(localStorage.getItem(this.usersKey));
        const user = users.find(u => u.username === username && u.password === password);
        
        if (user) {
            localStorage.setItem(this.currentUserKey, JSON.stringify({
                id: user.id,
                username: user.username,
                loginTime: new Date().toISOString()
            }));
            
            window.location.href = 'main.html';
            return true;
        } else {
            this.showError('Invalid username or password');
            return false;
        }
    }

    logout() {
        localStorage.removeItem(this.currentUserKey);
        window.location.href = 'index.html';
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem(this.currentUserKey));
    }

    showError(message) {
        alert('Error: ' + message);
    }

    showSuccess(message) {
        alert('Success: ' + message);
    }
}

// Create global instance
const auth = new Auth();

// Global functions for HTML buttons
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    auth.login(username, password);
}

function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    auth.register(username, password, confirmPassword);
}

function logout() {
    auth.logout();
}

// Check login status on main page
if (window.location.pathname.includes('main.html')) {
    const user = auth.getCurrentUser();
    if (!user) {
        // Set as guest
        localStorage.setItem(this.currentUserKey, JSON.stringify({
            id: 'guest',
            username: 'Guest',
            isGuest: true
        }));
    }
    
    // Display username
    const usernameElement = document.getElementById('username');
    if (usernameElement && user) {
        usernameElement.textContent = user.username;
    }
}