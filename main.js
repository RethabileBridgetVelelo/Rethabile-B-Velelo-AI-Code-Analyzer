// Matrix Rain Effect
class MatrixRain {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.drops = [];
        this.characters = '01';
        this.fontSize = 14;
        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.columns = Math.floor(this.canvas.width / this.fontSize);
        
        for (let i = 0; i < this.columns; i++) {
            this.drops[i] = Math.random() * -100;
        }
        
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.columns = Math.floor(this.canvas.width / this.fontSize);
    }

    draw() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.fillStyle = '#0F0';
        this.ctx.font = `${this.fontSize}px monospace`;
        
        for (let i = 0; i < this.drops.length; i++) {
            const text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
            const x = i * this.fontSize;
            const y = this.drops[i] * this.fontSize;
            
            this.ctx.fillText(text, x, y);
            
            if (y > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0;
            }
            
            this.drops[i]++;
        }
    }

    animate() {
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Terminal Commands
class Terminal {
    constructor() {
        this.commands = {
            'help': this.showHelp,
            'clear': this.clearTerminal,
            'login': () => window.location.href = 'login.html',
            'register': () => window.location.href = 'register.html',
            'start': () => window.location.href = 'main.html',
            'about': this.showAbout
        };
        this.init();
    }

    init() {
        const input = document.getElementById('command-input');
        if (!input) return;
        
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.processCommand(input.value.trim());
                input.value = '';
            }
        });
        
        setTimeout(() => input.focus(), 2000);
    }

    processCommand(cmd) {
        const output = document.getElementById('command-output');
        const inputLine = document.createElement('div');
        inputLine.innerHTML = `<span class="prompt">$</span> ${cmd}`;
        output.appendChild(inputLine);
        output.scrollTop = output.scrollHeight;
        
        const command = cmd.toLowerCase().split(' ')[0];
        
        if (this.commands[command]) {
            this.commands[command].call(this);
        } else {
            this.showError(`Command not found: ${cmd}`);
        }
    }

    showHelp() {
        const output = document.getElementById('command-output');
        const help = document.createElement('div');
        help.innerHTML = `
            <br><strong>Available Commands:</strong><br>
            help - Show this message<br>
            clear - Clear terminal<br>
            login - Go to login page<br>
            register - Go to register page<br>
            start - Start analyzer<br>
            about - System information<br>
        `;
        output.appendChild(help);
    }

    clearTerminal() {
        const output = document.getElementById('command-output');
        output.innerHTML = '';
    }

    showAbout() {
        const output = document.getElementById('command-output');
        const about = document.createElement('div');
        about.innerHTML = `
            <br><strong>RETHABILE VELELO AI CODE ANALYZER</strong><br>
            AI-powered code analysis system<br>
            Version 1.0<br>
            © 2025 RETHAVELELO SYSTEMS
        `;
        output.appendChild(about);
    }

    showError(message) {
        const output = document.getElementById('command-output');
        const error = document.createElement('div');
        error.style.color = '#ff0033';
        error.innerHTML = `<br>ERROR: ${message}`;
        output.appendChild(error);
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Start matrix rain
    const canvas = document.getElementById('matrix');
    if (canvas) {
        new MatrixRain(canvas);
    }
    
    // Start terminal
    new Terminal();
});