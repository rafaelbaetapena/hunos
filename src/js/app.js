new Vue({
    el: '#app',
    data: function () {
        return {
            title: 'On tap',
            beers: [],
            loading: true
        }
    },
    created: function () {
        this.getBeers()
    },
    methods: {
        getBeers: function () {
            const self = this
            loadJSON('./data/data.json', function (response) {
                // Parse JSON string into object
                self.beers = JSON.parse(response)
                self.loading = false
            })
        }
    }
})