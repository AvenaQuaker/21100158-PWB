var data1 = [
    { y: 'Enero', a: 10},
    { y: 'Febrero', a: 10},
    { y: 'Marzo', a: 10},
    { y: 'Abril', a: 10},
    { y: 'Mayo', a: 10},
    { y: 'Junio', a: 10},
    { y: 'Julio', a: 10},
    { y: 'Agosto', a: 19,},
    { y: 'Septiembre', a: 10},
    { y: 'Octubre', a: 10,},
    { y: 'Noviembre', a: 10},
    { y: 'Diciembre', a: 10}
]

var data2 = [
    { y: 'Enero', a: 10000},
    { y: 'Febrero', a: 20000},
    { y: 'Marzo', a: 50000},
    { y: 'Abril', a: 100000},
    { y: 'Mayo', a: 150000},
    { y: 'Junio', a: 300000},
    { y: 'Julio', a: 200000},
    { y: 'Agosto', a: 180000,},
    { y: 'Septiembre', a: 100000},
    { y: 'Octubre', a: 50000,},
    { y: 'Noviembre', a: 30000},
    { y: 'Diciembre', a: 20000}
]

config1 = {
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
    barColors:['#008cff','black']
};

config2 = {
    data: data2,
    xkey: 'y',
    ykeys: ['a'],
    labels: ['Dias Rentados'],
    fillOpacity: 0.6,
    hideHover: 'auto',
    behaveLikeLine: true,
    resize: true,
    pointFillColors:['#ffffff'],
    pointStrokeColors: ['black'],
    barColors:['#002aff','black']
};

config1.element = 'bar-chart1';
Morris.Bar(config1);


config2.element = 'bar-chart2';
Morris.Bar(config2);

Morris.Donut({ 
    resize:true,
    element: 'pie-chart',
    data: [
    {label: "Lunes", value: 5},
    {label: "Martes", value: 5},
    {label: "Miercoles", value: 5},
    {label: "Jueves", value: 10},
    {label: "Viernes", value: 25},
    {label: "Sabado", value: 20},
    {label: "Domingo", value: 30}
    ]
    });
