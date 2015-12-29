angular.module('mocks.api')

.run(function(mock, $log)
{
    //-------------------------------------------------------------
    mock.whenGET("/Simulaciones", function(method, url, data)
    {
        var result = [
                {
                estado: "Caducada",
                numero: "02355",
                linkPdf: "",
                ramo: "Vehículo Liviano",
                fecha: "12/02/2015",
                nombreContratante: "José Pérez",
                materia: "---"
                },
                {
                estado: "Vigente",
                numero: "02370",
                linkPdf: "",
                ramo: "Vehículo Liviano",
                fecha: "12/02/2015",
                nombreContratante: "José Pérez",
                materia: "---"
                },
                {
                estado: "Con Poliza",
                numero: "05355",
                linkPdf: "",
                ramo: "Vehículo Liviano",
                fecha: "12/02/2015",
                nombreContratante: "José Pérez",
                materia: "---"
                },
                {
                estado: "Caducada",
                numero: "22335",
                linkPdf: "",
                ramo: "Vehículo Liviano",
                fecha: "12/02/2015",
                nombreContratante: "José Pérez",
                materia: "---"
                },
                {
                estado: "Vigente",
                numero: "4685",
                linkPdf: "",
                ramo: "Vehículo Liviano",
                fecha: "12/02/2015",
                nombreContratante: "José Pérez",
                materia: "---"
                },
                {
                estado: "Con Poliza",
                numero: "95894",
                linkPdf: "",
                ramo: "Vehículo Liviano",
                fecha: "12/02/2015",
                nombreContratante: "José Pérez",
                materia: "---"
                },
                {
                estado: "Caducada",
                numero: "1234",
                linkPdf: "",
                ramo: "Vehículo Liviano",
                fecha: "12/02/2015",
                nombreContratante: "José Pérez",
                materia: "---"
                },
                {
                estado: "Vigente",
                numero: "45668",
                linkPdf: "",
                ramo: "Vehículo Liviano",
                fecha: "12/02/2015",
                nombreContratante: "José Pérez",
                materia: "---"
                },
                {
                estado: "Con Poliza",
                numero: "78977",
                linkPdf: "",
                ramo: "Vehículo Liviano",
                fecha: "12/02/2015",
                nombreContratante: "José Pérez",
                materia: "---"
                },
                {
                estado: "Caducada",
                numero: "456444",
                linkPdf: "",
                ramo: "Vehículo Liviano",
                fecha: "12/02/2015",
                nombreContratante: "José Pérez",
                materia: "---"
                },
                {
                estado: "Vigente",
                numero: "78678",
                linkPdf: "",
                ramo: "Vehículo Liviano",
                fecha: "12/02/2015",
                nombreContratante: "José Pérez",
                materia: "---"
                },
                {
                estado: "Con Poliza",
                numero: "02131",
                linkPdf: "",
                ramo: "Vehículo Liviano",
                fecha: "12/02/2015",
                nombreContratante: "José Pérez",
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
