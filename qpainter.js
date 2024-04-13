export default class QPainter {
    constructor(painterUuid = '', selector, dimensions, properties) {
        this.selector = selector;
        this.dimensions = dimensions;
        this.properties = properties;
        this.paint = null;
        if (painterUuid === '') {
            this.uuid = this.randomLetters();
        } else {
            this.uuid = painterUuid;
        }
        this.init();
    }
    randomLetters() {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let randomLetters = '';
        for (let i = 0; i < 12; i++) {
            randomLetters += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        }
        return randomLetters;
    }
    init() {}
    renderQPainter() {
        if ('paintWorklet' in CSS) {
            var qPainter = this;
            const workletCode = `
            class ${this.uuid} {
                    static get inputProperties() { return ${JSON.stringify(this.properties)}; }
                    paint(ctx, size, properties) {
                        ${this.paint}
                    }
                }
                registerPaint('${this.uuid}', ${this.uuid});

          
        `;

            const blob = new Blob([workletCode], {
                type: 'application/javascript'
            });
            const blobURL = URL.createObjectURL(blob);

            CSS.paintWorklet.addModule(blobURL)



          /* TO DO 
             Add this.properties contents to the rendered snippet */
            document.head.insertAdjacentHTML('beforeend', `
            <style>
                ${qPainter.selector} { background-image: paint(${this.uuid}); }
            </style>
        `);
        }
    }

}
