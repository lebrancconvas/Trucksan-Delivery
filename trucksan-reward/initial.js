var app = new Vue ({
    el: "#main",
    data: {
        nameRewarder: "",
        popup: "Congratulation , You are now going to another world , let you get some reward!"
    },
    methods: {
        congratwithName: function(){
            alert("ยินดีด้วยนะคุณ `${nameRewarder}`")
        }

    }
});

var spin = new Vue({
    el: "#spin",
    data: {
        name: `${nameRewarder}`
    }
})