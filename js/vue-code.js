new Vue({
    el: '#app',
    data: {
        tabs: [
            {
                caption: 'tab 1',
                active: true,
                text: 'content of tab1'
            },
            {
                caption: 'tab 2',
                active: false,
                text: 'content of tab2'
            },
        ]
    },
    methods: {
        setActive1() {
            this.tabs[0].active = true;
            this.tabs[1].active = false;
        },
        setActive2() {
            this.tabs[1].active = true;
            this.tabs[0].active = false;
        },
    },
});
