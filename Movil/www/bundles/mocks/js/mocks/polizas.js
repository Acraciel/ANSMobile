angular.module('mocks.api')

.run(function(mock, $log)
{
    //-------------------------------------------------------------
    mock.whenGET("/Polizas", function(method, url, data)
    {
        var result = [
                {
                numeroPoliza: "1234",
                nombreAsegurado: "Juan",
                linkPdf: "",
                ramo: "Vehículo Liviano",
                tipo: "Online",
                estado: "Emitida",
                vigencia: "1 Año",
                materia: "---"
                },
                {
                numeroPoliza: "6547",
                nombreAsegurado: "Alfredo",
                linkPdf: "",
                ramo: "Vehículo Liviano",
                tipo: "Online",
                estado: "Emitida",
                vigencia: "1 Año",
                materia: "---"
                },
                {
                numeroPoliza: "7415",
                nombreAsegurado: "Julian",
                linkPdf: "",
                ramo: "Vehículo Liviano",
                tipo: "Online",
                estado: "Emitida",
                vigencia: "1 Año",
                materia: "---"
                },
                {
                numeroPoliza: "9856",
                nombreAsegurado: "Ignacio",
                linkPdf: "",
                ramo: "Vehículo Liviano",
                tipo: "Online",
                estado: "En digitación",
                vigencia: "1 Año",
                materia: "---"            
                }
            ];

        return [
            200,
            result,
            {}
        ];
    });
    //-------------------------------------------------------------

});
