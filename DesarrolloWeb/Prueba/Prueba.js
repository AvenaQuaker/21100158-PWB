    var data = [
        { y: 'Enero', a: 10, b: 30},
        { y: 'Febrero', a: 10,  b: 30},
        { y: 'Marzo', a: 10,  b: 30},
        { y: 'Abril', a: 10,  b: 30},
        { y: 'Mayo', a: 10,  b: 30},
        { y: 'Junio', a: 10,  b: 30},
        { y: 'Julio', a: 10, b: 30},
        { y: 'Agosto', a: 19, b: 30},
        { y: 'Septiembre', a: 10, b: 30},
        { y: 'Octubre', a: 10, b: 30},
        { y: 'Noviembre', a: 10, b: 30},
        { y: 'Diciembre', a: 10, b: 30}
    ]

    var data1 = [
        { y: 'Enero', a: 10},
        { y: 'Febrero', a: 10},
        { y: 'Marzo', a: 15},
        { y: 'Abril', a: 10},
        { y: 'Mayo', a: 10},
        { y: 'Junio', a: 20},
        { y: 'Julio', a: 10},
        { y: 'Agosto', a: 10},
        { y: 'Septiembre', a: 10},
        { y: 'Octubre', a: 25},
        { y: 'Noviembre', a: 10},
        { y: 'Diciembre', a: 30}
    ]

    config = {
        data: data1,
        xkey: 'y',
        ykeys: ['a'],
        labels: ['Dias Rentados'],
        fillOpacity: 0.6,
        hideHover: 'auto',
        behaveLikeLine: true,
        resize: true,
        pointFillColors:['#ffffff'],
        pointStrokeColors: ['black'],
        lineColors:['gray','red']
    };

    config.element = 'area-chart';
    Morris.Area(config);
    config.element = 'line-chart';
    Morris.Line(config);
    config.element = 'bar-chart';
    Morris.Bar(config);
    config.element = 'stacked';
    config.stacked = true;
    Morris.Bar(config);
    Morris.Donut({
    element: 'pie-chart',
    data: [
    {label: "Friends", value: 30},
    {label: "Allies", value: 15},
    {label: "Enemies", value: 45},
    {label: "Neutral", value: 10}
    ]
    });