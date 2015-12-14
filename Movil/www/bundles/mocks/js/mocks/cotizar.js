angular.module('mocks.api')

.run(function(mock, $log)
{
    //-------------------------------------------------------------
    mock.whenGET("/Cotizar", function(method, url, data)
    {
        var result = {
            productos: [
            {
                id: "PA",
                nombre: "Producto A"
            },
            {
                id: "PB",
                nombre: "Producto B"
            },
            {
                id: "PC",
                nombre: "Producto C"
            },
            {
                id: "PE",
                nombre: "Producto E"
            },
            {
                id: "PD",
                nombre: "Producto D"
            }]
        };
        return [
            200,
            result,
            {}
        ];
    });
    //-------------------------------------------------------------

});
