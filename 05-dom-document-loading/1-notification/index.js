export default class NotificationMessage {
    element;
    static lastInstance = null;

    constructor( message = '', 
                { type = '',
                  duration = 0,
                } = {}) {
        this.message = message;
        this.type = type;
        this.duration = duration;
        this.element = this.createElement(this.createTemplate());
    }

    show(container = document.body) {
        if (NotificationMessage.lastInstance) {
            NotificationMessage.lastInstance.destroy();
        }
        NotificationMessage.lastInstance = this;
        
        this.timerId = setTimeout(() => {
            this.destroy();
        }, this.duration);

        container.appendChild(this.element);
    }

    hide() {
        //console.log('hide')
    }
    
    remove() {
        //console.log('remove')
        this.element.remove();
    }

    destroy() {
        this.remove();
        clearTimeout(this.timerId);
    }

    createTemplate(){
        return `<body>
                    <div class="notification ${this.type}" style="--value:${this.duration / 1000}s">
                        <div class="timer"></div>
                        <div class="inner-wrapper">
                            <div class="notification-header">${this.type}</div>
                            <div class="notification-body">${this.message}</div>
                        </div>
                    </div>
                 </body>`;
                
    }

    createElement(template){
        const element = document.createElement('div');

        element.innerHTML = template;

        return element.firstElementChild;
    }

}
