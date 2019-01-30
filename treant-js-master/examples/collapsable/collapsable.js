
    var chart_config = {
        chart: {
            container: "#itwasme-dio",
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
            text: {
                name: "Jolyne"
            },
            children: [
                {
                    text: {
                        name: "Jotaro",
                    },
                    children: [
                        {
                            text: { 
                                name: "Holly",
                            },
                            children: [
                                // {
                                //     text: {
                                //         name: "Tomoko"
                                //     }
                                // },
                                {
                                    text: {
                                        name: "Joseph",
                                    },
                                    children: [
                                        {
                                            text: { 
                                                name: "George II",
                                            },
                                            children: [
                                                {
                                                    text: {
                                                        name: "Jonathan",
                                                    },
                                                    children: [
                                                        {
                                                            text: {
                                                                name: "George"
                                                            }
                                                        },
                                                        {
                                                            text: {
                                                                name: "Mary"
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    text: {
                                                        name: "Erina"
                                                    }
                                                },
                                            ]
                                        },
                                        {
                                            text: { 
                                                name: "Lisa Lisa",
                                            },
                                        }
                                    ]
                                },
                                {
                                    text: {
                                        name: "Suzi Q",
                                    },
                                    
                                }
                            ]
                        },
                        {
                            text: { 
                                name: "Sadao Kujo",
                            },
                        },
                    ]
                },
                {
                    text: {
                        name: "Mrs. Kujo",
                    },
                }
            ]
        }
    };
