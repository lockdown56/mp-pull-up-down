Component({
    data: {
        complete: false
    },
    methods: {
        complete () {
            this.setData({
                complete: true
            })
        },
    }
})