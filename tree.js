
    var chart_config = {
        chart: {
            container: "#bloodline",
            rootOrientation: "SOUTH",

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
image: "img/logo.png",
collapsed: true,
HTMLclass: "logo",
children: [ {
            image: "img/jolyne-cameo.png",
            text: {
                name: "Jolyne Kujo"
            },
            HTMLclass: "jojo",
            collapsed: true,
            children: [
                {
                    image: "img/jotaro-cameo.png",
                    text: {
                        name: "Jotaro Kujo",
                    },
                    HTMLclass: "jojo",
                    collapsed: true,
                    children: [
                        {
                            image: "img/holly-cameo.png",
                            text: { 
                                name: "Holly Kujo",
                            },
                            HTMLclass: "minor",
                            collapsed: true,
                            children: [
                                // {
                                //     text: {
                                //         name: "Tomoko"
                                //     }
                                // },
                                {
                                    image: "img/joseph-cameo-2.png",
                                    text: {
                                        name: "Joseph Joestar",
                                    },
                                    HTMLclass: "jojo",
                                    collapsed: true,
                                    children: [
                                        {
                                            image: "img/georgeii-cameo.png",
                                            text: { 
                                                name: "George Joestar II",
                                            },
                                            HTMLclass: "minor",
                                            collapsed: true,
                                            children: [
                                                {
                                                    image: "img/jonathan-cameo.png",
                                                    text: {
                                                        name: "Jonathan Joestar",
                                                    },
                                                    HTMLclass: "jojo",
                                                    collapsed: true,
                                                    children: [
                                                        {
                                                            image: "img/george-cameo.png",
                                                            text: {
                                                                name: "George Joestar"
                                                            },
                                                            HTMLclass: "minor",
                                                            },
                                                        {
                                                            image: "img/mary-cameo.png",
                                                            text: {
                                                                name: "Mary Joestar"
                                                            },
                                                            HTMLclass: "minor",
                                                        }
                                                    ]
                                                },
                                                {
                                                    image: "img/erina-cameo.png",
                                                    text: {
                                                        name: "Erina Pendleton"
                                                    },
                                                    HTMLclass: "minor",
                                                },
                                            ]
                                        },
                                        {
                                            image: "img/lisa-cameo.png",
                                            text: { 
                                                name: "Elizabeth 'Lisa Lisa' Joestar",
                                            },
                                            HTMLclass: "minor",
                                        }
                                    ]
                                },
                                {
                                    image: "img/suziq-cameo.png",
                                    text: {
                                        name: "Suzi Q Joestar",
                                    },
                                    HTMLclass: "minor",
                                    
                                }
                            ]
                        },
                        {
                            image: "img/sadao-cameo.png",
                            text: { 
                                name: "Sadao Kujo",
                            },
                            HTMLclass: "minor",
                        },
                    ]
                },
                {
                    image: "img/ms-kujo-cameo.png",
                    text: {
                        name: "Mrs. Kujo",
                    },
                    HTMLclass: "minor",
                }
            ]
}]
        }
    };