
    var mobile_chart_config = {
        chart: {
            container: "#itwasme-dio",
            rootOrientation: "NORTH",

            animateOnInit: false,
            
            node: {
                collapsable: true
            },
            animation: {
                nodeAnimation: "easeOutBounce",
                nodeSpeed: 700,
                connectorsAnimation: "bounce",
                connectorsSpeed: 700
            }
        },
        nodeStructure: {
            image: "img/jojologo.png",
            collapsed: true,
            HTMLclass: "logo",
            children: [ {
                image: "img/dio.png",
                HTMLclass: "dio",}]
                    }
                };