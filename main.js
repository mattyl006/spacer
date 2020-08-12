new Vue({
    el: "#app",
    template: `        
    <main>
        <header>
            <h1 v-if="counter === 3">{{ title }}</h1>
            <p v-else>{{ counterMultiply }}</p>
            <button @click="increaseCounter">+1</button>
            <button @click="decreaseCounter">-1</button>
        </header>
    </main>`,
    data: {
        title: "Hello Vue!",
        counter: 0,
    },
    computed: {
        counterMultiply() {
            return this.counter * 2;
        }
    },
    watch: {
        counter() {
            console.log('counter was updated');
        }
    },
    methods: {
        increaseCounter() {
            this.counter++;
        },
        decreaseCounter() {
            this.counter--;
        },
    },
});